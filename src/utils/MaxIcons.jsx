import React from 'react';
// Правильный импорт PNG-файла (имя переменной в camelCase)
import maxicon from "../assets/icons/Max_logo_2025.png";

const MaxIcon = ({ width = 24, height = 24 }) => {
  return (
    <div>
      {/* Используем переменную maxicon в src, применяем width и height */}
      <img 
        src={maxicon} 
        alt="MAX мессенджер" 
        style={{ width: `${width}px`, height: `${height}px` }}  // Можно использовать объект style, так проще
      />
    </div>
  );
};

export default MaxIcon;
