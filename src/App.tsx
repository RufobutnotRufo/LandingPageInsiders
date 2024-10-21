import "./index.css";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import AboutMeContent from "./components/aboutMeContent/AboutMeContent";
import OurServices from "./components/OurServices/OurServices";
import ProjectShow from "./components/ProjectsShow/ProjectShow";
import UserComents from "./components/userComents/UserComents";
import ComentsSlider from "./components/comentsSlider/ComentsSlider";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ThemeProvider, useTheme } from "./components/Context"; // Импортируйте ThemeProvider

function App() {
  return (
    <ThemeProvider>
      {" "}
      {/* Оберните все в ThemeProvider */}
      <>
        <header>
          <Header />
        </header>
        <main>
          <MainContent />
          <AboutMeContent />
          <OurServices />
          <ProjectShow />
          <UserComents />
          <ComentsSlider />
          <Contact />
        </main>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
