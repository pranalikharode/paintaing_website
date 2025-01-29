import React from "react";
import Navbar from './navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import MultiStepForm from "./multistepform";
import EstimateForm from './EstimateForm';
import Painting from './painting2';
import Whychoose from './whychoose';

function App() {
  

  return (
    <div>
      <Navbar />
       
       <MultiStepForm />
      <EstimateForm/> 
      <Painting />
      <Whychoose />
    </div>
  );
}

export default App;
