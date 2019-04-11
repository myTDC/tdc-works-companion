import { 
  // authRef,
  getAuthRef, 
  getUserRef, 
  gProvider } from "../../services/fb"

export const AUTH_USER_SIGNIN_GOOGLE = "USER_SIGNIN"
export const AUTH_USER_SIGNUP_MOBILE = "USER_SIGNUP"
export const AUTH_USER_SIGNOUT = "USER_SIGNOUT"
export const AUTH_USER_INIT_DATA = "USER_INITIALIZE_DATA"
export const AUTH_FETCHING_USER = "USER_FETCHING_DATA"
export const REMOVE_FETCHING_USER = "REMOVE_FETCHING_USER"
export const AUTH_FETCHING_USER_FAILURE = "USER_FETCH_FAILURE"
export const AUTH_FETCHING_USER_SUCCESS = "USER_FETCH_SUCCESS"
export const TEST_INCREMENT = `INCREMENT`

const loginSuccessful = incomingData => {
  return {
    type: AUTH_USER_SIGNIN_GOOGLE,
    data: incomingData,
  }
}

const signon = () => {
  return async dispatch => {
    console.log('SingedIn! ; AuthRef is: ', getAuthRef().useDeviceLanguage())
    await getAuthRef().signInWithPopup(gProvider).then(result => {
      console.log('SingedIn! ; Response is: ', result)
      dispatch(loginSuccessful(result))
    })
  }
}

// const signon = () => {
//   return async dispatch => {
//     console.log('SingedIn! ; AuthRef is: ', getAuthRef())
//     await getAuthRef().signInWithPopup(gProvider).then(result => {
//       console.log('SingedIn! ; Response is: ', result)
//       dispatch(loginSuccessful(result))
//     })
//   }
// }

export const counter = () => {
  console.log("Inside Action Creator")
  return { type: TEST_INCREMENT }
  // return { type: `INCREMENT` }
}

export default signon

// const logInSuccess = (token, user, uInfo, userID) => {
// 	return { /*Retunrs an action*/
// 		type: AUTH_USER_SIGNIN_GOOGLE,
// 		authToken: token,
// 		authUser: user,
// 		authUserInfo: uInfo,
// 		userId: userID
// 	};
// };

// const logInError = (error, message) => {
// 	return { /*Retunrs an action*/
// 		type: AUTH_FETCHING_USER_FAILURE,
// 		errorCode: error,
// 		errorMessage: message
// 	};
// };
