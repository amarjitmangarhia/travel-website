import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SigUp';
function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
          <Route path='/services' Component={Services} />
          <Route path='/products' Component={Products} />
          <Route path='/sign-up' Component={SignUp} />
          <Route path='/' Component={Home} />
       </Routes>
    </div>
  );
}

         


export default App;
