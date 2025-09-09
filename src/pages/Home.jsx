import "./stylePages.css"
import img from '../assets/images/50лет57а/imgBos.jpg'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-info">
        <h1 className="home-title">Квартиры в Тюмени.</h1>
        <p className="home-description">посуточно. Хорошие квартиры в новых домах. Коттеджи.</p>
        {/* Заменим текст с телефоном на кнопку */}
       <div className="home-btn">
        <a href="tel:+71234567890" className="home-phone-btn">+7 (123) 456-78-90</a>
         <button className="home-phone-btn"> <Link className="btn-home-link" to="/apartment">посмотреть квартиры</Link></button>
        </div>
      </div>
      <div className="home-images">
        <img className="home-image img-1" src={img} alt="Изображение 1" />
      
      </div>
    </div>
  )
};

export default Home;
