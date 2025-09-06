import { useState } from 'react';
import './apartments.css'
import ApartmentCard from '../../components/apartment/ApartmentCart';
import  {apartments } from '../../components/apartment/ApartmentData'; 




const Apartaments = () => {
  const [activeTab, setActiveTab] = useState("3");




  const filteredApartments = apartments.filter((apartment) => {
    if (activeTab === '3') return true; // Все
    return apartment.rooms.toString() === activeTab;
  });



  console.log(activeTab)
  return (
    <div className='apartaments-container'>
      <nav>
        <ul className='nav-list--apartments'> {/* Исправлено: apartments вместо product */}
          <li className='nav-list-btn' onClick={() => setActiveTab('3')}> {/* Исправлено: list-btn */}
            <button className='btn-style'>все</button>
          </li>
          <li className='nav-list-btn' onClick={() => setActiveTab('1')}>
            <button className='btn-style'>1 комнатные квартиры</button>
          </li>
          <li className='nav-list-btn' onClick={() => setActiveTab('2')}>
            <button className='btn-style'>2 комнатные квартиры</button>
          </li>
          <li className='nav-list-btn' onClick={() => setActiveTab('0')}>
            <button className='btn-style'>студии</button> {/* tab=3 для rooms=0 */}
          </li>
        </ul>
      </nav>
      
      {/* Рендеринг квартир */}
      <div className='apartments-grid'>
        {filteredApartments.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
};

export default Apartaments;