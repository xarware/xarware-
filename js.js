setTimeout(function() {
    document.body.classList.toggle("y");
    document.getElementById("system").style.display = "grid";
}, 5000);
window.addEventListener('scroll', function () {
    document.body.classList.toggle('k', window.scrollY > 0);
});
function dar() {
    const btn = document.getElementById('dark');
    document.body.classList.toggle('dk');

    const isDark = document.body.classList.contains('dk');
    btn.innerHTML = isDark
    ? '<i class="fas fa-moon"></i>': '<i class="fas fa-sun"></i>';
}
function ho() {
    const btn = document.getElementById('hok');
    document.body.classList.toggle('mp');

    const isDark = document.body.classList.contains('mp');
    btn.innerHTML = isDark
    ? '<i class="fas fa-close"></i>': '<i class="fas fa-bars"></i>';
}

function d() {
    const pa = document.getElementById('pk');
    const tr = getComputedStyle(pa).transform;
    if (tr.includes('25')) {
        pa.style.transform = 'translateX(0)';
        pa.style.transition = '0.3s';
        pa.innerHTML = '<p>en<p/>';
    } else {
        pa.style.transform = 'translateX(25px)';
        pa.style.transition = '0.3s';
        pa.innerHTML = '<p>id<p/>';
    }
    isID = !isID;
    applyTranslations();
}

let translations = {};
let isID = false;
fetch('asset/sub.json')
.then(res => res.json())
.then(data => {
    translations = data;
    applyTranslations(); // Set bahasa awal
});
function applyTranslations() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        el.textContent = translations[key]?.[isID ? 'io': 'en'] || `[${key}]`;
    });
}
const text = "saya seorang programer";
const el = document.getElementById("typing");
let i = 0;
function type() {
    if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 80); // kecepatan ketik
    }
}
type();
document.addEventListener("DOMContentLoaded", function() {
    const fills = document.querySelectorAll('.progress-fill');
    fills.forEach(fill => {
        const target = parseInt(fill.getAttribute('data-target'));
        let percent = 0;
        const interval = setInterval(() => {
            if (percent >= target) {
                clearInterval(interval);
            } else {
                percent++;
                fill.style.width = percent + '%';
                fill.textContent = percent + '%';
            }
        },
            15);
    });
});
function toggleReadMore() {
    const content = document.getElementById("moreContent");
    const button = document.getElementById("readMoreBtn");
    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Hide";
    } else {
        content.style.display = "none";
        button.textContent = "View Details";
    }
}
