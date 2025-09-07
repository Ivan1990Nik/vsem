// ApartmentModal.jsx
import React from 'react';
import '../../pages/apartments/apartments.css'; // Можно создать стили отдельно


const ApartmentModal = ({ apartment, onClose }) => {
  if (!apartment) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-fullscreen" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        <h2>{apartment.title}</h2>
         <p>{apartment.description}</p>
        <ul className="modal-details">
          <li><strong>Цена:</strong> {apartment.price} ₽</li>
          <li><strong>Площадь:</strong> {apartment.area} м²</li>
          <li><strong>Этаж:</strong> {apartment.floor}</li>
          <li><strong>Комнат:</strong> {apartment.rooms === 0 ? 'Студия' : apartment.rooms}</li>
        </ul>
        {/* Здесь можно добавить галерею или несколько изображений */}
        <div className="modal-image-gallery">
          {/* Пример: просто одно изображение пока */}
          
          <img src={apartment.image} alt={apartment.title} />
          <div className="images">
        {apartment.images.map((imgSrc, idx) => (
          <img key={idx} src={imgSrc} alt={`${apartment.title} - фото ${idx + 1}`} />
        ))}
      </div>
          {/* В будущем - слайдер или галерея */}
        </div>

       
      </div>
    </div>
  );
};

export default ApartmentModal;
