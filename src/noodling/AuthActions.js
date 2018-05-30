//     return (dispatch) => {
//         dispatch(startLogin(creds))

//         return fetch('http://localhost:3000/api/users/login', config)
//             .then((res) => {
//                 res.json().then((user) => ({user, res}))
//             }).then(({user, res}) => {
//                 if (!res.ok) {
//                     dispatch(loginError(user.message))
//                     return Promise.reject(user)
//                 } else {
//                     // If login was successful, set the token in local storage
//                     localStorage.setItem('id_token', user.id_token)
//                     localStorage.setItem('id_token', user.access_token)
//                     // Dispatch the success action
//                     dispatch(receiveLogin(user))
//                 }
//             }).catch(err = console.log(err))
//     }
// }
    
    
//     return dispatch => {
//       // We dispatch requestLogin to kickoff the call to the API
//       dispatch(requestLogin(creds))
  
//       return fetch('http://localhost:3000/api/users', config)
//         .then(res =>
//           res.json().then(user => ({ user, response }))
//               ).then(({ user, res }) =>  {
//           if (!res.ok) {
//             // If there was a problem, we want to
//             // dispatch the error condition
//             dispatch(loginError(user.message))
//             return Promise.reject(user)
//           } else {
//             // If login was successful, set the token in local storage
//             localStorage.setItem('id_token', user.id_token)
//             localStorage.setItem('id_token', user.access_token)
//             // Dispatch the success action
//             dispatch(receiveLogin(user))
//           }
//         }).catch(err => console.log("Error: ", err))
//     }
//   }