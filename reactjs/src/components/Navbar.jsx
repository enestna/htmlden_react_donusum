import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleScrollToWhyUs = (e) => {
    e.preventDefault();
    
    
   
    if (window.location.pathname !== "/") {
      navigate("/");
      
      setTimeout(() => {
        const element = document.getElementById('neden-biz');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      
      const element = document.getElementById('neden-biz');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-4xl font-extrabold text-primary tracking-tighter">
          RENT<span className="text-accent">GO</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-accent font-medium">Ana Sayfa</Link>
          <Link to="/filo" className="text-gray-700 hover:text-accent font-medium">Filo</Link>
          
         
          <Link to="/neden-biz" className="text-gray-700 hover:text-accent font-medium transition">Neden Biz?</Link>
          
          <Link to="/iletisim" className="text-gray-700 hover:text-accent font-medium">İletişim</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;  