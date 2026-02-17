import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Rules from "./pages/rules/Rules.jsx";
import "./App.css";
import Apartaments from "./pages/apartments/Apartments.jsx";
import Footer from "./components/footer/Footer.jsx";
import Reviews from "./pages/reviews/Reviews.jsx";
import HomeReserveWidget from "./pages/homeReserveWidget/HomeReserveWidget.jsx";

function AppRoutes() {
  const location = useLocation();

  return (
    <div>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apartment" element={<Apartaments />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/reserve" element={<HomeReserveWidget />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>

      {location.pathname !== "/contact" && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
