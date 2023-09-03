import './App.css';
import Header from "./Components/Header/Header";
import FirstSector from "./Components/FirstSector/FirstSector";
import SectorTwo from "./Components/SectorTwo/SectorTwo";
import SectorThree from "./Components/SectorThree/SectorThree";
import AnimationLine from "./Components/AnimationLine/AnimationLine";
import OurTeachers from "./Components/OurTeachers/OurTeachers";
import CustomGallery from "./Components/CustomGallery/CustomGallery";
import MapY from "./Components/Map/Map";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
      <div className={'container'}>
        <Header/>
        <FirstSector/>
        <SectorTwo/>
        <SectorThree/>
        <AnimationLine/>
        <OurTeachers/>
        <CustomGallery/>
         <MapY/>
          <Footer/>
      </div>
  );
}

export default App;
