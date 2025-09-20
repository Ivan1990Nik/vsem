// AppointmentCard.jsx (или ApartmentCard.jsx)
import React, { useState } from 'react';
import '../../pages/apartments/apartments.css'; // Общий CSS для стилей
import ApartmentModal from './ApartmentModal';

const ApartmentCard = ({ apartment }) => {

const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


return (
    <>
      <div className="apartment-card">
        <img 
          src={apartment.image} 
          alt={apartment.title} 
          className="apartment-image" 
        />
        <div className="apartment-info">
          <h3>{apartment.title}</h3>
          <div className="apartment-details">
            <span>Цена: {apartment.price} ₽</span>
            <span>Площадь: {apartment.area} м²</span>
            <span>Этаж: {apartment.floor}</span>
          </div>
          <button className="btn-style" onClick={openModal}>Подробнее</button>
        </div>
      </div>

      {isModalOpen && <ApartmentModal apartment={apartment} onClose={closeModal} />}
    </>
  );
};

export default ApartmentCard;
