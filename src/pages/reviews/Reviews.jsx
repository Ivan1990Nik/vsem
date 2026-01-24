import './reviews.css';

const Reviews = () => {
  // Пример данных отзывов (можно заменить на реальные данные из API или состояния)
  const reviews = [
    {
      author: 'Вячеслав Л',
      rating: 5,
      text: 'Всё отлично! Просторная квартира, уютная атмосфера, всё необходимое было под рукой. Хозяева внимательные и заботливые. Рекомендую!',
      date: '2025-10-15'
    },
    {
      author: 'Сергей С',
      rating: 5,
      text: 'Очень удобно расположено, тихое местечко. Всё чисто и аккуратно, ремонт свежий. Идеально подошло для короткой командировки.',
      date: '2025-10-10'
    },
    {
      author: 'Мария П',
      rating: 5,
      text: 'Квартира понравилась,хороший район, рядом магазины и кафе. Хорошее расположение и адекватная цена.',
      date: '2025-09-10'
    },
    {
      author: 'Андрей В',
      rating: 5,
      text: 'Отличная квартира для отдыха! Чисто, уютно, с хорошим видом на город. Хозяева отзывчивые, все удобства на месте. Идеально для коротких поездок. Рекомендую! 🌟',
      date: '2025-10-05'
    }
  ];

  return (
    <div className="reviews-container">
      <h2>Отзывы</h2>
      {reviews.length === 0 ? (
        <p>Отзывов пока нет.</p>
      ) : (
        <ul className="reviews-list">
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <div className="review-header">
                <strong>{review.author}</strong> - {review.rating}/5 ⭐
              </div>
              <p>{review.text}</p>
              <small>{review.date}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
