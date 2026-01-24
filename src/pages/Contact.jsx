import MaxIcon from "../utils/MaxIcons";
import "./contact.css"; // Создай или обнови файл contacts.css для стилей (все классы начинаются с "contacts-", чтобы не пересекаться с Footer)
import { FaTelegramPlane, FaWhatsapp, FaVk, FaEnvelope, FaPhone, FaHome, FaCalendarAlt } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h2 className="contacts-title">Свяжитесь с нами</h2>
      <p className="contacts-subtitle">Мы всегда рады помочь! Выберите удобный способ связи 👇</p>
      
      {/* Текстовая информация (убран email) */}
      <div className="contacts-info">
        <div className="contacts-info-item">
          <FaPhone className="contacts-info-icon" />
          Телефон: <a href="tel:+79123815242" className="contacts-info-tel"> 8 (912) 381-52-42</a>
        </div>
      </div>
      
      {/* Социальные ссылки + новые сайты */}
      <div className="contacts-links-container">
        <a 
          href="https://t.me/Goodflat72" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contacts-social-link contacts-telegram"
          title="Написать в Telegram"
        >
          <FaTelegramPlane />
          <span className="contacts-link-text">Telegram</span>
        </a>
        <a 
          href="https://wa.me/79123815242" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contacts-social-link contacts-whatsapp"
          title="Написать в WhatsApp"
        >
          <FaWhatsapp />
          <span className="contacts-link-text">WhatsApp</span>
        </a>
        {/* VK закомментирован; раскомментируй, если нужно */}
        <a 
          href="https://vk.com/verhniy_dom" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contacts-social-link contacts-vkontakte"
          title="Перейти в VK"
        >
          <FaVk />
          <span className="contacts-link-text">VK</span>
        </a>
        <a 
          href="https://max.ru/u/f9LHodD0cOINImuqjFCX6_yHHh72k0nM1M2xObYuS86WLS9X854_MsW-2X8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contacts-social-link contacts-tor"
          title="Связаться через Max"
        >
          <MaxIcon width={24} height={24} />
          <span className="contacts-link-text">Max</span>
        </a>
        {/* Новый блок: Сайт сдачи домов посуточно */}
        <a 
          href="https://www.verhniydom.ru" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contacts-social-link contacts-verhniydom"
          title="Сайт сдачи домов посуточно"
        >
          <FaHome />
          <span className="contacts-link-text">забронировать Дом</span>
        </a>
        {/* Новый блок: Сайт бронирования */}
        <a 
          href="https://homereserve.ru/P4ZmUqmKax?tag=%D0%A1%D0%B0%D0%B9%D1%82" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contacts-social-link contacts-booking"
          title="Сайт бронирования"
        >
          <FaCalendarAlt />
          <span className="contacts-link-text">забронировать Квартиру</span>
        </a>
      </div>
      
      {/* Дополнительный блок, например, для формы или карты */}
      <div className="contacts-extra-info">
        <p>Мы отвечаем на сообщения и звонки с 8:00 до 22:00 ежедневно.</p>
      </div>
    </div>
  );
};

export default Contacts;
