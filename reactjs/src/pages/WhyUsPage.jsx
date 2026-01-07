import React from 'react';

const WhyUsPage = () => {
  const avantajlar = [
    { ikon: "fa-shield-alt", baslik: "Tam Kasko Güvencesi", aciklama: "Tüm araçlarımız en kapsamlı kasko paketleri standart olarak sunulur. Beklenmedik durumlarda tam koruma altındasınız." },
    { ikon: "fa-bolt", baslik: "Hızlı Rezervasyon", aciklama: "Dakikalar içinde işleminizi tamamlayıp aracınızı teslim alabilirsiniz. Evrak kalabalığıyla uğraşmazsınız." },
    { ikon: "fa-map-marked-alt", baslik: "Geniş Hizmet Ağı", aciklama: "Türkiye genelinde 81 ilde yaygın ofis ağımızla yanınızdayız. İstediğiniz yerden alıp istediğiniz yere bırakın." },
    { ikon: "fa-headset", baslik: "7/24 Teknik Destek", aciklama: "Yolculuğunuzun her anında profesyonel ekibimize ulaşabilirsiniz. Yol yardımımız her daim aktif." }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-primary mb-8">Neden RENTGO?</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Müşteri memnuniyetini odağımıza alarak, kiralama sürecinizi en güvenli ve konforlu hale getirmek için çalışıyoruz.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {avantajlar.map((item, index) => (
            <div key={index} className="flex bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-l-8 border-accent">
              <div className="text-5xl text-accent mr-6">
                <i className={`fas ${item.ikon}`}></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.baslik}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.aciklama}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;