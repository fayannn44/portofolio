import w from "../../assets/wa.png";

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center bg-zinc-900 px-8 py-16 reveal"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-yellow-300 mb-6">Tentang Saya</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Saya seorang developer yang fokus pada frontend development dengan pengalaman membuat website responsif dan interaktif.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Saya juga mendalami desain UI/UX, menggabungkan estetika dengan performa untuk memberikan pengalaman terbaik.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={w}
            alt="Tentang Saya"
            className="w-80 h-80 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
