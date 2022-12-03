import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useForm } from '../../hooks/useForm';
import { usePopups } from '../../contexts/PopupsContext';
import { useAuth } from '../../contexts/AuthContext';

function SigninPopup({ ...props }) {
  const { values, handleChange, errors, isValid, resetForm } = useForm({
    email: '',
    password: '',
  });

  const { email, password } = values;

  const { isSignInPopupOpen, closeSignInPopup } =
    usePopups().popups.signInPopup;
  const { openSignUpPopup } = usePopups().popups.signUpPopup;

  const { onLogin, authServerError, changeAuthError } = useAuth();

  function handleClose() {
    closeSignInPopup();
    changeAuthError('');
    resetForm();
  }

  function handleSubmit() {
    const userData = { email, password };
    onLogin(userData);
    resetForm();
  }

  return (
    <>
      <PopupWithForm
        title={props.title}
        isOpen={isSignInPopupOpen}
        name='signin'
        onClose={handleClose}
        submitButtonText='Sign in'
        secondaryButtonText='Sign up'
        onSecondaryButtonClick={openSignUpPopup}
        isButtonDisabled={!isValid}
        authServerError={authServerError}
        onSubmit={handleSubmit}
      >
        <label className='popup__input-label'>Enter email</label>
        <input
          type='email'
          name='email'
          value={email || ''}
          onChange={handleChange}
          id='email-signin-input'
          className='popup__input'
          placeholder='Email'
          required
        />
        <span
          className={`popup__input-error ${
            errors.email !== '' && 'popup__input-error_active'
          }`}
        >
          {errors.email}
        </span>
        <label className='popup__input-label'>Enter password</label>
        <input
          type='password'
          name='password'
          value={password || ''}
          onChange={handleChange}
          id='password-signin-input'
          className='popup__input'
          placeholder='Password'
          required
        />
        <span
          className={`popup__input-error ${
            errors.password !== '' && 'popup__input-error_active'
          }`}
        >
          {errors.password}
        </span>
      </PopupWithForm>
    </>
  );
}
export default SigninPopup;
