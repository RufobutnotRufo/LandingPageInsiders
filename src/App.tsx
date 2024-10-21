import "./index.css";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import AboutMeContent from "./components/aboutMeContent/AboutMeContent";
import OurServices from "./components/OurServices/OurServices";
import ProjectShow from "./components/ProjectsShow/ProjectShow";
import UserComents from "./components/userComents/UserComents";

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
        <ProjectShow />
        <UserComents />
      </main>
    </>
  );
}

export default App;
