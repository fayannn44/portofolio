import sertiv from "../assets/react.png";
import dasar from "../assets/html-dan-css.png";
import ai from "../assets/dasar-ai.png";

const Sertiv = () => {
  return (
    <div className="bg-zinc-900 py-20 px-8 reveal">
      <h2 className="text-3xl font-bold text-center text-yellow-300 mb-10">
        Sertifikat
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      
        <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
          <img src={sertiv} className="w-full h-40 object-cover" alt="Sertifikat React" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-yellow-300">
              React Dasar
            </h3>
            <p className="text-white text-sm mt-2">
              Sertifikat penyelesaian kelas React untuk pemula.
            </p>
          </div>
        </div>

        <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
          <img
            src={dasar}
            alt="Sertifikat HTML & CSS"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-yellow-300">
            Dasar html & css
            </h3>
            <p className="text-white text-sm mt-2">
              Sertifikat penyelesaian kelas dasar HTML & CSS.
            </p>
          </div>
        </div>

        <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
          <img
            src={ai}
            alt="Sertifikat AI"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-yellow-300">
            Dasar AI
            </h3>
            <p className="text-white text-sm mt-2">
              Sertifikat penyelesaian kelas dasar AI.
            </p>
          </div>
        </div>

        <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
          <img
            src={ai}
            alt="Sertifikat AI"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-yellow-300">
            Dasar AI 2025
            </h3>
            <p className="text-white text-sm mt-2">
              Sertifikat penyelesaian kelas dasar AI.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sertiv;
