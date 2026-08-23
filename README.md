# Modern Glassmorphism Linktree / Profil Sitesi

Bu proje, Linktree mantığında çalışan; modern, glassmorphism tasarımlı, koyu kırmızı/siyah temalı, responsive ve tamamen `data/data.json` üzerinden yönetilebilen kişisel profil ve bağlantı sitesidir.

---

## 📌 Özellikler

* 💎 **Glassmorphism & Crimson Tema**: Derin siyah arka plan, koyu kırmızı parıltılar (glow) ve cam efekti kartlar.
* 📱 **Tam Responsive Yapı**: Mobil, tablet ve masaüstü cihazlar için optimize edilmiş görünüm.
* ⚡ **Dinamik JSON Altyapısı**: Kod değiştirmeden profil, bağlantılar, menü ve ayarları `data/data.json` dosyasından güncelleme.
* 🚀 **SPA Mantığında Sayfa Geçişleri**: Yumuşak sayfa geçişleri (`#home`, `#projects`, `#sponsors`).
* 🍔 **Hamburger Menü & Sidebar**: Yumuşak açılış animasyonu, klavye (ESC) desteği ve overlay.
* 🎨 **Tema Değiştirme**: Dark/Light veya Crimson tema desteği, `localStorage` ile tercih kaydı.
* ♿ **Erişilebilirlik (a11y)**: Semantic HTML, aria etiketleri, focus göstergeleri ve klavye gezintisi.

---

## 📂 Dosya Yapısı

```text
/
├── index.html         # Ana HTML5 şablonu ve SPA bölümleri
├── style.css          # Glassmorphism, animasyonlar ve responsive CSS3 stilleri
├── script.js          # Veri yükleme, render etme, routing ve UI etkileşimleri
├── README.md          # Detaylı dokümantasyon ve kullanım kılavuzu
├── data/
│   └── data.json      # Profil, linkler, menü ve içerik verileri
└── assets/
    └── avatar.png     # Kullanıcı profil fotoğrafı
```

---

## 🚀 Kurulum ve Çalıştırma

Site tamamen statik (HTML/CSS/JS) yapıda olduğu için karmaşık bir derleme adımına ihtiyaç duymaz.

### Yerel Sunucuda Çalıştırma (Önerilen)

`data.json` dosyasının `fetch()` API ile düzgün okunabilmesi için sitenin bir yerel HTTP sunucusu üzerinden açılması önerilir:

#### Python ile:
```bash
python3 -m http.server 8000
```
Ardından tarayıcınızda `http://localhost:8000` adresine gidin.

#### Node.js (npx serve) ile:
```bash
npx serve .
```

#### VS Code Live Server ile:
VS Code içerisinde `Live Server` eklentisini kullanarak `index.html` dosyasını sağ tıklayıp **"Open with Live Server"** seçeneğiyle çalıştırabilirsiniz.

---

## ⚙️ `data/data.json` Kullanım Kılavuzu

Sitenin tüm içeriği `data/data.json` dosyası üzerinden yönetilir. HTML veya JS kodlarını değiştirmenize gerek kalmaz.

### 1. `data.json` Nerede?
Dosya proje dizininde `data/` klasörünün içindedir: `data/data.json`.

---

### 2. Profil Bilgilerini Değiştirme

`profile` objesi içindeki alanları kendi bilgilerinize göre güncelleyin:

```json
"profile": {
  "name": "Yuşa Yalın",
  "username": "@yusayalin",
  "bio": "Yazılım geliştirici, içerik üreticisi ve teknoloji meraklısı.",
  "avatar": "assets/avatar.png",
  "verified": true
}
```

* **`name`**: Sitede görünecek ana adınız/soyadınız.
* **`username`**: Kullanıcı adınız (örn: `@kullanici`).
* **`bio`**: Profilinizin altında görünecek kısa açıklama.
* **`avatar`**: Profil fotoğrafınızın dosya yolu veya web adresi.
* **`verified`**: `true` yapılırsa isminizin yanında onaylı rozet (mavi/kırmızı tik) görünür.

---

### 3. Profil Fotoğrafını Değiştirme

1. Yeni profil fotoğrafınızı `assets/` klasörünün içine yerleştirin (örneğin `assets/yeni-foto.png`).
2. `data/data.json` dosyasındaki `"avatar"` alanını yeni dosya yoluyla güncelleyin:
   ```json
   "avatar": "assets/yeni-foto.png"
   ```
3. İsterseniz doğrudan bir internet resim bağlantısı da (`https://.../resim.jpg`) kullanabilirsiniz.

---

### 4. Yeni Link Ekleme

`links` dizisine yeni bir obje ekleyerek anında yeni bir bağlantı kartı oluşturabilirsiniz.

**Örnek - Discord Ekleme:**

```json
{
  "title": "Discord",
  "description": "Discord Topluluk Sunucumuz",
  "url": "https://discord.gg/ornek-link",
  "icon": "discord",
  "image": ""
}
```

**Eklendikten sonra `links` dizisinin görünümü:**

```json
"links": [
  {
    "title": "GitHub",
    "description": "Açık kaynak projelerim ve kod depolarım",
    "url": "https://github.com/",
    "icon": "github"
  },
  {
    "title": "Discord",
    "description": "Discord Topluluk Sunucumuz",
    "url": "https://discord.gg/ornek-link",
    "icon": "discord"
  }
]
```

---

### 5. Link Silme

Silmek istediğiniz link objesini `links` dizisinden tamamen kaldırın.

**Dikkat:** Objeler arasındaki virgüllere (`,`) dikkat edin. Son objeden sonra virgül koyulmamalıdır.

---

### 6. Menü / Gezinme Sistemi

Hamburger menüde ve sidebar üzerinde yer alan bağlantılar `navigation` dizisinden çekilir:

```json
"navigation": [
  {
    "title": "Ana Sayfa",
    "url": "#home",
    "icon": "home"
  },
  {
    "title": "Projeler",
    "url": "#projects",
    "icon": "folder"
  },
  {
    "title": "Sponsorlar",
    "url": "#sponsors",
    "icon": "heart"
  }
]
```

`#home`, `#projects`, `#sponsors` gibi hash değerleri SPA geçişini otomatik yönetir.

---

### 7. Gelecekte Proje ve Sponsor Ekleme

Şu an Projeler ve Sponsorlar sayfalarında modern placeholder ekranları bulunmaktadır. İleride bu bölümleri dinamik karta dönüştürmek isterseniz `data.json` dosyasına aşağıdaki yapıları ekleyebilirsiniz:

#### Projeler Yapısı Örneği (`projects`):
```json
"projects": [
  {
    "title": "Linktree Klonu",
    "description": "Glassmorphism kişisel profil sitesi projesi.",
    "url": "https://github.com/...",
    "tech": ["HTML5", "CSS3", "JavaScript"],
    "stars": 42
  }
]
```

#### Sponsorlar Yapısı Örneği (`sponsors`):
```json
"sponsors": [
  {
    "name": "Sponsor Şirket A",
    "tier": "Gold Sponsor",
    "logo": "assets/sponsor-a.png",
    "url": "https://example.com"
  }
]
```

---

## ⚠️ ÖNEMLİ UYARI: JSON Formatı

`data/data.json` dosyasını düzenlerken **JSON sözdizimi kurallarına** çok dikkat edilmelidir:

1. **Virgül Hataları**: Son elemandan sonra ekstra virgül (`,`) bırakmayın.
2. **Çift Tırnak**: Bütün anahtar (key) ve metin (string) değerleri **çift tırnak (`"`)** içinde yazılmalıdır. Tek tırnak (`'`) kullanmayın.
3. **Parantez Uyumu**: Açılan her süslü parantez `{` ve köşeli parantez `[` mutlaka kapatılmalıdır.

Eğer JSON dosyasında bir sözdizimi hatası olursa, sitede modern bir **"Profil verileri yüklenemedi"** hata bildirimi gösterilir ve konsola detaylı hata kaydı yazılır.

---

## 📄 Lisans

Bu proje kişisel ve ticari kullanım için serbesttir. Dilediğiniz gibi düzenleyip kullanabilirsiniz.
