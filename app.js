/* ==========================================================================
   자란다 3학년 2반 학급 경제 교실 Main Logic (app.js)
   ========================================================================== */

// --- Default Initial State ---
const DEFAULT_STUDENTS = [
    { id: 1, number: 1, name: "김도하", balance: 1000, xp: 45, jobId: 1, jobDoneToday: false, missionDoneToday: false, streak: 5 },
    { id: 2, number: 2, name: "김우찬", balance: 1200, xp: 80, jobId: 2, jobDoneToday: true, missionDoneToday: true, streak: 7 },
    { id: 3, number: 3, name: "김이안", balance: 800, xp: 20, jobId: 3, jobDoneToday: false, missionDoneToday: false, streak: 2 },
    { id: 4, number: 4, name: "김정우", balance: 1500, xp: 120, jobId: 4, jobDoneToday: true, missionDoneToday: true, streak: 10 },
    { id: 5, number: 5, name: "김준희", balance: 950, xp: 35, jobId: 5, jobDoneToday: false, missionDoneToday: false, streak: 3 },
    { id: 6, number: 6, name: "박시원", balance: 1100, xp: 60, jobId: 6, jobDoneToday: true, missionDoneToday: false, streak: 4 },
    { id: 7, number: 7, name: "신시현", balance: 700, xp: 10, jobId: 7, jobDoneToday: false, missionDoneToday: false, streak: 1 },
    { id: 8, number: 8, name: "심윤우", balance: 1350, xp: 95, jobId: 1, jobDoneToday: true, missionDoneToday: true, streak: 8 },
    { id: 9, number: 9, name: "최라온", balance: 600, xp: 0, jobId: 2, jobDoneToday: false, missionDoneToday: false, streak: 0 },
    { id: 10, number: 10, name: "홍하늬", balance: 1400, xp: 110, jobId: 3, jobDoneToday: true, missionDoneToday: false, streak: 6 },
    { id: 11, number: 11, name: "강다윤", balance: 850, xp: 25, jobId: 4, jobDoneToday: false, missionDoneToday: false, streak: 2 },
    { id: 12, number: 12, name: "김은서", balance: 1050, xp: 50, jobId: 5, jobDoneToday: true, missionDoneToday: true, streak: 4 },
    { id: 13, number: 13, name: "노예린", balance: 900, xp: 30, jobId: 6, jobDoneToday: false, missionDoneToday: false, streak: 3 },
    { id: 14, number: 14, name: "박소민", balance: 1600, xp: 150, jobId: 7, jobDoneToday: true, missionDoneToday: true, streak: 12 },
    { id: 15, number: 15, name: "심윤서", balance: 750, xp: 15, jobId: 1, jobDoneToday: false, missionDoneToday: false, streak: 1 },
    { id: 16, number: 16, name: "안나엘", balance: 1150, xp: 70, jobId: 2, jobDoneToday: true, missionDoneToday: false, streak: 5 },
    { id: 17, number: 17, name: "유채은", balance: 980, xp: 40, jobId: 3, jobDoneToday: false, missionDoneToday: false, streak: 3 },
    { id: 18, number: 18, name: "이지후", balance: 1250, xp: 85, jobId: 4, jobDoneToday: true, missionDoneToday: true, streak: 7 },
    { id: 19, number: 19, name: "최지우", balance: 650, xp: 5, jobId: 5, jobDoneToday: false, missionDoneToday: false, streak: 0 },
    { id: 20, number: 20, name: "최지윤", balance: 1300, xp: 100, jobId: 6, jobDoneToday: true, missionDoneToday: true, streak: 9 },
    { id: 21, number: 21, name: "홍지은", balance: 880, xp: 20, jobId: 7, jobDoneToday: false, missionDoneToday: false, streak: 2 },
    { id: 22, number: 22, name: "황단아", balance: 1000, xp: 55, jobId: 1, jobDoneToday: true, missionDoneToday: false, streak: 4 }
];

const DEFAULT_JOBS = [
    { id: 1, name: "칠판 지우개 도우미", icon: "🧹", desc: "쉬는 시간마다 칠판을 깨끗하게 지우기", rewardMoney: 200, rewardXp: 20 },
    { id: 2, name: "우유 급식 도우미", icon: "🥛", desc: "아침 우유 상자 받아오고 정리하기", rewardMoney: 200, rewardXp: 20 },
    { id: 3, name: "에너지 불끄기 지킴이", icon: "💡", desc: "이동 수업 때 전등 및 TV 끄기", rewardMoney: 150, rewardXp: 15 },
    { id: 4, name: "멋진 줄반장", icon: "🎒", desc: "줄 설 때 바르게 서도록 신호주기", rewardMoney: 250, rewardXp: 25 },
    { id: 5, name: "급식 식판 정리 도우미", icon: "🍱", desc: "점심시간 잔반 및 식판 정리 돕기", rewardMoney: 200, rewardXp: 20 },
    { id: 6, name: "학급 도서관 지킴이", icon: "📚", desc: "우리 반 학급 문고 정리하기", rewardMoney: 150, rewardXp: 15 },
    { id: 7, name: "바른 청소 도우미", icon: "🧹", desc: "청소 시간 자기 구역 깨끗이 청소하기", rewardMoney: 200, rewardXp: 20 }
];

const DEFAULT_STORE_ITEMS = [
    { id: 1, name: "자리 우선 선택권", icon: "🎟️", desc: "다음 자리 바꾸기 때 원하는 자리를 먼저 선택해요!", price: 1000, stock: -1 },
    { id: 2, name: "급식 먼저 먹기권", icon: "🍱", desc: "점심시간에 가장 먼저 줄 서서 급식을 받아요.", price: 800, stock: -1 },
    { id: 3, name: "청소 1회 면제권", icon: "🧹", desc: "하루 동안 내가 담당한 청소를 1회 쉬어요.", price: 1500, stock: 5 },
    { id: 4, name: "자유시간 10분권", icon: "⏰", desc: "창의적 체험시간이나 쉬는시간에 10분 추가 자유시간!", price: 1200, stock: -1 },
    { id: 5, name: "귀여운 스티커 팩", icon: "🎨", desc: "선생님이 준비한 예쁜 동물 스티커 세트 1개", price: 500, stock: 10 }
];

const DEFAULT_MISSION = {
    title: "오늘 모둠 활동에서 친구에게 고마운 마음 표현하기!",
    desc: "칭찬이나 고맙다는 말을 친구에게 1번 이상 말하면 미션 완수!",
    rewardMoney: 300,
    rewardXp: 30
};

// --- App State Holder ---
let appState = {
    mode: 'teacher', // 'teacher' or 'student'
    currentStudentId: 1,
    students: [],
    jobs: [],
    storeItems: [],
    userCoupons: [], // { id, studentId, itemId, itemName, itemIcon, purchaseDate, used: false, pendingApproval: false }
    history: [], // { id, studentId, studentName, amount, xp, reason, date }
    mission: { ...DEFAULT_MISSION },
    selectedStudentIds: []
};

// --- Web Audio API Synth Effects ---
let audioCtx = null;
function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playCoinSound() {
    try {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') ctx.resume();

        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc2.type = 'triangle';

        osc1.frequency.setValueAtTime(987.77, ctx.currentTime); // B5
        osc1.frequency.setValueAtTime(1318.51, ctx.currentTime + 0.08); // E6

        osc2.frequency.setValueAtTime(1318.51, ctx.currentTime);
        osc2.frequency.setValueAtTime(1758.20, ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();
        osc1.stop(ctx.currentTime + 0.35);
        osc2.stop(ctx.currentTime + 0.35);
    } catch (e) { console.log("Audio not supported or blocked"); }
}

function playFanfareSound() {
    try {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') ctx.resume();

        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = freq;
            
            const startTime = ctx.currentTime + idx * 0.1;
            gain.gain.setValueAtTime(0.2, startTime);
            gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.25);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(startTime);
            osc.stop(startTime + 0.25);
        });
    } catch (e) { console.log("Audio fanfare error"); }
}

function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

// --- LocalStorage Logic ---
function loadState() {
    const saved = localStorage.getItem('class_mgmt_app_v1');
    if (saved) {
        try {
            appState = JSON.parse(saved);
        } catch (e) {
            initDefaultState();
        }
    } else {
        initDefaultState();
    }
}

function saveState() {
    localStorage.setItem('class_mgmt_app_v1', JSON.stringify(appState));
}

function initDefaultState() {
    appState = {
        mode: 'teacher',
        currentStudentId: 1,
        students: JSON.parse(JSON.stringify(DEFAULT_STUDENTS)),
        jobs: JSON.parse(JSON.stringify(DEFAULT_JOBS)),
        storeItems: JSON.parse(JSON.stringify(DEFAULT_STORE_ITEMS)),
        userCoupons: [],
        history: [],
        mission: { ...DEFAULT_MISSION },
        selectedStudentIds: []
    };
    saveState();
}

// --- Level & Title Helper ---
function calculateLevelInfo(xp) {
    const level = 1 + Math.floor(xp / 100);
    const currentLevelXp = xp % 100;
    const nextLevelXp = 100;

    let title = "🌱 1레벨 새싹";
    if (level === 2 || level === 3) title = "🌿 초보 탐험가";
    else if (level === 4 || level === 5) title = "🌲 멋진 든든이";
    else if (level >= 6 && level <= 9) title = "👑 학급 리더";
    else if (level >= 10) title = "🌟 슈퍼 히어로";

    return { level, currentLevelXp, nextLevelXp, title };
}

// --- Toast Notification ---
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    let icon = '<i class="fa-solid fa-circle-info"></i>';
    if (type === 'success') icon = '<i class="fa-solid fa-circle-check text-success"></i>';
    if (type === 'error') icon = '<i class="fa-solid fa-circle-xmark text-danger"></i>';

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- DOM Initialization & Render ---
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    setupEventListeners();
    renderApp();
});

function setupEventListeners() {
    // Mode Switching
    document.getElementById('toggle-mode-btn').addEventListener('click', toggleMode);
    document.getElementById('change-student-btn').addEventListener('click', openStudentPickerModal);

    // Tab Navigation
    document.querySelectorAll('.tab-navigation').forEach(tabNav => {
        tabNav.addEventListener('click', (e) => {
            const btn = e.target.closest('.tab-btn');
            if (!btn) return;

            const targetTab = btn.dataset.tab;
            tabNav.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const parentView = tabNav.closest('.view-section');
            parentView.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
            const activeContent = document.getElementById(targetTab);
            if (activeContent) activeContent.classList.add('active');
        });
    });

    // Teacher Student List Toolbar
    document.getElementById('select-all-btn').addEventListener('click', toggleSelectAllStudents);
    document.getElementById('batch-pay-btn').addEventListener('click', openBatchPayModal);
    document.getElementById('confirm-batch-pay-btn').addEventListener('click', handleBatchPayConfirm);

    // Quick Presets
    document.querySelectorAll('.btn-preset').forEach(btn => {
        btn.addEventListener('click', () => {
            const amount = parseInt(btn.dataset.amount, 10);
            const xp = parseInt(btn.dataset.xp, 10);
            if (appState.selectedStudentIds.length === 0) {
                showToast("지급할 학생을 먼저 체크박스로 선택하세요.", "error");
                return;
            }
            giveCurrencyToStudents(appState.selectedStudentIds, amount, xp, "선생님 빠른 칭찬 보상");
        });
    });

    // Job Management (Teacher)
    document.getElementById('add-job-btn').addEventListener('click', () => openJobModal());
    document.getElementById('save-job-btn').addEventListener('click', handleSaveJob);
    document.getElementById('auto-assign-jobs-btn').addEventListener('click', handleAutoAssignJobs);

    // Store Management (Teacher)
    document.getElementById('add-item-btn').addEventListener('click', () => openItemModal());
    document.getElementById('save-item-btn').addEventListener('click', handleSaveItem);

    // Mission Management (Teacher)
    document.getElementById('save-mission-btn').addEventListener('click', handleSaveMission);
    document.getElementById('reward-all-mission-btn').addEventListener('click', handleRewardAllMission);

    // Student Actions
    document.getElementById('complete-job-btn').addEventListener('click', handleCompleteStudentJob);
    document.getElementById('complete-mission-btn').addEventListener('click', handleCompleteStudentMission);

    // Settings & Excel
    document.getElementById('reset-data-btn').addEventListener('click', handleResetData);
    document.getElementById('download-sample-btn').addEventListener('click', downloadSampleExcel);

    // File Drop Zone for Excel
    const dropZone = document.getElementById('drop-zone');
    const excelInput = document.getElementById('excel-file-input');

    dropZone.addEventListener('click', () => excelInput.click());
    excelInput.addEventListener('change', (e) => handleExcelUpload(e.target.files[0]));

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--primary)';
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.style.borderColor = 'var(--secondary)';
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--secondary)';
        if (e.dataTransfer.files.length > 0) {
            handleExcelUpload(e.dataTransfer.files[0]);
        }
    });

    // Close Modals
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-overlay');
            if (modal) modal.classList.add('hidden');
        });
    });
}

// --- Render Central ---
function renderApp() {
    const teacherView = document.getElementById('teacher-view');
    const studentView = document.getElementById('student-view');
    const studentBanner = document.getElementById('student-banner');
    const modeBadge = document.getElementById('mode-badge');
    const modeLabel = document.getElementById('current-mode-label');
    const toggleModeText = document.getElementById('toggle-mode-text');

    if (appState.mode === 'teacher') {
        teacherView.classList.remove('hidden');
        studentView.classList.add('hidden');
        studentBanner.classList.add('hidden');

        modeBadge.className = "mode-badge teacher-mode";
        modeLabel.textContent = "교사 관리 모드";
        toggleModeText.textContent = "학생 모드로 전환";

        renderTeacherView();
    } else {
        teacherView.classList.add('hidden');
        studentView.classList.remove('hidden');
        studentBanner.classList.remove('hidden');

        modeBadge.className = "mode-badge student-mode";
        modeLabel.textContent = "학생 참여 모드";
        toggleModeText.textContent = "교사 모드로 전환";

        renderStudentBanner();
        renderStudentView();
    }
}

// --- Toggle Mode Logic ---
function toggleMode() {
    if (appState.mode === 'teacher') {
        appState.mode = 'student';
        openStudentPickerModal();
    } else {
        appState.mode = 'teacher';
        showToast("교사 관리자 모드로 전환되었습니다.");
    }
    saveState();
    renderApp();
}

function openStudentPickerModal() {
    const modal = document.getElementById('modal-select-student');
    const grid = document.getElementById('modal-student-picker-grid');
    grid.innerHTML = '';

    appState.students.forEach(st => {
        const btn = document.createElement('button');
        btn.className = `student-pick-btn ${st.id === appState.currentStudentId ? 'active' : ''}`;
        btn.innerHTML = `<strong>${st.number}번</strong><br>${st.name}`;
        btn.addEventListener('click', () => {
            appState.currentStudentId = st.id;
            modal.classList.add('hidden');
            saveState();
            renderApp();
            showToast(`${st.name} 학생 프로필로 선택되었습니다.`, 'success');
        });
        grid.appendChild(btn);
    });

    modal.classList.remove('hidden');
}

// --- Render Student Banner ---
function renderStudentBanner() {
    const student = appState.students.find(s => s.id === appState.currentStudentId);
    if (!student) return;

    const levelInfo = calculateLevelInfo(student.xp);

    document.getElementById('banner-number').textContent = `${student.number}번`;
    document.getElementById('banner-name').textContent = student.name;
    document.getElementById('banner-title').textContent = levelInfo.title;
    document.getElementById('banner-level').textContent = levelInfo.level;
    document.getElementById('banner-current-xp').textContent = levelInfo.currentLevelXp;
    document.getElementById('banner-next-xp').textContent = levelInfo.nextLevelXp;
    document.getElementById('banner-balance').textContent = student.balance.toLocaleString();

    const xpPercent = Math.min(100, Math.max(0, (levelInfo.currentLevelXp / levelInfo.nextLevelXp) * 100));
    document.getElementById('banner-xp-fill').style.width = `${xpPercent}%`;
}

// --- Render Teacher View ---
function renderTeacherView() {
    // Stats Summary
    const totalCurrency = appState.students.reduce((sum, s) => sum + s.balance, 0);
    document.getElementById('stat-total-currency').textContent = `${totalCurrency.toLocaleString()} 미소`;
    document.getElementById('stat-student-count').textContent = `${appState.students.length} 명`;

    const completedJobs = appState.students.filter(s => s.jobDoneToday).length;
    const jobCompletionPct = appState.students.length > 0 ? Math.round((completedJobs / appState.students.length) * 100) : 0;
    document.getElementById('stat-job-completion').textContent = `${jobCompletionPct} %`;

    const pendingCount = appState.userCoupons.filter(c => c.pendingApproval && !c.used).length;
    document.getElementById('stat-pending-coupons').textContent = `${pendingCount} 건`;

    // Tab 1: Students Grid
    renderStudentsGrid();

    // Tab 2: Jobs
    renderTeacherJobs();

    // Tab 3: Store & Approvals
    renderTeacherStore();

    // Tab 4: Missions
    renderTeacherMissions();
}

function renderStudentsGrid() {
    const grid = document.getElementById('students-grid');
    grid.innerHTML = '';

    appState.students.forEach(st => {
        const isSelected = appState.selectedStudentIds.includes(st.id);
        const job = appState.jobs.find(j => j.id === st.jobId);

        const card = document.createElement('div');
        card.className = `student-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
            <input type="checkbox" class="card-select-checkbox" ${isSelected ? 'checked' : ''} data-id="${st.id}">
            <div class="student-card-header">
                <div class="student-avatar">👦</div>
                <div class="student-meta">
                    <h4>${st.number}번 ${st.name}</h4>
                    <span class="student-job-badge">${job ? `${job.icon} ${job.name}` : '역할 미배정'}</span>
                </div>
            </div>
            <div class="student-stats-row">
                <span>💰 잔액: <strong>${st.balance.toLocaleString()}</strong> 미소</span>
                <span>⚡ XP: <strong>${st.xp}</strong></span>
            </div>
            <div class="card-quick-actions">
                <button class="btn btn-xs btn-outline btn-pay-one" data-id="${st.id}">+100 미소</button>
                <button class="btn btn-xs btn-outline btn-deduct-one" data-id="${st.id}">-50 미소</button>
            </div>
        `;

        // Checkbox toggle
        card.querySelector('.card-select-checkbox').addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id, 10);
            if (e.target.checked) {
                if (!appState.selectedStudentIds.includes(id)) appState.selectedStudentIds.push(id);
            } else {
                appState.selectedStudentIds = appState.selectedStudentIds.filter(i => i !== id);
            }
            updateBatchButtonState();
            card.classList.toggle('selected', e.target.checked);
        });

        // Quick Pay Single
        card.querySelector('.btn-pay-one').addEventListener('click', (e) => {
            e.stopPropagation();
            giveCurrencyToStudents([st.id], 100, 10, "선생님의 칭찬 보상");
        });

        card.querySelector('.btn-deduct-one').addEventListener('click', (e) => {
            e.stopPropagation();
            giveCurrencyToStudents([st.id], -50, 0, "선생님 벌금 차감");
        });

        grid.appendChild(card);
    });

    updateBatchButtonState();
}

function updateBatchButtonState() {
    const batchBtn = document.getElementById('batch-pay-btn');
    batchBtn.disabled = appState.selectedStudentIds.length === 0;
}

function toggleSelectAllStudents() {
    if (appState.selectedStudentIds.length === appState.students.length) {
        appState.selectedStudentIds = [];
    } else {
        appState.selectedStudentIds = appState.students.map(s => s.id);
    }
    renderStudentsGrid();
}

// Give Currency & XP Function
function giveCurrencyToStudents(studentIds, amount, xp, reason) {
    if (studentIds.length === 0) return;

    studentIds.forEach(id => {
        const student = appState.students.find(s => s.id === id);
        if (student) {
            student.balance = Math.max(0, student.balance + amount);
            student.xp = Math.max(0, student.xp + xp);

            appState.history.unshift({
                id: Date.now() + Math.random(),
                studentId: student.id,
                studentName: student.name,
                amount: amount,
                xp: xp,
                reason: reason,
                date: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
            });
        }
    });

    playCoinSound();
    if (amount > 0) triggerConfetti();

    saveState();
    renderApp();
    showToast(`${studentIds.length}명 학생에게 ${amount > 0 ? '+' : ''}${amount} 미소가 반영되었습니다.`, 'success');
}

// Batch Pay Modal logic
function openBatchPayModal() {
    document.getElementById('modal-selected-count').textContent = appState.selectedStudentIds.length;
    document.getElementById('modal-batch-pay').classList.remove('hidden');
}

function handleBatchPayConfirm() {
    const amount = parseInt(document.getElementById('pay-amount-input').value, 10) || 0;
    const xp = parseInt(document.getElementById('pay-xp-input').value, 10) || 0;
    const reason = document.getElementById('pay-reason-input').value.trim() || "선생님 보상/차감";

    giveCurrencyToStudents(appState.selectedStudentIds, amount, xp, reason);
    document.getElementById('modal-batch-pay').classList.add('hidden');
}

// --- Teacher Jobs Management ---
function renderTeacherJobs() {
    const list = document.getElementById('jobs-list');
    list.innerHTML = '';

    appState.jobs.forEach(job => {
        const div = document.createElement('div');
        div.className = 'job-item-card';
        div.innerHTML = `
            <div class="job-item-icon">${job.icon}</div>
            <div class="job-item-info">
                <div class="job-item-title">${job.name}</div>
                <div class="job-item-reward">+${job.rewardMoney} 미소 | +${job.rewardXp} XP</div>
                <div class="job-desc">${job.desc}</div>
            </div>
            <button class="btn btn-xs btn-outline btn-edit-job" data-id="${job.id}">수정</button>
        `;

        div.querySelector('.btn-edit-job').addEventListener('click', () => openJobModal(job));
        list.appendChild(div);
    });

    // Assignment Table
    const tbody = document.getElementById('job-assignment-tbody');
    tbody.innerHTML = '';

    appState.students.forEach(st => {
        const tr = document.createElement('tr');
        const currentJob = appState.jobs.find(j => j.id === st.jobId);

        let optionsHtml = `<option value="">-- 역할 선택 안됨 --</option>`;
        appState.jobs.forEach(j => {
            optionsHtml += `<option value="${j.id}" ${st.jobId === j.id ? 'selected' : ''}>${j.icon} ${j.name}</option>`;
        });

        tr.innerHTML = `
            <td>${st.number}번</td>
            <td><strong>${st.name}</strong></td>
            <td>
                <select class="form-input select-student-job" data-id="${st.id}">
                    ${optionsHtml}
                </select>
            </td>
            <td>${currentJob ? `+${currentJob.rewardMoney}미소` : '-'}</td>
            <td>${st.jobDoneToday ? '<span class="badge-category text-success">✓ 오늘 완료</span>' : '<span class="text-muted">미완료</span>'}</td>
            <td>
                <button class="btn btn-xs btn-success btn-force-job" data-id="${st.id}" ${st.jobDoneToday ? 'disabled' : ''}>완수 인정</button>
            </td>
        `;

        tr.querySelector('.select-student-job').addEventListener('change', (e) => {
            const jobId = parseInt(e.target.value, 10) || null;
            st.jobId = jobId;
            saveState();
            renderTeacherJobs();
            showToast(`${st.name} 학생의 역할이 변경되었습니다.`);
        });

        tr.querySelector('.btn-force-job').addEventListener('click', () => {
            st.jobDoneToday = true;
            if (currentJob) {
                st.balance += currentJob.rewardMoney;
                st.xp += currentJob.rewardXp;
            }
            saveState();
            renderApp();
            showToast(`${st.name} 학생의 1인 1역 완수를 승인하였습니다!`, 'success');
        });

        tbody.appendChild(tr);
    });
}

function openJobModal(job = null) {
    const modal = document.getElementById('modal-job-form');
    if (job) {
        document.getElementById('modal-job-title').textContent = "1인 1역 역할 수정";
        document.getElementById('job-edit-id').value = job.id;
        document.getElementById('job-name-input').value = job.name;
        document.getElementById('job-icon-input').value = job.icon;
        document.getElementById('job-desc-input').value = job.desc;
        document.getElementById('job-reward-money').value = job.rewardMoney;
        document.getElementById('job-reward-xp').value = job.rewardXp;
    } else {
        document.getElementById('modal-job-title').textContent = "새 1인 1역 역할 등록";
        document.getElementById('job-edit-id').value = "";
        document.getElementById('job-name-input').value = "";
        document.getElementById('job-icon-input').value = "🧹";
        document.getElementById('job-desc-input').value = "";
        document.getElementById('job-reward-money').value = 200;
        document.getElementById('job-reward-xp').value = 20;
    }
    modal.classList.remove('hidden');
}

function handleSaveJob() {
    const editId = document.getElementById('job-edit-id').value;
    const name = document.getElementById('job-name-input').value.trim();
    const icon = document.getElementById('job-icon-input').value.trim() || "🧹";
    const desc = document.getElementById('job-desc-input').value.trim();
    const rewardMoney = parseInt(document.getElementById('job-reward-money').value, 10) || 0;
    const rewardXp = parseInt(document.getElementById('job-reward-xp').value, 10) || 0;

    if (!name) {
        showToast("역할 이름을 입력해주세요.", "error");
        return;
    }

    if (editId) {
        const job = appState.jobs.find(j => j.id === parseInt(editId, 10));
        if (job) {
            job.name = name;
            job.icon = icon;
            job.desc = desc;
            job.rewardMoney = rewardMoney;
            job.rewardXp = rewardXp;
        }
    } else {
        const newJob = {
            id: Date.now(),
            name, icon, desc, rewardMoney, rewardXp
        };
        appState.jobs.push(newJob);
    }

    document.getElementById('modal-job-form').classList.add('hidden');
    saveState();
    renderApp();
    showToast("역할 정보가 저장되었습니다.", "success");
}

function handleAutoAssignJobs() {
    if (appState.jobs.length === 0) {
        showToast("등록된 역할이 없습니다.", "error");
        return;
    }

    appState.students.forEach((st, idx) => {
        const randomJob = appState.jobs[idx % appState.jobs.length];
        st.jobId = randomJob.id;
    });

    saveState();
    renderTeacherJobs();
    showToast("전체 학생에게 역할이 골고루 자동 배정되었습니다!", "success");
}

// --- Teacher Store Management ---
function renderTeacherStore() {
    // Pending approvals
    const pendingList = document.getElementById('pending-coupons-list');
    pendingList.innerHTML = '';

    const pendingItems = appState.userCoupons.filter(c => c.pendingApproval && !c.used);
    if (pendingItems.length === 0) {
        pendingList.innerHTML = `<p class="text-muted" style="padding:10px;">현재 승인 대기 중인 쿠폰이 없습니다.</p>`;
    } else {
        pendingItems.forEach(coupon => {
            const student = appState.students.find(s => s.id === coupon.studentId);
            const div = document.createElement('div');
            div.className = 'pending-coupon-item';
            div.innerHTML = `
                <div>
                    <strong>${student ? student.name : '학생'}</strong>: ${coupon.itemIcon} ${coupon.itemName} 사용 요청
                    <br><small class="text-muted">신청 시간: ${coupon.purchaseDate}</small>
                </div>
                <button class="btn btn-xs btn-primary btn-approve-coupon" data-id="${coupon.id}">승인 & 사용 처리</button>
            `;

            div.querySelector('.btn-approve-coupon').addEventListener('click', () => {
                coupon.used = true;
                coupon.pendingApproval = false;
                saveState();
                renderTeacherStore();
                showToast("쿠폰 사용이 승인 처리되었습니다.", "success");
            });

            pendingList.appendChild(div);
        });
    }

    // Items Inventory Grid
    const storeGrid = document.getElementById('teacher-store-items');
    storeGrid.innerHTML = '';

    appState.storeItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'store-item-card';
        div.innerHTML = `
            <div class="item-icon-box">${item.icon}</div>
            <div class="item-name">${item.name}</div>
            <div class="item-desc">${item.desc}</div>
            <div class="item-footer">
                <span class="item-price">${item.price.toLocaleString()} 미소</span>
                <button class="btn btn-xs btn-outline btn-edit-item" data-id="${item.id}">수정</button>
            </div>
        `;

        div.querySelector('.btn-edit-item').addEventListener('click', () => openItemModal(item));
        storeGrid.appendChild(div);
    });
}

function openItemModal(item = null) {
    const modal = document.getElementById('modal-item-form');
    if (item) {
        document.getElementById('modal-item-title').textContent = "상품/쿠폰 수정";
        document.getElementById('item-edit-id').value = item.id;
        document.getElementById('item-name-input').value = item.name;
        document.getElementById('item-icon-input').value = item.icon;
        document.getElementById('item-desc-input').value = item.desc;
        document.getElementById('item-price-input').value = item.price;
        document.getElementById('item-stock-input').value = item.stock;
    } else {
        document.getElementById('modal-item-title').textContent = "새 상품/쿠폰 등록";
        document.getElementById('item-edit-id').value = "";
        document.getElementById('item-name-input').value = "";
        document.getElementById('item-icon-input').value = "🎟️";
        document.getElementById('item-desc-input').value = "";
        document.getElementById('item-price-input').value = 500;
        document.getElementById('item-stock-input').value = -1;
    }
    modal.classList.remove('hidden');
}

function handleSaveItem() {
    const editId = document.getElementById('item-edit-id').value;
    const name = document.getElementById('item-name-input').value.trim();
    const icon = document.getElementById('item-icon-input').value.trim() || "🎟️";
    const desc = document.getElementById('item-desc-input').value.trim();
    const price = parseInt(document.getElementById('item-price-input').value, 10) || 0;
    const stock = parseInt(document.getElementById('item-stock-input').value, 10) || -1;

    if (!name) {
        showToast("상품 이름을 입력하세요.", "error");
        return;
    }

    if (editId) {
        const item = appState.storeItems.find(i => i.id === parseInt(editId, 10));
        if (item) {
            item.name = name;
            item.icon = icon;
            item.desc = desc;
            item.price = price;
            item.stock = stock;
        }
    } else {
        appState.storeItems.push({
            id: Date.now(),
            name, icon, desc, price, stock
        });
    }

    document.getElementById('modal-item-form').classList.add('hidden');
    saveState();
    renderApp();
    showToast("상점 상품이 저장되었습니다.", "success");
}

// --- Teacher Mission Management ---
function renderTeacherMissions() {
    document.getElementById('mission-title-input').value = appState.mission.title;
    document.getElementById('mission-desc-input').value = appState.mission.desc;
    document.getElementById('mission-reward-money').value = appState.mission.rewardMoney;
    document.getElementById('mission-reward-xp').value = appState.mission.rewardXp;

    const list = document.getElementById('mission-students-list');
    list.innerHTML = '';

    appState.students.forEach(st => {
        const label = document.createElement('label');
        label.style.display = 'inline-flex';
        label.style.alignItems = 'center';
        label.style.gap = '8px';
        label.style.margin = '8px';
        label.style.padding = '8px 12px';
        label.style.background = st.missionDoneToday ? '#E6FAF5' : '#F8FAFC';
        label.style.borderRadius = '8px';
        label.style.border = '1px solid var(--border-color)';

        label.innerHTML = `
            <input type="checkbox" ${st.missionDoneToday ? 'checked' : ''} data-id="${st.id}">
            <span>${st.number}번 ${st.name}</span>
        `;

        label.querySelector('input').addEventListener('change', (e) => {
            st.missionDoneToday = e.target.checked;
            saveState();
            renderTeacherMissions();
        });

        list.appendChild(label);
    });
}

function handleSaveMission() {
    appState.mission.title = document.getElementById('mission-title-input').value.trim();
    appState.mission.desc = document.getElementById('mission-desc-input').value.trim();
    appState.mission.rewardMoney = parseInt(document.getElementById('mission-reward-money').value, 10) || 0;
    appState.mission.rewardXp = parseInt(document.getElementById('mission-reward-xp').value, 10) || 0;

    saveState();
    renderApp();
    showToast("오늘의 학급 미션이 성공적으로 게시되었습니다!", "success");
}

function handleRewardAllMission() {
    const doneStudents = appState.students.filter(s => s.missionDoneToday);
    if (doneStudents.length === 0) {
        showToast("미션을 완료한 학생이 없습니다.", "error");
        return;
    }

    doneStudents.forEach(st => {
        st.balance += appState.mission.rewardMoney;
        st.xp += appState.mission.rewardXp;
    });

    playFanfareSound();
    triggerConfetti();
    saveState();
    renderApp();
    showToast(`미션 완료 학생 ${doneStudents.length}명에게 일괄 보상이 지급되었습니다!`, "success");
}

// --- Render Student View ---
function renderStudentView() {
    const student = appState.students.find(s => s.id === appState.currentStudentId);
    if (!student) return;

    // 1. Tasks Tab
    const currentJob = appState.jobs.find(j => j.id === student.jobId);
    const jobBtn = document.getElementById('complete-job-btn');
    const jobBtnText = document.getElementById('complete-job-text');

    if (currentJob) {
        document.getElementById('student-job-icon').textContent = currentJob.icon;
        document.getElementById('student-job-name').textContent = currentJob.name;
        document.getElementById('student-job-desc').textContent = currentJob.desc;
        document.getElementById('student-job-reward').textContent = `+${currentJob.rewardMoney} 미소 | +${currentJob.rewardXp} XP`;
    } else {
        document.getElementById('student-job-icon').textContent = '❓';
        document.getElementById('student-job-name').textContent = '배정된 역할 없음';
        document.getElementById('student-job-desc').textContent = '선생님이 학급 역할을 배정해주실 때까지 기다려주세요!';
        document.getElementById('student-job-reward').textContent = `0 미소`;
    }

    if (student.jobDoneToday) {
        jobBtn.classList.add('done');
        jobBtn.disabled = true;
        jobBtnText.textContent = "✓ 오늘 완수 완료!";
    } else {
        jobBtn.classList.remove('done');
        jobBtn.disabled = !currentJob;
        jobBtnText.textContent = "오늘 역할 수행 완료하기!";
    }

    // Mission Task Card
    document.getElementById('student-mission-title').textContent = appState.mission.title;
    document.getElementById('student-mission-desc').textContent = appState.mission.desc;
    document.getElementById('student-mission-reward').textContent = `+${appState.mission.rewardMoney} 미소 | +${appState.mission.rewardXp} XP`;

    const missionBtn = document.getElementById('complete-mission-btn');
    const missionBtnText = document.getElementById('complete-mission-text');

    if (student.missionDoneToday) {
        missionBtn.classList.add('done');
        missionBtn.disabled = true;
        missionBtnText.textContent = "✓ 오늘 미션 완료!";
    } else {
        missionBtn.classList.remove('done');
        missionBtn.disabled = false;
        missionBtnText.textContent = "미션 완수 인증하기";
    }

    // Recent History
    const historyList = document.getElementById('student-history-list');
    historyList.innerHTML = '';
    const myHistory = appState.history.filter(h => h.studentId === student.id).slice(0, 5);

    if (myHistory.length === 0) {
        historyList.innerHTML = `<p class="text-muted" style="padding:10px;">아직 기록된 활동 내역이 없습니다.</p>`;
    } else {
        myHistory.forEach(h => {
            const div = document.createElement('div');
            div.className = 'history-item';
            div.innerHTML = `
                <span>${h.reason}</span>
                <span class="${h.amount >= 0 ? 'history-positive' : 'history-negative'}">
                    ${h.amount >= 0 ? '+' : ''}${h.amount} 미소 (+${h.xp} XP)
                </span>
            `;
            historyList.appendChild(div);
        });
    }

    // 2. Student Store Catalog Tab
    renderStudentStoreCatalog(student);

    // 3. Student Coupons Tab
    renderStudentCoupons(student);

    // 4. Hall of Fame Tab
    renderHallOfFame();
}

function handleCompleteStudentJob() {
    const student = appState.students.find(s => s.id === appState.currentStudentId);
    if (!student || student.jobDoneToday) return;

    const job = appState.jobs.find(j => j.id === student.jobId);
    if (!job) return;

    student.jobDoneToday = true;
    student.balance += job.rewardMoney;
    student.xp += job.rewardXp;
    student.streak = (student.streak || 0) + 1;

    appState.history.unshift({
        id: Date.now(),
        studentId: student.id,
        studentName: student.name,
        amount: job.rewardMoney,
        xp: job.rewardXp,
        reason: `1인 1역 (${job.name}) 완료`,
        date: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    });

    playCoinSound();
    triggerConfetti();
    saveState();
    renderApp();
    showToast(`축하합니다! ${job.rewardMoney} 미소와 ${job.rewardXp} XP를 획득했어요!`, "success");
}

function handleCompleteStudentMission() {
    const student = appState.students.find(s => s.id === appState.currentStudentId);
    if (!student || student.missionDoneToday) return;

    student.missionDoneToday = true;
    student.balance += appState.mission.rewardMoney;
    student.xp += appState.mission.rewardXp;

    appState.history.unshift({
        id: Date.now(),
        studentId: student.id,
        studentName: student.name,
        amount: appState.mission.rewardMoney,
        xp: appState.mission.rewardXp,
        reason: `오늘의 학급 미션 완수`,
        date: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    });

    playFanfareSound();
    triggerConfetti();
    saveState();
    renderApp();
    showToast(`오늘의 미션 달성! ${appState.mission.rewardMoney} 미소 획득!`, "success");
}

function renderStudentStoreCatalog(student) {
    const grid = document.getElementById('student-store-grid');
    grid.innerHTML = '';

    appState.storeItems.forEach(item => {
        const canAfford = student.balance >= item.price;
        const div = document.createElement('div');
        div.className = 'store-item-card';
        div.innerHTML = `
            <div class="item-icon-box">${item.icon}</div>
            <div class="item-name">${item.name}</div>
            <div class="item-desc">${item.desc}</div>
            <div class="item-footer">
                <span class="item-price">${item.price.toLocaleString()} 미소</span>
                <button class="btn btn-sm ${canAfford ? 'btn-primary' : 'btn-secondary'} btn-buy-item" data-id="${item.id}" ${canAfford ? '' : 'disabled'}>
                    ${canAfford ? '구매하기' : '잔액 부족'}
                </button>
            </div>
        `;

        div.querySelector('.btn-buy-item').addEventListener('click', () => {
            if (!canAfford) return;

            student.balance -= item.price;
            appState.userCoupons.unshift({
                id: Date.now(),
                studentId: student.id,
                itemId: item.id,
                itemName: item.name,
                itemIcon: item.icon,
                purchaseDate: new Date().toLocaleDateString('ko-KR'),
                used: false,
                pendingApproval: false
            });

            appState.history.unshift({
                id: Date.now(),
                studentId: student.id,
                studentName: student.name,
                amount: -item.price,
                xp: 0,
                reason: `상점 쿠폰 구매 (${item.name})`,
                date: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
            });

            playCoinSound();
            triggerConfetti();
            saveState();
            renderApp();
            showToast(`${item.name} 구매를 완료했습니다! 내 쿠폰함에서 확인하세요.`, 'success');
        });

        grid.appendChild(div);
    });
}

function renderStudentCoupons(student) {
    const grid = document.getElementById('student-coupons-grid');
    grid.innerHTML = '';

    const myCoupons = appState.userCoupons.filter(c => c.studentId === student.id);
    if (myCoupons.length === 0) {
        grid.innerHTML = `<p class="text-muted" style="grid-column: 1/-1; padding: 20px; text-align: center;">보유 중인 쿠폰이 없습니다. 학급 상점에서 쿠폰을 구입해 보세요!</p>`;
        return;
    }

    myCoupons.forEach(coupon => {
        const div = document.createElement('div');
        div.className = `coupon-card ${coupon.used ? 'used' : ''}`;
        div.innerHTML = `
            <div class="item-icon-box">${coupon.itemIcon}</div>
            <h4 style="text-align:center; font-size:18px; margin-bottom:6px;">${coupon.itemName}</h4>
            <p class="text-muted" style="text-align:center; font-size:12px; margin-bottom:14px;">구입일: ${coupon.purchaseDate}</p>
            <div>
                ${coupon.used ? 
                    '<button class="btn btn-sm btn-secondary" style="width:100%;" disabled>사용 완료</button>' : 
                    coupon.pendingApproval ? 
                    '<button class="btn btn-sm btn-outline" style="width:100%;" disabled>선생님 승인 대기 중...</button>' : 
                    '<button class="btn btn-sm btn-success btn-use-coupon" style="width:100%;" data-id="' + coupon.id + '">선생님께 사용 요청하기</button>'
                }
            </div>
        `;

        const useBtn = div.querySelector('.btn-use-coupon');
        if (useBtn) {
            useBtn.addEventListener('click', () => {
                coupon.pendingApproval = true;
                saveState();
                renderStudentCoupons(student);
                showToast("선생님께 쿠폰 사용 요청을 보냈습니다!", "info");
            });
        }

        grid.appendChild(div);
    });
}

// --- Hall of Fame ---
function renderHallOfFame() {
    // Top XP
    const topLevel = [...appState.students].sort((a, b) => b.xp - a.xp).slice(0, 3);
    renderLeaderboardList('level-top3-list', topLevel, s => `${s.xp} XP (Lv.${calculateLevelInfo(s.xp).level})`);

    // Top Wealth
    const topWealth = [...appState.students].sort((a, b) => b.balance - a.balance).slice(0, 3);
    renderLeaderboardList('wealth-top3-list', topWealth, s => `${s.balance.toLocaleString()} 미소`);

    // Top Diligence
    const topDiligence = [...appState.students].sort((a, b) => (b.streak || 0) - (a.streak || 0)).slice(0, 3);
    renderLeaderboardList('diligence-top3-list', topDiligence, s => `${s.streak || 0}일 연속`);
}

function renderLeaderboardList(containerId, listData, valueFormatter) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const medals = ['🥇', '🥈', '🥉'];
    listData.forEach((st, idx) => {
        const div = document.createElement('div');
        div.className = `rank-item rank-${idx + 1}`;
        div.innerHTML = `
            <div class="rank-badge">${medals[idx]}</div>
            <div class="rank-name">${st.number}번 ${st.name}</div>
            <div class="rank-value">${valueFormatter(st)}</div>
        `;
        container.appendChild(div);
    });
}

// --- Excel File Parser (SheetJS or CSV fallback) ---
function handleExcelUpload(file) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = new Uint8Array(e.target.result);
            let parsedStudents = [];

            if (typeof XLSX !== 'undefined') {
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                json.forEach((row, index) => {
                    if (index === 0 && (isNaN(row[0]) || row[0] === "번호")) return; // skip header
                    if (row.length >= 2) {
                        const num = parseInt(row[0], 10);
                        const name = String(row[1]).trim();
                        if (!isNaN(num) && name) {
                            parsedStudents.push({
                                id: Date.now() + index,
                                number: num,
                                name: name,
                                balance: 1000,
                                xp: 0,
                                jobId: null,
                                jobDoneToday: false,
                                missionDoneToday: false,
                                streak: 0
                            });
                        }
                    }
                });
            }

            if (parsedStudents.length > 0) {
                appState.students = parsedStudents;
                saveState();
                renderApp();
                showToast(`엑셀 파일에서 ${parsedStudents.length}명의 학생 명단을 불러왔습니다!`, "success");
            } else {
                showToast("엑셀 파일에서 올바른 학생 데이터(번호, 이름)를 찾지 못했습니다.", "error");
            }
        } catch (err) {
            console.error(err);
            showToast("엑셀 파일을 읽는 도중 오류가 발생했습니다.", "error");
        }
    };
    reader.readAsArrayBuffer(file);
}

function downloadSampleExcel() {
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    csvContent += "번호,이름\n";
    DEFAULT_STUDENTS.forEach(s => {
        csvContent += `${s.number},${s.name}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "자란다_3학년1반_학생명단_샘플.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
}

function handleResetData() {
    if (confirm("정말로 학급 데이터를 초기 상태(기본 가상 학생 22명)로 복원하시겠습니까?")) {
        initDefaultState();
        renderApp();
        showToast("학급 데이터가 초기화되었습니다.", "info");
    }
}
