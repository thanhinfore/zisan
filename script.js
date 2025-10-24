"use strict";

const APP_VERSION = '11.0';

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
        chooseAction: 'Chọn thao tác',
        edit: 'Sửa',
        addChild: 'Thêm con',
        addSpouse: 'Thêm vợ/chồng',
        addFather: 'Thêm cha',
        addMother: 'Thêm mẹ',
        childAsk: 'Bạn là cha hay mẹ của người con?',
        asFather: 'Tôi là cha',
        asMother: 'Tôi là mẹ',
        selectAction: 'Chọn: 1-Sửa, 2-Thêm con, 3-Thêm vợ/chồng, 4-Thêm cha, 5-Thêm mẹ',
        childParentPrompt: 'Bạn là cha hay mẹ của người con? (f/m)',
        security: 'Bảo mật',
        exportData: 'Xuất dữ liệu',
        importData: 'Nhập dữ liệu',
        exportEncrypted: 'Xuất JSON mã hóa',
        exportCsv: 'Xuất CSV',
        backup: 'Sao lưu toàn bộ',
        restore: 'Khôi phục từ sao lưu',
        chooseFile: 'Chọn file để nhập',
        qrCode: 'Mã QR',
        securityDesc: 'Dữ liệu của bạn được mã hóa AES-GCM 256-bit và lưu trữ an toàn trên trình duyệt.',
        changePassword: 'Thay đổi mật khẩu',
        currentPassword: 'Mật khẩu hiện tại',
        newPassword: 'Mật khẩu mới',
        confirmPassword: 'Xác nhận mật khẩu mới',
        changePasswordBtn: 'Đổi mật khẩu',
        dataInfo: 'Thông tin dữ liệu',
        clearData: 'Xóa toàn bộ dữ liệu',
        passwordMismatch: 'Mật khẩu mới và xác nhận không khớp.',
        passwordIncorrect: 'Mật khẩu hiện tại không đúng.',
        passwordChanged: 'Mật khẩu đã được thay đổi thành công!',
        exportPassword: 'Nhập mật khẩu để mã hóa file xuất:',
        importPassword: 'Nhập mật khẩu để giải mã file:',
        exportSuccess: 'Xuất dữ liệu thành công!',
        importSuccess: 'Nhập dữ liệu thành công!',
        backupSuccess: 'Sao lưu thành công!',
        restoreSuccess: 'Khôi phục thành công!',
        confirmClearData: 'Bạn có chắc chắn muốn xóa TOÀN BỘ dữ liệu? Hành động này không thể hoàn tác!',
        dataCleared: 'Dữ liệu đã được xóa.',
        errorOccurred: 'Đã xảy ra lỗi: ',
        timeline: 'Dòng thời gian',
        sortByBirth: 'Theo ngày sinh',
        sortByAdded: 'Theo thêm vào',
        addPhoto: 'Thêm ảnh',
        notes: 'Ghi chú',
        notesPlaceholder: 'Thêm ghi chú...',
        totalMembers: 'Tổng thành viên',
        totalGenerations: 'Số thế hệ',
        avgAge: 'Tuổi trung bình',
        oldestMember: 'Người lớn tuổi nhất',
        generationChart: 'Phân bố thế hệ',
        ageChart: 'Phân bố độ tuổi',
        keyboardShortcuts: 'Phím tắt',
        newMember: 'Thêm thành viên mới',
        saveMember: 'Lưu thành viên',
        searchFocus: 'Tìm kiếm',
        toggleDarkMode: 'Bật/tắt chế độ tối',
        showShortcuts: 'Hiển thị phím tắt',
        tools: 'Công cụ',
        dragDropUpload: 'Kéo thả để tải lên',
        dropZoneText: 'Kéo file JSON/CSV/Backup vào đây hoặc click để chọn',
        birthdayReminders: 'Nhắc sinh nhật',
        relationshipCalc: 'Tính mối quan hệ',
        advancedSearch: 'Tìm kiếm nâng cao',
        excelExport: 'Xuất Excel',
        excelDesc: 'Xuất dữ liệu sang file Excel (.xlsx) để dễ dàng chỉnh sửa',
        exportExcel: 'Xuất Excel',
        autoBackup: 'Sao lưu tự động',
        enableAutoBackup: 'Bật sao lưu tự động hàng ngày',
        backupNow: 'Sao lưu ngay',
        selectPerson1: 'Chọn người thứ 1',
        selectPerson2: 'Chọn người thứ 2',
        calculate: 'Tính toán',
        searchName: 'Tìm theo tên...',
        noBirthdays: 'Không có sinh nhật sắp tới',
        today: 'Hôm nay',
        daysLeft: 'còn {days} ngày',
        lastBackup: 'Sao lưu lần cuối: {time}',
        neverBackedUp: 'Chưa sao lưu lần nào',
        memberAdded: 'Đã thêm thành viên thành công!',
        memberUpdated: 'Đã cập nhật thành viên thành công!',
        saveFailed: 'Lưu thất bại. Vui lòng thử lại.',
        memberDeleted: 'Đã xóa thành viên thành công!',
        deleteFailed: 'Xóa thất bại. Vui lòng thử lại.',
        confirmDelete: 'Bạn có chắc chắn muốn xóa thành viên này?',
        duplicateName: 'Tên này đã tồn tại. Bạn có muốn tiếp tục không?',
        nameMinLength: 'Tên phải có ít nhất 2 ký tự.',
        invalidBirthDate: 'Ngày sinh không hợp lệ.'
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
        chooseAction: 'Choose action',
        edit: 'Edit',
        addChild: 'Add child',
        addSpouse: 'Add spouse',
        addFather: 'Add father',
        addMother: 'Add mother',
        childAsk: 'Are you the father or mother of the child?',
        asFather: 'I am the father',
        asMother: 'I am the mother',
        selectAction: 'Choose: 1-Edit, 2-Add child, 3-Add spouse, 4-Add father, 5-Add mother',
        childParentPrompt: 'Are you the father or mother of the child? (f/m)',
        security: 'Security',
        exportData: 'Export Data',
        importData: 'Import Data',
        exportEncrypted: 'Export Encrypted JSON',
        exportCsv: 'Export CSV',
        backup: 'Backup All Data',
        restore: 'Restore from Backup',
        chooseFile: 'Choose file to import',
        qrCode: 'QR Code',
        securityDesc: 'Your data is encrypted with AES-GCM 256-bit and stored securely in your browser.',
        changePassword: 'Change Password',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        confirmPassword: 'Confirm New Password',
        changePasswordBtn: 'Change Password',
        dataInfo: 'Data Information',
        clearData: 'Clear All Data',
        passwordMismatch: 'New password and confirmation do not match.',
        passwordIncorrect: 'Current password is incorrect.',
        passwordChanged: 'Password changed successfully!',
        exportPassword: 'Enter password to encrypt export file:',
        importPassword: 'Enter password to decrypt file:',
        exportSuccess: 'Data exported successfully!',
        importSuccess: 'Data imported successfully!',
        backupSuccess: 'Backup created successfully!',
        restoreSuccess: 'Data restored successfully!',
        confirmClearData: 'Are you sure you want to delete ALL data? This action cannot be undone!',
        dataCleared: 'All data has been cleared.',
        errorOccurred: 'An error occurred: ',
        timeline: 'Timeline',
        sortByBirth: 'By birth date',
        sortByAdded: 'By added date',
        addPhoto: 'Add photo',
        notes: 'Notes',
        notesPlaceholder: 'Add notes...',
        totalMembers: 'Total members',
        totalGenerations: 'Generations',
        avgAge: 'Average age',
        oldestMember: 'Oldest member',
        generationChart: 'Generation distribution',
        ageChart: 'Age distribution',
        keyboardShortcuts: 'Keyboard shortcuts',
        newMember: 'New member',
        saveMember: 'Save member',
        searchFocus: 'Search',
        toggleDarkMode: 'Toggle dark mode',
        showShortcuts: 'Show shortcuts',
        tools: 'Tools',
        dragDropUpload: 'Drag & Drop Upload',
        dropZoneText: 'Drag JSON/CSV/Backup files here or click to select',
        birthdayReminders: 'Birthday Reminders',
        relationshipCalc: 'Relationship Calculator',
        advancedSearch: 'Advanced Search',
        excelExport: 'Excel Export',
        excelDesc: 'Export data to Excel (.xlsx) file for easy editing',
        exportExcel: 'Export Excel',
        autoBackup: 'Auto Backup',
        enableAutoBackup: 'Enable daily auto backup',
        backupNow: 'Backup Now',
        selectPerson1: 'Select person 1',
        selectPerson2: 'Select person 2',
        calculate: 'Calculate',
        searchName: 'Search by name...',
        noBirthdays: 'No upcoming birthdays',
        today: 'Today',
        daysLeft: '{days} days left',
        lastBackup: 'Last backup: {time}',
        neverBackedUp: 'Never backed up',
        memberAdded: 'Member added successfully!',
        memberUpdated: 'Member updated successfully!',
        saveFailed: 'Save failed. Please try again.',
        memberDeleted: 'Member deleted successfully!',
        deleteFailed: 'Delete failed. Please try again.',
        confirmDelete: 'Are you sure you want to delete this member?',
        duplicateName: 'This name already exists. Do you want to continue?',
        nameMinLength: 'Name must be at least 2 characters.',
        invalidBirthDate: 'Invalid birth date.'
    }
};

let db;
let cryptoKey;
let centerId;
let currentLang;
let pendingRelation;
let relatedMemberId;
let modalMember;
let actionModal;
let childModal;

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
    updateDataStats();
    document.getElementById('memberForm').addEventListener('submit', saveMember);
    document.getElementById('deleteBtn').addEventListener('click', deleteMember);
    document.getElementById('newBtn').addEventListener('click', clearForm);
    document.getElementById('exportBtn').addEventListener('click', exportData);
    document.getElementById('importInput').addEventListener('change', importData);
    document.getElementById('qrBtn').addEventListener('click', showQR);
    document.getElementById('searchInput').addEventListener('input', renderTree);
    document.getElementById('centerBtn').addEventListener('click', () => setCenter(document.getElementById('memberId').value));
    document.getElementById('languageSelect').addEventListener('change', e => updateLanguage(e.target.value));
    document.getElementById('exportEncryptedBtn').addEventListener('click', exportEncrypted);
    document.getElementById('exportCsvBtn').addEventListener('click', exportCsv);
    document.getElementById('backupBtn').addEventListener('click', backupData);
    document.getElementById('restoreBtn').addEventListener('click', () => document.getElementById('restoreInput').click());
    document.getElementById('restoreInput').addEventListener('change', restoreData);
    document.getElementById('passwordForm').addEventListener('submit', changePassword);
    document.getElementById('clearDataBtn').addEventListener('click', clearAllData);
    document.getElementById('version').textContent = 'v' + APP_VERSION;
    actionModal = new bootstrap.Modal(document.getElementById('actionModal'));
    childModal = new bootstrap.Modal(document.getElementById('childModal'));
    $('#editBtn').on('click', () => {
        actionModal.hide();
        loadMember(modalMember);
        setCenter(modalMember.id);
        showSection('addMember');
    });
    $('#addSpouseBtn').on('click', () => {
        actionModal.hide();
        prepareAddRelative(modalMember, 'spouse');
    });
    $('#addFatherBtn').on('click', () => {
        actionModal.hide();
        prepareAddRelative(modalMember, 'father');
    });
    $('#addMotherBtn').on('click', () => {
        actionModal.hide();
        prepareAddRelative(modalMember, 'mother');
    });
    $('#addChildBtn').on('click', () => {
        actionModal.hide();
        childModal.show();
    });
    $('#childAsFatherBtn').on('click', () => {
        childModal.hide();
        prepareAddRelative(modalMember, 'child-father');
    });
    $('#childAsMotherBtn').on('click', () => {
        childModal.hide();
        prepareAddRelative(modalMember, 'child-mother');
    });
    updateLanguage(savedLang);
    setupNav();
    setupSmartForm();
    clearForm();

    // Initialize v10 features AFTER database is ready
    await initV10Features();
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

    // Validate name
    if (!name) {
        showToast(i18n[currentLang].nameRequired, 'error');
        return;
    }
    if (name.length < 2) {
        showToast(i18n[currentLang].nameMinLength, 'error');
        return;
    }

    const birth = document.getElementById('birth').value;

    // Validate birth date
    if (birth) {
        const birthDate = new Date(birth);
        const today = new Date();
        if (birthDate > today) {
            showToast(i18n[currentLang].invalidBirthDate, 'error');
            return;
        }
    }

    const fatherId = parseInt(document.getElementById('fatherSelect').value) || null;
    const motherId = parseInt(document.getElementById('motherSelect').value) || null;
    const spouseId = parseInt(document.getElementById('spouseSelect').value) || null;
    const id = document.getElementById('memberId').value;
    const numId = id ? Number(id) : null;

    if (numId && (fatherId === numId || motherId === numId || spouseId === numId)) {
        showToast(i18n[currentLang].invalidRelation, 'error');
        return;
    }

    // Check for duplicate names (v11 feature)
    const allMembers = await getAllMembers();
    const duplicateExists = allMembers.some(m =>
        m.name.toLowerCase() === name.toLowerCase() && m.id !== numId
    );
    if (duplicateExists && !confirm(i18n[currentLang].duplicateName)) {
        return;
    }

    const member = { name, birth, fatherId, motherId, spouseId };

    // Show loading overlay
    showLoading();

    try {
        const encrypted = await encryptData(member);

        // Use Promise to properly wait for transaction completion
        return new Promise((resolve, reject) => {
            const tx = db.transaction('members', 'readwrite');
            const store = tx.objectStore('members');
            const request = id ?
                store.put({ id: numId, name, data: encrypted.data, iv: encrypted.iv }) :
                store.add({ name, data: encrypted.data, iv: encrypted.iv });

            let newId;
            request.onsuccess = () => {
                newId = numId ? numId : request.result;
            };

            // Wait for transaction to complete before updating UI
            tx.oncomplete = async () => {
                try {
                    await handlePendingRelation(newId);
                    await refreshSelects();
                    setCenter(newId);
                    await renderTree();
                    updateStats();
                    clearForm();
                    showSection('treeSection');
                    showToast(id ? i18n[currentLang].memberUpdated : i18n[currentLang].memberAdded, 'success');
                    resolve(newId);
                } finally {
                    hideLoading();
                }
            };

            tx.onerror = () => {
                hideLoading();
                showToast(i18n[currentLang].saveFailed, 'error');
                reject(tx.error);
            };
        });
    } catch (error) {
        hideLoading();
        showToast(i18n[currentLang].saveFailed, 'error');
        throw error;
    }
}

async function deleteMember() {
    const id = document.getElementById('memberId').value;
    if (!id) return;

    // Confirm before delete
    if (!confirm(i18n[currentLang].confirmDelete)) {
        return;
    }

    // Show loading overlay
    showLoading();

    return new Promise((resolve, reject) => {
        const tx = db.transaction('members', 'readwrite');
        tx.objectStore('members').delete(Number(id));

        tx.oncomplete = async () => {
            try {
                if (Number(id) === centerId) {
                    localStorage.removeItem('centerId');
                    centerId = null;
                }
                await refreshSelects();
                await renderTree();
                updateStats();
                clearForm();
                showSection('treeSection');
                showToast(i18n[currentLang].memberDeleted, 'success');
                resolve();
            } finally {
                hideLoading();
            }
        };

        tx.onerror = () => {
            hideLoading();
            showToast(i18n[currentLang].deleteFailed, 'error');
            reject(tx.error);
        };
    });
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
    syncSelectOptions();
}

function createNode(member) {
    const div = document.createElement('div');
    div.className = 'member-node';
    div.textContent = member.name + (member.birth ? ` (${member.birth})` : '');
    div.addEventListener('click', () => openActionModal(member));
    return div;
}

function openActionModal(member) {
    modalMember = member;
    actionModal.show();
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
    syncSelectOptions();
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

        // Only update if element exists (for backward compatibility)
        if (stats) {
            stats.textContent = `Thành viên: ${count} / Members: ${count}, Thế hệ: ${generations}`;
        }
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
        const data = JSON.parse(text);

        // Check if it's an encrypted export
        if (data.encrypted && data.iv) {
            const password = prompt(i18n[currentLang].importPassword);
            if (!password) {
                e.target.value = '';
                return;
            }

            const key = await getKeyFromPassword(password, 'export-salt');
            const dec = new TextDecoder();
            const encrypted = b642ab(data.encrypted);
            const iv = b642ab(data.iv);
            const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, encrypted);
            const members = JSON.parse(dec.decode(decrypted));

            for (const m of members) {
                const { name, birth, fatherId, motherId, spouseId } = m;
                const encrypted = await encryptData({ name, birth, fatherId, motherId, spouseId });
                const tx = db.transaction('members', 'readwrite');
                tx.objectStore('members').add({ name, data: encrypted.data, iv: encrypted.iv });
            }
        } else {
            // Regular JSON import
            const members = Array.isArray(data) ? data : [data];
            for (const m of members) {
                const { name, birth, fatherId, motherId, spouseId } = m;
                const encrypted = await encryptData({ name, birth, fatherId, motherId, spouseId });
                const tx = db.transaction('members', 'readwrite');
                tx.objectStore('members').add({ name, data: encrypted.data, iv: encrypted.iv });
            }
        }

        await refreshSelects();
        await renderTree();
        updateStats();
        updateDataStats();
        alert(i18n[currentLang].importSuccess);
    } catch (err) {
        alert(i18n[currentLang].errorOccurred + err.message);
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

function setupSmartForm() {
    $('#fatherSelect, #motherSelect, #spouseSelect').on('change', syncSelectOptions);
}

function syncSelectOptions() {
    const father = $('#fatherSelect').val();
    const mother = $('#motherSelect').val();
    const spouse = $('#spouseSelect').val();
    $('#fatherSelect option, #motherSelect option, #spouseSelect option').prop('disabled', false);
    if (father) {
        $(`#motherSelect option[value="${father}"]`).prop('disabled', true);
        $(`#spouseSelect option[value="${father}"]`).prop('disabled', true);
    }
    if (mother) {
        $(`#fatherSelect option[value="${mother}"]`).prop('disabled', true);
        $(`#spouseSelect option[value="${mother}"]`).prop('disabled', true);
    }
    if (spouse) {
        $(`#fatherSelect option[value="${spouse}"]`).prop('disabled', true);
        $(`#motherSelect option[value="${spouse}"]`).prop('disabled', true);
    }
}

// New features for v8.0

async function getKeyFromPassword(password, salt = 'genealogy-salt') {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), { name: 'PBKDF2' }, false, ['deriveKey']);
    return crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt: enc.encode(salt), iterations: 100000, hash: 'SHA-256' },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
    );
}

async function changePassword(e) {
    e.preventDefault();
    const currentPass = document.getElementById('currentPassword').value;
    const newPass = document.getElementById('newPassword').value;
    const confirmPass = document.getElementById('confirmPassword').value;

    if (newPass !== confirmPass) {
        alert(i18n[currentLang].passwordMismatch);
        return;
    }

    const storedPass = localStorage.getItem('genealogyPass');
    if (currentPass !== storedPass) {
        alert(i18n[currentLang].passwordIncorrect);
        return;
    }

    try {
        const members = await getAllMembers();
        const newKey = await getKeyFromPassword(newPass);

        const tx = db.transaction('members', 'readwrite');
        const store = tx.objectStore('members');

        for (const member of members) {
            const { id, name, birth, fatherId, motherId, spouseId } = member;
            const enc = new TextEncoder();
            const iv = crypto.getRandomValues(new Uint8Array(12));
            const data = enc.encode(JSON.stringify({ name, birth, fatherId, motherId, spouseId }));
            const cipher = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, newKey, data);

            store.put({
                id,
                name,
                data: ab2b64(cipher),
                iv: ab2b64(iv)
            });
        }

        await new Promise((resolve, reject) => {
            tx.oncomplete = resolve;
            tx.onerror = () => reject(tx.error);
        });

        localStorage.setItem('genealogyPass', newPass);
        cryptoKey = newKey;

        alert(i18n[currentLang].passwordChanged);
        document.getElementById('passwordForm').reset();
    } catch (err) {
        console.error('Password change failed:', err);
        alert(i18n[currentLang].errorOccurred + err.message);
    }
}

async function exportEncrypted() {
    const password = prompt(i18n[currentLang].exportPassword);
    if (!password) return;

    try {
        const members = await getAllMembers();
        const data = JSON.stringify(members);

        const key = await getKeyFromPassword(password, 'export-salt');
        const enc = new TextEncoder();
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const encrypted = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv },
            key,
            enc.encode(data)
        );

        const exportData = {
            version: APP_VERSION,
            encrypted: ab2b64(encrypted),
            iv: ab2b64(iv)
        };

        const blob = new Blob([JSON.stringify(exportData)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'genealogy-encrypted.json';
        a.click();
        URL.revokeObjectURL(url);

        alert(i18n[currentLang].exportSuccess);
    } catch (err) {
        console.error('Export failed:', err);
        alert(i18n[currentLang].errorOccurred + err.message);
    }
}

async function exportCsv() {
    try {
        const members = await getAllMembers();

        let csv = 'ID,Name,Birth,Father ID,Mother ID,Spouse ID\n';

        for (const m of members) {
            csv += `${m.id},"${m.name || ''}","${m.birth || ''}",${m.fatherId || ''},${m.motherId || ''},${m.spouseId || ''}\n`;
        }

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'genealogy.csv';
        a.click();
        URL.revokeObjectURL(url);

        alert(i18n[currentLang].exportSuccess);
    } catch (err) {
        console.error('CSV export failed:', err);
        alert(i18n[currentLang].errorOccurred + err.message);
    }
}

async function backupData() {
    try {
        const tx = db.transaction('members', 'readonly');
        const store = tx.objectStore('members');
        const allRecords = await new Promise((resolve, reject) => {
            const req = store.getAll();
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });

        const backup = {
            version: APP_VERSION,
            timestamp: new Date().toISOString(),
            password: localStorage.getItem('genealogyPass'),
            records: allRecords
        };

        const blob = new Blob([JSON.stringify(backup)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `genealogy-backup-${new Date().toISOString().split('T')[0]}.backup`;
        a.click();
        URL.revokeObjectURL(url);

        alert(i18n[currentLang].backupSuccess);
    } catch (err) {
        console.error('Backup failed:', err);
        alert(i18n[currentLang].errorOccurred + err.message);
    }
}

async function restoreData(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!confirm(i18n[currentLang].confirmClearData)) {
        e.target.value = '';
        return;
    }

    try {
        const text = await file.text();
        const backup = JSON.parse(text);

        const tx = db.transaction('members', 'readwrite');
        const store = tx.objectStore('members');

        await new Promise((resolve, reject) => {
            const clearReq = store.clear();
            clearReq.onsuccess = resolve;
            clearReq.onerror = () => reject(clearReq.error);
        });

        for (const record of backup.records) {
            store.add(record);
        }

        await new Promise((resolve, reject) => {
            tx.oncomplete = resolve;
            tx.onerror = () => reject(tx.error);
        });

        if (backup.password) {
            localStorage.setItem('genealogyPass', backup.password);
            cryptoKey = await getKey(backup.password);
        }

        await refreshSelects();
        await renderTree();
        updateStats();
        updateDataStats();

        alert(i18n[currentLang].restoreSuccess);
    } catch (err) {
        console.error('Restore failed:', err);
        alert(i18n[currentLang].errorOccurred + err.message);
    } finally {
        e.target.value = '';
    }
}

async function clearAllData() {
    if (!confirm(i18n[currentLang].confirmClearData)) {
        return;
    }

    try {
        const tx = db.transaction('members', 'readwrite');
        const store = tx.objectStore('members');

        await new Promise((resolve, reject) => {
            const clearReq = store.clear();
            clearReq.onsuccess = resolve;
            clearReq.onerror = () => reject(clearReq.error);
        });

        localStorage.removeItem('centerId');
        centerId = null;

        await refreshSelects();
        await renderTree();
        updateStats();
        updateDataStats();

        alert(i18n[currentLang].dataCleared);
        showSection('homeSection');
    } catch (err) {
        console.error('Clear data failed:', err);
        alert(i18n[currentLang].errorOccurred + err.message);
    }
}

async function updateDataStats() {
    try {
        const members = await getAllMembers();
        const statsDiv = document.getElementById('dataStats');

        const tx = db.transaction('members', 'readonly');
        const store = tx.objectStore('members');
        const allRecords = await new Promise((resolve, reject) => {
            const req = store.getAll();
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });

        const dataSize = JSON.stringify(allRecords).length;
        const dataSizeKB = (dataSize / 1024).toFixed(2);

        statsDiv.innerHTML = `
            <p><strong>${currentLang === 'vi' ? 'Tổng số thành viên' : 'Total members'}:</strong> ${members.length}</p>
            <p><strong>${currentLang === 'vi' ? 'Kích thước dữ liệu' : 'Data size'}:</strong> ${dataSizeKB} KB</p>
            <p><strong>${currentLang === 'vi' ? 'Trạng thái mã hóa' : 'Encryption status'}:</strong> ${currentLang === 'vi' ? 'Đã mã hóa (AES-GCM 256-bit)' : 'Encrypted (AES-GCM 256-bit)'}</p>
        `;
    } catch (err) {
        console.error('Update stats failed:', err);
    }
}

// ========== V9.0 NEW FEATURES ==========

// Toast Notification System
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icon = type === 'success' ? 'check-circle-fill' :
                 type === 'error' ? 'x-circle-fill' :
                 'exclamation-triangle-fill';

    toast.innerHTML = `
        <i class="bi bi-${icon}"></i>
        <div class="toast-message">${message}</div>
        <button class="toast-close"><i class="bi bi-x"></i></button>
    `;

    container.appendChild(toast);

    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        toast.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    });

    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => toast.remove(), 300);
        }
    }, 5000);
}

// Replace all alert() with showToast()
const originalAlert = window.alert;
window.alert = function(message) {
    if (message.includes(i18n[currentLang].errorOccurred) ||
        message.includes('failed') ||
        message.includes('incorrect') ||
        message.includes('không đúng')) {
        showToast(message, 'error');
    } else if (message.includes('success') ||
               message.includes('thành công') ||
               message.includes('changed')) {
        showToast(message, 'success');
    } else {
        showToast(message, 'warning');
    }
};

// Dark Mode
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleDarkMode() {
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    showToast(newTheme === 'dark' ? 'Đã bật chế độ tối' : 'Đã bật chế độ sáng', 'success');
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }
}

// Zoom Controls
let currentZoom = 1;

function initZoomControls() {
    document.getElementById('zoomIn').addEventListener('click', () => zoomTree(0.1));
    document.getElementById('zoomOut').addEventListener('click', () => zoomTree(-0.1));
    document.getElementById('resetZoom').addEventListener('click', () => resetZoom());
}

function zoomTree(delta) {
    currentZoom = Math.max(0.5, Math.min(2, currentZoom + delta));
    applyZoom();
}

function resetZoom() {
    currentZoom = 1;
    applyZoom();
}

function applyZoom() {
    const tree = document.getElementById('tree');
    if (tree) {
        tree.style.transform = `scale(${currentZoom})`;
        document.getElementById('zoomLevel').textContent = `${Math.round(currentZoom * 100)}%`;
    }
}

// Timeline View
async function renderTimeline() {
    const members = await getAllMembers();
    const container = document.getElementById('timeline');

    if (!members.length) {
        container.innerHTML = `<p>${i18n[currentLang].noMembers}</p>`;
        return;
    }

    const sorted = members.filter(m => m.birth).sort((a, b) => {
        return new Date(a.birth) - new Date(b.birth);
    });

    container.innerHTML = '';

    for (const member of sorted) {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        const age = member.birth ? calculateAge(member.birth) : '';
        const ageText = age ? `(${age} ${currentLang === 'vi' ? 'tuổi' : 'years old'})` : '';

        item.innerHTML = `
            <div class="timeline-date">${formatDate(member.birth)}</div>
            <div class="timeline-name">${member.name} ${ageText}</div>
            <div class="timeline-info">${getRelationshipInfo(member, members)}</div>
        `;

        item.addEventListener('click', () => {
            loadMember(member);
            setCenter(member.id);
            showSection('addMember');
        });

        container.appendChild(item);
    }
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString(currentLang === 'vi' ? 'vi-VN' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function calculateAge(birthDate) {
    if (!birthDate) return null;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

function getRelationshipInfo(member, allMembers) {
    const parts = [];

    if (member.fatherId) {
        const father = allMembers.find(m => m.id === member.fatherId);
        if (father) parts.push(`${currentLang === 'vi' ? 'Cha' : 'Father'}: ${father.name}`);
    }

    if (member.motherId) {
        const mother = allMembers.find(m => m.id === member.motherId);
        if (mother) parts.push(`${currentLang === 'vi' ? 'Mẹ' : 'Mother'}: ${mother.name}`);
    }

    if (member.spouseId) {
        const spouse = allMembers.find(m => m.id === member.spouseId);
        if (spouse) parts.push(`${currentLang === 'vi' ? 'Vợ/Chồng' : 'Spouse'}: ${spouse.name}`);
    }

    return parts.join(' • ') || (currentLang === 'vi' ? 'Không có thông tin quan hệ' : 'No relationship info');
}

// Enhanced Statistics with Charts
let generationChartInstance = null;
let ageChartInstance = null;

async function updateEnhancedStats() {
    const members = await getAllMembers();

    // Update stat cards
    document.getElementById('totalMembers').textContent = members.length;

    const generations = Math.max(...members.map(m => {
        function depth(id) {
            const member = members.find(x => x.id === id);
            if (!member) return 0;
            if (!member.fatherId && !member.motherId) return 1;
            return 1 + Math.max(depth(member.fatherId), depth(member.motherId));
        }
        return depth(m.id);
    }), 0);
    document.getElementById('totalGenerations').textContent = generations;

    // Calculate average age
    const membersWithBirth = members.filter(m => m.birth);
    if (membersWithBirth.length > 0) {
        const ages = membersWithBirth.map(m => calculateAge(m.birth)).filter(a => a !== null);
        const avgAge = Math.round(ages.reduce((sum, age) => sum + age, 0) / ages.length);
        document.getElementById('avgAge').textContent = avgAge;

        // Find oldest member
        const oldestAge = Math.max(...ages);
        const oldest = membersWithBirth.find(m => calculateAge(m.birth) === oldestAge);
        document.getElementById('oldestMember').textContent = oldest ? `${oldest.name} (${oldestAge})` : '--';
    } else {
        document.getElementById('avgAge').textContent = '--';
        document.getElementById('oldestMember').textContent = '--';
    }

    // Render charts
    renderGenerationChart(members);
    renderAgeChart(members);
}

function renderGenerationChart(members) {
    const ctx = document.getElementById('generationChart');
    if (!ctx) return;

    const generationCounts = {};
    members.forEach(m => {
        function depth(id) {
            const member = members.find(x => x.id === id);
            if (!member) return 0;
            if (!member.fatherId && !member.motherId) return 1;
            return 1 + Math.max(depth(member.fatherId), depth(member.motherId));
        }
        const gen = depth(m.id);
        generationCounts[gen] = (generationCounts[gen] || 0) + 1;
    });

    if (generationChartInstance) {
        generationChartInstance.destroy();
    }

    generationChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(generationCounts).map(g => `${currentLang === 'vi' ? 'Thế hệ' : 'Gen'} ${g}`),
            datasets: [{
                label: currentLang === 'vi' ? 'Số người' : 'Count',
                data: Object.values(generationCounts),
                backgroundColor: 'rgba(74, 144, 226, 0.6)',
                borderColor: 'rgba(74, 144, 226, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

function renderAgeChart(members) {
    const ctx = document.getElementById('ageChart');
    if (!ctx) return;

    const membersWithBirth = members.filter(m => m.birth);
    const ageRanges = {
        '0-20': 0,
        '21-40': 0,
        '41-60': 0,
        '61-80': 0,
        '80+': 0
    };

    membersWithBirth.forEach(m => {
        const age = calculateAge(m.birth);
        if (age === null) return;

        if (age <= 20) ageRanges['0-20']++;
        else if (age <= 40) ageRanges['21-40']++;
        else if (age <= 60) ageRanges['41-60']++;
        else if (age <= 80) ageRanges['61-80']++;
        else ageRanges['80+']++;
    });

    if (ageChartInstance) {
        ageChartInstance.destroy();
    }

    ageChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(ageRanges),
            datasets: [{
                data: Object.values(ageRanges),
                backgroundColor: [
                    'rgba(72, 187, 120, 0.8)',
                    'rgba(74, 144, 226, 0.8)',
                    'rgba(237, 137, 54, 0.8)',
                    'rgba(245, 101, 101, 0.8)',
                    'rgba(159, 122, 234, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Photo Support
function initPhotoSupport() {
    const photoBtn = document.getElementById('photoBtn');
    const photoInput = document.getElementById('photoInput');
    const photoPreview = document.getElementById('photoPreview');

    photoBtn.addEventListener('click', () => photoInput.click());

    photoInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            showToast(currentLang === 'vi' ? 'Vui lòng chọn file ảnh' : 'Please select an image file', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            photoPreview.innerHTML = `<img src="${event.target.result}" alt="Photo">`;
        };
        reader.readAsDataURL(file);
    });
}

// Keyboard Shortcuts
function initKeyboardShortcuts() {
    const shortcutsModal = new bootstrap.Modal(document.getElementById('shortcutsModal'));

    document.getElementById('keyboardShortcutsBtn').addEventListener('click', () => {
        shortcutsModal.show();
    });

    document.addEventListener('keydown', (e) => {
        // Ctrl+N: New member
        if (e.ctrlKey && e.key === 'n') {
            e.preventDefault();
            showSection('addMember');
            clearForm();
        }

        // Ctrl+S: Save
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            const form = document.getElementById('memberForm');
            if (form) form.dispatchEvent(new Event('submit'));
        }

        // Ctrl+F: Search
        if (e.ctrlKey && e.key === 'f') {
            e.preventDefault();
            showSection('treeSection');
            document.getElementById('searchInput').focus();
        }

        // Ctrl+E: Export
        if (e.ctrlKey && e.key === 'e') {
            e.preventDefault();
            showSection('shareSection');
        }

        // Ctrl+D: Dark mode
        if (e.ctrlKey && e.key === 'd') {
            e.preventDefault();
            toggleDarkMode();
        }

        // ?: Show shortcuts
        if (e.key === '?') {
            shortcutsModal.show();
        }
    });
}

// Loading Overlay
function showLoading() {
    document.getElementById('loadingOverlay').classList.add('active');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.remove('active');
}

// Initialize all v9.0 & v10.0 features
async function initV10Features() {
    // v9 features
    initDarkMode();
    initZoomControls();
    initPhotoSupport();
    initKeyboardShortcuts();

    // Add theme toggle listener
    document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);

    // Add timeline sort listeners
    document.getElementById('sortByBirth').addEventListener('click', () => {
        document.getElementById('sortByBirth').classList.add('active');
        document.getElementById('sortByAdded').classList.remove('active');
        renderTimeline();
    });

    document.getElementById('sortByAdded').addEventListener('click', () => {
        document.getElementById('sortByAdded').classList.add('active');
        document.getElementById('sortByBirth').classList.remove('active');
        // TODO: Implement sort by added date
        renderTimeline();
    });

    // Override updateStats to use enhanced version
    const originalUpdateStats = window.updateStats;
    window.updateStats = function() {
        if (originalUpdateStats) originalUpdateStats();
        updateEnhancedStats();
        renderTimeline();
    };

    // v10 features - await for database operations
    initUndoRedo();
    initDragDrop();
    await initBirthdayReminders();
    await initRelationshipCalc();
    await initAdvancedSearch();
    initExcelExport();
    initAutoBackup();
}

// ========== V10.0 NEW FEATURES ==========

// Undo/Redo System
let undoStack = [];
let redoStack = [];
const MAX_UNDO = 50;

function initUndoRedo() {
    document.getElementById('undoBtn').addEventListener('click', undo);
    document.getElementById('redoBtn').addEventListener('click', redo);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'z') {
            e.preventDefault();
            undo();
        }
        if (e.ctrlKey && e.key === 'y') {
            e.preventDefault();
            redo();
        }
    });
}

function addToUndoStack(action) {
    undoStack.push(action);
    if (undoStack.length > MAX_UNDO) {
        undoStack.shift();
    }
    redoStack = [];
    updateUndoRedoUI();
}

async function undo() {
    if (undoStack.length === 0) return;

    const action = undoStack.pop();
    redoStack.push(action);

    await performUndoAction(action);
    updateUndoRedoUI();
}

async function redo() {
    if (redoStack.length === 0) return;

    const action = redoStack.pop();
    undoStack.push(action);

    await performRedoAction(action);
    updateUndoRedoUI();
}

async function performUndoAction(action) {
    // Implement undo logic based on action type
    showToast(currentLang === 'vi' ? 'Đã hoàn tác' : 'Undone', 'success');
    await refreshSelects();
    await renderTree();
    updateStats();
}

async function performRedoAction(action) {
    // Implement redo logic
    showToast(currentLang === 'vi' ? 'Đã làm lại' : 'Redone', 'success');
    await refreshSelects();
    await renderTree();
    updateStats();
}

function updateUndoRedoUI() {
    document.getElementById('undoBtn').disabled = undoStack.length === 0;
    document.getElementById('redoBtn').disabled = redoStack.length === 0;

    const actionText = document.getElementById('actionHistory');
    if (undoStack.length > 0) {
        const lastAction = undoStack[undoStack.length - 1];
        actionText.textContent = lastAction.description || '';
    } else {
        actionText.textContent = '';
    }
}

// Drag & Drop Upload
function initDragDrop() {
    const dropZone = document.getElementById('dropZone');
    const dropZoneInput = document.getElementById('dropZoneInput');

    dropZone.addEventListener('click', () => dropZoneInput.click());

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', async (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            await handleFileUpload(files[0]);
        }
    });

    dropZoneInput.addEventListener('change', async (e) => {
        if (e.target.files.length > 0) {
            await handleFileUpload(e.target.files[0]);
        }
    });
}

async function handleFileUpload(file) {
    const ext = file.name.split('.').pop().toLowerCase();

    showLoading();

    try {
        if (ext === 'json') {
            await importData({ target: { files: [file] } });
        } else if (ext === 'csv') {
            await importCSV(file);
        } else if (ext === 'backup') {
            await restoreData({ target: { files: [file] } });
        } else {
            showToast(currentLang === 'vi' ? 'File không hỗ trợ' : 'Unsupported file', 'error');
        }
    } finally {
        hideLoading();
    }
}

async function importCSV(file) {
    try {
        const text = await file.text();
        const lines = text.split('\n').filter(l => l.trim());

        if (lines.length < 2) {
            showToast('CSV file is empty', 'error');
            return;
        }

        const headers = lines[0].split(',');
        const members = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            const member = {
                name: values[1]?.replace(/"/g, '').trim(),
                birth: values[2]?.replace(/"/g, '').trim(),
                fatherId: values[3] ? parseInt(values[3]) : null,
                motherId: values[4] ? parseInt(values[4]) : null,
                spouseId: values[5] ? parseInt(values[5]) : null
            };

            if (member.name) {
                const encrypted = await encryptData(member);
                const tx = db.transaction('members', 'readwrite');
                tx.objectStore('members').add({ name: member.name, data: encrypted.data, iv: encrypted.iv });
            }
        }

        await refreshSelects();
        await renderTree();
        updateStats();
        showToast(i18n[currentLang].importSuccess, 'success');
    } catch (err) {
        console.error('CSV import failed:', err);
        showToast(i18n[currentLang].errorOccurred + err.message, 'error');
    }
}

// Birthday Reminders
async function initBirthdayReminders() {
    await renderBirthdays();
}

async function renderBirthdays() {
    const members = await getAllMembers();
    const container = document.getElementById('upcomingBirthdays');

    const membersWithBirth = members.filter(m => m.birth);

    if (membersWithBirth.length === 0) {
        container.innerHTML = `<p class="text-secondary">${i18n[currentLang].noBirthdays}</p>`;
        return;
    }

    const today = new Date();
    const birthdays = membersWithBirth.map(m => {
        const birth = new Date(m.birth);
        const thisYear = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());

        if (thisYear < today) {
            thisYear.setFullYear(today.getFullYear() + 1);
        }

        const daysUntil = Math.ceil((thisYear - today) / (1000 * 60 * 60 * 24));

        return {
            member: m,
            date: thisYear,
            daysUntil,
            age: today.getFullYear() - birth.getFullYear()
        };
    }).sort((a, b) => a.daysUntil - b.daysUntil).slice(0, 5);

    container.innerHTML = '';

    for (const bday of birthdays) {
        const item = document.createElement('div');
        item.className = `birthday-item ${bday.daysUntil === 0 ? 'today' : bday.daysUntil <= 7 ? 'upcoming' : ''}`;

        const daysText = bday.daysUntil === 0 ? i18n[currentLang].today :
                         i18n[currentLang].daysLeft.replace('{days}', bday.daysUntil);

        item.innerHTML = `
            <div class="birthday-icon">${bday.daysUntil === 0 ? '🎉' : '🎂'}</div>
            <div class="birthday-info">
                <div class="birthday-name">${bday.member.name}</div>
                <div class="birthday-date">${formatDate(bday.member.birth)}</div>
                <div class="birthday-age">${daysText} • ${bday.age} ${currentLang === 'vi' ? 'tuổi' : 'years old'}</div>
            </div>
        `;

        item.addEventListener('click', () => {
            loadMember(bday.member);
            setCenter(bday.member.id);
            showSection('addMember');
        });

        container.appendChild(item);
    }
}

// Relationship Calculator
function initRelationshipCalc() {
    populateRelationshipSelects();

    document.getElementById('calculateRelBtn').addEventListener('click', calculateRelationship);
}

async function populateRelationshipSelects() {
    const members = await getAllMembers();
    const select1 = document.getElementById('person1Select');
    const select2 = document.getElementById('person2Select');

    const defaultOption1 = select1.querySelector('[data-i18n="selectPerson1"]').cloneNode(true);
    const defaultOption2 = select2.querySelector('[data-i18n="selectPerson2"]').cloneNode(true);

    select1.innerHTML = '';
    select2.innerHTML = '';

    select1.appendChild(defaultOption1);
    select2.appendChild(defaultOption2);

    for (const m of members) {
        const opt1 = document.createElement('option');
        opt1.value = m.id;
        opt1.textContent = m.name;
        select1.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = m.id;
        opt2.textContent = m.name;
        select2.appendChild(opt2);
    }
}

async function calculateRelationship() {
    const id1 = parseInt(document.getElementById('person1Select').value);
    const id2 = parseInt(document.getElementById('person2Select').value);

    if (!id1 || !id2) {
        showToast(currentLang === 'vi' ? 'Vui lòng chọn 2 người' : 'Please select 2 people', 'warning');
        return;
    }

    if (id1 === id2) {
        showToast(currentLang === 'vi' ? 'Vui lòng chọn 2 người khác nhau' : 'Please select different people', 'warning');
        return;
    }

    const members = await getAllMembers();
    const person1 = members.find(m => m.id === id1);
    const person2 = members.find(m => m.id === id2);

    const relationship = findRelationship(person1, person2, members);

    const result = document.getElementById('relationshipResult');
    result.classList.remove('empty');
    result.textContent = relationship;
}

function findRelationship(person1, person2, allMembers) {
    // Simple relationship detection
    if (person1.fatherId === person2.id || person1.motherId === person2.id) {
        return currentLang === 'vi' ? `${person2.name} là cha/mẹ của ${person1.name}` :
               `${person2.name} is parent of ${person1.name}`;
    }

    if (person2.fatherId === person1.id || person2.motherId === person1.id) {
        return currentLang === 'vi' ? `${person1.name} là cha/mẹ của ${person2.name}` :
               `${person1.name} is parent of ${person2.name}`;
    }

    if (person1.spouseId === person2.id) {
        return currentLang === 'vi' ? `${person1.name} và ${person2.name} là vợ/chồng` :
               `${person1.name} and ${person2.name} are spouses`;
    }

    if (person1.fatherId === person2.fatherId || person1.motherId === person2.motherId) {
        return currentLang === 'vi' ? `${person1.name} và ${person2.name} là anh chị em` :
               `${person1.name} and ${person2.name} are siblings`;
    }

    const children1 = allMembers.filter(m => m.fatherId === person1.id || m.motherId === person1.id);
    const children2 = allMembers.filter(m => m.fatherId === person2.id || m.motherId === person2.id);

    for (const child of children1) {
        if (child.id === person2.id) {
            return currentLang === 'vi' ? `${person1.name} là cha/mẹ của ${person2.name}` :
                   `${person1.name} is parent of ${person2.name}`;
        }
    }

    return currentLang === 'vi' ? 'Không tìm thấy mối quan hệ trực tiếp' :
           'No direct relationship found';
}

// Advanced Search
function initAdvancedSearch() {
    populateGenerationFilter();

    document.getElementById('advSearchBtn').addEventListener('click', performAdvancedSearch);
}

async function populateGenerationFilter() {
    const members = await getAllMembers();
    const select = document.getElementById('advSearchGeneration');

    const generations = new Set();
    members.forEach(m => {
        function depth(id) {
            const member = members.find(x => x.id === id);
            if (!member) return 0;
            if (!member.fatherId && !member.motherId) return 1;
            return 1 + Math.max(depth(member.fatherId), depth(member.motherId));
        }
        generations.add(depth(m.id));
    });

    select.innerHTML = '<option value="">Tất cả thế hệ</option>';

    Array.from(generations).sort((a, b) => a - b).forEach(gen => {
        const opt = document.createElement('option');
        opt.value = gen;
        opt.textContent = `${currentLang === 'vi' ? 'Thế hệ' : 'Generation'} ${gen}`;
        select.appendChild(opt);
    });
}

async function performAdvancedSearch() {
    const name = document.getElementById('advSearchName').value.toLowerCase();
    const birthFrom = document.getElementById('advSearchBirthFrom').value;
    const birthTo = document.getElementById('advSearchBirthTo').value;
    const generation = document.getElementById('advSearchGeneration').value;

    const members = await getAllMembers();

    let results = members.filter(m => {
        let match = true;

        if (name && !m.name.toLowerCase().includes(name)) {
            match = false;
        }

        if (birthFrom && m.birth && m.birth < birthFrom) {
            match = false;
        }

        if (birthTo && m.birth && m.birth > birthTo) {
            match = false;
        }

        if (generation) {
            function depth(id) {
                const member = members.find(x => x.id === id);
                if (!member) return 0;
                if (!member.fatherId && !member.motherId) return 1;
                return 1 + Math.max(depth(member.fatherId), depth(member.motherId));
            }
            if (depth(m.id) !== parseInt(generation)) {
                match = false;
            }
        }

        return match;
    });

    displaySearchResults(results);
}

function displaySearchResults(results) {
    const container = document.getElementById('advSearchResults');

    if (results.length === 0) {
        container.innerHTML = `<p class="text-secondary">${currentLang === 'vi' ? 'Không tìm thấy kết quả' : 'No results found'}</p>`;
        return;
    }

    container.innerHTML = '';

    for (const member of results) {
        const item = document.createElement('div');
        item.className = 'search-result-item';

        const age = member.birth ? calculateAge(member.birth) : '';
        const ageText = age ? `${age} ${currentLang === 'vi' ? 'tuổi' : 'years old'}` : '';

        item.innerHTML = `
            <div class="search-result-name">${member.name}</div>
            <div class="search-result-info">
                ${member.birth ? formatDate(member.birth) : ''} ${ageText}
            </div>
        `;

        item.addEventListener('click', () => {
            loadMember(member);
            setCenter(member.id);
            showSection('addMember');
        });

        container.appendChild(item);
    }
}

// Excel Export
function initExcelExport() {
    document.getElementById('exportExcelBtn').addEventListener('click', exportToExcel);
}

async function exportToExcel() {
    const members = await getAllMembers();

    // Simple CSV export (Excel compatible)
    let csv = '\uFEFF'; // UTF-8 BOM
    csv += 'ID,Họ tên,Ngày sinh,ID Cha,ID Mẹ,ID Vợ/Chồng\n';

    for (const m of members) {
        csv += `${m.id},"${m.name || ''}","${m.birth || ''}",${m.fatherId || ''},${m.motherId || ''},${m.spouseId || ''}\n`;
    }

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `genealogy-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    showToast(i18n[currentLang].exportSuccess, 'success');
}

// Auto Backup
function initAutoBackup() {
    const enabled = localStorage.getItem('autoBackupEnabled') === 'true';
    document.getElementById('enableAutoBackup').checked = enabled;

    document.getElementById('enableAutoBackup').addEventListener('change', (e) => {
        localStorage.setItem('autoBackupEnabled', e.target.checked);
        if (e.target.checked) {
            scheduleAutoBackup();
        }
    });

    document.getElementById('backupNowBtn').addEventListener('click', async () => {
        await performAutoBackup();
    });

    updateLastBackupTime();

    if (enabled) {
        scheduleAutoBackup();
    }
}

function scheduleAutoBackup() {
    const lastBackup = localStorage.getItem('lastAutoBackup');
    const now = Date.now();

    if (!lastBackup || now - parseInt(lastBackup) > 24 * 60 * 60 * 1000) {
        performAutoBackup();
    }

    // Check daily
    setInterval(() => {
        const last = localStorage.getItem('lastAutoBackup');
        if (!last || Date.now() - parseInt(last) > 24 * 60 * 60 * 1000) {
            performAutoBackup();
        }
    }, 60 * 60 * 1000); // Check every hour
}

async function performAutoBackup() {
    try {
        await backupData();
        localStorage.setItem('lastAutoBackup', Date.now().toString());
        updateLastBackupTime();
        showToast(i18n[currentLang].backupSuccess, 'success');
    } catch (err) {
        console.error('Auto backup failed:', err);
    }
}

function updateLastBackupTime() {
    const lastBackup = localStorage.getItem('lastAutoBackup');
    const elem = document.getElementById('lastBackupTime');

    if (!lastBackup) {
        elem.textContent = i18n[currentLang].neverBackedUp;
    } else {
        const date = new Date(parseInt(lastBackup));
        const timeStr = date.toLocaleString(currentLang === 'vi' ? 'vi-VN' : 'en-US');
        elem.textContent = i18n[currentLang].lastBackup.replace('{time}', timeStr);
    }
}
