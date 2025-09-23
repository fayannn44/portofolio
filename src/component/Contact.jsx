const Contact = () => {
  return (
    <section id="kontak" className="py-16 bg-[#111111] text-white reveal">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Kontak</h2>
          <p className="text-gray-300 mb-6">
            Punya project, kolaborasi, atau hanya mau say hi? Kirim pesan aja — biasanya aku bales cepat.
          </p>

          <div className="space-y-4 text-sm">
            <p><span className="font-semibold">Email:</span>{" "}
              <a href="mailto:youremail@example.com" className="text-yellow-400">youremail@example.com</a>
            </p>
            <p><span className="font-semibold">Telepon:</span>{" "}
              <span className="text-yellow-400">+62 812-3456-789</span>
            </p>
            <p><span className="font-semibold">Lokasi:</span>{" "}
              <span className="text-yellow-400">Kota Kamu, Indonesia</span>
            </p>
          </div>

          <div className="flex space-x-4 mt-6 text-2xl">
            <a href="#" className="text-yellow-400 hover:text-yellow-300"><i className="fab fa-github"></i></a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg reveal">
          <form action="#" method="POST" className="space-y-4">
            <input type="text" placeholder="Nama lengkap"
              className="w-full px-4 py-2 bg-[#2a2a2a] text-white rounded-md focus:ring-2 focus:ring-yellow-400 outline-none" />
            <input type="email" placeholder="Email"
              className="w-full px-4 py-2 bg-[#2a2a2a] text-white rounded-md focus:ring-2 focus:ring-yellow-400 outline-none" />
            <textarea rows="5" placeholder="Tulis pesanmu..."
              className="w-full px-4 py-2 bg-[#2a2a2a] text-white rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"></textarea>
            <button type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-md transition">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
