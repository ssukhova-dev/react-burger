import JsCookie from "js-cookie"

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const isLoggedInSelector = (store) => !!store.user.token;


function userLogin(token) {
    return {
        type: USER_LOGIN,
        token: token
    }
}

function userLogout() {
    return {
        type: USER_LOGOUT
    }
}

export const loginThunk = (data) => (dispatch) => {
    console.log(data);

    //api.login(data).then( (response) => {
    //   const {access_token, refresh_token} = response.json();
    //})

    Promise.resolve().then( () => {

        const accessToken = Math.random().toString();
        //localStorage.setItem('userId', accessToken);
        JsCookie.set('userId', accessToken);
        dispatch(userLogin(accessToken))

    }

    );
}

export const checkSessionThunk = () => (dispatch) => {
    //const accessToken = localStorage.getItem('userId');
    const accessToken = JsCookie.get('userId');
    dispatch(userLogin(accessToken));
}

export const logoutThunk = () => (dispatch) => {
    //api.logout().then( )

    Promise.resolve().then( () => {

        // localStorage.removeItem('userId');
        JsCookie.remove('userId');
        dispatch(userLogout())

    }

    );
}

