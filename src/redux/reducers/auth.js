import { AUTH_USER_SIGNIN_GOOGLE, TEST_INCREMENT } from '../actions/auth'
import { timeLogger } from '../commons';

const initialState = {
  count: 0,
  user: null,
  usrInfo: null,
}

const reducer = (state = initialState, action) => {
  console.log('Inside Reducer')
  switch(action.type) {
    case AUTH_USER_SIGNIN_GOOGLE: {
      return Object.assign({}, state, {
        user: action.payload
      })
    }

    case TEST_INCREMENT: {
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    }
    default: {
      // const timer = new Date()
      // console.log('[Red/Auth] default case triggered, check action type in dispatch. At:', timer.getHours(), ':', timer.getMinutes(), ':', timer.getSeconds(), ':', timer.getMilliseconds())
      console.log('[Red/Auth] default case triggered, check action type in dispatch.')
      timeLogger();
      console.log('Current ActionType is: ', action.type, ' And with data: ', action)
      return state
    }
  }
 
  // if (action.type === `INCREMENT`) {
  //   console.log('Inside Reducer')
  //   return Object.assign({}, state, {
  //     count: state.count + 1,
  //   })
  // }
  // return state
}

export default reducer