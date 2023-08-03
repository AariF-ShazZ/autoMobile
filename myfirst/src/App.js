import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './AllRoutes/AllRoutes';
import Simple from './Components/Navbar';
import LargeWithLogoLeft from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Simple/>
      {/* <AllRoutes/> */}
     <LargeWithLogoLeft/>
    </div>
  );
}

export default App;
