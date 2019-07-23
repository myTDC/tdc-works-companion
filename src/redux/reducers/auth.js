import {
	//AUTH_USER_SIGNIN_GOOGLE, TEST_INCREMENT
	authenticatingUser,
	authenticatedUser,
	gotErrorAuthenticatingUser,
	gettingUserData,
	gotUserExists,
	gotErrorCheckingUserData,
	creatingUser,
	createdUser,
	gotErrorCreatingUser,
} from '../actions/auth';
import { createReducer } from 'redux-starter-kit';
// import { timeLogger } from '../commons';

const initialState = {
	authing: false,
	getting: false,
	creating: false,
	userProfileId: null,
	user: null,
	gotError: false,
	error: false,
	role: 'visitor',
	access: 'free',
};

const authReducer = createReducer(initialState, {
	[authenticatingUser.type]: (state) => {
		console.log('Auth Process Started');
		state.authing = true;
	},
	[authenticatedUser.type]: (state, action) => {
		state.authing = false;
		state.user = action.payload.newUser;
		state.userProfileId = action.payload.newUser.profileId;
	},
	[gotErrorAuthenticatingUser.type]: (state, action) => {
		state.authing = false;
		state.gotError = true;
		state.error = action.payload.error;
	},
	[gettingUserData.type]: (state) => {
		state.getting = true;
	},
	[gotUserExists.type]: (state, action) => {
		state.getting = false;
		// state.user = action.payload.newUser;
		// state.userProfileId = action.payload.newUser.profileId;
	},
	[gotErrorCheckingUserData.type]: (state, action) => {
		state.getting = false;
		state.gotError = true;
		state.error = action.payload.error_code;
	},
	[creatingUser.type]: (state) => {
		state.authing = true;
	},
	[createdUser.type]: (state, action) => {
		state.authing = false;
	},
	[gotErrorCreatingUser.type]: (state, action) => {
		state.authing = false;
		state.gotError = true;
		state.error = action.payload.error_code;
	},
});

export default authReducer;

// const reducer = (state = initialState, action) => {
//   console.log('Inside Reducer')
//   switch(action.type) {
//     case AUTH_USER_SIGNIN_GOOGLE: {
//       return Object.assign({}, state, {
//         user: action.payload
//       })
//     }

//     case TEST_INCREMENT: {
//       return Object.assign({}, state, {
//         count: state.count + 1,
//       })
//     }
//     default: {
//       // const timer = new Date()
//       // console.log('[Red/Auth] default case triggered, check action type in dispatch. At:', timer.getHours(), ':', timer.getMinutes(), ':', timer.getSeconds(), ':', timer.getMilliseconds())
//       // console.log('[Red/Auth] default case triggered, check action type in dispatch.')
//       // timeLogger();
//       // if(action.type !== "@@INIT" ) {
//       //   console.log('Current ActionType is: ', action.type, ' And with data: ', action)
//       // }

//       return state
//     }
//   }

// }

// export default reducer

// if (action.type === `INCREMENT`) {
//   console.log('Inside Reducer')
//   return Object.assign({}, state, {
//     count: state.count + 1,
//   })
// }
// return state
