import React from "react";
import { useParams, Link } from "react-router-dom";
import { araclar } from "../data"; 

const CarDetail = () => {
  const { id } = useParams();
  
  
  const secilenArac = araclar.find((arac) => arac.id === parseInt(id));

  
  if (!secilenArac) {
    return <div className="text-center py-20">Araç bulunamadı! <Link to="/filo">Geri Dön</Link></div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white p-6 shadow-lg rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
          {/* Sol Taraf: Resim */}
          <div>
             <img 
                src={secilenArac.resim} 
                alt={secilenArac.marka} 
                className="w-full h-96 object-cover rounded-lg shadow-md" 
             />
          </div>

          {/* Sağ Taraf: Bilgiler */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-primary">
                {secilenArac.marka} {secilenArac.model} <span className="text-xl font-normal text-gray-500">({secilenArac.sinif} Sınıf)</span>
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Bu araç, {secilenArac.yakit} yakıt tipi ve {secilenArac.vites} vites seçeneği ile size konforlu bir sürüş sunar. 
              Geniş iç hacmi ve {secilenArac.kisi} kişilik kapasitesiyle aileniz veya iş seyahatleriniz için idealdir.
            </p>

            <ul className="text-gray-700 mb-8 space-y-3 text-lg">
              <li><i className="fas fa-user-friends text-accent mr-2"></i> {secilenArac.kisi} Kişilik</li>
              <li><i className="fas fa-gas-pump text-accent mr-2"></i> {secilenArac.yakit}</li>
              <li><i className="fas fa-cogs text-accent mr-2"></i> {secilenArac.vites}</li>
              <li><i className="fas fa-check-circle text-accent mr-2"></i> Tam Kasko Dahil</li>
            </ul>

            <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-6">
                <span className="text-gray-600 font-bold">Günlük Kiralama Bedeli:</span>
                <span className="text-3xl font-extrabold text-primary">{secilenArac.fiyat} TL</span>
            </div>

            <Link to="/filo" className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-200">
              ← Filoya Dön
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CarDetail;