const i18n = {
    vi: {
        title: 'Gia phả cá nhân',
        addMember: 'Thêm thành viên',
        name: 'Họ tên',
        birth: 'Ngày sinh',
        father: 'Cha',
        mother: 'Mẹ',
        spouse: 'Vợ/Chồng',
        save: 'Lưu',
        delete: 'Xóa',
        setCenter: 'Chọn làm trung tâm',
        tree: 'Cây gia phả',
        share: 'Chia sẻ',
        export: 'Xuất JSON',
        qr: 'QR Code',
        stats: 'Thống kê',
        search: 'Tìm kiếm...',
        none: '--'
    },
    en: {
        title: 'Personal Genealogy',
        addMember: 'Add Member',
        name: 'Name',
        birth: 'Birth Date',
        father: 'Father',
        mother: 'Mother',
        spouse: 'Spouse',
        save: 'Save',
        delete: 'Delete',
        setCenter: 'Set as center',
        tree: 'Family Tree',
        share: 'Share',
        export: 'Export JSON',
        qr: 'QR Code',
        stats: 'Statistics',
        search: 'Search...',
        none: '--'
    }
};

let db;
let cryptoKey;
let centerId;

async function init() {
    await initDB();
    await initCrypto();
    await refreshSelects();
    await renderTree();
    updateStats();
    document.getElementById('memberForm').addEventListener('submit', saveMember);
    document.getElementById('deleteBtn').addEventListener('click', deleteMember);
    document.getElementById('exportBtn').addEventListener('click', exportData);
    document.getElementById('importInput').addEventListener('change', importData);
    document.getElementById('qrBtn').addEventListener('click', showQR);
    document.getElementById('searchInput').addEventListener('input', renderTree);
    document.getElementById('centerBtn').addEventListener('click', () => setCenter(document.getElementById('memberId').value));
    document.getElementById('languageSelect').addEventListener('change', e => updateLanguage(e.target.value));
    centerId = Number(localStorage.getItem('centerId')) || null;
    updateLanguage('vi');
    setupNav();
}

document.addEventListener('DOMContentLoaded', init);

function setupNav() {
    const buttons = document.querySelectorAll('#mainNav button');
    const sections = document.querySelectorAll('section.panel');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.section).classList.add('active');
        });
    });
    if (buttons.length) buttons[0].click();
}

function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('genealogy', 1);
        request.onupgradeneeded = e => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('members')) {
                db.createObjectStore('members', { keyPath: 'id', autoIncrement: true });
            }
        };
        request.onsuccess = e => resolve(e.target.result);
        request.onerror = e => reject(e.target.error);
    });
}

async function initDB() {
    db = await openDB();
}

async function initCrypto() {
    const pass = localStorage.getItem('genealogyPass') || prompt('Mật khẩu mã hóa / Encryption passphrase');
    if (!localStorage.getItem('genealogyPass')) localStorage.setItem('genealogyPass', pass);
    cryptoKey = await getKey(pass);
}

async function getKey(passphrase) {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(passphrase), { name: 'PBKDF2' }, false, ['deriveKey']);
    return crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt: enc.encode('genealogy-salt'), iterations: 100000, hash: 'SHA-256' },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
    );
}

function ab2b64(buf) {
    return btoa(String.fromCharCode(...new Uint8Array(buf)));
}
function b642ab(b64) {
    return Uint8Array.from(atob(b64), c => c.charCodeAt(0)).buffer;
}

async function encryptData(obj) {
    const enc = new TextEncoder();
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const data = enc.encode(JSON.stringify(obj));
    const cipher = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, cryptoKey, data);
    return { data: ab2b64(cipher), iv: ab2b64(iv) };
}
async function decryptData(record) {
    const dec = new TextDecoder();
    const cipher = b642ab(record.data);
    const iv = b642ab(record.iv);
    const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, cryptoKey, cipher);
    return JSON.parse(dec.decode(plain));
}

async function saveMember(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const birth = document.getElementById('birth').value;
    const fatherId = document.getElementById('fatherSelect').value || null;
    const motherId = document.getElementById('motherSelect').value || null;
    const spouseId = document.getElementById('spouseSelect').value || null;
    const id = document.getElementById('memberId').value;
    const member = { name, birth, fatherId, motherId, spouseId };
    const encrypted = await encryptData(member);
    const tx = db.transaction('members', 'readwrite');
    const store = tx.objectStore('members');
    if (id) {
        store.put({ id: Number(id), name, data: encrypted.data, iv: encrypted.iv });
    } else {
        store.add({ name, data: encrypted.data, iv: encrypted.iv });
    }
    tx.oncomplete = async () => {
        await refreshSelects();
        await renderTree();
        updateStats();
        e.target.reset();
        document.getElementById('memberId').value = '';
    };
}

async function deleteMember() {
    const id = document.getElementById('memberId').value;
    if (!id) return;
    const tx = db.transaction('members', 'readwrite');
    tx.objectStore('members').delete(Number(id));
    tx.oncomplete = async () => {
        if (Number(id) === centerId) {
            localStorage.removeItem('centerId');
            centerId = null;
        }
        await refreshSelects();
        await renderTree();
        updateStats();
        document.getElementById('memberForm').reset();
        document.getElementById('memberId').value = '';
    };
}

async function getAllMembers() {
    return new Promise(resolve => {
        const tx = db.transaction('members', 'readonly');
        const store = tx.objectStore('members');
        const req = store.getAll();
        req.onsuccess = async () => {
            const decrypted = [];
            for (const r of req.result) {
                const data = await decryptData(r);
                data.id = r.id;
                data.name = r.name;
                decrypted.push(data);
            }
            resolve(decrypted);
        };
    });
}

async function refreshSelects() {
    const members = await getAllMembers();
    const fatherSel = document.getElementById('fatherSelect');
    const motherSel = document.getElementById('motherSelect');
    const spouseSel = document.getElementById('spouseSelect');
    fatherSel.innerHTML = '<option value="" data-i18n="none">--</option>';
    motherSel.innerHTML = '<option value="" data-i18n="none">--</option>';
    spouseSel.innerHTML = '<option value="" data-i18n="none">--</option>';
    for (const m of members) {
        const opt1 = document.createElement('option');
        opt1.value = m.id;
        opt1.textContent = m.name;
        fatherSel.appendChild(opt1);
        const opt2 = document.createElement('option');
        opt2.value = m.id;
        opt2.textContent = m.name;
        motherSel.appendChild(opt2);
        const opt3 = document.createElement('option');
        opt3.value = m.id;
        opt3.textContent = m.name;
        spouseSel.appendChild(opt3);
    }
    updateLanguage(document.getElementById('languageSelect').value);
}

function createNode(member) {
    const div = document.createElement('div');
    div.className = 'member-node';
    div.textContent = member.name + (member.birth ? ` (${member.birth})` : '');
    div.addEventListener('click', () => {
        loadMember(member);
        setCenter(member.id);
    });
    return div;
}

async function renderTree() {
    const members = await getAllMembers();
    if (!members.length) return;
    const search = document.getElementById('searchInput').value.toLowerCase();
    if (search) {
        const found = members.find(m => m.name.toLowerCase().includes(search));
        if (found) centerId = found.id;
    }
    if (!centerId || !members.find(m => m.id === centerId)) centerId = members[0].id;
    localStorage.setItem('centerId', centerId);
    const center = members.find(m => m.id === centerId);
    const container = document.getElementById('tree');
    container.innerHTML = '';
    const tree = document.createElement('div');
    tree.className = 'focus-tree';

    const parents = document.createElement('div');
    parents.className = 'parents';
    if (center.fatherId) {
        const father = members.find(m => m.id === center.fatherId);
        if (father) parents.appendChild(createNode(father));
    }
    if (center.motherId) {
        const mother = members.find(m => m.id === center.motherId);
        if (mother) parents.appendChild(createNode(mother));
    }
    tree.appendChild(parents);

    const centerRow = document.createElement('div');
    centerRow.className = 'center-row';
    const siblingsDiv = document.createElement('div');
    siblingsDiv.className = 'siblings';
    for (const s of members.filter(m => m.id !== center.id && ((m.fatherId && m.fatherId === center.fatherId) || (m.motherId && m.motherId === center.motherId)))) {
        siblingsDiv.appendChild(createNode(s));
    }
    centerRow.appendChild(siblingsDiv);
    const centerNode = createNode(center);
    centerNode.classList.add('center');
    centerRow.appendChild(centerNode);
    const spousesDiv = document.createElement('div');
    spousesDiv.className = 'spouses';
    if (center.spouseId) {
        const spouse = members.find(m => m.id === center.spouseId);
        if (spouse) spousesDiv.appendChild(createNode(spouse));
    }
    centerRow.appendChild(spousesDiv);
    tree.appendChild(centerRow);

    const childrenDiv = document.createElement('div');
    childrenDiv.className = 'children';
    for (const c of members.filter(m => m.fatherId === center.id || m.motherId === center.id)) {
        childrenDiv.appendChild(createNode(c));
    }
    tree.appendChild(childrenDiv);

    container.appendChild(tree);
}

function setCenter(id) {
    if (!id) return;
    centerId = Number(id);
    localStorage.setItem('centerId', centerId);
    renderTree();
}

function loadMember(member) {
    document.getElementById('memberId').value = member.id;
    document.getElementById('name').value = member.name;
    document.getElementById('birth').value = member.birth || '';
    document.getElementById('fatherSelect').value = member.fatherId || '';
    document.getElementById('motherSelect').value = member.motherId || '';
    document.getElementById('spouseSelect').value = member.spouseId || '';
}

function updateStats() {
    getAllMembers().then(members => {
        const stats = document.getElementById('stats');
        const count = members.length;
        const depths = {};
        function depth(id) {
            const m = members.find(x => x.id === id);
            if (!m) return 0;
            if (!m.fatherId && !m.motherId) return 1;
            return 1 + Math.max(depth(m.fatherId), depth(m.motherId));
        }
        for (const m of members) depths[m.id] = depth(m.id);
        const generations = Math.max(...Object.values(depths), 0);
        stats.textContent = `Thành viên: ${count} / Members: ${count}, Thế hệ: ${generations}`;
    });
}

async function exportData() {
    const members = await getAllMembers();
    const data = JSON.stringify(members);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'genealogy.json';
    a.click();
    URL.revokeObjectURL(url);
}

async function importData(e) {
    const file = e.target.files[0];
    if (!file) return;
    const text = await file.text();
    const members = JSON.parse(text);
    for (const m of members) {
        const { name, birth, fatherId, motherId, spouseId } = m;
        const encrypted = await encryptData({ name, birth, fatherId, motherId, spouseId });
        const tx = db.transaction('members', 'readwrite');
        tx.objectStore('members').add({ name, data: encrypted.data, iv: encrypted.iv });
    }
    e.target.value = '';
    await refreshSelects();
    await renderTree();
    updateStats();
}

async function showQR() {
    const members = await getAllMembers();
    const data = JSON.stringify(members);
    const container = document.getElementById('qrContainer');
    container.innerHTML = '';
    new QRCode(container, { text: data, width: 200, height: 200 });
}

function updateLanguage(lang) {
    const strings = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = strings[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.setAttribute('placeholder', strings[key]);
    });
}
