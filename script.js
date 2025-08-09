"use strict";

const APP_VERSION = '6.0';

const i18n = {
    vi: {
        title: 'Gia phả cá nhân',
        home: 'Trang chủ',
        welcome: 'Chào mừng! Bắt đầu bằng cách thêm thành viên đầu tiên.',
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
        new: 'Thêm mới',
        noMembers: 'Chưa có thành viên. Hãy thêm thành viên đầu tiên.',
        none: '--',
        namePlaceholder: 'Nhập họ tên',
        nameRequired: 'Vui lòng nhập họ tên.',
        invalidRelation: 'Không thể chọn bản thân làm cha, mẹ hoặc vợ/chồng.',
        selectAction: 'Chọn: 1-Sửa, 2-Thêm con, 3-Thêm vợ/chồng, 4-Thêm cha, 5-Thêm mẹ',
        childParentPrompt: 'Bạn là cha hay mẹ của người con? (f/m)'
    },
    en: {
        title: 'Personal Genealogy',
        home: 'Home',
        welcome: 'Welcome! Start by adding your first member.',
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
        new: 'New',
        noMembers: 'No members yet. Add one to get started.',
        none: '--',
        namePlaceholder: 'Enter full name',
        nameRequired: 'Please enter a name.',
        invalidRelation: 'A member cannot be their own parent or spouse.',
        selectAction: 'Choose: 1-Edit, 2-Add child, 3-Add spouse, 4-Add father, 5-Add mother',
        childParentPrompt: 'Are you the father or mother of the child? (f/m)'
    }
};

let db;
let cryptoKey;
let centerId;
let currentLang;
let pendingRelation;
let relatedMemberId;

async function init() {
    await initDB();
    await initCrypto();
    const savedLang = localStorage.getItem('lang') || 'vi';
    document.getElementById('languageSelect').value = savedLang;
    currentLang = savedLang;
    centerId = Number(localStorage.getItem('centerId')) || null;
    await refreshSelects();
    await renderTree();
    updateStats();
    document.getElementById('memberForm').addEventListener('submit', saveMember);
    document.getElementById('deleteBtn').addEventListener('click', deleteMember);
    document.getElementById('newBtn').addEventListener('click', clearForm);
    document.getElementById('exportBtn').addEventListener('click', exportData);
    document.getElementById('importInput').addEventListener('change', importData);
    document.getElementById('qrBtn').addEventListener('click', showQR);
    document.getElementById('searchInput').addEventListener('input', renderTree);
    document.getElementById('centerBtn').addEventListener('click', () => setCenter(document.getElementById('memberId').value));
    document.getElementById('languageSelect').addEventListener('change', e => updateLanguage(e.target.value));
    document.getElementById('version').textContent = 'v' + APP_VERSION;
    updateLanguage(savedLang);
    setupNav();
    clearForm();
}

document.addEventListener('DOMContentLoaded', init);


function showSection(id) {
    const buttons = document.querySelectorAll('#mainNav button');
    const sections = document.querySelectorAll('section.panel');
    buttons.forEach(b => b.classList.toggle('active', b.dataset.section === id));
    sections.forEach(s => s.classList.toggle('active', s.id === id));
}

function setupNav() {
    const buttons = document.querySelectorAll('#mainNav button');
    buttons.forEach(btn => btn.addEventListener('click', () => {
        showSection(btn.dataset.section);
        if (btn.dataset.section === 'addMember') clearForm();
    }));
    if (buttons.length) showSection(buttons[0].dataset.section);
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
    const name = document.getElementById('name').value.trim();
    if (!name) {
        alert(i18n[currentLang].nameRequired);
        return;
    }
    const birth = document.getElementById('birth').value;
    const fatherId = parseInt(document.getElementById('fatherSelect').value) || null;
    const motherId = parseInt(document.getElementById('motherSelect').value) || null;
    const spouseId = parseInt(document.getElementById('spouseSelect').value) || null;
    const id = document.getElementById('memberId').value;
    const numId = id ? Number(id) : null;
    if (numId && (fatherId === numId || motherId === numId || spouseId === numId)) {
        alert(i18n[currentLang].invalidRelation);
        return;
    }
    const member = { name, birth, fatherId, motherId, spouseId };
    const encrypted = await encryptData(member);
    const tx = db.transaction('members', 'readwrite');
    const store = tx.objectStore('members');
    const request = id ?
        store.put({ id: numId, name, data: encrypted.data, iv: encrypted.iv }) :
        store.add({ name, data: encrypted.data, iv: encrypted.iv });
    request.onsuccess = async () => {
        const newId = numId ? numId : request.result;
        await handlePendingRelation(newId);
        await refreshSelects();
        setCenter(newId);
        await renderTree();
        updateStats();
        clearForm();
        showSection('treeSection');
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
        clearForm();
        showSection('treeSection');
    };
}

async function getAllMembers() {
    try {
        return await new Promise((resolve, reject) => {
            const tx = db.transaction('members', 'readonly');
            const store = tx.objectStore('members');
            const req = store.getAll();
            req.onsuccess = async () => {
                const decrypted = [];
                for (const r of req.result) {
                    const data = await decryptData(r);
                    data.id = r.id;
                    data.name = r.name;
                    data.fatherId = data.fatherId ? Number(data.fatherId) : null;
                    data.motherId = data.motherId ? Number(data.motherId) : null;
                    data.spouseId = data.spouseId ? Number(data.spouseId) : null;
                    decrypted.push(data);
                }
                resolve(decrypted);
            };
            req.onerror = () => reject(req.error);
        });
    } catch (err) {
        console.error('Failed to load members', err);
        return [];
    }
}

async function getMember(id) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('members', 'readonly');
        const store = tx.objectStore('members');
        const req = store.get(Number(id));
        req.onsuccess = async () => {
            if (!req.result) { resolve(null); return; }
            const data = await decryptData(req.result);
            data.id = req.result.id;
            data.name = req.result.name;
            data.fatherId = data.fatherId ? Number(data.fatherId) : null;
            data.motherId = data.motherId ? Number(data.motherId) : null;
            data.spouseId = data.spouseId ? Number(data.spouseId) : null;
            resolve(data);
        };
        req.onerror = () => reject(req.error);
    });
}

async function refreshSelects(excludeId) {
    const members = await getAllMembers();
    const fatherSel = document.getElementById('fatherSelect');
    const motherSel = document.getElementById('motherSelect');
    const spouseSel = document.getElementById('spouseSelect');
    fatherSel.innerHTML = '<option value="" data-i18n="none">--</option>';
    motherSel.innerHTML = '<option value="" data-i18n="none">--</option>';
    spouseSel.innerHTML = '<option value="" data-i18n="none">--</option>';
    for (const m of members) {
        if (excludeId && m.id === excludeId) continue;
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
    div.addEventListener('click', () => handleNodeClick(member));
    return div;
}

function handleNodeClick(member) {
    const action = prompt(i18n[currentLang].selectAction);
    if (!action) return;
    switch(action) {
        case '1':
            loadMember(member);
            setCenter(member.id);
            showSection('addMember');
            break;
        case '2': {
            const role = prompt(i18n[currentLang].childParentPrompt);
            if (role === 'f') prepareAddRelative(member, 'child-father');
            else if (role === 'm') prepareAddRelative(member, 'child-mother');
            break;
        }
        case '3':
            prepareAddRelative(member, 'spouse');
            break;
        case '4':
            prepareAddRelative(member, 'father');
            break;
        case '5':
            prepareAddRelative(member, 'mother');
            break;
    }
}

function prepareAddRelative(member, relation) {
    clearForm();
    if (relation === 'child-father') {
        document.getElementById('fatherSelect').value = member.id;
        pendingRelation = null;
        relatedMemberId = null;
    } else if (relation === 'child-mother') {
        document.getElementById('motherSelect').value = member.id;
        pendingRelation = null;
        relatedMemberId = null;
    } else {
        pendingRelation = relation;
        relatedMemberId = member.id;
        if (relation === 'spouse') {
            document.getElementById('spouseSelect').value = member.id;
        }
    }
    showSection('addMember');
}

async function handlePendingRelation(newId) {
    if (!pendingRelation || !relatedMemberId) return;
    const member = await getMember(relatedMemberId);
    if (!member) {
        pendingRelation = null;
        relatedMemberId = null;
        return;
    }
    switch (pendingRelation) {
        case 'spouse':
            member.spouseId = newId;
            break;
        case 'father':
            member.fatherId = newId;
            break;
        case 'mother':
            member.motherId = newId;
            break;
    }
    const enc = await encryptData({
        name: member.name,
        birth: member.birth,
        fatherId: member.fatherId,
        motherId: member.motherId,
        spouseId: member.spouseId
    });
    const tx = db.transaction('members', 'readwrite');
    tx.objectStore('members').put({ id: member.id, name: member.name, data: enc.data, iv: enc.iv });
    pendingRelation = null;
    relatedMemberId = null;
}

function createConnector() {
    const line = document.createElement('div');
    line.className = 'connector';
    return line;
}

async function renderTree() {
    const members = await getAllMembers();
    const container = document.getElementById('tree');
    if (!members.length) {
        container.textContent = i18n[currentLang].noMembers;
        return;
    }
    const search = document.getElementById('searchInput').value.toLowerCase();
    if (search) {
        const found = members.find(m => m.name.toLowerCase().includes(search));
        if (found) centerId = found.id;
    }
    if (!centerId || !members.find(m => m.id === centerId)) centerId = members[0].id;
    localStorage.setItem('centerId', centerId);
    const center = members.find(m => m.id === centerId);
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
    if (parents.children.length) {
        tree.appendChild(parents);
        tree.appendChild(createConnector());
    }

    const centerRow = document.createElement('div');
    centerRow.className = 'center-row';
    const siblingsDiv = document.createElement('div');
    siblingsDiv.className = 'siblings';
    for (const s of members.filter(m => m.id !== center.id && ((m.fatherId && m.fatherId === center.fatherId) || (m.motherId && m.motherId === center.motherId))).sort((a,b) => a.name.localeCompare(b.name))) {
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
    for (const c of members.filter(m => m.fatherId === center.id || m.motherId === center.id).sort((a,b) => a.name.localeCompare(b.name))) {
        childrenDiv.appendChild(createNode(c));
    }
    if (childrenDiv.children.length) {
        tree.appendChild(createConnector());
        tree.appendChild(childrenDiv);
    }

    container.appendChild(tree);
}

function setCenter(id) {
    if (!id) return;
    centerId = Number(id);
    localStorage.setItem('centerId', centerId);
    renderTree();
}

async function loadMember(member) {
    await refreshSelects(member.id);
    document.getElementById('memberId').value = member.id;
    document.getElementById('name').value = member.name;
    document.getElementById('birth').value = member.birth || '';
    document.getElementById('fatherSelect').value = member.fatherId || '';
    document.getElementById('motherSelect').value = member.motherId || '';
    document.getElementById('spouseSelect').value = member.spouseId || '';
    document.getElementById('deleteBtn').disabled = false;
    document.getElementById('centerBtn').disabled = false;
}

function clearForm() {
    const form = document.getElementById('memberForm');
    form.reset();
    document.getElementById('memberId').value = '';
    document.getElementById('deleteBtn').disabled = true;
    document.getElementById('centerBtn').disabled = true;
    pendingRelation = null;
    relatedMemberId = null;
    refreshSelects();
    document.getElementById('name').focus();
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
    try {
        const text = await file.text();
        const members = JSON.parse(text);
        for (const m of members) {
            const { name, birth, fatherId, motherId, spouseId } = m;
            const encrypted = await encryptData({ name, birth, fatherId, motherId, spouseId });
            const tx = db.transaction('members', 'readwrite');
            tx.objectStore('members').add({ name, data: encrypted.data, iv: encrypted.iv });
        }
        await refreshSelects();
        await renderTree();
        updateStats();
    } catch (err) {
        alert('Import failed: ' + err.message);
        console.error(err);
    } finally {
        e.target.value = '';
    }
}

async function showQR() {
    const members = await getAllMembers();
    const data = JSON.stringify(members);
    const container = document.getElementById('qrContainer');
    container.innerHTML = '';
    new QRCode(container, { text: data, width: 200, height: 200 });
}

function updateLanguage(lang) {
    currentLang = lang;
    const strings = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = strings[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.setAttribute('placeholder', strings[key]);
    });
    localStorage.setItem('lang', lang);
    renderTree();
}
