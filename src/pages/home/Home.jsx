import "./home.css"
import img from '../../assets/img/imgHomePage.jpeg'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-info">
        <h1 className="home-title">Квартиры в  Тюмени<br></br> посуточно  </h1>
        <p className="home-description"> Хорошие квартиры в новых домах <br></br> Для проживания в турпоездках. Коттеджи.</p>
        <div className="home-btn">
          <div>
          <a href="tel:+79123815242" className="home-phone-btn"><span>+7 (912)-381-52-42</span></a>
          </div>
          <div >
            <Link  className="home-phone-btn" to="/apartment"><span>посмотреть квартиры </span></Link>
          </div>
        </div>
      </div>
      <div className="home-images">
        <img className="home-image img-1" src={img} alt="Изображение 1" />

      </div>
    </div>
  )
};

export default Home;
