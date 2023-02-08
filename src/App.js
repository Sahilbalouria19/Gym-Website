import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Program from "./Components/Program";
import Pricing from "./Components/Pricing";
import CustomerReview from "./Components/CustomerReview";
import About from "./Components/About";
import Contact from "./Components/Contact"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Program/>
      <Pricing/>
      <CustomerReview/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
