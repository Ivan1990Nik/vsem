import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Ваш CSS

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  // Отслеживание ширины экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
      if (window.innerWidth >= 600) {
        setIsMenuOpen(false); // Закрыть меню при расширении
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // Для закрытия при клике на ссылку

  return (
    <div className="header">
      <nav className="header-container">
        <div className="header-logo">
          <Link to="/" onClick={closeMenu}>Квартиры Всем 72</Link>
        </div>
        
        {/* Десктопная навигация */}
        {!isMobile && (
          <ul className="header-list">
            <li><a href="/">Главная</a></li>
            <li><Link to="/apartment">Квартиры</Link></li>
            <li><a href="/rules">Правила</a></li>
            <li><a href="/reviews">Отзывы</a></li>
            <li><Link to="/contact" className="nav-item">Контакты</Link></li>
          </ul>
        )}

        {/* Бургер-кнопка на мобильных */}
        {isMobile && (
          <button className="burger-btn" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'} {/* Крестик для закрытия, гамбургер для открытия */}
          </button>
        )}

        {/* Выпадное меню на мобильных */}
        {isMobile && isMenuOpen && (
          <div className="mobile-menu">
            <ul className="mobile-nav-list">
              <li><a href="/" onClick={closeMenu}>Главная</a></li>
              <li><Link to="/apartment" onClick={closeMenu}>Квартиры</Link></li>
              <li><a href="/rules" onClick={closeMenu}>Правила</a></li>
              <li><a href="/reviews" onClick={closeMenu}>Отзывы</a></li>
              <li><Link to="/contact" className="nav-item" onClick={closeMenu}>Контакты</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
