export function Card({card, onCardClick}) {
  return (
    <>
      <img className="photo-card__image" src={card.link} onClick={() => onCardClick(card)} alt={card.name} />
      <div className="photo-card__description">
        <h2 className="photo-card__title">{card.name}</h2>
        <div>
          <button type="button" className="photo-card__like-button" aria-label="Нравится"></button>
          <p className="photo-card__likes">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="photo-card__delete-button" aria-label="Удалить"></button>
    </>
  );
}