import logo from './logo.svg';
import './App.css';
import Create_page from './components/Create_page';
import NavBar from './components/NavBar';
import Slider from './components/Slider_fun';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <>
     
   
  <Router>
  <NavBar/>
    <Routes>
          <Route  exact path="/" element={<Slider/>}/>
          
          
          <Route exact path="/create" element={<Create_page/>}/>
        
        </Routes>
    </Router>
    
    
  
    
   
    
    
    
    </>
  );
}

export default App;
