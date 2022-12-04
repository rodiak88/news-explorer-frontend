import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useForm } from '../../hooks/useForm';
import { usePopups } from '../../contexts/PopupsContext';
import { useAuth } from '../../contexts/AuthContext';

function SignupPopup({ ...props }) {
  const { values, handleChange, errors, isValid, resetForm } = useForm({
    email: '',
    password: '',
    name: '',
  });

  const { email, password, name } = values;

  const { isSignUpPopupOpen, closeSignUpPopup } =
    usePopups().popups.signUpPopup;
  const { openSignInPopup } = usePopups().popups.signInPopup;

  const { onRegister, authServerError, changeAuthError } = useAuth();

  function handleClose() {
    closeSignUpPopup();
    changeAuthError('');
    resetForm();
  }

  function handleSubmit() {
    const userData = { email, password, name };
    onRegister(userData);
  }

  return (
    <>
      <PopupWithForm
        title={props.title}
        isOpen={isSignUpPopupOpen}
        name='signup'
        onClose={handleClose}
        submitButtonText='Sign up'
        secondaryButtonText='Sign in'
        onSecondaryButtonClick={openSignInPopup}
        isButtonDisabled={!isValid}
        authServerError={authServerError}
        onSubmit={handleSubmit}
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
        <span
          className={`popup__input-error ${
            errors.email !== '' && 'popup__input-error_active'
          }`}
        >
          {errors.email}
        </span>
        <label className='popup__input-label'>Password</label>
        <input
          type='password'
          name='password'
          value={password || ''}
          onChange={handleChange}
          id='password-input'
          className='popup__input'
          placeholder='Enter password'
          minLength={8}
          required
        />
        <span
          className={`popup__input-error ${
            errors.password !== '' && 'popup__input-error_active'
          }`}
        >
          {errors.password}
        </span>
        <label className='popup__input-label'>Username</label>
        <input
          type='text'
          name='name'
          value={name || ''}
          onChange={handleChange}
          id='name-input'
          className='popup__input'
          placeholder='Enter your username'
          minLength={2}
          maxLength={30}
          required
        />
        <span
          className={`popup__input-error ${
            errors.name !== '' && 'popup__input-error_active'
          }`}
        >
          {errors.name}
        </span>
      </PopupWithForm>
    </>
  );
}
export default SignupPopup;
