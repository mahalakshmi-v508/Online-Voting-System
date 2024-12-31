import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header/header';
import Register from './component/pages/Register/register';
import Login from './component/pages/Login/login';
import Vote from './component/pages/Vote/vote';
import About from './component/pages/About/about';
import Profile from './component/pages/Profile/profile';
import Home from './component/pages/Home/home';
import Leader from './component/pages/Vote/leader';
import Leader1 from './component/pages/Vote/leader1';
import Leader2 from './component/pages/Vote/leader2';
import Leader3 from './component/pages/Vote/leader3';
import Leader4 from './component/pages/Vote/leader4';
import Leader5 from './component/pages/Vote/leader5';
import Leader6 from './component/pages/Vote/leader6';
import Pink from './component/pages/Pink/pink';
import Orange from './component/pages/Orange/orange';
import Redd from './component/pages/Red/red';
import Footer from './component/Footer/footer';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={< Login/>} />
          <Route path='/vote' element={<Vote/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/leader' element={<Leader/>} />
          <Route path='/leader1' element={<Leader1 />} />
          <Route path='/leader2' element={<Leader2/>} />
          <Route path='/leader3' element={<Leader3/>} />
          <Route path='/leader4' element={<Leader4/>} />
          <Route path='/leader5' element={<Leader5/>} />
          <Route path='/leader6' element={<Leader6 />} />
          <Route path='/pink' element={<Pink/>} />
          <Route path='/orange' element={<Orange />} />
          <Route path='/red' element={<Redd />} />
          {/* <Route path='/club' element={<Club />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
