import { useEffect } from 'react';
import { UseAppContext } from '../context/AppContext.js';

export const useApartments = () => {
  const { apartmentsData, searchFilters, setFilteredApartments } = UseAppContext();

  useEffect(() => {
    let filtered = apartmentsData;
    if (searchFilters.location) {
      filtered = filtered.filter(apart =>
        apart.location.toLowerCase().includes(searchFilters.location.toLowerCase())
      );
    }
    if (searchFilters.guests) {
      filtered = filtered.filter(apart => apart.beds >= searchFilters.guests);
    }
    if (searchFilters.minPrice) {
      filtered = filtered.filter(apart => apart.price >= searchFilters.minPrice);
    }
    if (searchFilters.maxPrice) {
      filtered = filtered.filter(apart => apart.price <= searchFilters.maxPrice);
    }
    setFilteredApartments(filtered);
  }, [apartmentsData, searchFilters, setFilteredApartments]);

  return { filteredApartments: UseAppContext().filteredApartments };
};
