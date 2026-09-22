// Data Daftar Mata Pelajaran dengan Ikon SVG Modern
const subjects = [
    { 
        id: 'agama', 
        name: 'AGAMA', 
        icon: `<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M12 6v6"/><path d="M9 9h6"/></svg>`, 
        desc: 'Pendidikan Agama & Budi Pekerti', 
        available: true 
    },
    { 
        id: 'appk', 
        name: 'APPK', 
        icon: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`, 
        desc: 'Aplikasi Pengolah Kata & Data', 
        available: true
    },
    { 
        id: 'indo', 
        name: 'INDO (Bahasa Indonesia)', 
        icon: `<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`, 
        desc: 'Teks Argumentasi, Poster, & Teks Berita', 
        available: true 
    },
    { 
        id: 'inggris', 
        name: 'BING (Bahasa Inggris)', 
        icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`, 
        desc: 'English Literacy & Grammar', 
        available: true 
    },
    { 
        id: 'bjawa', 
        name: 'B JAWA', 
        icon: `<svg viewBox="0 0 24 24"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 12h8"/></svg>`, 
        desc: 'Basa lan Sastra Jawa', 
        available: false 
    },
    { 
        id: 'bk', 
        name: 'BK', 
        icon: `<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`, 
        desc: 'Bimbingan Konseling', 
        available: false 
    },
    { 
        id: 'digma', 
        name: 'DIGMA', 
        icon: `<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`, 
        desc: 'Pemasaran & Media Digital', 
        available: true 
    },
    { 
        id: 'kkppl', 
        name: 'KKPPL', 
        icon: `<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`, 
        desc: 'Keterampilan Komputer & Pemrograman', 
        available: true 
    },
    { 
        id: 'mtk', 
        name: 'MTK (Matematika)', 
        icon: `<svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`, 
        desc: 'Logika, Aljabar & Geometri', 
        available: false 
    },
    { 
        id: 'opkom', 
        name: 'OPKOM', 
        icon: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`, 
        desc: 'Operasi & Sistem Komputer', 
        available: false 
    },
    { 
        id: 'pjok', 
        name: 'PJOK', 
        icon: `<svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`, 
        desc: 'Pendidikan Jasmani & Kesehatan', 
        available: true
    },
    { 
        id: 'pkk', 
        name: 'PKK', 
        icon: `<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`, 
        desc: 'Prakarya & Kewirausahaan', 
        available: true 
    },
    { 
        id: 'pkkpro', 
        name: 'PKKPRO', 
        icon: `<svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.1-1.35 1.5-2.02l-2.48-2.48c-.67.4-1.31.79-2.02 1.5z"/><path d="M15 8s-4 1.5-7 5l3 3c3.5-3 5-7 5-7z"/><path d="M12 5l7 7"/><path d="M15 2l7 7"/></svg>`, 
        desc: 'Produk Kreatif & Kewirausahaan Pro', 
        available: false 
    },
    { 
        id: 'pancasila', 
        name: 'PANCASILA', 
        icon: `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, 
        desc: 'Pendidikan Pancasila & Kewarganegaraan', 
        available: true
    },
    { 
        id: 'pvs', 
        name: 'PVS', 
        icon: `<svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`, 
        desc: 'Produksi Audio Visual', 
        available: false 
    },
    { 
        id: 'pwb', 
        name: 'PWB', 
        icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`, 
        desc: 'Pemrograman Web & Perangkat Bergerak', 
        available: false 
    },
    { 
        id: 'sejarah', 
        name: 'SEJARAH', 
        icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`, 
        desc: 'Sejarah Nasional & Dunia', 
        available: false 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. KELOLA TEMA GELAP / TERANG
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeToggleIcon = document.getElementById('themeToggleIcon');
    const themeToggleText = document.getElementById('themeToggleText');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            if (themeToggleIcon) themeToggleIcon.textContent = '🌙';
            if (themeToggleText) themeToggleText.textContent = 'Mode Siang';
        } else {
            if (themeToggleIcon) themeToggleIcon.textContent = '☀️';
            if (themeToggleText) themeToggleText.textContent = 'Mode Malam';
        }
    }

    // 2. SORTING OTOMATIS: Mapel aktif (available: true) dipindah ke atas
    const sortedSubjects = [...subjects].sort((a, b) => b.available - a.available);

    // 3. RENDER DAFTAR MATA PELAJARAN
    const container = document.getElementById('subjectGrid');
    if (container) {
        sortedSubjects.forEach(subject => {
            const card = document.createElement('a');
            card.className = `card-subject scroll-reveal ${subject.available ? '' : 'disabled'}`;
            card.href = subject.available ? `${subject.id}.html` : '#';

            if (subject.available) {
                card.innerHTML = `
                    <div class="subject-icon">${subject.icon}</div>
                    <div>
                        <h3 class="subject-title">${subject.name}</h3>
                        <p class="subject-description">${subject.desc}</p>
                    </div>
                    <div class="subject-meta">
                        <span class="soal-count">50 SOAL</span>
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
    }

    // 4. LOGIKA PENCARIAN (SEARCH FILTER)
    const searchInput = document.getElementById('searchInput');
    if (searchInput && container) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            const cards = container.querySelectorAll('.card-subject');
            cards.forEach(card => {
                const title = card.querySelector('.subject-title')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('.subject-description')?.textContent.toLowerCase() || '';
                if (title.includes(keyword) || desc.includes(keyword)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // 5. ENGINE SCROLL REVEAL (INTERSECTION OBSERVER)
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
