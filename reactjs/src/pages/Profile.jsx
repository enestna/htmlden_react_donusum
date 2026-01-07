import React from 'react';
import { useNavigate } from "react-router-dom";

const Profile = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Çıkış yapıldı.");
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-primary p-8 text-white flex items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl mr-6">
            <i className="fas fa-user text-primary"></i>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Hoş Geldin, Ahmet Yılmaz</h2>
            <p className="opacity-80">Üyelik Tipi: Gold Üye</p>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <section>
            <h3 className="text-xl font-bold border-b pb-2 mb-4 text-primary">Aktif Rezervasyonlarım</h3>
            <div className="bg-orange-50 p-4 rounded-lg flex justify-between items-center border border-orange-200">
              <span>Audi A4 - 01.05.2026 / 05.05.2026</span>
              <span className="text-orange-600 font-bold italic">BEKLEMEDE</span>
            </div>
          </section>

          <button 
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition"
          >
            Güvenli Çıkış Yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;