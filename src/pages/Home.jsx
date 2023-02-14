import React from 'react'
import About from '../pages/About';
import Question from '../components/Question';
import Result from '../components/Result';
import Services from '../pages/Services';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
        <About />
         <Question/>
         <Result />
         <Services />
         <Footer />
    </>
  )
}

export default Home;

