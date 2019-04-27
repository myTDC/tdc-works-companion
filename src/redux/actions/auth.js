import { createAction } from "redux-starter-kit"
import { getAuthRef, gProvider, usersColRef } from "../../services/fb"

export const authenticatingUser = createAction("USER_AUTH_INIT")
export const authenticatedUser = createAction("USER_AUTH_DONE")
export const gotErrorAuthenticatingUser = createAction("USER_AUTH_ERROR")

export const gettingUserData = createAction("USER_DATA_CHECK")
export const gotUserExists = createAction("USER_DATA_EXISTS")
export const gotErrorCheckingUserData = createAction("USER_DATA_CHECK_ERROR")

export const creatingUser = createAction("USER_DATA_INITIALIZING")
export const createdUser = createAction("USER_DATA_INITIALIZED")
export const gotErrorCreatingUser = createAction("USER_DATA_INIT_ERROR")

const createUser = user => {
  return async dispatch => {
    dispatch(creatingUser())
    console.log("User Doesn't Exist. Creating User with Data: ", user, " to ", usersColRef)
    usersColRef
      .add(user)
      .then(docRef => {
        console.log("User Created at Doc ID: ", docRef.id)
        dispatch(createdUser())
      })
      .catch(error => {
        console.error("Error adding User document: ", error)
        dispatch(gotErrorCreatingUser({ error_code: error }))
      })
  }
}

const getUserData = user => {
  return dispatch => {
    dispatch(gettingUserData())
    usersColRef
      .where("email", "==", user.email)
      .get()
      .then(querySnapshot => {
        if (querySnapshot) {
          querySnapshot.forEach(doc => {
            const incomingData = doc.data()
            console.log("User Exists with id: ", doc.id, " & has data: ", incomingData)
            dispatch(gotUserExists({ user: incomingData }))
          })
        } else {
          dispatch(createUser(user))
        }
      })
      .catch(error => {
        console.error("Error checking user ref: ", error)
        dispatch(gotErrorCheckingUserData({ error_code: error }))
      })
  }
}

const authWithGoogle = () => {
  return async dispatch => {
    dispatch(authenticatingUser()) // console.log('SingedIn! ; AuthRef is: ', getAuthRef())
    await getAuthRef()
      .signInWithPopup(gProvider)
      .then(result => {
        // console.log("SingedIn! ; Response is: ", result) // console.log("SingedIn! ; User Info: ", result.user)
        const user = {  // The signed-in user info.\
          locale: result.additionalUserInfo.profile.locale,
          profileId: result.additionalUserInfo.profile.id,
          uid: result.user.uid,
          nameFull: result.user.displayName,
          nameGiven: result.additionalUserInfo.profile.given_name,
          nameFamily: result.additionalUserInfo.profile.family_name,
          email: result.user.email,
          phoneNo: result.user.phoneNumber,
          photoUrl: result.user.photoURL,
          emailVerified: result.user.emailVerified,
        }
        const userSessionExtras = {
          uid: result.user.uid,
          isAnonymous: result.user.isAnonymous,
          isNew: result.additionalUserInfo.isNewUser,
          refToken: result.user.refreshToken,
          token: result.credential.accessToken, // This gives you a Google Access Token. You can use it to access the Google API.
        }
        console.log("SingedIn!; User is: ", user) //const user = getAuthRef().currentUser
        dispatch(authenticatedUser({ newUser: user, sessionStuff: userSessionExtras })) //dispatch(authSuccessful(user))
        dispatch(getUserData(user)) //check user exists? getData:createUser
      })
      .catch(error => {
        const authError = {
          errorCode: error.code,
          errorMessage: error.message,
          email: error.email,
          credential: error.credential,
        }
        console.group("Auth_Error")
        console.log("Error Code: ", authError.errorCode)
        console.log("With Message: ", authError.errorMessage)
        console.log("For Email: ", authError.email) // The email of the user's account used.
        console.log("using Credential: ", authError.credential) // The firebase.auth.AuthCredential type that was used.
        console.groupEnd()
        dispatch(gotErrorAuthenticatingUser({ error: authError }))
      })
  }
}

export default authWithGoogle

// export const AUTH_USER_SIGNIN_GOOGLE = "USER_SIGNIN"
// export const AUTH_USER_SIGNUP_MOBILE = "USER_SIGNUP"
// export const AUTH_USER_SIGNOUT = "USER_SIGNOUT"
// export const AUTH_USER_INIT_DATA = "USER_INITIALIZE_DATA"
// export const AUTH_FETCHING_USER = "USER_FETCHING_DATA"
// export const REMOVE_FETCHING_USER = "REMOVE_FETCHING_USER"
// export const AUTH_FETCHING_USER_FAILURE = "USER_FETCH_FAILURE"
// export const AUTH_FETCHING_USER_SUCCESS = "USER_FETCH_SUCCESS"
// export const TEST_INCREMENT = `INCREMENT`

// const authSuccessful = user => {
//   if (user != null) {

//     // return {
//     //   type: AUTH_USER_SIGNIN_GOOGLE,
//     //   data: user,
//     // }
//   }
// }

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

// const signon = () => {
//   return async dispatch => {
//     console.log('SingedIn! ; AuthRef is: ', getAuthRef())
//     await getAuthRef().signInWithPopup(gProvider).then(result => {
//       console.log('SingedIn! ; Response is: ', result)
//       dispatch(loginSuccessful(result))
//     })
//   }
// }
