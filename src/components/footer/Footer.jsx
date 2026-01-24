import MaxIcon from "../../utils/MaxIcons";
import "./footer.css";
import { FaTelegramPlane, FaWhatsapp, FaVk, FaHome, FaCalendarAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>С нами удобно связаться 👉</p>
      <div className="links-container">
        <a
          href="https://t.me/Goodflat72"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link telegram"
        >
          <FaTelegramPlane style={{ color: 'black' }} />
        </a>
        <a
          href="https://wa.me/79123815242"  // Замени 1234567890 на свой номер
          target="_blank"
          rel="noopener noreferrer"
          className="social-link whatsapp"
        >
          <FaWhatsapp style={{ color: 'green' }} />
        </a>
        <a
          href="https://vk.com/verhniy_dom"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link vkontakte"
        >
          <FaVk />
        </a>
        <a
          href="https://max.ru/u/f9LHodD0cOINImuqjFCX6_yHHh72k0nM1M2xObYuS86WLS9X854_MsW-2X8"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link tor"
        >
          <MaxIcon width={30} height={30} />
        </a>
        {/* Новая ссылка на сайт Верхний Дом */}
        
        
      </div>
    </div>
  );
};

export default Footer;
