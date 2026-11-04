/* ─────────────────────────────────────────────
   music-player.js – Fon Müziği Sistemi (Er Turan / DLT)
   Akıllı Tahta, Mobil ve Baştan Başlatma Uyumlu
─────────────────────────────────────────────── */
(function () {
  'use strict';

  const AUDIO_SRC = 'assets/er-turan.mp3';

  // Ses nesnesi oluştur
  const bgAudio = new Audio(AUDIO_SRC);
  bgAudio.loop = true;
  bgAudio.volume = 0.35; // Dengeli ses seviyesi

  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('bgm-container')) return;

    // Kapsayıcı (Sol alt köşe)
    const container = document.createElement('div');
    container.id = 'bgm-container';

    // Ana Oynat/Durdur Butonu
    const playBtn = document.createElement('button');
    playBtn.id = 'bgm-toggle-btn';
    playBtn.setAttribute('aria-label', 'Müziği Aç / Kapat');
    playBtn.title = 'Er Turan - Fon Müziği (Çalmak için dokunun)';
    playBtn.innerHTML = `
      <span class="bgm-icon">🎵</span>
      <span class="bgm-text">Müzik Çal</span>
      <span class="bgm-waves"><span></span><span></span><span></span></span>
    `;

    // Baştan Başlat Butonu (⏮️)
    const restartBtn = document.createElement('button');
    restartBtn.id = 'bgm-restart-btn';
    restartBtn.setAttribute('aria-label', 'Müziği Baştan Başlat');
    restartBtn.title = 'Müziği en baştan başlat';
    restartBtn.innerHTML = `⏮️`;

    container.appendChild(playBtn);
    container.appendChild(restartBtn);

    // Stil Tanımları
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
      #bgm-toggle-btn .bgm-icon {
        font-size: 1.05rem;
        line-height: 1;
      }
      #bgm-toggle-btn.playing .bgm-icon {
        animation: bgm-pulse 1.6s infinite ease-in-out;
      }
      .bgm-waves {
        display: none;
        align-items: center;
        gap: 2px;
        height: 12px;
      }
      #bgm-toggle-btn.playing .bgm-waves {
        display: inline-flex;
      }
      .bgm-waves span {
        display: block;
        width: 3px;
        height: 100%;
        background-color: #55e6a5;
        border-radius: 2px;
        animation: bgm-equalizer 0.8s infinite ease-in-out alternate;
      }
      .bgm-waves span:nth-child(2) { animation-delay: 0.2s; height: 70%; }
      .bgm-waves span:nth-child(3) { animation-delay: 0.4s; height: 85%; }
      @keyframes bgm-equalizer {
        0% { height: 20%; }
        100% { height: 100%; }
      }
      @keyframes bgm-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2) rotate(8deg); }
      }

      /* 📱 Telefon / Küçük Ekranlar */
      @media (max-width: 768px) {
        #bgm-container {
          bottom: 14px;
          left: 14px;
          gap: 5px;
        }
        #bgm-toggle-btn {
          padding: 8px 12px;
          font-size: 0.76rem;
        }
        #bgm-restart-btn {
          width: 32px;
          height: 32px;
          font-size: 0.75rem;
        }
      }

      /* 📺 Akıllı Tahta (Geniş Ekran) Modu */
      @media (min-width: 1400px) {
        #bgm-toggle-btn {
          padding: 12px 20px;
          font-size: 1rem;
        }
        #bgm-restart-btn {
          width: 44px;
          height: 44px;
          font-size: 1.1rem;
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(container);

    // Oynat / Durdur Tıklama
    playBtn.addEventListener('click', () => {
      if (bgAudio.paused) {
        bgAudio.play().then(() => {
          playBtn.classList.add('playing');
          playBtn.querySelector('.bgm-text').textContent = 'Er Turan (Çalıyor)';
          playBtn.title = 'Müziği Durdur';
        }).catch(err => {
          console.warn('Oynatma engellendi:', err);
          alert('Müzik dosyası henüz assets/ klasöründe bulunamadı. Lütfen "er-turan.mp3" dosyasını kontrol edin.');
        });
      } else {
        bgAudio.pause();
        playBtn.classList.remove('playing');
        playBtn.querySelector('.bgm-text').textContent = 'Müzik Çal';
        playBtn.title = 'Er Turan - Fon Müziği';
      }
    });

    // Baştan Başlat Tıklama (⏮️)
    restartBtn.addEventListener('click', () => {
      bgAudio.currentTime = 0;
      if (bgAudio.paused) {
        bgAudio.play().then(() => {
          playBtn.classList.add('playing');
          playBtn.querySelector('.bgm-text').textContent = 'Er Turan (Çalıyor)';
        }).catch(() => {});
      }
    });

    // Sayfa geçişlerinde çalmaya devam etme kontrolü
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('bgm_currentTime', bgAudio.currentTime);
      sessionStorage.setItem('bgm_isPlaying', (!bgAudio.paused).toString());
    });

    const wasPlaying = sessionStorage.getItem('bgm_isPlaying') === 'true';
    const savedTime = parseFloat(sessionStorage.getItem('bgm_currentTime') || '0');
    if (wasPlaying) {
      bgAudio.currentTime = savedTime;
      const resumeHandler = () => {
        bgAudio.play().then(() => {
          playBtn.classList.add('playing');
          playBtn.querySelector('.bgm-text').textContent = 'Er Turan (Çalıyor)';
        }).catch(() => {});
        document.removeEventListener('click', resumeHandler);
      };
      document.addEventListener('click', resumeHandler);
    }
  });
})();