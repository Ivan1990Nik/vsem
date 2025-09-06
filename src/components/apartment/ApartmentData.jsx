import img from '../../assets/images/imgBos.jpg'


// apartmentsData.js
export const apartments = [
  {
    id: 1,
    title: 'Квартира 1',
    description: 'Отличная квартира с видом на парк',
    price: 5000000,
    area: 45,
    floor: 5,
    rooms: 1, // Для фильтрации
    image: img,
  },
  {
    id: 2,
    title: 'Квартира 2',
    description: 'Комфортрабельная 2-комнатная',
    price: 7000000,
    area: 65,
    floor: 7,
    rooms: 2,
    image: 'path/to/image2.jpg',
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
  },
  // Добавьте больше квартир...
];
