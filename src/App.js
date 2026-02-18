import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Header />

      {/* Scrollable content */}
      <div className="main-content">
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
