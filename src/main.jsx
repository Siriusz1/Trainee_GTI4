import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/app';
import About from './Pages/about';
import Contact from './Pages/contact';
import Quiz from './Pages/quiz';
import Navbar from './Components/Navbar';
import { Footer } from './Components/Footer';
import './css/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='quiz' element={<Quiz />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
)
