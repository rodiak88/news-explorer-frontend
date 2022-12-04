import './MessagePopup.css';
import Popup from '../Popup/Popup';
import { usePopups } from '../../contexts/PopupsContext';

function MessagePopup({ name }) {
  const { isMessagePopupOpen, closeMessagePopup } =
    usePopups().popups.messagePopup;
  const { openSignInPopup } = usePopups().popups.signInPopup;

  function handleSignInPopup() {
    closeMessagePopup();
    openSignInPopup();
  }

  return (
    <>
      <Popup
        isOpen={isMessagePopupOpen}
        name={name}
        onClose={closeMessagePopup}
      >
        <div className='message-popup'>
          <h2 className='message-popup__text'>
            Registration successfully completed!
          </h2>
          <button
            className='message-popup__link-btn'
            onClick={handleSignInPopup}
          >
            Sign in
          </button>
        </div>
      </Popup>
    </>
  );
}
export default MessagePopup;
