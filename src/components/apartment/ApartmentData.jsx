import img from '../../assets/images/50лет57а/imgBos.jpg';
import img50_01 from '../../assets/images/50лет57а/img_01.jpg'
import img50_02 from '../../assets/images/50лет57а/img_02.jpg'
import img50_03 from '../../assets/images/50лет57а/img_03.jpg'
import img50_04 from '../../assets/images/50лет57а/img_04.jpg'
import img50_05 from '../../assets/images/50лет57а/img_05.jpg'


import img38_01 from '../../assets/images/50лет57а_38м2/img_01.jpg'
import img38_02 from '../../assets/images/50лет57а_38м2/img_02.jpg'
import img38_03 from '../../assets/images/50лет57а_38м2/img_03.jpg'
import img38_04 from '../../assets/images/50лет57а_38м2/img_04.jpg'
import img38_05 from '../../assets/images/50лет57а_38м2/img_05.jpg'
import img38_06 from '../../assets/images/50лет57а_38м2/img_06.jpg'
import img38_07 from '../../assets/images/50лет57а_38м2/img_07.jpg'
import img38_08 from '../../assets/images/50лет57а_38м2/img_08.jpg'

// apartmentsData.js
export const apartments = [
  {
    id: 1,
    title: 'Квартира 1',
    description: 'Отличная квартира  с видом на парк',
    price: 5000000,
    area: 45,
    floor: 5,
    rooms: 1, // Для фильтрации
    image: img,
    images: [
      img50_01,
      img50_02,
      img50_03,
      img50_04,
      img50_05
    ]
  },
  {
    id: 2,
    title: 'Квартира 2',
    description: 'Комфортрабельная 2-комнатная',
    price: 7000000,
    area: 65,
    floor: 7,
    rooms: 2,
    image: img38_08,
    images: [
      img38_01,
      img38_02,
      img38_03,
      img38_04,
      img38_05,
      img38_06,
      img38_07,
      
    ]
  },
  {
    id: 3,
    title: 'Студия 3',
    description: 'Уютная студия рядом с метро',
    price: 4000000,
    area: 30,
    floor: 3,
    rooms: 0,
    image: 'path/to/image3.jpg',
    images: [

    ]
  },
  // Добавьте больше квартир...
];
