import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center">
        {/* Arka Plan Resmi */}
        <div 
           className="absolute inset-0 bg-cover bg-center" 
          
           style={{ backgroundImage: "url('/resimler/audi.jpg')" }} 
        >
           <div className="absolute inset-0 bg-black/50"></div> 
        </div>

        <div className="z-10 text-center w-full px-4">
           <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
               Özgürlüğün Direksiyonu Elinde
           </h2>
           <p className="text-xl text-gray-200 mb-12">
               Türkiye'nin her yerinden araç kiralayın.
           </p>

           {/* Arama Formu */}
           <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl max-w-6xl mx-auto transform translate-y-8">
              <form className="grid grid-cols-2 md:grid-cols-5 gap-4 items-end" onSubmit={(e) => e.preventDefault()}>
                   
                   {/* Inputlar */}
                   <div className="col-span-2 md:col-span-1 relative text-left">
                       <label className="block text-sm font-medium text-gray-700 mb-1">Alış Yeri</label>
                       <div className="relative">
                           <i className="fas fa-map-marker-alt absolute top-3.5 left-3 text-gray-400"></i>
                           <input type="text" placeholder="Şehir seçin" className="w-full p-3 pl-10 border border-gray-300 rounded-lg outline-none focus:border-accent" />
                       </div>
                   </div>

                   <div className="col-span-2 md:col-span-1 relative text-left">
                       <label className="block text-sm font-medium text-gray-700 mb-1">Bırakma Yeri</label>
                       <div className="relative">
                           <i className="fas fa-map-marker-alt absolute top-3.5 left-3 text-gray-400"></i>
                           <input type="text" placeholder="Farklı yer?" className="w-full p-3 pl-10 border border-gray-300 rounded-lg outline-none focus:border-accent" />
                       </div>
                   </div>

                   <div className="col-span-1 md:col-span-1 text-left">
                       <label className="block text-sm font-medium text-gray-700 mb-1">Alış Tarihi</label>
                       <input type="date" className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-accent" />
                   </div>

                   <div className="col-span-1 md:col-span-1 text-left">
                       <label className="block text-sm font-medium text-gray-700 mb-1">Bırakma Tarihi</label>
                       <input type="date" className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-accent" />
                   </div>

                   {/* Buton */}
                   <div className="col-span-2 md:col-span-1">
                       <Link to="/filo" className="block w-full bg-accent hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-lg transition duration-200">
                           ARAÇ ARA
                       </Link>
                   </div>
               </form>
           </div>
        </div>
     </section>
  );
};

export default Hero;