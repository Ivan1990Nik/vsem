import React from 'react';
import '../../pages/apartments/apartments.css';
import { IoWifiSharp } from "react-icons/io5";
import { LuSofa } from "react-icons/lu";
import { FaPeopleRoof } from "react-icons/fa6";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { LuWashingMachine } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";
import { GiLaddersPlatform } from "react-icons/gi";
import { GiHouseKeys } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { CgViewComfortable } from "react-icons/cg";


import { MdOutlineBedroomParent } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { PiDogBold } from "react-icons/pi";
import { MdSmokingRooms } from "react-icons/md";
import { GrDocumentVerified } from "react-icons/gr";
import { LuPartyPopper } from "react-icons/lu";
import { Link } from 'react-router-dom';


const ApartmentModal = ({ apartment, onClose }) => {
  if (!apartment) return null;

  // Функция для обработки клика и открытия 2GIS
  const handleAddressClick = () => {
    const city = 'tumen'; // Укажи город по умолчанию, например, 'moscow' или 'spb'
    const encodedAddress = encodeURIComponent(apartment.address); // Кодируем адрес для URL
    const url = `https://2gis.ru/${city}/search/${encodedAddress}`;
    window.open(url, '_blank'); // Открываем в новой вкладке
  };
  const apartmentType = apartment.type || 'apartment';
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-fullscreen" onClick={e => e.stopPropagation()}>
        <div className='modal-header-content-fullscreen'>
          <button className="modal-close-btn" onClick={onClose}>×</button>
          <h3>{apartment.title}, {apartment.area} м² </h3>
          <h5
            className='modal-content-fullscreen-address'
            onClick={handleAddressClick}
          >
            {apartment.address}
          </h5>
          <p>от {apartment.price} за сутки</p>
        </div>
        <ul className="modal-details">
          <li className='modal-detail-item' >
            <FaPeopleRoof className='modal-detail' /><strong className='modal-detail-title'>Гостей:</strong><span className='modal-detail-data'>{apartment.people}</span>
          </li>
          <li className='modal-detail-item' >
            <GiHouseKeys className='modal-detail' /><strong className='modal-detail-title'>Спален:</strong><span className='modal-detail-data'>{apartment.rooms === 0 ? 'Студия' : apartment.rooms}</span>
          </li>
          <li className='modal-detail-item' >
            <LuSofa className='modal-detail' /><strong className='modal-detail-title'>   спальные места:</strong><span className='modal-detail-data'>{apartment.bed}</span>
          </li>
          <li className='modal-detail-item' >
            <LiaVectorSquareSolid className='modal-detail' /><strong className='modal-detail-title'>Площадь:</strong><span className='modal-detail-data'>{apartment.area}м²</span>
          </li>
          <li className='modal-detail-item' >
            <GiLaddersPlatform className='modal-detail' /><strong className='modal-detail-title'>этаж:</strong><span className='modal-detail-data'>{apartment.floor}</span>
          </li>
          <li className='modal-detail-item' >
            <LuWashingMachine className='modal-detail' /><strong className='modal-detail-title'>Техника:</strong><span className='modal-detail-data'>{apartment.technique}</span>
          </li>
          <li className='modal-detail-item' >
            <IoWifiSharp className='modal-detail' /><strong className='modal-detail-title'>   Интернет:</strong><span className='modal-detail-data'>{apartment.internet}</span>
          </li>
          <li className='modal-detail-item' >
            <CgViewComfortable className='modal-detail' /><strong className='modal-detail-title'>Комфорт:</strong><span className='modal-detail-data'>{apartment.comfort}</span>
          </li>
          <li className='modal-detail-item' >
            <GiReceiveMoney className='modal-detail' /><strong className='modal-detail-title'>Залог:</strong><span className='modal-detail-data'>{apartment.pledge}</span>
          </li>
          <li className='modal-detail-item' >
            <IoTimeOutline className='modal-detail' /><strong className='modal-detail-title'>Расчетный час:</strong><span className='modal-detail-data'>{apartment.CheckoutTime}</span>
          </li>
          <li className='modal-detail-item' >
            <MdOutlineBedroomParent className='modal-detail' /><strong className='modal-detail-title'>Помесячно аренда:</strong><span className='modal-detail-data'>{apartment.rent}</span>
          </li>
          <li className='modal-detail-item' >
            <FaChildren className='modal-detail' /><strong className='modal-detail-title'>С детьми:</strong><span className='modal-detail-data'>{apartment.children}</span>
          </li>
          <li className='modal-detail-item' >
            <PiDogBold className='modal-detail' /><strong className='modal-detail-title'>С животными:</strong><span className='modal-detail-data'>{apartment.animals}</span>
          </li>
          <li className='modal-detail-item' >
            <MdSmokingRooms className='modal-detail' /><strong className='modal-detail-title'>Можно курить:</strong><span className='modal-detail-data'>{apartment.smoke}</span>
          </li>
          <li className='modal-detail-item' >
            <LuPartyPopper className='modal-detail' /><strong className='modal-detail-title'>Вечеринки:</strong><span className='modal-detail-data'>{apartment.party}</span>
          </li>
          <li className='modal-detail-item' >
            <GrDocumentVerified className='modal-detail' /><strong className='modal-detail-title'>Отчетные документы:</strong><span className='modal-detail-data'>{apartment.document}</span>
          </li>



          <li className='modal-detail-item-info'>
            <p>узнать подробнее можно по телефону:</p>
            <a className="btn-style-tel" href="tel:+71234567890" >+7 (123) 456-78-90</a>
          </li>
          {/* Новая кнопка для бронирования */}
          <li className='modal-detail-item-info'>
            <p>Забронировать самостоятельно:</p>
            <a className="btn-style-tel" href="https://homereserve.ru/P4ZmUqmKax?tag=%D0%A1%D0%B0%D0%B9%D1%82" target="_blank" rel="noopener noreferrer">Перейти на сайт бронирования</a>
          </li>
        </ul>
        <div className="modal-image-gallery">
          {apartment.video && (
            <video
              src={apartment.video}
              alt={apartment.title}
              autoPlay
              muted
              controls
              style={{ cursor: 'pointer', maxWidth: '100%', maxHeight: '100%' }}
            />
          )}
          <img src={apartment.image} alt={apartment.title} />
          <div className="images">
            {apartment.images.map((imgSrc, idx) => (
              <img key={idx} src={imgSrc} alt={`${apartment.title} - фото ${idx + 1}`} />
            ))}
          </div >
          <div className='modal-detail-rules'>

          <Link to={`/rules?type=${apartmentType}`}>  {/* Передаём тип в query */}
            <span>ознакомиться с правилами проживания</span>
          </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
export default ApartmentModal;
