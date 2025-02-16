import React from "react";
import Navbar from './navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Whychoose from './whychoose';
import FAQ from "./FAQ"; 


function App() {
  

  return (
    
      <div> 
      <Navbar />
      <Whychoose />
      <FAQ />
    </div>
  );
}

export default App;
