import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './compenent/Header';
import Section1 from './compenent/Section1';
import Section2 from './compenent/Section2';
import Section3 from './compenent/Section3';
import Section4 from './compenent/Section4';
import Footer from './compenent/Footer';


const text = {
  text1:'We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and thats why we are always next to them: to help them find the best possible care. Anytime, anywhere.',
  text2:'We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.s'
}
const titre={
  titre1:'For patients',
  p:'Find a doctor, book a visit and solve any health-related doubt',
  images:'https://www.docplanner.com/img/screen-marketplace@2x.png'
}
const titre2={
  title:'For doctors',
  p2:'Save time managing visits and cut no-shows by half',
  images1:'https://www.docplanner.com/img/screen-saas@2x.png'
}
const titre3={
  t1:"The world's  biggest healthcare platform",
  p3:'We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.',
  images4:'image2.png'
}

  
  
           

function App() {
 return (
    <div className="App">
      <Header/>
      <Section1 text1={text.text1} text2={text.text2}/>
      <Section2 titre1={titre.titre1} p={titre.p} images={titre.images} title={titre2.title} p2={titre2.p2} images1={titre2.images1} />
      <Section3 t1={titre3.t1} p3={titre3.p3} images4={titre3.images4}/>
      <Section4/>
      <Footer/>
      </div>
  );
}

export default App;


