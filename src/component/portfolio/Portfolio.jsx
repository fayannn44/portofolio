import gambar1 from "../../assets/portfolio1.png";
import nanang1 from "../../assets/nanang.jpg";
import pokemon from "../../assets/pokemon.png";
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
              <p className="text-gray-300 text-sm mb-4">Desain modern dengan animasi halus & ux yang menarik.</p>
              <a
                href="https://tugasakhir-sage.vercel.app/"target="_blank"rel="noopener noreferrer"className="inline-block px-4 py-2 rounded-lg bg-yellow-300 text-zinc-900 font-medium hover:bg-yellow-400 transition">
                View Project
              </a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg bg-zinc-800 hover:bg-zinc-700 transition card-neon reveal">
            <img src={nanang1} alt="Project 2" className="w-full h-52 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">Dashboard Admin</h3>
              <p className="text-gray-300 text-sm mb-4">Interaktif dengan grafik data real-time dan desain modern.</p>
              <a
                href="#"target="_blank"rel="noopener noreferrer"className="inline-block px-4 py-2 rounded-lg bg-yellow-300 text-zinc-900 font-medium hover:bg-yellow-400 transition"
>
                View Project
              </a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg bg-zinc-800 hover:bg-zinc-700 transition card-neon reveal">
            <img src={pokemon} alt="Project 3" className="w-auto h-52 object-cover mx-auto" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">Web Pokemon</h3>
              <p className="text-gray-400 text-sm mb-4"> membuat web pokemon degan desain modern dan interaktif .</p>
              <a href="#"target="_blank"rel="noopener noreferrer"className="inline-block px-4 py-2 rounded-lg bg-yellow-300 text-zinc-900 font-medium hover:bg-yellow-400 transition">
                View Project
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


export default Portfolio;
