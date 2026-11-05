/* ─────────────────────────────────────────────
   music-player.js – Fon Müziği, Başa Sarma & 
   Üst Menüden Tek Tıkla Uygulama İndirme Sistemi
─────────────────────────────────────────────── */
(function () {
  'use strict';

  const AUDIO_SRC = 'assets/er-turan.mp3';
  let deferredPrompt = null;

  // Google Chrome PWA Yükleme Yakalayıcı
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const topInstallBtn = document.getElementById('nav-install-pwa-btn');
    if (topInstallBtn) topInstallBtn.style.display = 'inline-flex';
  });

  const bgAudio = new Audio(AUDIO_SRC);
  bgAudio.loop = true;
  bgAudio.volume = 0.35;

  document.addEventListener('DOMContentLoaded', () => {
    // 1. ÜST MENÜYE "UYGULAMAYI İNDİR" BUTONU EKLE
    const navLinks = document.querySelector('.nav-links') || document.querySelector('nav ul');
    if (navLinks && !document.getElementById('nav-install-pwa-btn')) {
      const li = document.createElement('li');
      li.style.listStyle = 'none';
      li.innerHTML = `
        <button id="nav-install-pwa-btn" style="
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #c9a84c 0%, #8a6d2b 100%);
          color: #120a02;
          font-weight: 700;
          font-size: 0.82rem;
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid #ffd700;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(201,168,76,0.3);
          transition: all 0.3s ease;
          margin-left: 8px;
        ">
          <span>📥</span> <span>Siteyi İndir</span>
        </button>
      `;
      navLinks.appendChild(li);

      const pwaBtn = li.querySelector('#nav-install-pwa-btn');
      pwaBtn.addEventListener('click', () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('Kullanıcı uygulamayı yükledi');
            }
            deferredPrompt = null;
          });
        } else {
          // Desteklemeyen veya doğrudan dosya isteyenler için ZIP indirme uyarısı
          const repoUrl = 'https://github.com/soner-sozun-izinde/sozun-izinde/archive/refs/heads/main.zip';
          const inidirilsinMi = confirm('Dilimizin Zenginlikleri platformunu internetsiz ve akıllı tahtada çevrimdışı çalıştırmak için bilgisayarınıza indirmek ister misiniz?');
          if (inidirilsinMi) {
            window.location.href = repoUrl;
          }
        }
      });
    }

    // 2. SOL ALTTAKİ MÜZİK ÇALAR & BAŞA SARMA SİSTEMİ
    if (document.getElementById('bgm-container')) return;

    const container = document.createElement('div');
    container.id = 'bgm-container';

    // Müzik Çal/Durdur Butonu
    const playBtn = document.createElement('button');
    playBtn.id = 'bgm-toggle-btn';
    playBtn.setAttribute('aria-label', 'Fon Müziği Aç/Kapat');
    playBtn.title = 'Er Turan - Fon Müziği';
    playBtn.innerHTML = `
      <span class="bgm-icon">🎵</span>
      <span class="bgm-text">Müzik Çal</span>
      <span class="bgm-waves"><span></span><span></span><span></span></span>
    `;

    // Baştan Başlat Butonu (⏮️)
    const restartBtn = document.createElement('button');
    restartBtn.id = 'bgm-restart-btn';
    restartBtn.setAttribute('aria-label', 'Müziği Baştan Başlat');
    restartBtn.title = 'Müziği başa sar';
    restartBtn.innerHTML = `⏮️`;

    container.appendChild(playBtn);
    container.appendChild(restartBtn);

    const style = document.createElement('style');
    style.textContent = `
      #bgm-container {
        position: fixed;
        bottom: 22px;
        left: 22px;
        z-index: 999999;
        display: flex;
        align-items: center;
        gap: 6px;
        user-select: none;
      }
      #bgm-toggle-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        background: linear-gradient(135deg, rgba(20, 16, 10, 0.94) 0%, rgba(35, 26, 15, 0.96) 100%);
        border: 1.5px solid #c9a84c;
        color: #e8d8b0;
        padding: 9px 15px;
        border-radius: 30px;
        font-family: inherit;
        font-size: 0.85rem;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6), 0 0 14px rgba(201, 168, 76, 0.4);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        touch-action: manipulation;
      }
      #bgm-restart-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background: linear-gradient(135deg, rgba(20, 16, 10, 0.94) 0%, rgba(35, 26, 15, 0.96) 100%);
        border: 1.5px solid #c9a84c;
        color: #e8d8b0;
        border-radius: 50%;
        font-size: 0.85rem;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        transition: all 0.25s ease;
        touch-action: manipulation;
      }
      #bgm-toggle-btn:hover, #bgm-restart-btn:hover {
        transform: translateY(-2px) scale(1.04);
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.7), 0 0 18px rgba(201, 168, 76, 0.6);
        border-color: #ffd700;
        color: #fff;
      }
      #bgm-toggle-btn.playing {
        border-color: #55e6a5;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6), 0 0 16px rgba(85, 230, 165, 0.4);
      }
      .bgm-waves { display: none; align-items: center; gap: 2px; height: 12px; }
      #bgm-toggle-btn.playing .bgm-waves { display: inline-flex; }
      .bgm-waves span {
        display: block; width: 3px; height: 100%;
        background-color: #55e6a5; border-radius: 2px;
        animation: bgm-equalizer 0.8s infinite ease-in-out alternate;
      }
      .bgm-waves span:nth-child(2) { animation-delay: 0.2s; height: 70%; }
      .bgm-waves span:nth-child(3) { animation-delay: 0.4s; height: 85%; }
      @keyframes bgm-equalizer { 0% { height: 20%; } 100% { height: 100%; } }
      @keyframes bgm-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2) rotate(8deg); } }

      /* Mobil */
      @media (max-width: 768px) {
        #bgm-container { bottom: 12px; left: 12px; gap: 4px; }
        #bgm-toggle-btn { padding: 7px 11px; font-size: 0.74rem; }
        #bgm-restart-btn { width: 32px; height: 32px; font-size: 0.75rem; }
      }
      /* Akıllı Tahta */
      @media (min-width: 1400px) {
        #bgm-toggle-btn { padding: 11px 18px; font-size: 0.95rem; }
        #bgm-restart-btn { width: 42px; height: 42px; font-size: 1.05rem; }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(container);

    // Müzik Tıklama
    playBtn.addEventListener('click', () => {
      if (bgAudio.paused) {
        bgAudio.play().then(() => {
          playBtn.classList.add('playing');
          playBtn.querySelector('.bgm-text').textContent = 'Er Turan (Çalıyor)';
        }).catch(() => {});
      } else {
        bgAudio.pause();
        playBtn.classList.remove('playing');
        playBtn.querySelector('.bgm-text').textContent = 'Müzik Çal';
      }
    });

    // Başa Sar
    restartBtn.addEventListener('click', () => {
      bgAudio.currentTime = 0;
      if (bgAudio.paused) {
        bgAudio.play().then(() => {
          playBtn.classList.add('playing');
          playBtn.querySelector('.bgm-text').textContent = 'Er Turan (Çalıyor)';
        }).catch(() => {});
      }
    });
  });
})();