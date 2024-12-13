// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Mission from "./pages/Mission";
import ContactForm from "./pages/ContactForm";
// import Contact from "./pages/Contact";
import CounterComponent from "./pages/CounterComponent";
import Weather from "./pages/Weather";
import { ThemeProvider } from './context/ThemeContext';
function App() {
    return (
        <Router>
            <ThemeProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />}>
                <Route index element={<Team/>} />
                    <Route path="team" element={<Team />} />
                    <Route path="mission" element={<Mission />} />
                </Route>
                 <Route path="contact" element={<ContactForm />} />
                <Route path="redux-example" element={<CounterComponent />} />
                <Route path="weather-app" element={<Weather/>} /> 
            </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;
