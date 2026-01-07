import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import WhyUsPage from "./pages/WhyUsPage"; 

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filo" element={<Fleet />} />
          <Route path="/neden-biz" element={<WhyUsPage />} /> {/* BURAYI EKLE */}
          <Route path="/iletisim" element={<Contact />} />
          
        </Routes>
      </main>
    </div>
  );
}
export default App;