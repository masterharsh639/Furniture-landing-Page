import "./App.css";
import BeautyYourSpace from "./Component/BeautyYourSpace/BeautyYourSpace";
import BrowseRange from "./Component/BrowseRange/BrowseRange";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/HeaderSection/Header";
import HeroSection from "./Component/Hero/HeroSection";
import Inspiration from "./Component/InspirationSection/Inspiration";
import MailingSection from "./Component/MailingSection/MailingSection";
import RectangleComponent from "./Containers/Rectangle/RectangleComponent";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <RectangleComponent />
      <Inspiration />
      <BeautyYourSpace />
      <BrowseRange />
      <MailingSection />
      <Footer />
    </div>
  );
}

export default App;
