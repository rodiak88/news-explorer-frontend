import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useForm } from '../../hooks/useForm';
import { usePopups } from '../../contexts/PopupsContext';

function SignupPopup({ ...props }) {
  const { values, handleChange } = useForm({
    email: '',
    password: '',
    name: '',
  });

  const { email, password, name } = values;

  const { isSignUpPopupOpen, closeSignUpPopup } =
    usePopups().popups.signUpPopup;
  const { openSignInPopup } = usePopups().popups.signInPopup;

  return (
    <>
      <PopupWithForm
        title={props.title}
        isOpen={isSignUpPopupOpen}
        name='signup'
        onClose={closeSignUpPopup}
        submitButtonText='Sign up'
        secondaryButtonText='Sign in'
        onSecondaryButtonClick={openSignInPopup}
      >
        <label className='popup__input-label'>Email</label>
        <input
          type='email'
          name='email'
          value={email || ''}
          onChange={handleChange}
          id='email-input'
          className='popup__input'
          placeholder='Enter email'
          required
        />
        <span className='popup__input-error'></span>
        <label className='popup__input-label'>Password</label>
        <input
          type='password'
          name='password'
          value={password || ''}
          onChange={handleChange}
          id='password-input'
          className='popup__input'
          placeholder='Enter password'
          required
        />
        <span className='popup__input-error'></span>
        <label className='popup__input-label'>Username</label>
        <input
          type='text'
          name='name'
          value={name || ''}
          onChange={handleChange}
          id='name-input'
          className='popup__input'
          placeholder='Enter your username'
          required
        />
        <span className='popup__input-error'></span>
      </PopupWithForm>
    </>
  );
}
export default SignupPopup;
