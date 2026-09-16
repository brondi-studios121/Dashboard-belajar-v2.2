// Data Daftar Mata Pelajaran
// Jika materi sudah siap, cukup ganti 'available: false' menjadi 'available: true'
const subjects = [
    { id: 'agama', name: 'AGAMA', icon: '📖', desc: 'Pendidikan Agama & Budi Pekerti', available:false },
    { id: 'appk', name: 'APPK', icon: '💻', desc: 'Aplikasi Pengolah Kata & Data', available: false },
    { id: 'bind', name: 'BIND (Bahasa Indonesia)', icon: '🇮🇩', desc: 'Bahasa & Sastra Indonesia', available: false },
    { id: 'bing', name: 'BING (Bahasa Inggris)', icon: '🇬🇧', desc: 'English Literacy & Grammar', available: false },
    { id: 'bjawa', name: 'B JAWA', icon: '📜', desc: 'Basa lan Sastra Jawa', available: false },
    { id: 'bk', name: 'BK', icon: '💬', desc: 'Bimbingan Konseling', available: false },
    { id: 'digma', name: 'DIGMA', icon: '📱', desc: 'Pemasaran & Media Digital', available: false },
    { id: 'kkppl', name: 'KKPPL', icon: '⚙️', desc: 'Keterampilan Komputer & Pemrograman', available: false },
    { id: 'mtk', name: 'MTK (Matematika)', icon: '📐', desc: 'Logika, Aljabar & Geometri', available: false },
    { id: 'opkom', name: 'OPKOM', icon: '🖥️', desc: 'Operasi & Sistem Komputer', available: false },
    { id: 'pjok', name: 'PJOK', icon: '⚽', desc: 'Pendidikan Jasmani & Kesehatan', available: false },
    { id: 'pkk', name: 'PKK', icon: '💼', desc: 'Prakarya & Kewirausahaan', available: false },
    { id: 'pkkpro', name: 'PKKPRO', icon: '🏗️', desc: 'Produk Kreatif & Kewirausahaan Pro', available: false },
    { id: 'ppkn', name: 'PPKN', icon: '🏛️', desc: 'Pendidikan Pancasila & Kewarganegaraan', available: false },
    { id: 'pvs', name: 'PVS', icon: '🎥', desc: 'Produksi Audio Visual', available: false },
    { id: 'pwb', name: 'PWB', icon: '🌐', desc: 'Pemrograman Web & Perangkat Bergerak', available: false },
    { id: 'sejarah', name: 'SEJARAH', icon: '⏳', desc: 'Sejarah Nasional & Dunia', available: false }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. KELOLA TEMA GELAP / TERANG
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeToggleIcon = document.getElementById('themeToggleIcon');
    const themeToggleText = document.getElementById('themeToggleText');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            themeToggleIcon.textContent = '☀️';
            themeToggleText.textContent = 'Mode Siang';
        } else {
            themeToggleIcon.textContent = '🌙';
            themeToggleText.textContent = 'Mode Malam';
        }
    }

    // 2. RENDER DAFTAR MATA PELAJARAN
    const container = document.getElementById('subjectGrid');

    subjects.forEach(subject => {
        const card = document.createElement('a');
        card.className = `card-subject scroll-reveal ${subject.available ? '' : 'disabled'}`;
        card.href = subject.available ? `quiz.html?subject=${subject.id}` : '#';

        if (subject.available) {
            card.innerHTML = `
                <div class="subject-icon">${subject.icon}</div>
                <div>
                    <h3 class="subject-title">${subject.name}</h3>
                    <p class="subject-description">${subject.desc}</p>
                </div>
                <div class="subject-meta">
                    <span class="soal-count">20 SOAL</span>
                    <span class="mulai-btn-text">Mulai Tryout →</span>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div class="subject-icon">${subject.icon}</div>
                <div>
                    <h3 class="subject-title">${subject.name}</h3>
                    <p class="subject-description">${subject.desc}</p>
                </div>
                <div class="subject-meta">
                    <span class="badge-coming-soon">Segera Hadir</span>
                    <span class="soal-count" style="opacity: 0.4;">0 SOAL</span>
                </div>
            `;
        }

        container.appendChild(card);
    });

    // 3. ENGINE SCROLL REVEAL (INTERSECTION OBSERVER)
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('reveal-active');
                }, index * 50);
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.05,
        rootMargin: "0px 0px -10px 0px"
    });

    reveals.forEach(el => revealObserver.observe(el));
});
