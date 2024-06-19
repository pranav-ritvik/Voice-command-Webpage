import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import { startVoiceRecognition, stopVoiceRecognition } from "./voiceCommands";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (isListening) {
      startVoiceRecognition(navigate);
    } else {
      stopVoiceRecognition();
    }

    // Cleanup on unmount
    return () => {
      stopVoiceRecognition();
    };
  }, [isListening, navigate]);

  const toggleListening = () => {
    setIsListening((prevState) => !prevState);
  };

  return (
    <div>
      <Navbar />
      <button onClick={toggleListening} className="mic-button">
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
