(function () {
  const bgAudio = new Audio('assets/er-turan.mp3');
  bgAudio.loop = true;
  bgAudio.volume = 0.35;

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.createElement('button');
    btn.id = 'bgm-btn';
    btn.innerHTML = '🎵 Fon Müziği';
    btn.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:999999;background:#1a140d;color:#e8d8b0;border:1.5px solid #c9a84c;padding:10px 18px;border-radius:30px;font-weight:bold;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,0.6);font-family:inherit;font-size:0.85rem;';

    const restartBtn = document.createElement('button');
    restartBtn.innerHTML = '⏮️';
    restartBtn.title = 'Baştan Başlat';
    restartBtn.style.cssText = 'position:fixed;bottom:20px;left:135px;z-index:999999;background:#1a140d;color:#e8d8b0;border:1.5px solid #c9a84c;width:38px;height:38px;border-radius:50%;font-weight:bold;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,0.6);font-size:0.9rem;';

    document.body.appendChild(btn);
    document.body.appendChild(restartBtn);

    btn.addEventListener('click', function () {
      if (bgAudio.paused) {
        bgAudio.play().then(() => {
          btn.innerHTML = '🎵 Çalıyor...';
          btn.style.borderColor = '#55e6a5';
        }).catch(e => alert('Müzik dosyası assets/er-turan.mp3 bulunamadı.'));
      } else {
        bgAudio.pause();
        btn.innerHTML = '🎵 Fon Müziği';
        btn.style.borderColor = '#c9a84c';
      }
    });

    restartBtn.addEventListener('click', function () {
      bgAudio.currentTime = 0;
      bgAudio.play();
      btn.innerHTML = '🎵 Çalıyor...';
      btn.style.borderColor = '#55e6a5';
    });
  });
})();