import logo from "../assets/logo.png";
const Nav = () => {
  return (
    <>
 <nav className="fixed top-0 left-0 w-full bg-zinc-800/90 backdrop-blur shadow z-40">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
            <img className="w-12 h-12 rounded-full" src={logo}alt="Logo" />
            <ul className="hidden md:flex space-x-6 font-medium">
              <li><a href="#home" className="nav-link text-yellow-300 hover:text-red-500 transition">Home</a></li>
              <li><a href="#about" className="nav-link  text-yellow-300 hover:text-red-500 transition">Tentang</a></li>
              <li><a href="#skills" className="nav-link  text-yellow-300 hover:text-red-500 transition">Keahlian</a></li>
              <li><a href="#portfolio" className="nav-link  text-yellow-300 hover:text-red-500 transition">Portfolio</a></li>
              <li><a href="#kontak" className="nav-link text-yellow-300 hover:text-red-500 transition">Kontak</a></li>
            </ul>

            <button id="menu-toggle" className="md:hidden text-yellow-300 focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div id="mobile-menu" className="hidden flex-col space-y-4 p-4 bg-zinc-800/95 shadow md:hidden">
            <a href="#home" className="block text-yellow-300 hover:text-red-500 transition">Home</a>
            <a href="#about" className="block text-yellow-300 hover:text-red-500 transition">Tentang</a>
            <a href="#skills" className="block text-yellow-300 hover:text-red-500 transition">Keahlian</a>
            <a href="#portfolio" className="block text-yellow-300 hover:text-red-500 transition">Portfolio</a>
            <a href="#kontak" className="block text-yellow-300 hover:text-red-500 transition">Kontak</a>
          </div>
        </nav>
    </>
  );
};

export default Nav;
