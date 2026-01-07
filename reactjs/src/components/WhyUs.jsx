import React from 'react';


const WhyUs = () => {
    
  
  const nedenler = [
    { ikon: "fa-shield-alt", baslik: "Tam Kasko", aciklama: "Tüm araçlarımız tam kasko güvencelidir." },
    { ikon: "fa-bolt", baslik: "Hızlı İşlem", aciklama: "Dakikalar içinde aracınızı teslim alın." },
    { ikon: "fa-map-marked-alt", baslik: "Geniş Ağ", aciklama: "Türkiye'nin 81 ilinde hizmetinizdeyiz." },
    { ikon: "fa-headset", baslik: "7/24 Destek", aciklama: "Yol yardım hattımız her zaman açık." }
  ];

  return (
    <section id="neden-biz" className="py-24 bg-white mt-12 md:mt-0">
      <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-primary mb-12">Neden RENTGO?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {nedenler.map((item, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300 group">
                      <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition duration-300">
                        <i className={`fas ${item.ikon} text-4xl text-accent group-hover:text-white`}></i>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.baslik}</h4>
                      <p className="text-gray-600">{item.aciklama}</p>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default WhyUs;