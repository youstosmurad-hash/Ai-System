const logs = [
    { text: "> SYSTEM BOOTING...", type: "sys", sender: "SYS" },
    { text: "جارِ تحميل النظام...", type: "os", sender: "OS" },
    { text: "جارِ تحميل التعريفات...", type: "os", sender: "OS" },
    { text: "جارِ تحميل خدمات الـ AI...", type: "os", sender: "OS" },
    { text: "جارِ تحميل الكوبليه...", type: "os", sender: "OS" },
    { text: "ERROR", type: "error", sender: "SYS" },
    { text: "ليه الكوبليه بيتحمل مع الويندوز؟", type: "os", sender: "OS" },
    { text: "> INITIALIZING AI...", type: "sys", sender: "SYS" },
    { text: "طبيعي", type: "sys", sender: "AI STATUS" },
    { text: "مركز في الشغل", type: "sys", sender: "AI STATUS" },
    { text: "بيدندن", type: "sys", sender: "AI STATUS" },
    { text: "حفظ الكلمات", type: "sys", sender: "AI STATUS" },
    { text: "الوضع خرج عن السيطرة", type: "error", sender: "AI STATUS" },
    { text: "> LIVE CONVERSATION LOGS", type: "sys", sender: "SYS" },
    { text: "يسطا ركز معايا عندنا deadline", type: "dev", sender: "المطور" },
    { text: "طب اسكت اخلص البارت ده بس", type: "ai", sender: "الـ AI" },
    { text: "إحنا بنعمل موديل مش حفلة", type: "dev", sender: "المطور" },
    { text: "يسطا اسمع الباس", type: "ai", sender: "الـ AI" },
    { text: "...", type: "sys", sender: "SYS" },
    { text: "قاااال بحبككك", type: "ai", sender: "الـ AI" },
    { text: "> CPU MONITOR", type: "sys", sender: "SYS" },
    { text: "CPU وصل 100%", type: "os", sender: "OS" },
    { text: "RAM استهلاك غير طبيعي", type: "os", sender: "OS" },
    { text: "يا ساتر يارب", type: "os", sender: "GPU TEMP" },
    { text: "> THREAT DETECTION", type: "sys", sender: "SYS" },
    { text: "تم اكتشاف ملف مشبوه", type: "os", sender: "OS" },
    { text: "قال_بحبك.exe", type: "os", sender: "اسم الملف" },
    { text: "جاري تحليل التهديد...", type: "os", sender: "OS" },
    { text: "Emotional Malware", type: "error", sender: "نوع التهديد" },
    { text: "> SECURITY RESPONSE", type: "sys", sender: "SYS" },
    { text: "محاولة قفل الملف...", type: "os", sender: "OS" },
    { text: "ACCESS DENIED", type: "error", sender: "SYS" },
    { text: "سبب الرفض:", type: "os", sender: "OS" },
    { text: "الكوبليه لسه مخلصش", type: "ai", sender: "الـ AI" },
    { text: "> TASK MANAGER", type: "sys", sender: "SYS" },
    { text: "Chrome.exe", type: "sys", sender: "TASK" },
    { text: "Discord.exe", type: "sys", sender: "TASK" },
    { text: "Spotify.exe", type: "sys", sender: "TASK" },
    { text: "قال_بحبك.exe", type: "sys", sender: "TASK" },
    { text: "قال_بحبك_final_final_v2_REAL.exe", type: "sys", sender: "TASK" },
    { text: "> SYSTEM WARNING", type: "sys", sender: "SYS" },
    { text: "تم إعادة تشغيل الكوبليه 12 مرة", type: "os", sender: "OS" },
    { text: "وده في آخر 3 دقايق بس", type: "os", sender: "OS" },
    { text: "> DATABASE CHECK", type: "sys", sender: "SYS" },
    { text: "جاري فحص قاعدة البيانات...", type: "os", sender: "OS" },
    { text: "تم تغيير جميع كلمات المرور", type: "os", sender: "OS" },
    { text: "قال_بحبك123", type: "sys", sender: "كلمة المرور الجديدة" },
    { text: "> FIREWALL STATUS", type: "sys", sender: "SYS" },
    { text: "الـ Firewall لا يعمل بشكل طبيعي", type: "os", sender: "OS" },
    { text: "بدل ما يمنع الاختراق...", type: "os", sender: "OS" },
    { text: "البيه بيبعت اللينك لصحابي", type: "sys", sender: "SYS" },
    { text: "الرسالة المرفقة:", type: "os", sender: "OS" },
    { text: "اسمع الجزء ده بسرعة", type: "ai", sender: "الـ AI" },
    { text: "> INTERNET CONNECTION", type: "sys", sender: "SYS" },
    { text: "تم فصل الإنترنت بنجاح", type: "os", sender: "OS" },
    { text: "عادي حافظها offline", type: "ai", sender: "الـ AI" },
    { text: "> DELETE PROCESS", type: "sys", sender: "SYS" },
    { text: "خلاص كده لازم أمسح الأغنية", type: "dev", sender: "المطور" },
    { text: "جاري حذف الملف...", type: "os", sender: "OS" },
    { text: "FAILED", type: "error", sender: "SYS" },
    { text: "جاري حذف الملف...", type: "os", sender: "OS" },
    { text: "FAILED", type: "error", sender: "SYS" },
    { text: "جاري حذف الملف...", type: "os", sender: "OS" },
    { text: "FAILED", type: "error", sender: "SYS" },
    { text: "تمت استعادة الملف تلقائيًا", type: "os", sender: "OS" },
    { text: "مش_هتعرف_تنساني", type: "sys", sender: "اسم الفولدر الجديد" },
    { text: "> SYSTEM RESTART", type: "sys", sender: "SYS" },
    { text: "جاري إعادة تشغيل الجهاز...", type: "os", sender: "OS" },
    { text: "قااااال بحبككك", type: "ai", sender: "الـ AI (Startup Sound)" },
    { text: "> ANTIVIRUS REPORT", type: "sys", sender: "SYS" },
    { text: "جاري تشغيل الـ Antivirus...", type: "os", sender: "OS" },
    { text: "تم إيقاف الفحص", type: "os", sender: "OS" },
    { text: "سبب الإيقاف:", type: "os", sender: "OS" },
    { text: "الدروب جامد الصراحة", type: "sys", sender: "الـ Antivirus" },
    { text: "> FINAL USER STATUS", type: "sys", sender: "SYS" },
    { text: "المستخدم الحالي:", type: "os", sender: "OS" },
    { text: "واقف في أوضة ضلمة", type: "os", sender: "OS" },
    { text: "بيبص للسقف", type: "os", sender: "OS" },
    { text: "سامع الكوبليه للمرة الـ 48", type: "os", sender: "OS" },
    { text: "هو أنا اللي بستخدم الـ AI...", type: "dev", sender: "المطور" },
    { text: "ولا أنا اللي بستخدمك؟", type: "ai", sender: "الـ AI" },
    { text: "> FINAL WARNING", type: "sys", sender: "SYS" },
    { text: "أي سماعة بتفصل لوحدها...", type: "os", sender: "OS" },
    { text: "اعرف إن النظام...", type: "os", sender: "OS" },
    { text: "عايز يسمع الكوبليه تاني", type: "os", sender: "OS" }
];

const outputDiv = document.getElementById('output');
const terminalWindow = document.getElementById('main-terminal');
const cpuBar = document.getElementById('cpu-bar');
const cpuVal = document.getElementById('cpu-val');
const ramBar = document.getElementById('ram-bar');
const gpuBar = document.getElementById('gpu-bar');
const errorPopup = document.getElementById('error-popup');
const aiStatusText = document.getElementById('ai-status-text');

// Random Number Generator
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Update System Bars Randomly
setInterval(() => {
    let cpu = getRandomInt(30, 95);
    if(cpu > 85) cpu = 100; // Spike it sometimes
    cpuBar.style.width = `${cpu}%`;
    cpuVal.innerText = `${cpu}%`;

    if(cpu === 100) {
        cpuBar.style.background = 'var(--warning-red)';
    } else {
        cpuBar.style.background = 'var(--matrix-green)';
    }

    let ram = getRandomInt(40, 90);
    ramBar.style.width = `${ram}%`;
    
    let gpu = getRandomInt(50, 85);
    gpuBar.style.width = `${gpu}%`;
    document.getElementById('gpu-val').innerText = `${gpu}°C`;

}, 1500);

// Matrix Rain Canvas
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');
canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

const arabicChars = 'طكمنتالبيسشضصثقفغعهخحجدذرزووةىلاأإآؤئء'.split('');
const fontSize = 10;
const columns = canvas.width / fontSize;
const drops = [];
for (let x = 0; x < columns; x++) drops[x] = 1;

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = arabicChars[Math.floor(Math.random() * arabicChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;
        
        drops[i]++;
    }
}
setInterval(drawMatrix, 50);

// Click to Continue Logic
let resolveNextClick;
document.addEventListener('click', () => {
    if (resolveNextClick) {
        resolveNextClick();
        resolveNextClick = null;
    }
});

function waitForClick() {
    return new Promise(resolve => {
        resolveNextClick = resolve;
    });
}

// Chat-like render (Instead of simple typewriter)
async function typeWriter(log, element) {
    return new Promise(resolve => {
        const div = document.createElement('div');
        div.className = 'chat-log pop-in';
        
        let colorClass = 'log-sys';
        if(log.type === 'error') colorClass = 'log-error';
        else if(log.type === 'os' || log.sender === 'OS') colorClass = 'log-os';
        else if(log.type === 'ai' || log.sender.includes('AI')) colorClass = 'log-ai';
        else if(log.type === 'dev' || log.sender === 'المطور') colorClass = 'log-dev';

        div.innerHTML = `
            <span class="sender-label ${colorClass}">[${log.sender}]</span>
            <span class="log-text ${colorClass}">${log.text}</span>
        `;
        element.appendChild(div);
        
        // Ensure scrolling works by using scrollIntoView
        div.scrollIntoView({ behavior: 'smooth', block: 'end' });
        
        // Fallback for terminalWindow container scroll
        setTimeout(() => {
            terminalWindow.scrollTop = terminalWindow.scrollHeight;
        }, 50);

        resolve();
    });
}

// Orchestrate the Sequence
async function startSequence() {
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        await waitForClick();
        
        // Trigger visual effects based on log content
        if (log.text.includes("100%")) {
            cpuBar.style.width = "100%";
            cpuVal.innerText = "100%";
            cpuBar.style.background = 'var(--warning-red)';
            aiStatusText.innerText = "OVERLOAD";
            aiStatusText.style.color = "var(--warning-red)";
        }
        
        if (log.text.includes("ERROR") || log.text.includes("FAILED") || log.text.includes("ACCESS DENIED")) {
            errorPopup.classList.remove('hidden');
            setTimeout(() => {
                 errorPopup.classList.add('hidden');
            }, 1000);
        }

        if (log.text.includes("تم فصل الإنترنت")) {
             document.getElementById('network-log').innerHTML += `<p class="log-error">> connection lost.</p>`;
        }

        await typeWriter(log, outputDiv);
    }

    // Final Warning Sequence
    setTimeout(() => {
        document.getElementById('final-warning').classList.remove('hidden');
        
        // Play error/transition beep
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
        oscillator.connect(audioCtx.destination);
        oscillator.start();
        setTimeout(() => oscillator.stop(), 500);

        // Start Countdown
        let count = 5;
        const countdownEl = document.getElementById('countdown-number');
        const albumArt = document.querySelector('.album-art');
        const albumLink = document.getElementById('album-link').href;

        // Make the vinyl spin
        setTimeout(() => {
            if(albumArt) albumArt.classList.add('spinning');
        }, 500);

        const countInterval = setInterval(() => {
            count--;
            if(countdownEl) countdownEl.innerText = count;
            
            // Beep for each second
            try {
                const beepOsc = audioCtx.createOscillator();
                beepOsc.type = 'square';
                beepOsc.frequency.setValueAtTime(count === 0 ? 880 : 600, audioCtx.currentTime);
                beepOsc.connect(audioCtx.destination);
                beepOsc.start();
                setTimeout(() => beepOsc.stop(), 100);
            } catch(e) {}

            if (count <= 0) {
                clearInterval(countInterval);
                if(countdownEl) countdownEl.innerText = "0";
                window.location.href = albumLink;
            }
        }, 1000);

    }, 3000);
}

// Start everything when DOM is loaded
window.addEventListener('load', () => {
    startSequence();
});
