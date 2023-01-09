export function ImagePopup() {
  return (
    <div className="popup popup_content_photo-big">
      <div className="popup__image-container">
        <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
        <img className="popup__image" src="#" alt="#"/>
        <h3 className="popup__image-caption"></h3>
      </div>
    </div>
  );
}