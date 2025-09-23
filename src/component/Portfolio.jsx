import gambar1 from "../assets/portfolio1.png";
import nanang1 from "../assets/nanang.jpg";
import logo1 from "../assets/logo.png";
const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-zinc-900 py-20 px-8 reveal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12">
          Portfolio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-xl overflow-hidden shadow-lg bg-zinc-800 hover:bg-zinc-700 transition card-neon reveal">
            <img src={gambar1} alt="Project 1" className="w-full h-52 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">Landing Page</h3>
              <p className="text-gray-300 text-sm">Desain modern dengan animasi halus & ux yang menarik.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg bg-zinc-800 hover:bg-zinc-700 transition card-neon reveal">
            <img src={nanang1} alt="Project 2" className="w-full h-52 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">Dashboard Admin</h3>
              <p className="text-gray-300 text-sm">Interaktif dengan grafik data real-time dan desain modern.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg bg-zinc-800 hover:bg-zinc-700 transition card-neon reveal">
            <img src={logo1} alt="Project 3" className="w-auto h-52 object-cover mx-auto" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">Logo Kreasi Saya</h3>
              <p className="text-gray-400 text-sm">Logo custom dengan nuansa retro pixel art, cocok untuk identitas brand gaming & kreatif.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
