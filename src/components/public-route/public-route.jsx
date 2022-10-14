import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedInSelector } from '../../services/actions/user';

export function PublicRoute({ redirectTo, noRedirect, ...props }) {
    const isLoggedIn = useSelector(isLoggedInSelector);

    if (!isLoggedIn) {
        return (
            <Route  {...props}  />
        );
    } else {
        return noRedirect ? null : <Redirect to={redirectTo} />
    }
}  