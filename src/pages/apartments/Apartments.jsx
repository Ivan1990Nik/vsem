import { useState } from 'react';
import './apartments.css';
import ApartmentCard from '../../components/apartment/ApartmentCart';
import { apartments } from '../../components/apartment/ApartmentData';
import HomeReserveWidget from '../homeReserveWidget/HomeReserveWidget';

import { motion, AnimatePresence } from "framer-motion";

const Apartaments = () => {
  const [activeTab, setActiveTab] = useState("99");
  const [activeDistrict, setActiveDistrict] = useState("all");

  const filteredApartments = apartments.filter((apartment) => {
    const matchesRooms =
      activeTab === '99' || apartment.rooms.toString() === activeTab;

    const matchesDistrict =
      activeDistrict === 'all' || apartment.district === activeDistrict;

    return matchesRooms && matchesDistrict;
  });

  return (
    <div className='apartaments-container'>
      <HomeReserveWidget />

      {/* 🔹 Фильтр по комнатам */}
      <nav>
        <ul className='nav-list--apartments'>
          <li className='nav-list-btn' onClick={() => setActiveTab('99')}>
            <div className='btn-style'>Все</div>
          </li>

          <li className='nav-list-btn' onClick={() => setActiveTab('1')}>
            <div className='btn-style'>1 - комнатные квартиры</div>
          </li>

          <li className='nav-list-btn' onClick={() => setActiveTab('2')}>
            <div className='btn-style'>2 - комнатные квартиры</div>
          </li>

          <li className='nav-list-btn' onClick={() => setActiveTab('3')}>
            <div className='btn-style'>3 - комнатные квартиры</div>
          </li>

          <li className='nav-list-btn' onClick={() => setActiveTab('0')}>
            <div className='btn-style'>Студии</div>
          </li>

          <li
            className='nav-list-btn'
            onClick={() => {
              setActiveTab('4');
              setActiveDistrict('all');
            }}
          >
            <div className='btn-style'>коттеджи</div>
          </li>
        </ul>
      </nav>

      {/* 🔹 Фильтр по районам */}
      <div className='district-selector'>
        <select
          className='district-select'
          value={activeDistrict}
          onChange={(e) => setActiveDistrict(e.target.value)}
        >
          <option value="all">Все районы</option>
          <option value="Центр">Центр</option>
          <option value="Мыс">Мыс</option>
          <option value="Лесобаза">Лесобаза</option>
        </select>
      </div>

      {/* 🔥 АНИМАЦИЯ */}
      <motion.div layout className='apartments-grid'>
        <AnimatePresence>
          {filteredApartments.map((apartment) => (
            <motion.div
              key={apartment.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              <ApartmentCard apartment={apartment} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Apartaments;