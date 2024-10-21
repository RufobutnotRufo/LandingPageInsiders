import "./index.css";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import AboutMeContent from "./components/aboutMeContent/AboutMeContent";
import OurServices from "./components/OurServices/OurServices";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <MainContent />
        <AboutMeContent />
        <OurServices />
      </main>
    </>
  );
}

export default App;
