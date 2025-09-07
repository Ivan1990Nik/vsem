import "./stylePages.css"
import img from '../assets/images/50лет57а/imgBos.jpg'
import Carousel from "../utils/Carousel";


const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-info">
        <h1 className="home-title">Квартиры в Тюмени</h1>
        <p className="home-description">Здесь будет ваше описание.</p>
        <p className="home-phone"> +7 (123) 456-78-90</p>
      </div>
       <div className="home-images">
          <img className="home-image img-1" src={img} alt="Изображение 1" />

          Добавьте больше, если нужно
        </div>
    </div>
  )
};

export default Home;