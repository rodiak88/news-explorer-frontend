import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useForm } from '../../hooks/useForm';
import { usePopups } from '../../contexts/PopupsContext';

function SigninPopup({ ...props }) {
  const { values, handleChange } = useForm({
    email: '',
    password: '',
  });

  const { email, password } = values;

  const { isSignInPopupOpen, closeSignInPopup } =
    usePopups().popups.signInPopup;
  const { openSignUpPopup } = usePopups().popups.signUpPopup;

  return (
    <>
      <PopupWithForm
        title={props.title}
        isOpen={isSignInPopupOpen}
        name='signin'
        onClose={closeSignInPopup}
        submitButtonText='Sign in'
        secondaryButtonText='Sign up'
        onSecondaryButtonClick={openSignUpPopup}
      >
        <label className='popup__input-label'>Enter email</label>
        <input
          type='email'
          name='email'
          value={email || ''}
          onChange={handleChange}
          id='email-input'
          className='popup__input'
          placeholder='Email'
          required
        />
        <span className='popup__input-error'></span>
        <label className='popup__input-label'>Enter password</label>
        <input
          type='password'
          name='password'
          value={password || ''}
          onChange={handleChange}
          id='password-input'
          className='popup__input'
          placeholder='Password'
          required
        />
        <span className='popup__input-error'></span>
      </PopupWithForm>
    </>
  );
}
export default SigninPopup;
