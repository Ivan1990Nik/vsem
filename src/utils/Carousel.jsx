import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../assets/images/imgBos.jpg'
const Carousel = () => {
  const settings = {
     dots: false,          // Индикаторы снизу
    infinite: true,      // Бесконечная прокрутка
    speed: 1000,         // Скорость анимации
    slidesToShow: 1,     // Показывать 1 слайд
    slidesToScroll: 1,   // Прокручивать по 1 слайду
    autoplay: true,      // Автоматическая прокрутка
    autoplaySpeed: 3000, // Интервал 3 секунды
    accessible: true,    // Включить доступность для скринридеров // Интервал 3 секунды
  };

  const slides = [
    { id: 1, image: img1, title: 'дружелюбно' },
    { id: 2, image: img1, title: 'дружелюбно' },
    { id: 3, image: img1, title: 'дружелюбно' },
    { id: 4, image: img1, title: 'дружелюбно' },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id}>
            <img className='carousel-img'
              src={slide.image}
              alt={slide.title}
             />
            <h3 className='click-title'>{slide.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
