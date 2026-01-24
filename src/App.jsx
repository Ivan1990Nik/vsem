import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Home from './pages/home/Home.jsx';
import Contact from './pages/Contact.jsx';
import Rules from './pages/rules/Rules.jsx';
import "./App.css"
import Apartaments from './pages/apartments/Apartments.jsx';
import Footer from './components/footer/Footer.jsx';
import Reviews from './pages/reviews/Reviews.jsx';


// Создаём внутренний компонент для маршрутов и логики
function AppRoutes() {
  const location = useLocation();  // Теперь это работает, так как компонент внутри Router

  return (
    <div className="">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apartment" element={<Apartaments />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
      {/* Условный рендеринг: Footer показывается, если НЕ на /contact */}
      {location.pathname !== '/contact' && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />  {/* Рендерим внутренний компонент внутри Router */}
    </Router>
  );
}

export default App;
