import "./App.scss";
import { useState, useEffect } from "react";

// Components;
import Sidebar from "./components/sidebar/Sidebar";
import Menu from "./components/menu/Menu";
import Modal from "./components/modal/Modal";
import Home from "./components/home/Home";
import Work from "./components/work/Work";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Whatsapp from "./components/UI/whatsapp/Whatsapp";

// Pre-Loader;
import { HashLoader } from "react-spinners";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedDesc, setSelectedDesc] = useState(null);
  const [selectedTechs, setSelectedTechs] = useState(null);
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [selectedCode, setSelectedCode] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  const menuHandler = () => {
    setOpenMenu(!openMenu);
    setIsActive(!isActive);
  };

  return (
    <div className="App">
      {loading ? ( // If loading returns true, render pre-loader;
        <div className="pre-loader">
          <HashLoader size="150px" color="#ff0050" />
        </div>
      ) : (
        // If loading returns false, render my components;

        <div className="components">
          <Sidebar openMenu={openMenu} menuHandler={menuHandler} />
          <Menu isActive={isActive} menuHandler={menuHandler} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            selectedImg={selectedImg}
            selectedTitle={selectedTitle}
            selectedDesc={selectedDesc}
            selectedTechs={selectedTechs}
            selectedDemo={selectedDemo}
            selectedCode={selectedCode}
          />
          <div className="sections">
            <Home />
            <Work
              setShowModal={setShowModal}
              setSelectedImg={setSelectedImg}
              setSelectedTitle={setSelectedTitle}
              setSelectedDesc={setSelectedDesc}
              setSelectedTechs={setSelectedTechs}
              setSelectedDemo={setSelectedDemo}
              setSelectedCode={setSelectedCode}
            />
            <About />
            <Contact />
          </div>
          <Whatsapp />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
