import { useState } from "react";
import { araclar } from "../data";
import CarCard from "../components/CarCard";

const Fleet = () => {
  const [filtre, setFiltre] = useState("");

  
  const filtrelenmisAraclar = araclar.filter(arac => 
    filtre === "" || arac.sinif === filtre
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Tüm Filomuz</h1>
      
      {/* Filtreleme Butonları */}
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => setFiltre("")} className="px-4 py-2 bg-gray-200 rounded">Tümü</button>
        <button onClick={() => setFiltre("Lüks")} className="px-4 py-2 bg-gray-200 rounded">Lüks</button>
        <button onClick={() => setFiltre("Spor")} className="px-4 py-2 bg-gray-200 rounded">Spor</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtrelenmisAraclar.map((arac) => (
          <CarCard key={arac.id} arac={arac} />
        ))}
      </div>
    </div>
  );
};

export default Fleet;