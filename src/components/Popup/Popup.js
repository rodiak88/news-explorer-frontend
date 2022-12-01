import './Popup.css';
import { useEffect } from 'react';

function Popup({ isOpen, name, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? 'popup__opened' : ''} popup__type_${name}`}
      onClick={handleOverlay}
    >
      <div className={`popup__container popup__container_type_${name}`}>
        {children}
        <button
          className={`popup__close-btn popup__close-btn_type_${name}`}
          type='button'
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default Popup;
