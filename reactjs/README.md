# 🚗 RentGo - Modern Araç Kiralama Platformu

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

RentGo, geleneksel bir araç kiralama web sitesinin modern **Single Page Application (SPA)** mimarisine dönüştürülmüş halidir. Kullanıcı deneyimi, hız ve modüler kod yapısı ön planda tutularak geliştirilmiştir.

---

## 🌟 Öne Çıkan Özellikler

- 🚀 **SPA (Single Page Application):** Sayfa yenilenmeden ışık hızında geçişler.
- 📱 **Tam Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlar için optimize edilmiş arayüz.
- 🛠️ **Component Tabanlı Mimari:** Tekrar kullanılabilir (reusable) bileşen yapısı.
- 🔐 **Oturum Yönetimi:** React State kullanılarak simüle edilmiş Giriş/Çıkış sistemi.
- 🏎️ **Dinamik Veri Akışı:** Tüm araç bilgileri merkezi bir veri havuzundan (`data.js`) yönetilir.

---

## 🛠️ Kullanılan Teknolojiler

| Alan | Teknoloji |
| :--- | :--- |
| **Frontend Framework** | React.js (Vite) |
| **Styling** | Tailwind CSS |
| **Routing** | React Router DOM |
| **Icons** | Font Awesome 6.x |
| **State Management** | React Hooks (useState, useEffect) |

---

## 📂 Proje Klasör Yapısı

```text
src/
 ├── components/    # Navbar, Footer, Hero, CarCard gibi modüler parçalar
 ├── pages/         # Home, Fleet, WhyUsPage, Contact, Profile, CarDetail sayfaları
 ├── data.js        # Merkezi Veri Havuzu (Mock Database)
 ├── App.jsx        # Ana Route (Yönlendirme) yapılandırması
 └── main.jsx       # Uygulama giriş noktası
🎓 Teknik Savunma & Mimari Yaklaşım
Bu proje geliştirilirken endüstri standartları olan "Separation of Concerns" (İlgi Alanlarının Ayrılması) prensibi benimsenmiştir:

Neden Data.js?

React bir frontend teknolojisidir. Güvenlik protokolleri gereği veritabanı şifrelerini client-side tarafında tutmak risklidir.

Bu yüzden proje, bir REST API'dan veri alacakmış gibi kurgulanmış ve veriler data.js üzerinden "Mock Data" yöntemiyle simüle edilmiştir.

Veri Akışı (Data Flow):

Projede "Single Source of Truth" (Tek Doğru Kaynak) prensibi uygulanmıştır. Araç bilgileri tek bir merkezden (data.js) tüm bileşenlere (Pages/Components) dağıtılır.

Routing:

Standart HTML linkleri yerine react-router-dom kullanılarak tarayıcının sunucuya yük bindirmesi engellenmiş, kullanıcıya uygulama içi akıcı bir deneyim sunulmuştur.

🚀 Kurulum ve Çalıştırma
Projeyi yerel makinenizde çalıştırmak için:

Bash

# Projeyi klonlayın
git clone [GITHUB_LINKINIZ]

# Proje klasörüne gidin
cd reactjs

# Bağımlılıkları yükleyin
npm install

# Uygulamayı başlatın
npm run dev
Geliştirici: [Enes TUNA]
