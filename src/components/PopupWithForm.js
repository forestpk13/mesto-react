export function PopupWithForm({props}) {
  return (
    <div className={`popup popup_content_${props.name}${props.isOpen ? ' popup_opened' :''}`} onMouseDown={props.onClose}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
        <form className="form" id="profile" name={props.name} noValidate>
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <button type="submit" className="button form__submit-button" name="profile__save" value="Сохранить">Сохранить</button>
        </form>
      </div>
    </div>
  );
}