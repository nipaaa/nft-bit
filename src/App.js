
import './App.css';
import Header from './shared/Header';
import Banner from './components/Banner';
import CountDown from './components/CountDown';
import EasyStep from './components/EasyStep';
import About from './components/About';
import Team from './components/Team';
import Faq from './components/Faq';
import Community from './components/Community';
import Gallery from './components/Gallery';
import RoadMap from './components/RoadMap';

function App() {
  return (
    <div>
       <div className='headerBg hero__section' id="Home">
<Header/>
<Banner/>
   </div>
   <CountDown/>
   <Gallery/>
   <EasyStep/>
   <About/>
   <RoadMap/>
   <Team/>
   <Faq/>
   <Community/>
    </div>
  
  );
}

export default App;
