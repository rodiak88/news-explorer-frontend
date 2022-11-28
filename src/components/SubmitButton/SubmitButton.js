import './SubmitButton.css';

function SubmitButton({ buttonText }) {
  return (
    <button type='submit' className='submit-btn'>
      {buttonText}
    </button>
  );
}

export default SubmitButton;
