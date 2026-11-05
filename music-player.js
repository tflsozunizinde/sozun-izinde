/* ─────────────────────────────────────────────
   music-player.js – Fon Müziği & Başa Sarma
─────────────────────────────────────────────── */
(function () {
  'use strict';

  const AUDIO_SRC = 'assets/er-turan.mp3';

  const bgAudio = new Audio(AUDIO_SRC);
  bgAudio.loop = true;
  bgAudio.volume = 0.35;

  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('bgm-container')) return;

    const container = document.createElement('div');
    container.id = 'bgm-container';

    // 1. Müzik Çal / Durdur
    const playBtn = document.createElement('button');
    playBtn.id = 'bgm-toggle-btn';
    playBtn.setAttribute('aria-label', 'Müziği Aç / Kapat');
    playBtn.title = 'Er Turan - Fon Müziği';
    playBtn.innerHTML = `
      <span class="bgm-icon">🎵</span>
      <span class="bgm-text">Müzik Çal</span>
      <span class="bgm-waves"><span></span><span></span><span></span></span>
    `;

    // 2. Baştan Başlat Butonu (⏮️)
    const restartBtn = document.createElement('button');
    restartBtn.id = 'bgm-restart-btn';
    restartBtn.setAttribute('aria-label', 'Müziği Baştan Başlat');
    restartBtn.title = 'Müziği baştan başlat';
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
      .bgm-waves {
        display: none;
        align-items: center;
        gap: 2px;
        height: 12px;
      }
      #bgm-toggle-btn.playing .bgm-waves { display: inline-flex; }
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
      @keyframes bgm-equalizer { 0% { height: 20%; } 100% { height: 100%; } }
      @keyframes bgm-pulse { 0%, 100% { transform: scale(1); } 50