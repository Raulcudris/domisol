import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element= { <Home /> } />
          <Route path='*' element= { <NotFound /> } />
        </Routes>
       </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
