/* ─────────────────────────────────────────────
   script.js – Dilimizin Zenginlikleri
─────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── NAV: active link on scroll ── */
  const sections = ['hero','gunun-kelimesi','mini-quiz','stats-strip'];
  const navLinks  = document.querySelectorAll('.nav-link');
  function updateActiveNav() {
    let current = 'hero';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) current = id;
    });
    navLinks.forEach(a => {
      const href = a.getAttribute('href')?.replace('#','');
      a.classList.toggle('active', href === current);
    });
  }

  /* ── NAV: scroll class ── */
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 60);
    updateActiveNav();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── NAV DROPDOWN ── */
  const dropdownBtn  = document.getElementById('nav-etkinlikler');
  const dropdownMenu = document.getElementById('nav-dropdown-menu');
  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownMenu.classList.toggle('open');
      dropdownBtn.classList.toggle('dropdown-open', isOpen);
      dropdownBtn.setAttribute('aria-expanded', isOpen.toString());
    });
    document.addEventListener('click', (e) => {
      if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('open');
        dropdownBtn.classList.remove('dropdown-open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdownMenu.classList.remove('open');
        dropdownBtn.classList.remove('dropdown-open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
    /* Dropdown item click */
    dropdownMenu.querySelectorAll('.nav-dropdown-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const act = item.dataset.act;
        dropdownMenu.classList.remove('open');
        dropdownBtn.classList.remove('dropdown-open');
        dropdownBtn.setAttribute('aria-expanded', 'false');

        if (act && modalData['btn-' + act]) {
          e.preventDefault();
          openModal('btn-' + act);
        }
      });
    });
  }

  /* ── HAMBURGER ── */
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu   = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open.toString());
  });
  navMenu.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── COUNTER ANIMATION ── */
  function animateCounters() {
    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
      const target = parseInt(el.dataset.target);
      const duration = 1500;
      const start    = performance.now();
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
    });
  }

  /* ── SCROLL REVEAL ── */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }});
  }, { threshold: 0.12 });
  const revealTargets = [
    '.hakkinda-text', '.hakkinda-visual', '.visual-card',
    '.etkinlik-card', '.duyuru-card', '.galeri-item',
    '.info-item', '.iletisim-form'
  ];
  revealTargets.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 0.08) + 's';
      revealObs.observe(el);
    });
  });

  /* ── ETKINLIK FILTER (shared applyFilter) ── */
  const filterBtns    = document.querySelectorAll('.filter-btn');
  const etkinlikCards = document.querySelectorAll('.etkinlik-card');

  function applyFilter(filter) {
    /* update filter buttons */
    filterBtns.forEach(b => {
      b.classList.toggle('active', b.dataset.filter === filter);
    });
    /* show/hide cards */
    etkinlikCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  }

  /* Filter button clicks */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  /* Hero category chip clicks */
  document.querySelectorAll('.hero-cat-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = chip.dataset.filter;
      applyFilter(filter);
      document.getElementById('etkinlikler')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ── MODAL DATA ── */
  const modalData = {
    'btn-divanu': {
      title: '3.1 — Dîvânü Lugâti\'t-Türk Canlı Harita Çalışması',
      tag: 'Dil Çalışması',
      icon: '📜',
      body: `<p>Kaşgarlı Mahmud'un eseri <em>Dîvânü Lugâti't-Türk</em>'ten seçilmiş tarihi ve kültürel değeri yüksek özgün kelimeler öğrencilere verilir.</p>
      <h4>Süreç</h4>
      <ul>
        <li>Kelimelerin güncel TDK sözlük anlamları ve etimolojik köken araştırması</li>
        <li>XI. yüzyıl metinlerindeki kullanım biçimlerinin incelenmesi</li>
        <li>Türk dünyası haritası üzerinde coğrafi bölge, kültürel etkileşim veya kullanım alanına göre konumlandırma</li>
        <li>Görsel ögelerle desteklenmiş etkileşimli ve canlı haritaya dönüştürme</li>
      </ul>
      <h4>Çıktı</h4>
      <p>Grup hazırladığı kelimelerin tarihî, sosyal ve dil bilimsel önemini etkileşimli harita üzerinde sınıfa sunar.</p>`
    },
    'btn-kelimeavi': {
      title: '3.2 — Anlamını Bul Panosu ve Dijital Kelime Avı',
      tag: 'Dil Çalışması',
      icon: '🔍',
      body: `<p>Öğretmen haftalık okuma metnine uygun zengin bir kelime havuzu oluşturur; bu kelimeleri yönlendirici ipucu cümleleriyle sınıf panosuna ve dijital platforma yerleştirir.</p>
      <h4>Süreç</h4>
      <ul>
        <li>Kelimelerin sözlük anlamları, eş ve yakın anlamları, zıt anlamları araştırılır</li>
        <li>Hayattaki örnek kullanımları bireysel veya grup hâlinde araştırılır</li>
        <li>Hafta sonunda doğru yanıtlar değerlendirilir</li>
      </ul>
      <h4>Çıktı</h4>
      <p>"Kelime Duvarı" na eklenerek öğrenci cümleleriyle zenginleştirilmiş dijital ve basılı sınıf sözlüğü oluşturulur.</p>`
    },
    'btn-arkeoloji': {
      title: '3.3 — Klasik Metinlerle Kelime Arkeolojisi Dijital Panosu',
      tag: 'Dijital & Teknoloji',
      icon: '🏛',
      body: `<p>Türk edebiyatının klasik metinlerinden anlamı unutulmuş ya da nadiren kullanılan kelimelerin araştırılması ve dijital ortamda sunulması.</p>
      <h4>Süreç</h4>
      <ul>
        <li>Seçilen kelimelerin geçirdiği tarihi anlam değişimleri araştırılır</li>
        <li>Deyim ve atasözü ilişkileri incelenir</li>
        <li>QR kod destekli dijital panolar hazırlanır</li>
        <li>Dijital kataloglar tüm okul topluluğunun erişimine açılır</li>
      </ul>
      <h4>Çıktı</h4>
      <p>Araştırmalar dijital panolarda veya etkileşimli sunu dosyalarında birleştirilerek okul sergileri, dijital kataloglar ve sınıf içi sunular hazırlanır.</p>`
    },
    'btn-tabu': {
      title: '3.4 — Kadim Kelimeler Tabu Turnuvası',
      tag: 'Dil Çalışması – Oyun',
      icon: '🃏',
      body: `<p>Köklü geçmişe ve derin kültürel birikime sahip, zamanın sinavından geçerek günümüze ulaşmış sözcüklerin kart oyununa dönüştürüldüğü eğlenceli turnuva.</p>
      <h4>Kural</h4>
      <ul>
        <li>Öğrenciler takımlara ayrılır: anlatıcı ve kelimeyi yasaklı sözcükler kullanmadan tahmin eden takım</li>
        <li>Anlatıcı kelimeyi yasaklı sözler olmadan takımına anlatır</li>
        <li>Her tur sonunda kelimenin sözlük anlamı okunur ve örnek cümle kurulur</li>
      </ul>
      <h4>Çıktı</h4>
      <p>Turnuva sonunda en çok kelimeyi doğru açıklayan takım belirlenir; öğrenciler kadim sözcük dağarcıklarını eğlenerek genişletir.</p>`
    },
    'btn-yapayzeka': {
      title: '3.5 — Yapay Zekanın Gözünden Kadim Sözler Dijital Sergisi',
      tag: 'Dijital & Teknoloji',
      icon: '🤖',
      body: `<p>Öğrenciler kültürümüzün derinliğini yansıtan bir atasözü, deyim veya kadim kelime seçerek ifadenin kökenini, kullanım bağlamını ve arkasındaki kültürel hikâyeyi araştırır.</p>
      <h4>Süreç</h4>
      <ul>
        <li>Öğretmen rehberliğinde güvenli ve etik yapay zeka görsel üretim araçları kullanılır</li>
        <li>Sözün anlam dünyasını ve soyut boyutunu betimleyen özgün dijital görseller tasarlanır</li>
        <li>Görsellerin altına sözün anlamı, TDK kaynak bilgisi ve öğrencinin kişisel tahlili eklenir</li>
      </ul>
      <h4>Çıktı</h4>
      <p>Dijital sergiye dönüştürülen çalışmalar tüm süreçte kişisel verilerin korunması ilkesine uyularak öğretmen denetiminde sergilenir.</p>`
    },
    'btn-kaligrafi': {
      title: '3.6 — Kadim Sözler Kaligrafi ve Tasarım Yarışması',
      tag: 'Sanat & Tasarım',
      icon: '🖋',
      body: `<p>İl yürütme komisyonunun duyurduğu yarışma şartnamesi, değerlendirme ölçütleri ve teslim takvimi doğrultusunda öğrenciler seçtikleri kadim sözü kaligrafi (güzel yazı) sanatı ve görsel tasarım ilkeleriyle estetik biçimde aktarır.</p>
      <h4>Süreç</h4>
      <ul>
        <li>Kağıda veya dijital ortama aktarım</li>
        <li>Çalışmanın alt köşesinde sözün kısa anlamı, köken bilgisi ve kaynakça özeti</li>
        <li>İlçe, il ve ülke düzeyinde değerlendirme</li>
      </ul>
      <h4>Çıktı</h4>
      <p>Dereceye giren eserler ödüllendirilerek yıl sonu şöleninde sergilenir; dijital arşive eklenir.</p>`
    }
  };

  /* ── MODAL OPEN / CLOSE ── */
  const overlay   = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  const modalClose= document.getElementById('modal-close');

  function openModal(id) {
    const data = modalData[id];
    if (!data) return;
    modalBody.innerHTML = `
      <div class="modal-header">
        <div class="modal-icon">${data.icon}</div>
        <span class="etkinlik-tag">${data.tag}</span>
        <h2 id="modal-title" style="font-family:var(--font-display);font-size:1.3rem;margin-top:0.75rem;color:var(--color-text)">${data.title}</h2>
      </div>
      <div class="modal-content" style="color:var(--color-text-muted);font-size:0.92rem;line-height:1.8;margin-top:1.25rem">
        ${data.body}
      </div>`;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  Object.keys(modalData).forEach(id => {
    if (id === 'btn-divanu') return; // handled separately
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => openModal(id));
  });

  /* btn-divanu → dedicated page, new tab */
  const btnDivanu = document.getElementById('btn-divanu');
  if (btnDivanu) btnDivanu.addEventListener('click', () => { window.open('divanu.html', '_blank'); });
  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ── MODAL CSS helpers ── */
  const modalStyle = document.createElement('style');
  modalStyle.textContent = `
    .modal-header { text-align:center; }
    .modal-icon   { font-size:3rem; margin-bottom:0.5rem; }
    .modal-content h4 { color:var(--color-gold-light); font-family:var(--font-display); margin:1rem 0 0.5rem; }
    .modal-content ul { padding-left:1.25rem; list-style:disc; }
    .modal-content ul li { margin-bottom:0.4rem; }
    .modal-content em  { color:var(--color-gold); font-style:italic; }
  `;
  document.head.appendChild(modalStyle);

  /* ── CONTACT FORM ── */
  const form     = document.getElementById('iletisim-form');
  const feedback = document.getElementById('form-feedback');
  if (form && feedback) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const ad    = document.getElementById('form-ad')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const msg   = document.getElementById('form-mesaj')?.value.trim();
      if (!ad || !email || !msg) {
        feedback.textContent = '⚠ Lütfen tüm zorunlu alanları doldurun.';
        feedback.style.color = '#e0607a';
        return;
      }
      const btn = document.getElementById('form-submit');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Gönderiliyor…';
      }
      setTimeout(() => {
        feedback.textContent = '✦ Mesajınız alındı! En kısa sürede dönüş yapılacaktır.';
        feedback.style.color = 'var(--color-gold-light)';
        form.reset();
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Gönder ✦';
        }
      }, 1200);
    });
  }

  /* ── GÜNÜN KELİMESİ & ATASÖZÜ (SAV) WIDGET ── */
  const DLT_SAVS = [
    { sav: 'Kanı kanla yumazlar, kanı su ile yurlar.', tr: 'Kötülüğe kötülükle değil, iyilik ve adaletle karşılık verilir.' },
    { sav: 'Aç ne yemez, tok ne demez.', tr: 'Muhtaç olan her şeyi kabul eder; varlıklı olan ise kusur arar.' },
    { sav: 'Ermegüye bulut yük bolur.', tr: 'Tembel insana küçük bir iş bile dağ gibi ağır gelir.' },
    { sav: 'Kuş kanatın, er atın.', tr: 'Kuş kanatlarıyla uçar; yiğit ise yol arkadaşı ve vasıtasıyla hedefine varır.' },
    { sav: 'Ot tütünsüz bolmas, yiğit yazuksuz bolmas.', tr: 'Dumansız ateş olmadığı gibi, hatasız genç insan da olmaz.' },
    { sav: 'Ağaçta erik bar bolsa, yerge taş atarlar.', tr: 'Meyveli ağaç taşlanır; faydalı ve yetenekli insanlar sınanır.' },
    { sav: 'Bozkırın otı köp bolsa yılkı semrir.', tr: 'Kaynak ve bereket bol olduğunda bütün toplum güçlenir ve huzur bulur.' },
    { sav: 'Kişi sözleşe, yılkı koklaşa.', tr: 'İnsanlar konuşarak, fikir alışverişiyle anlaşır.' },
    { sav: 'Alp erler uruşta, bilge erler mecliste bilinir.', tr: 'Yiğitler savaş meydanında, bilgeler ise danışma meclisinde belli olur.' },
    { sav: 'Yılan kendü egrisin bilmes, tebi boynın egri der.', tr: 'İnsan kendi kusurlarını görmez, başkalarının eksiklerini ayıplar.' },
    { sav: 'Tay at bolsa at tınur, oğul er bolsa ata tınur.', tr: 'Tay büyüyüp at olunca ana at dinlenir; oğul yetişince baba rahat eder.' },
    { sav: 'Tatsız Türk bolmas, başsız börk bolmas.', tr: 'Yabancısız toplum, başsız başlık olmaz; düzen birlikle kurulur.' },
    { sav: 'Tünle yürse tünle yürür, kündüz yürse kün körür.', tr: 'İşini zamanında ve aydınlıkta yapan muradına erer.' },
    { sav: 'Korkmış kişige koy başı koş körünür.', tr: 'Korkan insana koyun başı bile çift ve devasa görünür.' },
    { sav: 'Közden yırasa, köngülden yeme yırar.', tr: 'Gözden ırak olan gönülden de ırak olur.' },
    { sav: 'Biliglik er bilig bildi, kamug törütmüş işin bildi.', tr: 'Bilgili insan ilim edindiğinde yaratılmış bütün düzenin hikmetini kavrar.' },
    { sav: 'Balık suvda közü taşra.', tr: 'Balık su içindedir ama gözü dışarıdadır; insan kendi çevresini dikkatle izlemelidir.' },
    { sav: 'Kuruğ kaşık ağızga yakışmas, kuruğ söz kulakka yakışmas.', tr: 'Boş kaşık ağza tat vermediği gibi, asılsız ve boş söz de kulağa hoş gelmez.' },
    { sav: 'Er erge kavuşur, tağ tağka kavuşmas.', tr: 'İnsan insana kavuşur, dağ dağa kavuşmaz.' },
    { sav: 'Suv akmas erse köl bolmas, er çalışmas erse el bolmas.', tr: 'Su akmazsa göl oluşmaz, insan emek vermezse memleket kurulmaz.' },
    { sav: 'Köngül kimi sevse körk ol bolur.', tr: 'Gönül kimi severse güzel olan odur.' },
    { sav: 'İt ısırmas, at tepmes dime.', tr: 'Tehlikeyi küçümseme, daima tedbirli ve hazırlıklı ol.' },
    { sav: 'Börü komşısın yimes.', tr: 'Kurt bile kendi yuvasının yakınındaki komşusuna zarar vermez.' },
    { sav: 'Konaç kelür, kut kelür.', tr: 'Misafir geldiğinde bereket ve kut da beraberinde gelir.' },
    { sav: 'Yalnguz kargan kış bolmas.', tr: 'Yalnız bir karganın gelmesiyle kış başlamaz; birlik şarttır.' },
    { sav: 'Temür kertügünde, söz ornında yahşı.', tr: 'Demir tavında dövülür, söz yerinde ve vaktinde güzeldir.' },
    { sav: 'Agız yese yüz utanur.', tr: 'İkram gören, iyilik bulan insan vefalı ve saygılı davranır.' },
    { sav: 'Alp yağıda, bilge kayguda sınanur.', tr: 'Kahraman düşman karşısında, bilge ise dert ve zorluk anında sınanır.' },
    { sav: 'Ata tonı oğulka yarasa atası ölmemiş kibi bolur.', tr: 'Oğul babasının yolunu ve erdemini sürdürürse baba hiç ölmemiş gibi yaşar.' },
    { sav: 'Borlukta üzüm bitse, sakçıga ne kaygu.', tr: 'Bağda üzüm yetişmişse bekçinin tasalanacak hiçbir şeyi yoktur.' },
    { sav: 'Buğday ekse arpa bitmes.', tr: 'Ne ekersen onu biçersin; emek ne yöndeyse sonuç da o olur.' },
    { sav: 'Kuş tuyakı ile avlanır, er hüneri ile tanınır.', tr: 'Kuş pençesiyle avlanır, insan hüneri ve ahlakıyla tanınır.' },
    { sav: 'Kişi alabugaz bolur, yılkı alaca.', tr: 'Hayvanın alası dışında, insanın alası ve niyeti ise içinde gizlidir.' },
    { sav: 'Yazıda böri ulasa, evdeki itning bağrı yarılur.', tr: 'Bozkırda kurt ulursa evdeki köpeğin bağrı titrer.' },
    { sav: 'Sabanda izi bolmagannıng harmanda yüzi bolmas.', tr: 'Tarlada ekimde teri olmayanın harman vaktinde yüzü olmaz.' },
    { sav: 'Ulugluk tiler erse, kiçiklik kıl.', tr: 'Büyüklük ve saygı istiyorsan alçakgönüllü ve mütevazı ol.' },
    { sav: 'Yagmur birle yer yeşerür, edgü söz birle köngül açılur.', tr: 'Yağmurla toprak yeşerir, tatlı sözle gönüller ferahlar.' },
    { sav: 'Yaruk künning kadiri karanggu tünde bilinür.', tr: 'Aydınlık günün kıymeti karanlık gecede anlaşılır.' },
    { sav: 'İş aşar, söz kalur.', tr: 'Yapılan iş zamanı aşar, söylenen doğru söz geleceğe miras kalır.' },
    { sav: 'Kut belgüsü bilig.', tr: 'Saadetin, devletin ve kutun en büyük işareti akıl ve bilgidir.' },
    { sav: 'Özün ögen er ölmegünçe ögülmes.', tr: 'Kendini öven insan başkaları tarafından ancak hakiki erdemiyle takdir edilir.' },
    { sav: 'Yalgan söz baş yarar, doğru söz köngül bağlar.', tr: 'Yalan söz başa bela getirir, dürüst söz ise kalpleri birleştirir.' },
    { sav: 'El töresi bozulsa il dağılur.', tr: 'Devletin yasası ve adaleti sarsılırsa yurt darmadağın olur.' },
    { sav: 'Tözlüg er işin başarur, boşbogaz er yolda kalur.', tr: 'Özü sağlam insan işini başarır, lafazan insan yolda kalır.' },
    { sav: 'Aş tatıgı tuz birle, er körki söz birle.', tr: 'Aşın lezzeti tuzuyla, insanın güzelliği ise doğru ve tatlı sözüyle belli olur.' },
    { sav: 'Erkeksiz ev çatısız ev kibi bolur.', tr: 'Dayanışması ve direği olmayan ev ayakta duramaz.' },
    { sav: 'Kaçan bolsa kün doğar, tün karası tez yiter.', tr: 'Vakti gelince güneş mutlaka doğar, gecenin karanlığı hemen silinip gider.' },
    { sav: 'Örteng yirde ot bitmes, yovuz kişide vefa bolmas.', tr: 'Yanmış toprakta ot bitmediği gibi kötü niyetli kimsede de vefa bulunmaz.' },
    { sav: 'Kengeşlik ton biş biçilür.', tr: 'Danışılarak dikilen elbise bedene tam oturur; istişare hata yaptırmaz.' },
    { sav: 'Biligli birni yener, biligsiz mingni yengilür.', tr: 'Bilgili insan tek başına bir orduyu yener, bilgisiz ise bin kişiyle bile yenilir.' }
  ];

  let currentDailyWord = null;
  function initDailyWord() {
    if (typeof WORDS === 'undefined' || !WORDS.length) return;
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const wordIdx = dayOfYear % WORDS.length;
    displayDailyWord(WORDS[wordIdx]);

    const dateEl = document.getElementById('daily-date');
    if (dateEl) {
      dateEl.textContent = now.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    // Günün Savı (Atasözü)
    const savIdx = dayOfYear % DLT_SAVS.length;
    displayDailySav(DLT_SAVS[savIdx]);
  }

  function displayDailySav(s) {
    const savEl = document.getElementById('daily-sav-text');
    if (savEl && s) {
      savEl.innerHTML = `“<strong>${s.sav}</strong>” <span style="opacity:0.85;font-size:0.88rem;color:#D8C49D">(${s.tr})</span>`;
    }
  }

  function displayDailyWord(w) {
    if (!w) return;
    currentDailyWord = w;
    const kEl = document.getElementById('daily-word-k');
    const noEl = document.getElementById('daily-word-no');
    const catEl = document.getElementById('daily-word-cat');
    const dEl = document.getElementById('daily-word-d');
    const tdkEl = document.getElementById('daily-word-tdk');
    const kokenEl = document.getElementById('daily-word-koken');

    if (kEl) kEl.textContent = w.k;
    if (noEl) noEl.textContent = '#' + String(w.no).padStart(2, '0');
    if (catEl && typeof DLT_CATEGORIES !== 'undefined') {
      const cat = DLT_CATEGORIES[w.c];
      catEl.textContent = cat ? `${cat.icon} ${cat.no} ${cat.name}` : w.c;
    }
    if (dEl) dEl.textContent = `“${w.d}”`;
    if (tdkEl) tdkEl.textContent = w.tdk;
    if (kokenEl) kokenEl.textContent = `Köken/Bağlam: ${w.koken || ''} ${w.baglam ? '· ' + w.baglam : ''}`;
  }

  const btnRandomDaily = document.getElementById('daily-btn-random');
  if (btnRandomDaily) {
    btnRandomDaily.addEventListener('click', () => {
      if (typeof WORDS !== 'undefined' && WORDS.length) {
        const rand = WORDS[Math.floor(Math.random() * WORDS.length)];
        displayDailyWord(rand);
        // Rastgele yeni bir sav da getir
        const randSav = DLT_SAVS[Math.floor(Math.random() * DLT_SAVS.length)];
        displayDailySav(randSav);
      }
    });
  }

  const btnSpeakDaily = document.getElementById('daily-speak-btn');
  if (btnSpeakDaily) {
    btnSpeakDaily.addEventListener('click', () => {
      if (currentDailyWord && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(currentDailyWord.k);
        u.lang = 'tr-TR';
        u.rate = 0.88;
        window.speechSynthesis.speak(u);
      }
    });
  }

  /* ── 20 SORULUK GELİŞMİŞ QUIZ BİLEŞENİ (Her 5 Soruda Seviye Karnesi) ── */
  let quizQuestions = [];
  let currentQIdx = 0;
  let quizScore = 0;
  let stageScores = [0, 0, 0, 0]; // 4 aşama için (1-5, 6-10, 11-15, 16-20)

  const STAGE_RANKS = [
    { title: 'Aşama 1 (1-5. Sorular)', name: 'Acemi Yolcu', icon: '🌱' },
    { title: 'Aşama 2 (6-10. Sorular)', name: 'Dil Çırağı', icon: '📜' },
    { title: 'Aşama 3 (11-15. Sorular)', name: 'Bozkır Bilgesi', icon: '⚔️' },
    { title: 'Aşama 4 (16-20. Sorular)', name: 'Dîvân Piri & Kelime Üstadı', icon: '👑' }
  ];

  function calculateGrade(scoreOutOf5) {
    if (scoreOutOf5 >= 5) return { letter: 'A+', text: 'Kusursuz / Mükemmel', title: 'Kelime Üstadı' };
    if (scoreOutOf5 === 4) return { letter: 'A', text: 'Çok Başarılı', title: 'Bozkır Bilgesi' };
    if (scoreOutOf5 === 3) return { letter: 'B', text: 'İyi / Gelişime Açık', title: 'Dil Çırağı' };
    if (scoreOutOf5 === 2) return { letter: 'C', text: 'Geçer / Temel Seviye', title: 'Yolcu' };
    return { letter: 'D', text: 'Geliştirilmeli', title: 'Acemi Meraklı' };
  }

  function generateQuiz() {
    if (typeof WORDS === 'undefined' || WORDS.length < 20) return;
    const shuffled = [...WORDS].sort(() => 0.5 - Math.random());
    quizQuestions = shuffled.slice(0, 20).map((targetWord, idx) => {
      const others = WORDS.filter(w => w.no !== targetWord.no).sort(() => 0.5 - Math.random()).slice(0, 3);
      const isWordToMeaning = idx % 2 === 0;
      
      let questionText = '';
      let correctOption = '';
      let options = [];

      if (isWordToMeaning) {
        questionText = `“<strong>${targetWord.k}</strong>” kadim sözcüğünün Dîvânu Lugâti't-Türk'teki karşılığı nedir?`;
        correctOption = targetWord.d;
        options = [targetWord.d, ...others.map(o => o.d)].sort(() => 0.5 - Math.random());
      } else {
        questionText = `“<em>${targetWord.d}</em>” anlamına gelen kadim Türkçe sözcük hangisidir?`;
        correctOption = targetWord.k;
        options = [targetWord.k, ...others.map(o => o.k)].sort(() => 0.5 - Math.random());
      }

      return {
        word: targetWord,
        question: questionText,
        correct: correctOption,
        options: options
      };
    });
    currentQIdx = 0;
    quizScore = 0;
    stageScores = [0, 0, 0, 0];
  }

  function showQuestion() {
    const q = quizQuestions[currentQIdx];
    if (!q) return;

    const currentStageIdx = Math.floor(currentQIdx / 5);
    const stageInfo = STAGE_RANKS[currentStageIdx];

    document.getElementById('quiz-q-indicator').textContent = `Soru ${currentQIdx + 1} / 20`;
    document.getElementById('quiz-current-tier-badge').textContent = `${stageInfo.icon} ${stageInfo.name}`;
    document.getElementById('quiz-score-indicator').textContent = `Doğru: ${quizScore} / 20`;
    document.getElementById('quiz-progress-fill').style.width = `${((currentQIdx + 1) / 20) * 100}%`;
    document.getElementById('quiz-question-text').innerHTML = q.question;

    const optGrid = document.getElementById('quiz-options-grid');
    optGrid.innerHTML = '';
    document.getElementById('quiz-feedback-box').style.display = 'none';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-opt-btn';
      btn.innerHTML = `<span class="quiz-opt-letter">${letters[idx]}</span> <span>${opt}</span>`;
      btn.addEventListener('click', () => handleQuizAnswer(opt, btn, q));
      optGrid.appendChild(btn);
    });
  }

  function handleQuizAnswer(selected, chosenBtn, q) {
    const buttons = document.querySelectorAll('.quiz-opt-btn');
    buttons.forEach(b => b.disabled = true);

    const isCorrect = selected === q.correct;
    const currentStageIdx = Math.floor(currentQIdx / 5);

    if (isCorrect) {
      quizScore++;
      stageScores[currentStageIdx]++;
      chosenBtn.classList.add('correct');
    } else {
      chosenBtn.classList.add('wrong');
      buttons.forEach(b => {
        if (b.innerText.includes(q.correct)) b.classList.add('correct');
      });
    }

    document.getElementById('quiz-score-indicator').textContent = `Doğru: ${quizScore} / 20`;

    const fbBox = document.getElementById('quiz-feedback-box');
    const fbText = document.getElementById('quiz-feedback-text');
    fbBox.style.display = 'block';
    fbText.innerHTML = isCorrect 
      ? `<strong style="color:#27ae60">✔ Doğru Tebrikler!</strong><br><small style="color:var(--color-text-muted)">“${q.word.k}”: ${q.word.tdk}</small>`
      : `<strong style="color:#e74c3c">✘ Yanlış Yanıt!</strong> Doğru cevap: <strong>${q.correct}</strong><br><small style="color:var(--color-text-muted)">“${q.word.k}”: ${q.word.tdk}</small>`;
  }

  const btnNextQuiz = document.getElementById('quiz-btn-next');
  if (btnNextQuiz) {
    btnNextQuiz.addEventListener('click', () => {
      currentQIdx++;
      // Her 5 soruda bir (5, 10, 15. soruların bitiminde) ara değerlendirme ekranı göster
      if (currentQIdx % 5 === 0 && currentQIdx < 20) {
        showStageCheckpoint(currentQIdx / 5 - 1);
      } else if (currentQIdx < 20) {
        showQuestion();
      } else {
        showQuizResults();
      }
    });
  }

  function showStageCheckpoint(stageIdx) {
    document.getElementById('quiz-play-view').style.display = 'none';
    const stageView = document.getElementById('quiz-stage-view');
    stageView.style.display = 'block';

    const stageData = STAGE_RANKS[stageIdx];
    const scoreInThisStage = stageScores[stageIdx];
    const evalResult = calculateGrade(scoreInThisStage);

    document.getElementById('quiz-stage-icon').textContent = stageData.icon;
    document.getElementById('quiz-stage-grade').textContent = evalResult.letter;
    document.getElementById('quiz-stage-title').textContent = `${(stageIdx + 1) * 5}. Soru Ara Değerlendirmesi`;
    document.getElementById('quiz-stage-desc').innerHTML = 
      `Bu 5 soruda <strong>${scoreInThisStage} / 5</strong> doğru yaptın.<br>Seviyen: <strong style="color:var(--color-gold-light)">${evalResult.title} (${evalResult.text})</strong>`;

    const statsCard = document.getElementById('stage-stats-card');
    statsCard.innerHTML = `
      <div class="stage-metric">
        <span class="metric-label">Mevcut Aşama:</span>
        <span class="metric-val">${stageData.name}</span>
      </div>
      <div class="stage-metric">
        <span class="metric-label">Harf Notu:</span>
        <span class="metric-val" style="color:var(--color-gold)">Derece [ ${evalResult.letter} ]</span>
      </div>
      <div class="stage-metric">
        <span class="metric-label">Toplam Başarı:</span>
        <span class="metric-val">${quizScore} / ${(stageIdx + 1) * 5} Soru</span>
      </div>
    `;

    const continueBtn = document.getElementById('btn-continue-quiz');
    continueBtn.textContent = `Aşama ${stageIdx + 2}'ye Geç (Soru ${(stageIdx + 1) * 5 + 1} - ${(stageIdx + 2) * 5}) →`;
  }

  const btnContinueQuiz = document.getElementById('btn-continue-quiz');
  if (btnContinueQuiz) {
    btnContinueQuiz.addEventListener('click', () => {
      document.getElementById('quiz-stage-view').style.display = 'none';
      document.getElementById('quiz-play-view').style.display = 'block';
      showQuestion();
    });
  }

  function showQuizResults() {
    document.getElementById('quiz-play-view').style.display = 'none';
    document.getElementById('quiz-stage-view').style.display = 'none';
    const resView = document.getElementById('quiz-result-view');
    resView.style.display = 'block';

    const bigScore = document.getElementById('quiz-big-score');
    const resTitle = document.getElementById('quiz-result-title');
    const resDesc = document.getElementById('quiz-result-desc');
    const resIcon = document.getElementById('quiz-result-icon');
    const finalGradeEl = document.getElementById('quiz-final-grade');
    const finalRankEl = document.getElementById('quiz-final-rank');

    bigScore.textContent = `${quizScore} / 20`;

    let finalLetter = 'D';
    let finalRank = 'Acemi Yolcu';
    let finalDesc = '';

    if (quizScore >= 18) {
      finalLetter = 'A+';
      finalRank = '👑 DÎVÂN PİRİ & KELİME ÜSTADI';
      finalDesc = 'Tebrikler! Dîvânu Lugâti\'t-Türk hazinesine ve Türkçenin bin yıllık mirasına tam anlamıyla hakimsin. Kâşgarlı Mahmud ödülüne layıksın!';
      resIcon.textContent = '👑';
    } else if (quizScore >= 15) {
      finalLetter = 'A';
      finalRank = '⚔️ BOZKIR BİLGESİ';
      finalDesc = 'Muhteşem bir sonuç! Kelimelerin anlam dünyasını ve kökenlerini çok iyi kavramışsın.';
      resIcon.textContent = '📜';
    } else if (quizScore >= 11) {
      finalLetter = 'B';
      finalRank = '🏹 DİL ÇIRAĞI & KELİME AVCISI';
      finalDesc = 'Oldukça iyi bir performans! 100 kelimelik sözlüğümüzü biraz daha inceleyerek Üstat seviyesine çıkabilirsin.';
      resIcon.textContent = '🏹';
    } else if (quizScore >= 7) {
      finalLetter = 'C';
      finalRank = '🌱 YOLCU';
      finalDesc = 'Temel kadim kelimeleri biliyorsun ancak unutulmuş derin anlamlar üzerinde biraz daha pratik yapmalısın.';
      resIcon.textContent = '🌱';
    } else {
      finalLetter = 'D';
      finalRank = '🏕️ ACEMİ MERAKLI';
      finalDesc = 'Bu yolculuğun henüz başındasın! Sözlük ve Tabu oyunu ile kelimeleri keşfetmeye devam et.';
      resIcon.textContent = '🏕️';
    }

    finalGradeEl.textContent = finalLetter;
    finalRankEl.textContent = finalRank;
    resTitle.textContent = `${finalRank} Unvanını Kazandın!`;
    resDesc.textContent = finalDesc;

    // 4 Aşamalı Karne Dökümü
    const breakdownEl = document.getElementById('quiz-stage-breakdown');
    breakdownEl.innerHTML = `
      <h4 style="font-family:var(--font-display);color:var(--color-gold-light);margin-bottom:0.75rem;border-bottom:1px solid rgba(201,168,76,0.2);padding-bottom:0.4rem">
        📊 4 Aşama Karne Notları
      </h4>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:0.75rem">
        ${stageScores.map((sc, i) => {
          const evalS = calculateGrade(sc);
          return `
            <div style="background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:var(--radius-sm);padding:0.75rem;text-align:center">
              <div style="font-size:0.75rem;color:var(--color-text-muted)">${STAGE_RANKS[i].title}</div>
              <div style="font-size:1.4rem;font-weight:900;color:var(--color-gold);margin:0.2rem 0">${evalS.letter}</div>
              <div style="font-size:0.8rem;color:#fff">${sc} / 5 Doğru</div>
              <div style="font-size:0.7rem;color:var(--color-gold-light)">${evalS.title}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  const btnStartQuiz = document.getElementById('btn-start-quiz');
  if (btnStartQuiz) {
    btnStartQuiz.addEventListener('click', () => {
      generateQuiz();
      document.getElementById('quiz-start-view').style.display = 'none';
      document.getElementById('quiz-result-view').style.display = 'none';
      document.getElementById('quiz-stage-view').style.display = 'none';
      document.getElementById('quiz-play-view').style.display = 'block';
      showQuestion();
    });
  }

  const btnRestartQuiz = document.getElementById('btn-restart-quiz');
  if (btnRestartQuiz) {
    btnRestartQuiz.addEventListener('click', () => {
      generateQuiz();
      document.getElementById('quiz-result-view').style.display = 'none';
      document.getElementById('quiz-play-view').style.display = 'block';
      showQuestion();
    });
  }

  // İlk açılışta Günün Kelimesi'ni yükle
  initDailyWord();

  /* ── GALERI ITEM hover effect ── */
  document.querySelectorAll('.galeri-item').forEach(item => {
    item.addEventListener('mouseenter', () => item.style.zIndex = '2');
    item.addEventListener('mouseleave', () => item.style.zIndex = '');
  });

})();
