// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Başlık Bölümü */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Bizimle İletişime Geçin</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Sol Taraf: Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-accent">Mesaj Gönderin</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Ad Soyad</label>
                <input type="text" placeholder="Adınızı ve soyadınızı yazın" className="w-full border border-gray-300 p-3 rounded-lg focus:ring-accent focus:border-accent" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">E-posta</label>
                <input type="email" placeholder="ornek@mail.com" className="w-full border border-gray-300 p-3 rounded-lg focus:ring-accent focus:border-accent" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Konu</label>
                <input type="text" placeholder="Konu başlığı" className="w-full border border-gray-300 p-3 rounded-lg focus:ring-accent focus:border-accent" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Mesajınız</label>
                <textarea rows="5" placeholder="Mesajınızı yazın..." className="w-full border border-gray-300 p-3 rounded-lg focus:ring-accent focus:border-accent"></textarea>
              </div>
              <button type="submit" className="bg-accent hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200">
                Gönder
              </button>
            </form>
          </div>

          {/* Sağ Taraf: Bilgiler ve Harita */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-accent">İletişim Bilgilerimiz</h3>
            <p className="text-gray-700 mb-4"><i className="fas fa-map-marker-alt text-accent mr-2"></i> Bahçelievler Mah. Efeler Caddesi, Bergama / İzmir</p>
            <p className="text-gray-700 mb-4"><i className="fas fa-phone-alt text-accent mr-2"></i> +90 (539) 379 85 25</p>
            <p className="text-gray-700 mb-6"><i class="fas fa-envelope text-accent mr-2"></i> info@rentgo.com</p>

            <h4 className="text-xl font-semibold mb-3 text-primary">Çalışma Saatlerimiz</h4>
            <ul className="text-gray-700 space-y-1">
              <li>Pazartesi - Cuma: 09:00 - 19:00</li>
              <li>Cumartesi: 10:00 - 17:00</li>
              <li>Pazar: Kapalı</li>
            </ul>

            <div className="mt-8">
              {/* React'te iframe kullanırken style={{}} formatı kullanılır */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.123456789!2d27.123456!3d38.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA3JzM0LjQiTiAyN8KwMDcnMzQuNCJF!5e0!3m2!1str!2str!4v1234567890" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;