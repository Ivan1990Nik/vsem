import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
/* import Footer from './components/Footer.jsx'; */
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Rules from './pages/rules/Rules.jsx';
import "./App.css"
import Apartaments from './pages/apartments/Apartments.jsx';
import Footer from './components/footer/footer.jsx';




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
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
