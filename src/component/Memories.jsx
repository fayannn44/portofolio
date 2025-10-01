import lapan from "../assets/8.jpg";
import lapann from "../assets/8w.jpg";
import puluh from "../assets/9a.jpg";

const Kenangan = () => {
  return (
    <section className="bg-zinc-900 py-20 px-6 md:px-12 reveal">
      <h2 className="text-4xl font-extrabold text-center text-yellow-300 mb-14">
        Kenangan Kelas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="bg-zinc-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-yellow-400/30">
          <img src={lapann} alt="Kenangan Kelas 7" className="w-full h-56 object-cover" />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-yellow-300">Kelas 8</h3>
            <p className="text-gray-200 text-sm mt-3">
              tahun penuh petualangan, persahabatan, dan kenangan tak terlupakan.
            </p>
          </div>
        </div>

        <div className="bg-zinc-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-yellow-400/30">
          <img src={lapan} alt="Kenangan Kelas 8" className="w-full h-56 object-cover" />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-yellow-300">Kelas 9</h3>
            <p className="text-gray-200 text-sm mt-3">
              Tahun penuh canda tawa, belajar bareng, dan banyak kegiatan sekolah.
            </p>
          </div>
        </div>

        
        <div className="bg-zinc-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-yellow-400/30">
          <img src={puluh} alt="Kenangan Kelas 9" className="w-full h-56 object-cover" />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-yellow-300">Kelas 10</h3>
            <p className="text-gray-200 text-sm mt-3">
              tahun penuh tantangan baru, adaptasi dengan lingkungan SMA, dan mulai fokus pada cita-cita.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Kenangan;
