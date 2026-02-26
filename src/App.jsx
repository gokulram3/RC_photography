import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./pages/home";
import Events from "./pages/events";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";


function App() {
  return (
    <Router>
      <Header />

      <div>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );}

export default App;