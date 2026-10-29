/* ─────────────────────────────────────────────────────────
   words.js – Dîvânu Lugâti't-Türk 100 Özgün Kelime Verisi
   Kültürel Kelime Arkeolojisi & Tabu Sözlüğü
───────────────────────────────────────────────────────── */

var DLT_CATEGORIES = {
  dil:    { id: 'dil',    no: '01', name: 'Dil, Bilgi ve Sözlü Kültür',      icon: '📚', desc: 'Kaşgar-Balasagun bilgi çevresi' },
  devlet: { id: 'devlet', no: '02', name: 'Devlet, Yönetim ve Toplum',       icon: '🏛️', desc: 'Karahanlı siyaset ve toplum çevresi' },
  aile:   { id: 'aile',   no: '03', name: 'Aile ve Akrabalık',               icon: '👨‍👩‍👧', desc: 'Hane, soy ve yakınlık söz varlığı' },
  savas:  { id: 'savas',  no: '04', name: 'Savaş, Silah ve Askerlik',        icon: '⚔️', desc: 'Bozkır savaş kültürü' },
  hayvan: { id: 'hayvan', no: '05', name: 'Atçılık ve Hayvancılık',          icon: '🐴', desc: 'Sürü, binek ve hayvan adları' },
  mutfak: { id: 'mutfak', no: '06', name: 'Mutfak ve Beslenme',             icon: '🍞', desc: 'Tahıl, süt ürünleri ve ekmek kültürü' },
  esya:   { id: 'esya',   no: '07', name: 'Giyim, Bakım ve Gündelik Eşya',   icon: '🏺', desc: 'Kent ve bozkır gündelik hayatı' },
  doga:   { id: 'doga',   no: '08', name: 'Doğa, İklim ve Coğrafya',         icon: '🌿', desc: 'Mevsim, su ve gökyüzü söz varlığı' },
  tarim:  { id: 'tarim',  no: '09', name: 'Tarım, Emek ve Değiş-Tokuş',      icon: '🌾', desc: 'Üretim, paylaşım ve iktisadi hayat' },
  inanc:  { id: 'inanc',  no: '10', name: 'İnanç, Değer, Tören ve Oyun',     icon: '🕌', desc: 'Manevi dünya ve toplumsal ritüeller' }
};

var WORDS = [
  {
    "no": 1,
    "k": "bilig",
    "c": "dil",
    "d": "bilgi, bilgelik",
    "tdk": "bilgi - öğrenme ve araştırmayla edinilen kavrayış/birikim",
    "koken": "bil- fiili + tarihî ad yapım eki; Eski Türkçe türetme",
    "baglam": "Öğüt, bilgi ve bilgelik çevresindeki söz ve şiirlerde.",
    "yasak": [
      "Bilgi",
      "Öğrenmek",
      "Akıl",
      "Kitap",
      "Kavramak"
    ]
  },
  {
    "no": 2,
    "k": "ukuş",
    "c": "dil",
    "d": "akıl, anlayış, kavrayış",
    "tdk": "anlayış / kavrayış - anlama ve kavrama gücü",
    "koken": "uk- 'anlamak' kökü + -uş; tarihî ad",
    "baglam": "Akıl yürütme, idrak ve iyi-kötüyü ayırma bağlamlarında.",
    "yasak": [
      "Akıl",
      "Anlamak",
      "Zeka",
      "Kavramak",
      "İdrak"
    ]
  },
  {
    "no": 3,
    "k": "bilge",
    "c": "dil",
    "d": "bilgili, hikmet sahibi kimse",
    "tdk": "bilge - çok bilen, bilgili ve olgun kimse",
    "koken": "bil- köküyle bağlantılı çok eski sıfat/ad",
    "baglam": "Bilgili kişi, öğüt ve toplumsal saygınlık bağlamlarında.",
    "yasak": [
      "Alim",
      "Bilgin",
      "Akıllı",
      "Kağan",
      "Hikmet"
    ]
  },
  {
    "no": 4,
    "k": "bitig",
    "c": "dil",
    "d": "yazı, kitap, belge",
    "tdk": "betik - yazılı metin/komut dizisi gibi özel kullanımlar",
    "koken": "biti- 'yazmak' fiiliyle bağlantılı tarihî ad",
    "baglam": "Yazı, kayıt, mektup ve kitap kültürü bağlamlarında.",
    "yasak": [
      "Yazı",
      "Kitap",
      "Belge",
      "Mektup",
      "Kalem"
    ]
  },
  {
    "no": 5,
    "k": "til",
    "c": "dil",
    "d": "dil; konuşma dili",
    "tdk": "dil - konuşma ve iletişim sistemi; ağızdaki organ",
    "koken": "Eski Türkçe temel söz; Oğuzcada t > d değişmesi",
    "baglam": "Türk boylarının dil ve ağız özellikleri anlatılırken.",
    "yasak": [
      "Lisan",
      "Konuşmak",
      "Ağız",
      "Söz",
      "Türkçe"
    ]
  },
  {
    "no": 6,
    "k": "söz",
    "c": "dil",
    "d": "söz, söyleyiş, ifade",
    "tdk": "söz - anlamlı dil birliği; konuşma, vaat, ifade",
    "koken": "Eski Türkçe temel söz",
    "baglam": "Konuşma, öğüt, atasözü ve şiir bağlamlarında.",
    "yasak": [
      "Cümle",
      "Laf",
      "Konuşma",
      "Kelime",
      "Vaat"
    ]
  },
  {
    "no": 7,
    "k": "sav",
    "c": "dil",
    "d": "atasözü, özlü söz; haber/söz",
    "tdk": "sav - ileri sürülen düşünce, iddia, tez",
    "koken": "Eski Türkçe söz; anlam alanı zamanla değişmiştir",
    "baglam": "Atasözleri, kalıplaşmış öğütler ve haber aktarma bağlamlarında.",
    "yasak": [
      "Atasözü",
      "Özlü Söz",
      "İddia",
      "Haber",
      "Nasihat"
    ]
  },
  {
    "no": 8,
    "k": "sagu",
    "c": "dil",
    "d": "ağıt, yas şiiri",
    "tdk": "ağıt - ölüm veya acı üzerine söylenen ezgili söz",
    "koken": "Eski Türkçe şiir terimi; iç kökeni tartışmalıdır",
    "baglam": "Ölüm, yas ve anma şiiri geleneğinde.",
    "yasak": [
      "Ağıt",
      "Ölüm",
      "Yas",
      "Şiir",
      "Yuğ"
    ]
  },
  {
    "no": 9,
    "k": "koşuğ",
    "c": "dil",
    "d": "şiir, koşma niteliğinde söz",
    "tdk": "koşuk - eski Türk edebiyatında bir şiir türü",
    "koken": "koş- 'yan yana getirmek, bağlamak' fiilinden",
    "baglam": "Ezgili okunan şiirler, şölen ve tören anlatılarında.",
    "yasak": [
      "Şiir",
      "Dörtlük",
      "Koşma",
      "Ozan",
      "Ezgi"
    ]
  },
  {
    "no": 10,
    "k": "ög",
    "c": "dil",
    "d": "akıl, düşünme gücü; zihin",
    "tdk": "akıl; düşünme, anlama ve kavrama gücü",
    "koken": "Eski Türkçe temel zihin kavramı (ögren-, ögüt türevleri)",
    "baglam": "İnsanın idrak yeteneği ve zihinsel olgunluğu anlatılırken.",
    "yasak": [
      "Akıl",
      "Zihin",
      "Düşünce",
      "Hafıza",
      "Fikir"
    ]
  },
  {
    "no": 11,
    "k": "beg",
    "c": "devlet",
    "d": "bey, yönetici, ileri gelen",
    "tdk": "bey - yönetici/unvan; saygı bildiren hitap",
    "koken": "Eski Türk dünyasında yaygın unvan; beg > bey gelişimi",
    "baglam": "Yönetici sınıf, hitap ve toplumsal statü bağlamlarında.",
    "yasak": [
      "Bey",
      "Lider",
      "Yönetici",
      "Emir",
      "Asil"
    ]
  },
  {
    "no": 12,
    "k": "han",
    "c": "devlet",
    "d": "hükümdar, yönetici unvanı",
    "tdk": "han - hükümdar unvanı; ayrıca konaklama yapısı anlamı",
    "koken": "Orta Asya tarihî unvanı; kökeni tartışmalıdır",
    "baglam": "Hükümdarlık ve siyasi otorite bağlamında.",
    "yasak": [
      "Kağan",
      "Hükümdar",
      "Padişah",
      "Sultan",
      "Devlet"
    ]
  },
  {
    "no": 13,
    "k": "il",
    "c": "devlet",
    "d": "ülke, memleket, devlet düzeni",
    "tdk": "il - günümüzde idari bölüm; tarihî anlamı daha geniştir",
    "koken": "Eski Türkçe temel siyaset sözü",
    "baglam": "Siyasi birlik, ülke ve yönetim çevresinde.",
    "yasak": [
      "Vatan",
      "Ülke",
      "Devlet",
      "Memleket",
      "Şehir"
    ]
  },
  {
    "no": 14,
    "k": "bodun",
    "c": "devlet",
    "d": "halk, topluluk, millet",
    "tdk": "budun - tarih/etnoloji dilinde halk, kavim",
    "koken": "Eski Türkçe temel topluluk adı",
    "baglam": "İl topluluğu, halkı ve siyasi bütünü belirtirken.",
    "yasak": [
      "Halk",
      "Millet",
      "Topluluk",
      "İnsanlar",
      "Boy"
    ]
  },
  {
    "no": 15,
    "k": "boy",
    "c": "devlet",
    "d": "kavim, kabile, aşiret, hısım topluluğu",
    "tdk": "boy - ortak kökene bağlı topluluk; ayrıca uzunluk anlamı",
    "koken": "Eski Türkçe temel söz",
    "baglam": "DLT'de tanışmada 'Boy kim?' sorusuyla aidiyetin sorulduğu anlatılır.",
    "yasak": [
      "Kabile",
      "Aşiret",
      "Kavim",
      "Oğuz",
      "Topluluk"
    ]
  },
  {
    "no": 16,
    "k": "urug",
    "c": "devlet",
    "d": "soy, nesil; tohum",
    "tdk": "soy - aynı kökten gelen kimseler; nesil",
    "koken": "Eski Türkçe urug: 'tohum/nesil' anlam alanı",
    "baglam": "Soy, akrabalık ve neslin sürmesi bağlamlarında.",
    "yasak": [
      "Soy",
      "Nesil",
      "Tohum",
      "Sülale",
      "Kök"
    ]
  },
  {
    "no": 17,
    "k": "tarhan",
    "c": "devlet",
    "d": "yüksek görevli / ayrıcalıklı unvan sahibi",
    "tdk": "tarkan - tarihî bir unvan",
    "koken": "Orta Asya'da yaygın tarihî unvan; kökeni kesin değildir",
    "baglam": "Yönetici-seçkin zümre ve görev unvanlarında.",
    "yasak": [
      "Tarkan",
      "Unvan",
      "Komutan",
      "Ayrıcalık",
      "Görevli"
    ]
  },
  {
    "no": 18,
    "k": "buyruk",
    "c": "devlet",
    "d": "emir; yüksek görevli/unvan alanı",
    "tdk": "buyruk - emir, kesin talimat",
    "koken": "buyur- fiili + -uk; yönetim diliyle ilişkili",
    "baglam": "Emir verme, idari görev ve otorite ilişkilerinde.",
    "yasak": [
      "Emir",
      "Talimat",
      "Yasa",
      "Hüküm",
      "İrade"
    ]
  },
  {
    "no": 19,
    "k": "yalawaç",
    "c": "devlet",
    "d": "elçi, haberci; kimi bağlamlarda peygamber",
    "tdk": "elçi - bir devleti/kişiyi temsil eden görevli",
    "koken": "Tarihî söz; köken açıklamaları farklıdır",
    "baglam": "Haberleşme, temsil ve diplomatik görevlerde.",
    "yasak": [
      "Elçi",
      "Haberci",
      "Temsilci",
      "Peygamber",
      "Mesaj"
    ]
  },
  {
    "no": 20,
    "k": "kul",
    "c": "devlet",
    "d": "kul, hizmet eden kimse; bağımlı kişi",
    "tdk": "kul - Tanrı'ya göre insan; tarihî olarak hizmetkâr/bağımlı kişi",
    "koken": "Eski Türkçe temel söz",
    "baglam": "Toplumsal statü, hizmet ve bağlılık bağlamlarında.",
    "yasak": [
      "Köle",
      "Hizmetçi",
      "İnsan",
      "Teba",
      "İtaat"
    ]
  },
  {
    "no": 21,
    "k": "ata",
    "c": "aile",
    "d": "baba; ata, ecdat",
    "tdk": "ata - baba, dede; geçmişte yaşamış büyük",
    "koken": "Eski Türkçe temel akrabalık sözü",
    "baglam": "Soy, aile büyükleri ve atalar bağlamında.",
    "yasak": [
      "Baba",
      "Ecdat",
      "Dede",
      "Geçmiş",
      "Soy"
    ]
  },
  {
    "no": 22,
    "k": "ebe",
    "c": "aile",
    "d": "Oğuzcada anne; bazı tarihî kullanımlarda yaşlı kadın/ata kadın",
    "tdk": "ebe - doğuma yardım eden sağlık görevlisi; ayrıca büyükanne ağızları",
    "koken": "Eski Türkçe akrabalık sözü; DLT'de Oğuzca 'anne' kaydı vardır",
    "baglam": "Lehçe farklılıkları ve anne adlandırmaları anlatılırken.",
    "yasak": [
      "Anne",
      "Büyükanne",
      "Doğum",
      "Nine",
      "Yaşlı"
    ]
  },
  {
    "no": 23,
    "k": "eçe",
    "c": "aile",
    "d": "abla, büyük kız kardeş",
    "tdk": "abla - kendinden büyük kız kardeş",
    "koken": "Eski Türkçe akrabalık adı; çeşitli lehçelerde yaşamıştır",
    "baglam": "Kız kardeşler ve yaşça büyük kadın akrabalar bağlamında.",
    "yasak": [
      "Abla",
      "Kardeş",
      "Büyük",
      "Kız",
      "Akraba"
    ]
  },
  {
    "no": 24,
    "k": "içi",
    "c": "aile",
    "d": "büyük erkek kardeş",
    "tdk": "ağabey - kendinden büyük erkek kardeş",
    "koken": "Eski Türkçe akrabalık adı",
    "baglam": "Erkek kardeşler arasında yaş büyüklüğünü belirtirken.",
    "yasak": [
      "Ağabey",
      "Abi",
      "Büyük",
      "Erkek",
      "Kardeş"
    ]
  },
  {
    "no": 25,
    "k": "ini",
    "c": "aile",
    "d": "küçük erkek kardeş",
    "tdk": "kardeş - aynı anne-babadan olan kimse; burada küçük erkek kardeş",
    "koken": "Eski Türkçe akrabalık adı",
    "baglam": "Yaşça küçük erkek kardeşi ayıran özel adlandırmada.",
    "yasak": [
      "Küçük",
      "Erkek",
      "Kardeş",
      "Bacı",
      "Aile"
    ]
  },
  {
    "no": 26,
    "k": "uya",
    "c": "aile",
    "d": "hısım, kardeş; ayrıca kuş yuvası anlamı da kayıtlıdır",
    "tdk": "hısım / kardeş - akrabalık veya kardeşlik ilişkisi",
    "koken": "Eski Türkçe çok anlamlı söz",
    "baglam": "Akrabalık ve yakınlık bağlamlarında.",
    "yasak": [
      "Akraba",
      "Hısım",
      "Yuva",
      "Yakın",
      "Kardeşlik"
    ]
  },
  {
    "no": 27,
    "k": "ogul",
    "c": "aile",
    "d": "oğul, erkek evlat",
    "tdk": "oğul - erkek çocuk",
    "koken": "Eski Türkçe ogul; Oğuzcada ses gelişmeleriyle oğul",
    "baglam": "Çocuk, soyun sürmesi ve aile ilişkilerinde.",
    "yasak": [
      "Erkek",
      "Çocuk",
      "Evlat",
      "Torun",
      "Baba"
    ]
  },
  {
    "no": 28,
    "k": "kız",
    "c": "aile",
    "d": "kız çocuk; genç kadın",
    "tdk": "kız - dişi çocuk; genç kadın",
    "koken": "Eski Türkçe temel söz",
    "baglam": "Aile, evlilik ve toplumsal hayat bağlamlarında.",
    "yasak": [
      "Dişi",
      "Çocuk",
      "Genç",
      "Kadın",
      "Evlat"
    ]
  },
  {
    "no": 29,
    "k": "uragut",
    "c": "aile",
    "d": "kadın",
    "tdk": "kadın - yetişkin dişi insan",
    "koken": "Eski Türkçe kadın adı; güncel standart dilde yaşamaz",
    "baglam": "Kadın, evlilik ve gündelik hayatla ilgili söz varlığında.",
    "yasak": [
      "Kadın",
      "Dişi",
      "Hanım",
      "Eş",
      "Hatun"
    ]
  },
  {
    "no": 30,
    "k": "er",
    "c": "aile",
    "d": "erkek; adam; yiğit",
    "tdk": "er - erkek; asker; yiğit kimse anlamları",
    "koken": "Eski Türkçe temel söz",
    "baglam": "Kişi, erkeklik, yiğitlik ve askerlik bağlamlarında.",
    "yasak": [
      "Adam",
      "Erkek",
      "Yiğit",
      "Asker",
      "İnsan"
    ]
  },
  {
    "no": 31,
    "k": "alp",
    "c": "savas",
    "d": "yiğit, kahraman",
    "tdk": "alp - yiğit",
    "koken": "Eski Türkçe temel sıfat/ad",
    "baglam": "Savaşçı cesareti ve kahramanlık şiirlerinde.",
    "yasak": [
      "Yiğit",
      "Kahraman",
      "Cesur",
      "Savaşçı",
      "Cengaver"
    ]
  },
  {
    "no": 32,
    "k": "sü",
    "c": "savas",
    "d": "ordu, asker topluluğu",
    "tdk": "ordu - silahlı kuvvetlerin bütünü",
    "koken": "Eski Türkçe temel askerlik sözü",
    "baglam": "Sefer, savaş ve birlik hareketlerinde.",
    "yasak": [
      "Ordu",
      "Asker",
      "Birlik",
      "Sefer",
      "Komutan"
    ]
  },
  {
    "no": 33,
    "k": "çerig",
    "c": "savas",
    "d": "ordu, asker; savaşçı topluluk",
    "tdk": "çeri - tarihî kullanımda asker",
    "koken": "Eski Türkçe askerlik sözü; Türkiye Türkçesinde tarihî 'çeri' izi",
    "baglam": "Ordu birlikleri ve savaş sahnesi anlatılarında.",
    "yasak": [
      "Asker",
      "Ordu",
      "Çeri",
      "Savaşçı",
      "Akıncı"
    ]
  },
  {
    "no": 34,
    "k": "kılıç",
    "c": "savas",
    "d": "kılıç",
    "tdk": "kılıç - uzun, kesici savaş silahı",
    "koken": "Eski Türkçe temel silah adı",
    "baglam": "Yakın dövüş ve savaş teçhizatı bağlamında.",
    "yasak": [
      "Kesici",
      "Kın",
      "Kesmek",
      "Demir",
      "Silah"
    ]
  },
  {
    "no": 35,
    "k": "ok",
    "c": "savas",
    "d": "ok; DLT'de başka anlamları da vardır",
    "tdk": "ok - yayla atılan sivri uçlu silah",
    "koken": "Eski Türkçe temel söz",
    "baglam": "Okçuluk ve savaş yanında DLT'de başka anlam katmanlarıyla da kayıtlıdır.",
    "yasak": [
      "Yay",
      "Atmak",
      "Hedef",
      "Sadak",
      "Sivri"
    ]
  },
  {
    "no": 36,
    "k": "ya",
    "c": "savas",
    "d": "yay (silah)",
    "tdk": "yay - ok atmaya yarayan eğri savaş/araç gereci",
    "koken": "Eski Türkçe ya 'yay'; güncel biçim genişlemiştir",
    "baglam": "Okçuluk ve savaş hazırlığı bağlamında.",
    "yasak": [
      "Ok",
      "Germek",
      "Kiriş",
      "Hedef",
      "Silah"
    ]
  },
  {
    "no": 37,
    "k": "süŋü",
    "c": "savas",
    "d": "mızrak, kargı",
    "tdk": "mızrak - uzun saplı, sivri uçlu silah",
    "koken": "Eski Türkçe silah adı; süngü sözüyle tarihî bağlantı",
    "baglam": "Süvari ve yakın dövüş silahları bağlamında.",
    "yasak": [
      "Mızrak",
      "Süngü",
      "Saplamak",
      "Sivri",
      "Silah"
    ]
  },
  {
    "no": 38,
    "k": "kargı",
    "c": "savas",
    "d": "mızrak yapımında kullanılan kamış; mızrak",
    "tdk": "kargı - uzun saplı delici silah; kamış",
    "koken": "Eski Türkçe söz",
    "baglam": "Mızrak türleri ve savaş gereçleri anlatılırken.",
    "yasak": [
      "Mızrak",
      "Kamış",
      "Silah",
      "Sap",
      "Delici"
    ]
  },
  {
    "no": 39,
    "k": "yarık",
    "c": "savas",
    "d": "zırh, savaşta giyilen koruyucu donanım",
    "tdk": "zırh - savaşta bedeni koruyan metal/sert giysi",
    "koken": "Eski Türkçe askerlik adı; 'yarık'ın bu tarihî anlamı güncel anlamdan ayrıdır",
    "baglam": "Savaşta giyilen koruyucu donanım türleri bağlamında.",
    "yasak": [
      "Zırh",
      "Korunmak",
      "Miğfer",
      "Metal",
      "Çelik"
    ]
  },
  {
    "no": 40,
    "k": "tug",
    "c": "savas",
    "d": "tuğ, hükümdarlık/askeri alamet",
    "tdk": "tuğ - sancak türü, tarihî egemenlik alameti",
    "koken": "Eski Türkçe tarihî alamet adı",
    "baglam": "Ordu, hakan otağı ve siyasi-askeri temsil bağlamında.",
    "yasak": [
      "Sancak",
      "Bayrak",
      "At Kuyruğu",
      "Otağ",
      "Alamet"
    ]
  },
  {
    "no": 41,
    "k": "at",
    "c": "hayvan",
    "d": "at, binek hayvanı",
    "tdk": "at - binek ve yük hayvanı",
    "koken": "Eski Türkçe temel hayvan adı",
    "baglam": "Binek, savaş, ulaşım ve atçılık söz varlığında.",
    "yasak": [
      "Binek",
      "Koşmak",
      "Yele",
      "Nal",
      "Süvari"
    ]
  },
  {
    "no": 42,
    "k": "aygır",
    "c": "hayvan",
    "d": "erkek at",
    "tdk": "aygır - damızlık erkek at",
    "koken": "Eski Türkçe hayvan adı",
    "baglam": "At sürüsü, damızlık ve bahar tasvirlerinde.",
    "yasak": [
      "Erkek",
      "At",
      "Kısrak",
      "Damızlık",
      "Hayvan"
    ]
  },
  {
    "no": 43,
    "k": "kısrak",
    "c": "hayvan",
    "d": "dişi at",
    "tdk": "kısrak - dişi at",
    "koken": "Eski Türkçe hayvan adı",
    "baglam": "At yetiştiriciliği ve süt/kımız kültürü bağlamında.",
    "yasak": [
      "Dişi",
      "At",
      "Süt",
      "Kımız",
      "Tay"
    ]
  },
  {
    "no": 44,
    "k": "tay",
    "c": "hayvan",
    "d": "at yavrusu",
    "tdk": "tay - at yavrusu",
    "koken": "Eski Türkçe temel söz",
    "baglam": "Atların yaş ve gelişim dönemleri anlatılırken.",
    "yasak": [
      "Yavru",
      "At",
      "Küçük",
      "Büyümek",
      "Kısrak"
    ]
  },
  {
    "no": 45,
    "k": "yılkı",
    "c": "hayvan",
    "d": "at sürüsü; başıboş otlayan at topluluğu",
    "tdk": "yılkı - otlağa bırakılan at sürüsü",
    "koken": "Eski Türkçe hayvancılık sözü",
    "baglam": "Sürü yönetimi ve bozkır atçılığı bağlamında.",
    "yasak": [
      "At",
      "Sürü",
      "Bozkır",
      "Başıboş",
      "Yabani"
    ]
  },
  {
    "no": 46,
    "k": "böri",
    "c": "hayvan",
    "d": "kurt",
    "tdk": "kurt - köpekgillerden yırtıcı hayvan",
    "koken": "Eski Türkçe temel hayvan adı",
    "baglam": "Av, doğa ve atasözü/benzetme bağlamlarında.",
    "yasak": [
      "Kurt",
      "Ulumak",
      "Bozkurt",
      "Yırtıcı",
      "Sürü"
    ]
  },
  {
    "no": 47,
    "k": "adıg",
    "c": "hayvan",
    "d": "ayı",
    "tdk": "ayı - iri, yırtıcı memeli",
    "koken": "Eski Türkçe tarihî biçim; ayı ile ses tarihî bakımından ilişkilidir",
    "baglam": "Avcılık ve yaban hayvanları bağlamında.",
    "yasak": [
      "Ayı",
      "Pençe",
      "Kış Uykusu",
      "Orman",
      "Bal"
    ]
  },
  {
    "no": 48,
    "k": "ud",
    "c": "hayvan",
    "d": "sığır / öküz anlam alanı",
    "tdk": "sığır - büyükbaş evcil hayvanların genel adı",
    "koken": "Tarihî hayvan adı; lehçelere göre karşılıklar çeşitlenir",
    "baglam": "Büyükbaş hayvancılık ve sürü söz varlığında.",
    "yasak": [
      "Öküz",
      "Boğa",
      "Sığır",
      "Çift Sürmek",
      "Hayvan"
    ]
  },
  {
    "no": 49,
    "k": "buka",
    "c": "hayvan",
    "d": "boğa",
    "tdk": "boğa - damızlık erkek sığır",
    "koken": "Eski Türkçe tarihî biçim; boğa ile sesteş bağlantılı",
    "baglam": "Sığır yetiştiriciliği ve damızlık bağlamında.",
    "yasak": [
      "Boğa",
      "Boynuz",
      "Öküz",
      "Güçlü",
      "Güreş"
    ]
  },
  {
    "no": 50,
    "k": "buzagu",
    "c": "hayvan",
    "d": "buzağı",
    "tdk": "buzağı - sığır yavrusu",
    "koken": "Eski Türkçe buzagu > buzağı ses gelişimi",
    "baglam": "Büyükbaş hayvan yavruları ve sürü hayatında.",
    "yasak": [
      "Buzağı",
      "İnek",
      "Yavru",
      "Süt",
      "Dana"
    ]
  },
  {
    "no": 51,
    "k": "aş",
    "c": "mutfak",
    "d": "yemek, yiyecek",
    "tdk": "aş - yemek, özellikle pişmiş yemek",
    "koken": "Eski Türkçe temel söz",
    "baglam": "Sofra, ikram ve beslenme bağlamlarında.",
    "yasak": [
      "Yemek",
      "Pişirmek",
      "Tencere",
      "Çorba",
      "Sofra"
    ]
  },
  {
    "no": 52,
    "k": "azuk",
    "c": "mutfak",
    "d": "azık, yol yiyeceği",
    "tdk": "azık - yolculuk için hazırlanan yiyecek",
    "koken": "Eski Türkçe azuk > azık ses gelişimi",
    "baglam": "Yolculuk, sefer ve yiyecek hazırlığı bağlamında.",
    "yasak": [
      "Kumanya",
      "Yol",
      "Yiyecek",
      "Çıkın",
      "Sefer"
    ]
  },
  {
    "no": 53,
    "k": "kagut",
    "c": "mutfak",
    "d": "darıdan hazırlanıp yağ ve şekerle karıştırılan yiyecek",
    "tdk": "kavut - kavrulmuş/dövülmüş tahıldan yapılan yiyecek",
    "koken": "Tarihî kagut/kavut varyantları; tahıl yemeği adı",
    "baglam": "DLT açıklamasında yeni doğuran kadınlara verilen besleyici yiyecek olarak anılır.",
    "yasak": [
      "Darı",
      "Kavut",
      "Tatlı",
      "Helva",
      "Yemek"
    ]
  },
  {
    "no": 54,
    "k": "kömeç",
    "c": "mutfak",
    "d": "küle gömülerek pişirilen yuvarlak/mayasız ekmek",
    "tdk": "ekmek - undan yapılan temel yiyecek; kömeç ağızlarda sürer",
    "koken": "Tarihî ekmek adı; köm- (göm-) anlam alanıyla ilişkilendirilir",
    "baglam": "Pişirme yöntemiyle adlandırılan ekmek çeşitleri arasında.",
    "yasak": [
      "Ekmek",
      "Kül",
      "Köz",
      "Pişirmek",
      "Hamur"
    ]
  },
  {
    "no": 55,
    "k": "kuyma",
    "c": "mutfak",
    "d": "yağda pişirilen, üzerine şeker konan ince hamurlu ekmek/yemek",
    "tdk": "kuymak - yörelere göre farklı unlu yemekler",
    "koken": "ku- /kuy- 'dökmek' fiil alanıyla ilişkilendirilen türemiş ad",
    "baglam": "DLT'de tatlı nitelikli bir yağlı ekmek/yemek olarak açıklanır.",
    "yasak": [
      "Tava",
      "Yağ",
      "Hamur",
      "Kuymak",
      "Tatlı"
    ]
  },
  {
    "no": 56,
    "k": "tokaç",
    "c": "mutfak",
    "d": "yuvarlak ve yassı ekmek",
    "tdk": "ekmek / pide - yassı ekmek karşılığı",
    "koken": "Tarihî ekmek adı; yapısı üzerine farklı açıklamalar vardır",
    "baglam": "Ekmek çeşitleri ve pişirme biçimleri söz varlığında.",
    "yasak": [
      "Ekmek",
      "Yassı",
      "Pide",
      "Hamur",
      "Fırın"
    ]
  },
  {
    "no": 57,
    "k": "yuvka",
    "c": "mutfak",
    "d": "ince ekmek",
    "tdk": "yufka - ince açılmış hamur veya ince ekmek",
    "koken": "Eski Türkçe yuvka > yufka (v > f) ses gelişimi",
    "baglam": "İnce açılmış ekmek ve sefer yiyeceği bağlamlarında.",
    "yasak": [
      "Hamur",
      "İnce",
      "Oklava",
      "Börek",
      "Sac"
    ]
  },
  {
    "no": 58,
    "k": "kurut",
    "c": "mutfak",
    "d": "kurutulmuş yoğurt/peynir ürünü",
    "tdk": "kurut - kurutulmuş yoğurt ürünü",
    "koken": "kuru- (kurut-) köküyle açık bağlantılı",
    "baglam": "Uzun süre saklanabilen süt ürünü ve göçer beslenmesinde.",
    "yasak": [
      "Yoğurt",
      "Kurutmak",
      "Peynir",
      "Kışlık",
      "Ekşi"
    ]
  },
  {
    "no": 59,
    "k": "kımız",
    "c": "mutfak",
    "d": "kısrak sütünden mayalanmış içecek",
    "tdk": "kımız - mayalanmış kısrak sütü içeceği",
    "koken": "Eski Türkçe içecek adı; iç yapısı kesin değildir",
    "baglam": "Atçılık, süt ürünleri ve içecek kültürü bağlamında.",
    "yasak": [
      "Kısrak",
      "Süt",
      "İçecek",
      "Mayalı",
      "Orta Asya"
    ]
  },
  {
    "no": 60,
    "k": "süt",
    "c": "mutfak",
    "d": "süt",
    "tdk": "süt - memelilerin yavrularını besleyen beyaz sıvı",
    "koken": "Eski Türkçe temel söz",
    "baglam": "Hayvancılık, içecek ve süt ürünleri bağlamında.",
    "yasak": [
      "Beyaz",
      "İnek",
      "İçmek",
      "Yoğurt",
      "Sağmak"
    ]
  },
  {
    "no": 61,
    "k": "aba",
    "c": "esya",
    "d": "kalın yünlü kumaş / bu kumaştan üstlük",
    "tdk": "aba - kaba ve kalın yünlü kumaş; bu kumaştan giysi",
    "koken": "Çok eski giyim adı; kökeni üzerine farklı görüşler vardır",
    "baglam": "Soğuk iklim üstlüğü ve kumaş adları bağlamında.",
    "yasak": [
      "Kumaş",
      "Yün",
      "Hırka",
      "Giysi",
      "Kalın"
    ]
  },
  {
    "no": 62,
    "k": "başmak",
    "c": "esya",
    "d": "ayakkabı, pabuç",
    "tdk": "ayakkabı - ayağı koruyan giyim eşyası",
    "koken": "Eski Türkçe giyim adı; yapısı konusunda farklı görüşler vardır",
    "baglam": "Ayak giyimi ve gündelik giyim bağlamında.",
    "yasak": [
      "Ayakkabı",
      "Pabuç",
      "Ayak",
      "Giymek",
      "Çarık"
    ]
  },
  {
    "no": 63,
    "k": "börk",
    "c": "esya",
    "d": "başlık, külah",
    "tdk": "börk - tarihî başlık adı; güncel standartta sınırlı",
    "koken": "Eski Türkçe giyim adı",
    "baglam": "Baş giyimi, kimlik ve görünüş bağlamında.",
    "yasak": [
      "Şapka",
      "Başlık",
      "Kalpak",
      "Kürk",
      "Kafa"
    ]
  },
  {
    "no": 64,
    "k": "bürüncük",
    "c": "esya",
    "d": "ince örtü; kadın baş örtüsü",
    "tdk": "başörtüsü - başı örten giysi",
    "koken": "bürün- fiiliyle bağlantılı türemiş ad",
    "baglam": "Örtünme, kumaş ve kadın giyimi bağlamında.",
    "yasak": [
      "İpek",
      "Kumaş",
      "Örtü",
      "Başörtüsü",
      "Şal"
    ]
  },
  {
    "no": 65,
    "k": "çaruk",
    "c": "esya",
    "d": "çarık",
    "tdk": "çarık - ham deriden yapılan bağcıklı ayakkabı",
    "koken": "Eski Türkçe çaruk > çarık ses gelişimi",
    "baglam": "Deri ayakkabı ve yolculuk/gündelik giyim bağlamında.",
    "yasak": [
      "Ayakkabı",
      "Deri",
      "Kösele",
      "Bağcık",
      "Giymek"
    ]
  },
  {
    "no": 66,
    "k": "eliglik",
    "c": "esya",
    "d": "eldiven",
    "tdk": "eldiven - eli örten, koruyan giyim eşyası",
    "koken": "elig 'el' + -lik; işlev adı açık biçimde türetilmiş",
    "baglam": "Kişisel giyim ve soğuktan korunma bağlamında.",
    "yasak": [
      "Eldiven",
      "El",
      "Parmak",
      "Soğuk",
      "Giymek"
    ]
  },
  {
    "no": 67,
    "k": "etük",
    "c": "esya",
    "d": "çizme / ayakkabı türü",
    "tdk": "çizme - uzun konçlu ayakkabı",
    "koken": "Eski Türkçe giyim adı; çağdaş lehçelerde çeşitli biçimleri vardır",
    "baglam": "Ayak giyimi ve yolculuk/atçılık bağlamında.",
    "yasak": [
      "Çizme",
      "Ayak",
      "Deri",
      "Konç",
      "Binici"
    ]
  },
  {
    "no": 68,
    "k": "ületü",
    "c": "esya",
    "d": "ipek mendil",
    "tdk": "mendil - el/yüz/burun silmeye yarayan küçük bez",
    "koken": "Tarihî eşya adı; kökeni kesin değildir",
    "baglam": "Kaşgarlı, erkeğin cebinde taşıdığı ipek mendil olarak açıklar.",
    "yasak": [
      "Mendil",
      "İpek",
      "Cep",
      "Silmek",
      "Kumaş"
    ]
  },
  {
    "no": 69,
    "k": "suvluk",
    "c": "esya",
    "d": "havlu",
    "tdk": "havlu - kurulanmaya yarayan dokuma",
    "koken": "suv 'su' + -luk; işlev adı",
    "baglam": "El, yüz ve vücuttaki suyu kurutmak için kullanılan eşya olarak açıklanır.",
    "yasak": [
      "Havlu",
      "Kurulanmak",
      "Su",
      "Banyo",
      "Bez"
    ]
  },
  {
    "no": 70,
    "k": "ütüg",
    "c": "esya",
    "d": "ütü; ısıtılıp giysi kırışıklığını gideren demir",
    "tdk": "ütü - giysi kırışıklığını düzeltmeye yarayan ısıtıcı araç",
    "koken": "ütüg > ütü; sondaki /g/ düşmesi TDK tarafından açıklanır",
    "baglam": "Giysilerin ütülenmesi ve bakım kültürü bağlamında.",
    "yasak": [
      "Ütü",
      "Kırışık",
      "Sıcak",
      "Elbise",
      "Düzeltmek"
    ]
  },
  {
    "no": 71,
    "k": "tag",
    "c": "doga",
    "d": "dağ",
    "tdk": "dağ - çevresine göre yüksek yer şekli",
    "koken": "Eski Türkçe tag > dağ; Oğuzca ses gelişimi",
    "baglam": "Yer şekilleri, yol ve coğrafi tariflerde.",
    "yasak": [
      "Dağ",
      "Zirve",
      "Tepe",
      "Yüksek",
      "Kaya"
    ]
  },
  {
    "no": 72,
    "k": "suv",
    "c": "doga",
    "d": "su",
    "tdk": "su - renksiz, kokusuz temel sıvı",
    "koken": "Eski Türkçe suv > su; son ünsüzün düşmesi",
    "baglam": "Irmak, içme suyu ve yolculuk anlatılarında.",
    "yasak": [
      "Sıvı",
      "İçmek",
      "Nehir",
      "Deniz",
      "Akarsu"
    ]
  },
  {
    "no": 73,
    "k": "ögüz",
    "c": "doga",
    "d": "ırmak, büyük akarsu",
    "tdk": "nehir / ırmak - büyük akarsu",
    "koken": "Eski Türkçe coğrafya adı; güncel standartta aynı biçimle yaşamaz",
    "baglam": "Büyük akarsuların ve geçiş güzergâhlarının anlatımında.",
    "yasak": [
      "Irmak",
      "Nehir",
      "Akarsu",
      "Dere",
      "Su"
    ]
  },
  {
    "no": 74,
    "k": "bulıt",
    "c": "doga",
    "d": "bulut",
    "tdk": "bulut - atmosferdeki su damlacıkları/buz kristalleri kümesi",
    "koken": "Eski Türkçe bulıt > bulut ses gelişimi",
    "baglam": "Hava olayları, şiir ve mevsim tasvirlerinde.",
    "yasak": [
      "Bulut",
      "Gökyüzü",
      "Yağmur",
      "Beyaz",
      "Hava"
    ]
  },
  {
    "no": 75,
    "k": "yel",
    "c": "doga",
    "d": "rüzgâr, yel",
    "tdk": "yel - rüzgâr",
    "koken": "Eski Türkçe temel doğa sözü",
    "baglam": "Hava olayları, yön ve hastalık inanışları bağlamında.",
    "yasak": [
      "Rüzgâr",
      "Esinti",
      "Hava",
      "Fırtına",
      "Esmek"
    ]
  },
  {
    "no": 76,
    "k": "kar",
    "c": "doga",
    "d": "kar",
    "tdk": "kar - donmuş su kristallerinden yağış",
    "koken": "Eski Türkçe temel söz",
    "baglam": "Kış ve iklim tasvirlerinde.",
    "yasak": [
      "Beyaz",
      "Kış",
      "Soğuk",
      "Buz",
      "Yağmak"
    ]
  },
  {
    "no": 77,
    "k": "buz",
    "c": "doga",
    "d": "buz",
    "tdk": "buz - donmuş su",
    "koken": "Eski Türkçe temel söz",
    "baglam": "Soğuk, kış ve doğal çevre anlatılarında.",
    "yasak": [
      "Donmak",
      "Soğuk",
      "Kar",
      "Su",
      "Sert"
    ]
  },
  {
    "no": 78,
    "k": "kök",
    "c": "doga",
    "d": "gök, gökyüzü; gök rengi",
    "tdk": "gök - gökyüzü; maviye/yeşile yakın renk alanı",
    "koken": "Eski Türkçe kök > gök ses gelişimi (Oğuzca k > g)",
    "baglam": "Gökyüzü, renk ve yön/kozmoloji bağlamlarında.",
    "yasak": [
      "Gökyüzü",
      "Mavi",
      "Bulut",
      "Hava",
      "Uzay"
    ]
  },
  {
    "no": 79,
    "k": "kış",
    "c": "doga",
    "d": "kış mevsimi",
    "tdk": "kış - yılın en soğuk mevsimi",
    "koken": "Eski Türkçe temel mevsim adı",
    "baglam": "Mevsim tasvirleri ve kış-yaz karşılaştırmalarında.",
    "yasak": [
      "Mevsim",
      "Soğuk",
      "Kar",
      "Ayaz",
      "Ocak"
    ]
  },
  {
    "no": 80,
    "k": "yay",
    "c": "doga",
    "d": "ilkbahar/yaz; DLT'de kullanımı bağlama göre değişebilir",
    "tdk": "yaz / ilkbahar - sıcak mevsim veya bahar başlangıcı",
    "koken": "Eski Türkçe mevsim adı; tarihî metinlerde yaz/yay ayrımı değişkendir",
    "baglam": "Mevsimlerin karşılaştırıldığı şiirsel ve takvimsel bağlamlarda.",
    "yasak": [
      "Mevsim",
      "Sıcak",
      "Güneş",
      "Yayla",
      "Yaz"
    ]
  },
  {
    "no": 81,
    "k": "tarıg",
    "c": "tarim",
    "d": "ekin, tahıl; ekilmiş ürün",
    "tdk": "tahıl - buğday, arpa vb. taneli ürünlerin genel adı",
    "koken": "tarı- 'ekmek' fiiliyle bağlantılı tarihî ad",
    "baglam": "Ekim, ürün ve tarla hayatı bağlamında.",
    "yasak": [
      "Ekin",
      "Tarım",
      "Hasat",
      "Toprak",
      "Buğday"
    ]
  },
  {
    "no": 82,
    "k": "arpa",
    "c": "tarim",
    "d": "arpa",
    "tdk": "arpa - bir tahıl bitkisi ve tanesi",
    "koken": "Eski Türkçe temel tarım sözü",
    "baglam": "Tarla, yem ve tahıl ürünleri bağlamında.",
    "yasak": [
      "Tahıl",
      "Buğday",
      "Ekin",
      "At Yemi",
      "Başak"
    ]
  },
  {
    "no": 83,
    "k": "bugday",
    "c": "tarim",
    "d": "buğday",
    "tdk": "buğday - temel tahıl bitkisi ve tanesi",
    "koken": "Eski Türkçe tarihî biçim; bugday > buğday ses gelişimi",
    "baglam": "Un, ekmek ve tarla üretimi bağlamında.",
    "yasak": [
      "Un",
      "Ekmek",
      "Başak",
      "Değirmen",
      "Tahıl"
    ]
  },
  {
    "no": 84,
    "k": "saban",
    "c": "tarim",
    "d": "saban, toprağı sürme aracı",
    "tdk": "saban - toprağı sürmeye yarayan tarım aracı",
    "koken": "Tarihî tarım aracı adı; köken tartışmaları vardır",
    "baglam": "Toprak sürme ve ekime hazırlık bağlamında.",
    "yasak": [
      "Çift Sürmek",
      "Tarla",
      "Öküz",
      "Toprak",
      "Çiftçi"
    ]
  },
  {
    "no": 85,
    "k": "orgak",
    "c": "tarim",
    "d": "orak",
    "tdk": "orak - ekin biçmeye yarayan eğri bıçaklı araç",
    "koken": "Eski Türkçe orgak > orak; ses düşmesiyle gelişen biçim",
    "baglam": "Hasat ve ekin biçme bağlamında.",
    "yasak": [
      "Orak",
      "Ekin",
      "Biçmek",
      "Hilal",
      "Hasat"
    ]
  },
  {
    "no": 86,
    "k": "satıg",
    "c": "tarim",
    "d": "satış, satma işi; ticaret",
    "tdk": "satış - bir malı para/değer karşılığında verme işi",
    "koken": "sat- fiili + tarihî ad yapım eki",
    "baglam": "Pazar, mal değişimi ve ticari işlem bağlamlarında.",
    "yasak": [
      "Alışveriş",
      "Ticaret",
      "Pazar",
      "Para",
      "Satmak"
    ]
  },
  {
    "no": 87,
    "k": "alım",
    "c": "tarim",
    "d": "alacak; alma hakkı/işi",
    "tdk": "alacak - birinden alınması gereken para/mal",
    "koken": "al- fiilinden türemiş ad; tarihî anlam ile güncel 'alım' ayrışmıştır",
    "baglam": "Borç-alacak ve alışveriş ilişkilerinde.",
    "yasak": [
      "Almak",
      "Borç",
      "Ticaret",
      "Pazar",
      "Alacak"
    ]
  },
  {
    "no": 88,
    "k": "ülüş",
    "c": "tarim",
    "d": "pay, hisse",
    "tdk": "pay - bölüşülen şeyden düşen bölüm",
    "koken": "ül- 'bölmek' köküyle ilişkilendirilen tarihî ad",
    "baglam": "Miras, paylaşım ve topluluk içinde bölüştürme bağlamlarında.",
    "yasak": [
      "Pay",
      "Hisse",
      "Bölüşmek",
      "Nasip",
      "Parça"
    ]
  },
  {
    "no": 89,
    "k": "asıg",
    "c": "tarim",
    "d": "fayda, yarar; kazanç",
    "tdk": "fayda - yarar, kazanç sağlayan sonuç",
    "koken": "Eski Türkçe temel/erken dönem söz; güncel standartta yaşamaz",
    "baglam": "Ticaret, iş ve yarar-zarar değerlendirmelerinde.",
    "yasak": [
      "Kazanç",
      "Kâr",
      "Fayda",
      "Yarar",
      "Gelir"
    ]
  },
  {
    "no": 90,
    "k": "emgek",
    "c": "tarim",
    "d": "emek, zahmet, sıkıntı",
    "tdk": "emek - bir iş için harcanan beden/zihin gücü",
    "koken": "Eski Türkçe emgek > emek; iç ünsüz kümesinde sadeleşme",
    "baglam": "Çalışma, çaba, güçlük ve karşılık ilişkilerinde.",
    "yasak": [
      "Emek",
      "Zahmet",
      "Çaba",
      "Alınteri",
      "Zorluk"
    ]
  },
  {
    "no": 91,
    "k": "erdem",
    "c": "inanc",
    "d": "erdem, üstün nitelik, fazilet",
    "tdk": "erdem - ahlaki bakımdan iyi ve değerli nitelik",
    "koken": "Eski Türkçe temel değer sözü",
    "baglam": "İyi insan, davranış ve toplumsal övgü bağlamlarında.",
    "yasak": [
      "Fazilet",
      "Ahlak",
      "İyilik",
      "Dürüstlük",
      "Değer"
    ]
  },
  {
    "no": 92,
    "k": "kut",
    "c": "inanc",
    "d": "uğur, talih; kutsal/egemenlik veren güç",
    "tdk": "kut - uğur, mutluluk; tarihî olarak devlet ve talih kavramı",
    "koken": "Eski Türkçe temel kültür-siyaset sözü",
    "baglam": "Talih, meşruiyet, saadet ve hükümdarlık düşüncesinde.",
    "yasak": [
      "Uğur",
      "Baht",
      "Şans",
      "Kutsal",
      "Egemenlik"
    ]
  },
  {
    "no": 93,
    "k": "uvut",
    "c": "inanc",
    "d": "utanma, haya, edep",
    "tdk": "utanma / haya - mahcubiyet ve ölçülülük duygusu",
    "koken": "Eski Türkçe uvut; tarihî bir ahlak terimi",
    "baglam": "Ahlak, görgü ve kişinin kendini sınırlaması bağlamında.",
    "yasak": [
      "Utanmak",
      "Ar",
      "Haya",
      "Ayıp",
      "Mahcup"
    ]
  },
  {
    "no": 94,
    "k": "ıduk",
    "c": "inanc",
    "d": "kutsal, mukaddes; adanmış",
    "tdk": "kutsal - dinî/manevi bakımdan dokunulmaz sayılan",
    "koken": "Eski Türkçe ıduk; ıd-'göndermek, salmak' köküyle ilişkilendirilir",
    "baglam": "Kutsallık, adama ve inanç alanındaki kullanımlarda.",
    "yasak": [
      "Kutsal",
      "Adak",
      "Tanrı",
      "Mübarek",
      "Hürmet"
    ]
  },
  {
    "no": 95,
    "k": "tengri",
    "c": "inanc",
    "d": "Tanrı; gök",
    "tdk": "Tanrı - yaratıcı, ilahi varlık",
    "koken": "Eski Türkçe teŋri/tengri; çok eski inanç ve gök terimi",
    "baglam": "İnanç, dua, kader ve kozmoloji bağlamlarında.",
    "yasak": [
      "Tanrı",
      "Allah",
      "Gök",
      "Yaratıcı",
      "İbadet"
    ]
  },
  {
    "no": 96,
    "k": "uçmak",
    "c": "inanc",
    "d": "cennet",
    "tdk": "cennet - ölümden sonra iyilerin bulunduğuna inanılan yer",
    "koken": "Tarihî Türkçe dinî terim; uç- fiiliyle ilişkisi tartışılmıştır",
    "baglam": "İslami inanç çevresinde cennet karşılığı olarak.",
    "yasak": [
      "Cennet",
      "Öbür Dünya",
      "Ruh",
      "Uçmak",
      "Melek"
    ]
  },
  {
    "no": 97,
    "k": "yog",
    "c": "inanc",
    "d": "ölü için verilen yemek / anma töreni",
    "tdk": "yas - ölüm dolayısıyla duyulan acı ve törenler",
    "koken": "Eski Türkçe tören adı",
    "baglam": "DLT'de ölü için yemek verme geleneği açık biçimde anlatılır.",
    "yasak": [
      "Cenaze",
      "Yas",
      "Matem",
      "Tören",
      "Ağıt"
    ]
  },
  {
    "no": 98,
    "k": "toy",
    "c": "inanc",
    "d": "şölen, ziyafet, toplu yemek",
    "tdk": "şölen - kalabalık eğlence/ziyafet; düğünle de ilişkili",
    "koken": "Eski Türkçe toplumsal tören adı",
    "baglam": "Toplu yemek, kutlama ve topluluk buluşmalarında.",
    "yasak": [
      "Şölen",
      "Ziyafet",
      "Bayram",
      "Düğün",
      "Yemek"
    ]
  },
  {
    "no": 99,
    "k": "tepük",
    "c": "inanc",
    "d": "ayakla vurularak oynanan, yuvarlak oyun nesnesi/oyun",
    "tdk": "top - oyunlarda kullanılan yuvarlak nesne",
    "koken": "tep- 'vurmak/tekmelemek' kökü + -ük; TDK açıklamasıyla şeffaf türetme",
    "baglam": "Çocukların ayakla vurarak oynadığı oyun anlatımında.",
    "yasak": [
      "Futbol",
      "Top",
      "Ayak",
      "Tekme",
      "Oyun"
    ]
  },
  {
    "no": 100,
    "k": "sewinç",
    "c": "inanc",
    "d": "sevinç, mutluluk",
    "tdk": "sevinç - istenen bir durum karşısındaki hoş duygu",
    "koken": "sevin-/sewin- fiili + ad yapım eki; tarihî w > güncel v devamlılığı",
    "baglam": "Duygu, şiir ve sevinme/pişmanlık karşıtlığı bağlamlarında.",
    "yasak": [
      "Neşe",
      "Mutluluk",
      "Gülmek",
      "Keyif",
      "Bayram"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DLT_CATEGORIES, WORDS };
}
