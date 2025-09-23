import f from "../assets/front.png";
import ui from "../assets/ui.png";
import tools from "../assets/tools.png";
import motion from "../assets/motion1.png";

const Skills = () => {
  return (
    <section id="skills" className="bg-zinc-900 py-20 px-8 reveal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12">
          Keahlian
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-zinc-800 p-6 rounded-xl shadow-lg text-center hover:bg-zinc-700 transition flex flex-col items-center justify-center card-neon reveal">
            <img src={f}alt="" className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">Frontend</h3>
            <p className="text-gray-300">HTML, CSS, JavaScript, React & Tailwind.</p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-xl shadow-lg text-center hover:bg-zinc-700 transition flex flex-col items-center justify-center card-neon reveal">
            <img src={ui} alt="" className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">UI/UX</h3>
            <p className="text-gray-300">Membuat desain antarmuka modern dan ramah pengguna.</p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-xl shadow-lg text-center hover:bg-zinc-700 transition flex flex-col items-center justify-center card-neon reveal">
            <img src={tools}alt="" className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">Tools</h3>
            <p className="text-gray-300">Git, Figma, dan berbagai library modern.</p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-xl shadow-lg text-center hover:bg-zinc-700 transition flex flex-col items-center justify-center card-neon reveal">
            <img src={motion} alt="" className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">Motion UI</h3>
            <p className="text-gray-300">Membuat animasi interaktif yang menarik.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
