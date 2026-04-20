// AppointmentCard.jsx (или ApartmentCard.jsx)
import React, { useState } from "react";
import "../../pages/apartments/apartments.css"; // Общий CSS для стилей
import ApartmentModal from "./ApartmentModal";

const ApartmentCard = ({ apartment }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="apartment-card" onClick={openModal}>
        <img
          src={apartment.image}
          alt={apartment.title}
          className="apartment-image"
        />
        <div className="apartment-info">
          <h3>{apartment.title}</h3>

          <div className="apartment-details">
            <span>Цена: от {apartment.price} ₽</span>
            <span>Площадь: {apartment.area} м²</span>
          </div>
          <div className="btn-style-container"></div>
        </div>
      </div>

      {isModalOpen && (
        <ApartmentModal apartment={apartment} onClose={closeModal} />
      )}
    </>
  );
};

export default ApartmentCard;
