import Nav from "./component/Nav/Nav";
import Section from "./component/section/section";
import About from "./component/about/about";
import Skills from "./component/skil/Skills";
import Portfolio from "./component/portfolio/Portfolio";
import Sertiv from "./component/sertif/Sertiv";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Memo from "./component/galeri/Memories";

const App = () => {
  return (
    <>
      <Nav />
      <Section />
      <About />
      <Skills />
      <Portfolio />
      <Sertiv />
      <Memo/>
      <Contact />
      <Footer />
      
    </>
  );
};

export default App;
