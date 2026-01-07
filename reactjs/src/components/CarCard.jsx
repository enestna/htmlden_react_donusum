import { Link } from "react-router-dom";

const CarCard = ({ arac }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img src={arac.resim} alt={arac.marka} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h4 className="text-2xl font-bold text-gray-800 mb-2">{arac.marka} {arac.model}</h4>
        <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
          {arac.sinif} Sınıf
        </span>
        <div className="flex justify-between items-center mb-4">
          <span className="text-3xl font-extrabold text-orange-500">{arac.fiyat} TL</span>
          <span className="text-gray-500">/ Günlük</span>
        </div>
        <Link 
          to={`/detay/${arac.id}`} 
          className="block text-center w-full bg-[#4d2104] hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Hemen Kirala
        </Link>
      </div>
    </div>
  );
};

export default CarCard; 