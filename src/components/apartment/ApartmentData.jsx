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


import img38k_1_01 from '../../assets/images/50лет57А_к1/img-01.jpg'
import img38k_1_02 from '../../assets/images/50лет57А_к1/img-02.jpg'
import img38k_1_03 from '../../assets/images/50лет57А_к1/img-03.jpg'
import img38k_1_04 from '../../assets/images/50лет57А_к1/img-04.jpg'
import img38k_1_05 from '../../assets/images/50лет57А_к1/img-05.jpg'
import img38k_1_06 from '../../assets/images/50лет57А_к1/img-06.jpg'
import img38k_1_07 from '../../assets/images/50лет57А_к1/img-07.jpg'
import img38k_1_08 from '../../assets/images/50лет57А_к1/img-08.jpg'
import img38k_1_09 from '../../assets/images/50лет57А_к1/img-09.jpg'
import img38k_1_10 from '../../assets/images/50лет57А_к1/img-10.jpg'
import img38k_1_11 from '../../assets/images/50лет57А_к1/img-11.jpg'
import img38k_1_12 from '../../assets/images/50лет57А_к1/img-12.jpg'
import img38k_1_13 from '../../assets/images/50лет57А_к1/img-13.jpg'
import img38k_1_14 from '../../assets/images/50лет57А_к1/img-14.jpg'
import img38k_1_video from '../../assets/images/50лет57А_к1/video.MP4'


// apartmentsData.js
export const apartments = [
  {
    id: 1,
    title: '1-к. квартира',
    address: '50 лет октября 57a',
    description: 'Отличная квартира  с видом на парк',


    price: 2500,
    area: 45,

    people: 2,
    bed: 1,
    technique: ['кондиционер, холодильник, плита, микроволновка, стиральная машина, водонагреватель, телевизор, фен, утюг'],
    internet: 'WI-Fi',
    pledge: 2000,
    CheckoutTime: '14:00 - 12:00',


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
    address: '50 лет октября 57А',
    title: 'Квартира 2',
    description: 'Комфортрабельная 1-комнатная',
    price: 7000000,
    area: 38,
    floor: 7,
    rooms: 1,
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
    video: img38k_1_video,
    image: img38k_1_01,
    images: [
      img38k_1_02,
      img38k_1_03,
      img38k_1_04,
      img38k_1_05,
      img38k_1_06,
      img38k_1_07,
      img38k_1_08,
      img38k_1_09,
      img38k_1_10,
      img38k_1_11,
      img38k_1_12,
      img38k_1_13,
      img38k_1_14
    ]
  },

  // Добавьте больше квартир...
];
