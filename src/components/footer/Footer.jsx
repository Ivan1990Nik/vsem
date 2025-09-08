import "./footer.css";import { FaTelegramPlane, FaWhatsapp, FaVk } from 'react-icons/fa';




const Footer = () => {
  return (
    <div className="footer-container">
  


      <p>с нами удобно связаться 👉</p>
      <div className="links-container">
        <a 
          href="https://t.me/your_telegram_channel" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link telegram"
        >
        <FaTelegramPlane />
        </a>
        <a 
          href="https://wa.me/1234567890"  // Замени 1234567890 на свой номер
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link whatsapp"
        >
         <FaWhatsapp />
        </a>
        <a 
          href="https://www.torproject.org/"  // Или ссылка на ваш onion-сайт, напр. http://youronion.onion
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link tor"
        >
          Max
        </a>
        <a 
          href="https://vk.com/your_vk_page" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link vkontakte"
        >
         <FaVk />
        </a>
      </div>
    </div>
  );
};

export default Footer;
