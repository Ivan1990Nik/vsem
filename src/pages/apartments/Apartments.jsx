import { useState } from 'react';
import './apartments.css';
import ApartmentCard from '../../components/apartment/ApartmentCart';
import { apartments } from '../../components/apartment/ApartmentData';
import HomeReserveWidget from '../homeReserveWidget/HomeReserveWidget';

const Apartaments = () => {
  const [activeTab, setActiveTab] = useState("99");
  const [activeDistrict, setActiveDistrict] = useState("all");

  const filteredApartments = apartments.filter((apartment) => {
    // Фильтр по комнатам (как было)
    const matchesRooms = activeTab === '99' || apartment.rooms.toString() === activeTab;

    // Фильтр по району (новый)
    const matchesDistrict = activeDistrict === 'all' || apartment.district === activeDistrict;

    // Возвращаем true только если оба условия совпадают
    return matchesRooms && matchesDistrict;
  });



  return (
    <div className='apartaments-container'>
      <HomeReserveWidget />
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
          <li className='nav-list-btn' onClick={() => {
            setActiveTab('4');
            setActiveDistrict('all')
          }}
          >

            <div className='btn-style'>коттеджи</div>
          </li>
        </ul>
      </nav>

      {/* Новая навигация по районам (теперь селект) */}
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

      {/* Рендеринг квартир (как было) */}
      <div className='apartments-grid'>
        {filteredApartments.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </div >
  );
};

export default Apartaments;
