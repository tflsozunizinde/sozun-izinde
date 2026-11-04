/* ─────────────────────────────────────────────
   music-player.js – Fon Müziği Sistemi (Er Turan)
─────────────────────────────────────────────── */
(function () {
  'use strict';

  const AUDIO_SRC = 'assets/er-turan.mp3';

  // Ses nesnesi oluştur
  const bgAudio = new Audio(AUDIO_SRC);
  bgAudio.loop = true;
  bgAudio.volume = 0.35; // Dengeli ses seviyesi

  // Sayfa yüklendiğinde buton ekle
  document.addEventListener('DOMContentLoaded', () => {
    // Varsa eskiyi temizle
    if (document.getElementById('bgm-toggle-btn')) return;

    // Buton öğesi
    const btn = document.createElement('button');
    btn.id = 'bgm-toggle-btn';
    btn.setAttribute('aria-label', 'Müziği Aç / Kapat');
    btn.title = 'Er Turan - Fon Müziği (Çalmak için tıklayın)';
    btn.innerHTML = `
      <span class="bgm-icon">🎵</span>
      <span class="bgm-text">Müzik Çal</span>
      <span class="bgm-waves"><span></span><span></span><span></span></span>
    `;

    // Stil ekle - SOL ALT KÖŞE (Netlify rozetiyle çakışmaz, telefonda tam oturur)
    const style = document.createElement('style');
    style.textContent = `
      #bgm-toggle-btn {
        position: fixed;
        bottom: 22px;
        left: 22px;
        z-index: 999999;
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
        user-select: none;
      }
      #bgm-toggle-btn:hover {
        transform: translateY(-2px) scale(1.03);
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
        transition: transform 0.3s ease;
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

      /* 📱 Telefon ve Tablet Ekranları İçin İdeal Boyut */
      @media (max-width: 768px) {
        #bgm-toggle-btn {
          bottom: 14px;
          left: 14px;
          padding: 8px 12px;
          font-size: 0.76rem;
          gap: 6px;
        }
        #bgm-toggle-btn .bgm-icon {
          font-size: 0.95rem;
        }
      }
      @media (max-width: 480px) {
        #bgm-toggle-btn {
          bottom: 10px;
          left: 10px;
          padding: 7px 11px;
          font-size: 0.72rem;
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(btn);

    // Tıklama olayı
    btn.addEventListener('click', () => {
      if (bgAudio.paused) {
        bgAudio.play().then(() => {
          btn.classList.add('playing');
          btn.querySelector('.bgm-text').textContent = 'Er Turan (Çalıyor)';
          btn.title = 'Müziği Durdur';
        }).catch(err => {
          console.warn('Otomatik oynatma engellendi veya dosya bulunamadı:', err);
          alert('Müzik dosyası henüz assets/ klasöründe bulunamadı. Lütfen "er-turan.mp3" dosyasını eklediğinizden emin olun.');
        });
      } else {
        bgAudio.pause();
        btn.classList.remove('playing');
        btn.querySelector('.bgm-text').textContent = 'Müziği Çal';
        btn.title = 'Er Turan - Fon Müziği';
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
          btn.classList.add('playing');
          btn.querySelector('.bgm-text').textContent = 'Er Turan (Çalıyor)';
        }).catch(() => {});
        document.removeEventListener('click', resumeHandler);
      };
      document.addEventListener('click', resumeHandler);
    }
  });
})();