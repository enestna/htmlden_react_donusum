import React from 'react';
import { Link } from "react-router-dom";
import { araclar } from "../data";
import CarCard from "../components/CarCard";
import Hero from "../components/Hero";   
import WhyUs from "../components/WhyUs"; 

const Home = () => {
  
  const vitrinAraclar = araclar.slice(0, 3);

  return (
    <div className="bg-gray-50">
      
      {/* 1. Modül: Giriş ve Arama */}
      <Hero />

      {/* 2. Modül: Neden Biz? */}
      <WhyUs />

      {/* 3. Modül: Popüler Araçlar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-primary">Popüler Araçlarımız</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vitrinAraclar.map((arac) => (
              <CarCard key={arac.id} arac={arac} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/filo" className="inline-block bg-primary hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
                Tüm Filoyu İncele <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;