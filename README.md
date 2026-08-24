# 🚀 NSosyal - Gençlik ve Kariyer Sosyal İnovasyon Platformu

![TEKNOFEST 2026](https://img.shields.io/badge/TEKNOFEST-2026-red?style=for-the-badge)
![Sosyal İnovasyon](https://img.shields.io/badge/Kategori-Sosyal%20%C4%B0novasyon-blue?style=for-the-badge)
![UI/UX Focus](https://img.shields.io/badge/Tema-Kullan%C4%B1c%C4%B1%20Kat%C4%B1l%C4%B1m%C4%B1%20%26%20UI%2FUX-purple?style=for-the-badge)
![Status](https://img.shields.io/badge/Prototip-Aktif%20Çalışıyor-brightgreen?style=for-the-badge)

> **NSosyal**, gençlerin (özellikle Lise ve Üniversite öğrencilerinin) teknik yeteneklerini sergilemelerini, projelere takım arkadaşı bulmalarını ve sosyal fırsat eşitliği çerçevesinde kariyer ağı oluşturmalarını sağlayan web tabanlı bir sosyal inovasyon platformudur.

---

## 🎯 Proje Hakkında

Öğrenciler ve yeni mezun gençler, profesyonel ağ platformlarında (LinkedIn vb.) deneyim eksikliği ve algoritma bariyerleri nedeniyle görünürlük elde etmekte zorlanmaktadır. **NSosyal**, klasik özgeçmiş anlayışı yerine **proje odaklı eşleşme** ve **mikro topluluk etkileşimi** sunarak bu erişim engelini ortadan kaldırır.

### Temel Hedefler:
- Gençlerin yetkinliklerini projeleri üzerinden kanıtlayabileceği bir arayüz sunmak.
- TEKNOFEST ve benzeri yarışmalar için dinamik takım arkadaşı arama (Matchmaking) altyapısı sağlamak.
- Sade, erişilebilir ve mobil uyumlu (Responsive) bir UI/UX deneyimi yaşatmak.

---

## 🛠 Teknoloji Yığını (Tech Stack)

### Backend (Arka Plan)
- **Python 3.x**
- **Flask Web Framework** (Hafif, modüler ve hızlı yönlendirme mimarisi)
- **JSON tabanlı veri yönetimi** (Prototip aşaması için dinamik veri akışı)

### Frontend (Kullanıcı Arayüzü)
- **HTML5 & CSS3** (Erişilebilir ve modern arayüz bileşenleri)
- **JavaScript (ES6+)** (Asenkron veri çekme - Fetch API ve dinamik DOM etkileşimi)
- **Responsive Layout** (Mobil ve Masaüstü uyumlu esnek tasarım)

---

## 📐 Sistem Mimari Şeması

Projenin istemci (Client), sunucu (Server) ve veri katmanı arasındaki akış aşağıda özetlenmiştir:

+-------------------------------------------------------------+
|                     Kullanıcı (Tarayıcı)                   |
+-------------------------------------------------------------+
|
HTTP / JSON İstekleri
v
+-------------------------------------------------------------+
|                      Flask Web Sunucusu                     |
|  - main.py (Route Yönetimi & Şablon Render)                  |    |
+-------------------------------------------------------------+
|
Veri Okuma / Yazma
v
+-------------------------------------------------------------+
|                    Veri & Şablon Katmanı                   |
|  - /templates (HTML Görünümleri)                            |
|  - /static (CSS Standartları & Client-side JS)               |
|  - Veri Deposu (JSON / Mock Veri Tabanı)                     |
+-------------------------------------------------------------+


## 📂 Proje Dizin Yapısı

```bash
NSosyal-Teknofest/
│
├── main.py                 # Flask ana uygulama ve route yönlendirmeleri
├── README.md              # Proje dokümantasyonu
│
├── static/                # Statik dosyalar
│   ├── css/               # Tasarım ve UI/UX stilleri (style.css)
│   ├── js/                # İstemci tarafı scriptler (script.js)
│
└── templates/             # HTML Sayfaları
    ├── giris.html         # Ana sayfa ve proje akışı
    ├── app.html       # Kullanıcı profili ve portfolyo
│
└── data/             # JSON Verileri
    ├── data.json         # Hazır kullanıcı verileri ve giris.html ekranında girilecek hazır profil verileri
