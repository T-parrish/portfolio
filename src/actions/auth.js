// Login / authentication actions

// initiates the login process
export const loginUser = (creds) => ({
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
});


export const logIn = (user) => ({
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
});

export const loginError = (message) => ({
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
});

export const startUserLogin = (creds) => {

    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(creds)
    }

    return fetch('http://localhost:3000/api/users/login', config)
        .then((data) => {
            console.log(data.headers.token)
        })
    
}