import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Services from '../pages/Services';
import '../styles/Global.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/Home' element= { <Home /> } />
          <Route path='/About' element={ <About/> } />
          <Route path='/Services' element={ <Services/> } />
          <Route path='*' element= { <NotFound /> } />
        </Routes>
       </Layout>
      </BrowserRouter>
    </div>
  );
}
export default App;
