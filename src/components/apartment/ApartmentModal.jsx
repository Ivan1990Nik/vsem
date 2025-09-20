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



const ApartmentModal = ({ apartment, onClose }) => {
  if (!apartment) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-fullscreen" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        <h2>{apartment.title}</h2>
        <p>{apartment.description}</p>
        <ul className="modal-details">

          <li className='modal-detail-item' >
            <GiHouseKeys className='modal-detail' /><strong className='modal-detail-title'>Комнат:</strong><span className='modal-detail-data'>{apartment.rooms === 0 ? 'Студия' : apartment.rooms}</span>
          </li>
          <li className='modal-detail-item' >
            <FaPeopleRoof className='modal-detail' /><strong className='modal-detail-title'>Гостей:</strong><span className='modal-detail-data'>{apartment.people}</span>
          </li>
          <li className='modal-detail-item' >
            <LiaVectorSquareSolid className='modal-detail' /><strong className='modal-detail-title'>Площадь:</strong><span className='modal-detail-data'>{apartment.area}м²</span>
          </li>
          <li className='modal-detail-item' >
            <GiLaddersPlatform className='modal-detail' /><strong className='modal-detail-title'>Этаж:</strong><span className='modal-detail-data'>{apartment.floor}</span>
          </li>
          <li className='modal-detail-item' >
            <LuWashingMachine className='modal-detail' /><strong className='modal-detail-title'>Техника:</strong><span className='modal-detail-data'>{apartment.technique}</span>
          </li>
          <li className='modal-detail-item' >
            <IoWifiSharp className='modal-detail' /><strong className='modal-detail-title'>   Интернет:</strong><span className='modal-detail-data'>{apartment.internet}</span>
          </li>

          <li className='modal-detail-item' >
            <LuSofa className='modal-detail' /><strong className='modal-detail-title'>   спальные места:</strong><span className='modal-detail-data'>{apartment.bed}</span>
          </li>
          <li className='modal-detail-item' >
            <GiReceiveMoney className='modal-detail' /><strong className='modal-detail-title'>Залог:</strong><span className='modal-detail-data'>{apartment.pledge}</span>
          </li>
          <li className='modal-detail-item' >
            <IoTimeOutline className='modal-detail' /><strong className='modal-detail-title'>Расчетный час:</strong><span className='modal-detail-data'>{apartment.CheckoutTime}</span>
          </li>



          <li><strong>адрес:</strong> {apartment.address}</li>
          <li><strong>Цена:</strong> {apartment.price} ₽</li>
        
      
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentModal;
