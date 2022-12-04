import { Route, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { usePopups } from '../../contexts/PopupsContext';

function ProtectedRoute({ children, ...props }) {
  const { isLoggedIn } = useAuth();
  const { openSignInPopup } = usePopups().popups.signInPopup;
  const history = useHistory();

  function redirectUnauthorized() {
    history.push('/');
    openSignInPopup();
  }

  return (
    <Route {...props}>{isLoggedIn ? children : redirectUnauthorized()}</Route>
  );
}

export default ProtectedRoute;
