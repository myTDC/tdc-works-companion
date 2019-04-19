import { createAction } from "redux-starter-kit"
import { worksV1DocRef, testRef } from "../../services/fb"
import wsv1data from "../../res/worksv1.js"

// export const COMMON_ADDING_WORKS = "WORKS_ADDING"
// export const COMMON_ADDING_WORKS_SUCCESS = "WORKS_ADD_SUCCESS"
// export const COMMON_ADDING_FAILURE = "ADDING_FAILURE"
// export const COMMON_FETCHING_WORKS = "WORKS_FETCHING"
// export const COMMON_FETCHING_WORKS_SUCCESS = "WORKS_FETCH_SUCCESS"
// export const COMMON_FETCHING_FAILURE = "FETCHING_FAILURE"
// export const TEST_ADD = `ADD_TO_FSTORE`

export const gettingDataWorksV1 = createAction("WORKS_FETCHING")
export const gotDataWorksV1 = createAction("WORKS_FETCH_SUCCESS")
export const gotErrorGettingDataWorksV1 = createAction("FETCHING_FAILURE")
export const settingDataWorksV1 = createAction("WORKS_ADDING")
export const setDataWorksV1 = createAction("WORKS_ADD_SUCCESS")
export const gotErrorSettingDataWorksV1 = createAction("ADDING_FAILURE")

export const testRead = () => {
  testRef
    .get()
    .then(doc => {
      if (doc && doc.exists) {
        console.log("Test Document has data: ", doc())
      }
    })
    .catch(error => {
      console.error("Error adding document: ", error)
    })
}

export const getDataWorksV1 = () => {
  return dispatch => {
    dispatch(gettingDataWorksV1())
    worksV1DocRef
      .get()
      .then(doc => {
        if (doc && doc.exists) {
          const incomingData = doc.data()
          console.log("Document has data: ", incomingData)
          dispatch(gotDataWorksV1({ workshops: incomingData }))
          // dispatch({
          //   type: COMMON_FETCHING_WORKS_SUCCESS,
          //   payload: { workshops: incomingData }
          // })
        }
      })
      .catch(error => {
        console.error("Error adding document: ", error)
        dispatch(gotErrorGettingDataWorksV1({ error_code: error }))
      })
  }
}

export const listentoDataWorksV1 = () => {
  worksV1DocRef.onSnapshot(doc => {
    if (doc && doc.exists) {
      console.log("Snap has data: ", doc.data)
    }
  })
}

export const addDataWorksV1 = () => {
  return dispatch => {
    dispatch(settingDataWorksV1())
    console.log("Adding Data: ", wsv1data, " to ", worksV1DocRef)
    worksV1DocRef
      .set(wsv1data)
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id)
        dispatch(setDataWorksV1())
      })
      .catch(error => {
        console.error("Error adding document: ", error)
        dispatch(gotErrorSettingDataWorksV1({ error_code: error }))
      })
  }
}

// const loginSuccessful = user => {
//   if (user != null) {
//     return {
//       type: AUTH_USER_SIGNIN_GOOGLE,
//       data: user,
//     }
//   }
// }

// const signon = () => {
//   return async dispatch => {
//     // console.log('SingedIn! ; AuthRef is: ', getAuthRef())
//     await getAuthRef()
//       .signInWithPopup(gProvider)
//       .then(result => {
//         // console.log("SingedIn! ; Response is: ", result)
//         // console.log("SingedIn! ; User Info: ", result.user)
//         const user = {
//           // The signed-in user info.\
//           // profile: result.additionalUserInfo.profile,
//           locale: result.additionalUserInfo.profile.locale,
//           profileId: result.additionalUserInfo.profile.id,
//           uid: result.user.uid,
//           name: result.user.displayName,
//           givenName: result.additionalUserInfo.profile.given_name,
//           familyName: result.additionalUserInfo.profile.family_name,
//           isNew: result.additionalUserInfo.isNewUser,
//           email: result.user.email,
//           isVerified: result.user.emailVerified,
//           isAnonymous: result.user.isAnonymous,
//           phoneNo: result.user.phoneNumber,
//           photoUrl: result.user.photoURL,
//           emailVerified: result.user.emailVerified,
//           refToken: result.user.refreshToken,
//           token: result.credential.accessToken, // This gives you a Google Access Token. You can use it to access the Google API.
//         }

//         console.log("SingedIn! ; User is: ", user)
//         //const user = getAuthRef().currentUser
//         dispatch(loginSuccessful(user))
//       })
//       .catch(function(error) {
//         var errorCode = error.code
//         var errorMessage = error.message
//         var email = error.email
//         var credential = error.credential

//         console.group("Auth_Error")
//         console.log("Error Code: ", errorCode)
//         console.log("With Message: ", errorMessage)
//         console.log("For Email: ", email) // The email of the user's account used.
//         console.log("using Credential: ", credential) // The firebase.auth.AuthCredential type that was used.
//         console.groupEnd()
//       })
//   }
// }

// // const signon = () => {
// //   return async dispatch => {
// //     console.log('SingedIn! ; AuthRef is: ', getAuthRef())
// //     await getAuthRef().signInWithPopup(gProvider).then(result => {
// //       console.log('SingedIn! ; Response is: ', result)
// //       dispatch(loginSuccessful(result))
// //     })
// //   }
// // }

// export default signon

// // const logInSuccess = (token, user, uInfo, userID) => {
// // 	return { /*Retunrs an action*/
// // 		type: AUTH_USER_SIGNIN_GOOGLE,
// // 		authToken: token,
// // 		authUser: user,
// // 		authUserInfo: uInfo,
// // 		userId: userID
// // 	};
// // };

// // const logInError = (error, message) => {
// // 	return { /*Retunrs an action*/
// // 		type: AUTH_FETCHING_USER_FAILURE,
// // 		errorCode: error,
// // 		errorMessage: message
// // 	};
// // };
