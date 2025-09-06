import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
/* import Footer from './components/Footer.jsx'; */
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import "./App.css"
import Apartaments from './pages/apartments/Apartments.jsx';




function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apartment" element={<Apartaments />} />

          </Routes>
        </main>
       {/*  <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
