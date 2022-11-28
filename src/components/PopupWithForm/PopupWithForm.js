import './PopupWithForm.css';
import Popup from '../Popup/Popup';
import SubmitButton from '../SubmitButton/SubmitButton';

function PopupWithForm({
  isOpen,
  name,
  onClose,
  onSubmit,
  onSecondaryButtonClick,
  children,
  ...props
}) {
  const handleSecondaryButtonClick = () => {
    onClose();
    onSecondaryButtonClick();
  };

  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <h2 className='popup__title'>{props.title}</h2>
      <form id={name} name={name} className='popup__form' onSubmit={onSubmit}>
        <fieldset className='popup__fieldset'>{children}</fieldset>
        <SubmitButton buttonText={props.submitButtonText} />
      </form>
      <p className='popup__text'>
        or{' '}
        <button
          className='popup__link-btn'
          onClick={handleSecondaryButtonClick}
        >
          {props.secondaryButtonText}
        </button>
      </p>
    </Popup>
  );
}
export default PopupWithForm;
