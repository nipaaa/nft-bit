import logo from './logo.svg';
import './App.css';
import Header from './shared/Header';
import Banner from './components/Banner';
import CountDown from './components/CountDown';

function App() {
  return (
    <div>
       <div className='headerBg hero__section' id="Home">
<Header/>
<Banner/>
   </div>
   <CountDown/>
    </div>
  
  );
}

export default App;
