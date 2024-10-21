import "./index.css";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import AboutMeContent from "./components/aboutMeContent/AboutMeContent";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <MainContent />
        <AboutMeContent />
      </main>
    </>
  );
}

export default App;
