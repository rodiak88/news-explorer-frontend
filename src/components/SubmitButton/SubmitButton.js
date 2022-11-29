import './SubmitButton.css';

function SubmitButton({ buttonText, isDisabled }) {
  return (
    <button
      type='submit'
      className={
        isDisabled ? 'submit-btn submit-btn_type_disabled' : 'submit-btn'
      }
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
}

export default SubmitButton;
