/* ─────────────────────────────────────────────
   music-player.js – Fon Müziği Sistemi (Er Turan)
─────────────────────────────────────────────── */
(function () {
  'use strict';

  const AUDIO_SRC = 'assets/er-turan.mp3';

  // Ses nesnesi oluştur
  const bgAudio = new Audio(AUDIO_SRC);
  bgAudio.loop = true;
  bgAudio.volume = 0.4; // %40 dengeli ses seviyesi

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

    // Stil ekle
    const style = document.createElement('style');
    style.textContent = `
      #bgm-toggle-btn {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 8px;
        background: linear-gradient(135deg, rgba(20, 16, 10, 0.92) 0%, rgba(35, 26, 15, 0.95) 100%);
        border: 1.5px solid #c9a84c;
        color: #e8d8b0;
        padding: 10px 16px;
        border-radius: 30px;
        font-family: inherit;
        font-size: 0.85rem;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 12px rgba(201, 168, 76, 0.35);
        backdrop-filter: blur(8px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        user-select: none;
      }
      #bgm-toggle-btn:hover {
        transform: translateY(-2px) scale(1.03);
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.6), 0 0 18px rgba(201, 168, 76, 0.6);
        border-color: #ffd700;
        color: #fff;
      }
      #bgm-toggle-btn.playing {
        border-color: #55e6a5;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 16px rgba(85, 230, 165, 0.4);
      }
      #bgm-toggle-btn .bgm-icon {
        font-size: 1.1rem;
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
      @media (max-width: 600px) {
        #bgm-toggle-btn {
          bottom: 16px;
          right: 16px;
          padding: 8px 12px;
          font-size: 0.78rem;
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

    // Sayfada ilk etkileşimde (kullanıcı isterse çalması için hazırda tutma)
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('bgm_currentTime', bgAudio.currentTime);
      sessionStorage.setItem('bgm_isPlaying', (!bgAudio.paused).toString());
    });

    // Sayfa geçişlerinde çalmaya devam etme kontrolü
    const wasPlaying = sessionStorage.getItem('bgm_isPlaying') === 'true';
    const savedTime = parseFloat(sessionStorage.getItem('bgm_currentTime') || '0');
    if (wasPlaying) {
      bgAudio.currentTime = savedTime;
      // Kullanıcı jesti gerektiğinden ilk tıklamada devreye girer
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
