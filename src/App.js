import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import './styles/App.scss'
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Services from './component/Services';

import "./styles/App.scss"
import "./styles/mediaQuery.scss"

function App() {
  return (
   <Router>
     <Header />
    <Routes>
     
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={<Services />}/>



    </Routes>
    <Footer />

   </Router>
  );
}

export default App;
