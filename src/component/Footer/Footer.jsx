import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#111111] border-t border-gray-800 text-gray-400 py-8 mt-12 reveal">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-yellow-400 font-bold">MyPortfolio</span>
        </div>

        <ul className="flex space-x-6 mt-4 md:mt-0 text-sm">
          <li><a href="#" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#portfolio" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="#kontak" className="hover:text-yellow-400">Contact</a></li>
        </ul>

        <div className="flex space-x-4 mt-4 md:mt-0 text-2xl">
          <a href="#" className="text-yellow-400 hover:text-yellow-300"><i className="fab fa-github"></i></a>
          <a href="#" className="text-yellow-400 hover:text-yellow-300"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        © 2025 MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
