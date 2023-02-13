import React from 'react'
import About from '../pages/About';
import Question from '../components/Question';
import Result from '../components/Result';
import Services from '../pages/Services';

function Home() {
  return (
    <>
        <About />
         <Question/>
         <Result />
         <Services />
    </>
  )
}

export default Home;

