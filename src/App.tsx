import "./App.css";
import BrowseRange from "./Component/BrowseRange/BrowseRange";
import Header from "./Component/HeaderSection/Header";
import HeroSection from "./Component/Hero/HeroSection";
import Inspiration from "./Component/InspirationSection/Inspiration";
import RectangleComponent from "./Containers/Rectangle/RectangleComponent";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <RectangleComponent />
      {/* <Inspiration /> */}
      <BrowseRange />
    </div>
  );
}

export default App;
