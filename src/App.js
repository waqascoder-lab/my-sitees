import React from 'react';
import './App.css';
import { BrowserRouter ,Routes , Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import More  from './components/More';
import Web from './components/Web';
import Community from './components/Community';
import Blog from './components/Blog';
import Error from './components/Error';
function App() {
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/web' element={<Web/>}/>
          <Route path='/more' element={<More/>}/>
          <Route path='*' element={<Error/>}/>
         </Routes>
         <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
