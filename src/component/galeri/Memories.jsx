import lapan from "../../assets/8.jpg";
import lapann from "../../assets/8w.jpg";
import puluh from "../../assets/9a.jpg";

const Kenangan = () => {
  return (
    <section className="bg-zinc-900 py-20 px-6 md:px-12 reveal">
      <h2 className="text-4xl font-extrabold text-center text-yellow-300 mb-14">
        galeri
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="bg-zinc-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-yellow-400/30">
          <img src={lapann} alt="Kenangan Kelas 7" className="w-full h-full object-cover" />
        
        </div>

        <div className="bg-zinc-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-yellow-400/30">
          <img src={lapan} alt="Kenangan Kelas 8" className="w-full h-full object-cover" />
         
        </div>

        
        <div className="bg-zinc-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-yellow-400/30">
          <img src={puluh} alt="Kenangan Kelas 9" className="w-full h-full object-cover" />
    
        </div>

      </div>
    </section>
  );
};

export default Kenangan;
