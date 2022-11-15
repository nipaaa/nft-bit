
import './App.css';
import Header from './shared/Header';
import Banner from './components/Banner';
import CountDown from './components/CountDown';
import EasyStep from './components/EasyStep';
import About from './components/About';
import Team from './components/Team';

function App() {
  return (
    <div>
       <div className='headerBg hero__section' id="Home">
<Header/>
<Banner/>
   </div>
   <CountDown/>
   <EasyStep/>
   <About/>
   <Team/>
    </div>
  
  );
}

export default App;
