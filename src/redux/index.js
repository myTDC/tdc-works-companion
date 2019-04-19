import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import logger from 'redux-logger'
import auth from './reducers/auth'
import admin from './reducers/admin'

const store = configureStore({
  reducer: {
    auth: auth,
    admin: admin,
    // posts: postsReducer
  },
  middleware: [logger, ...getDefaultMiddleware()],
})

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./reducers', () => store.replaceReducer(auth))
// }

export const loadState = () => {
  try{
      const serializedState = localStorage.getItem('storeState');
      if(serializedState === null){
          return undefined;
      }
      return JSON.parse(serializedState);
  }
  catch(err){
      console.log('[Red/Index] -> [loadState()] Error Getting Serilaized State');
      return undefined;
  }
};

export const setState = (state) => {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('storeState', serializedState);
  } catch (err) {
      console.log('[Red/Index] -> [setState()] Error Setting Serilaized State');
  }
}

export default store