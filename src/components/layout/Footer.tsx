"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-blue-900 text-white text-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-white">Mahalo!</h2>
        <p className="text-xl text-blue-100 mb-2">Thank you for visiting my website</p>
        <p className="text-sm text-blue-200">© {currentYear} Channa H. Neri. All rights reserved.</p>
        
        {/* Ocean wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
          <div className="wave-footer"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
