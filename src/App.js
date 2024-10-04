import Hero from './components/Hero/Hero'
import './App.css';
import AllProduct from './components/AllProduct/AllProduct';
import MainProductSection from './components/MainProductSection/MainProductSection';

function App() {
  return (
    <div className="App">
      <Hero/>
     <AllProduct/>
     <MainProductSection/>

     <div id="footer"></div>

      
    </div>
  );
}

export default App;
