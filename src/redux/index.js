import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import logger from './middleware/logger'
import auth from './reducers/auth'

const store = configureStore({
  reducer: {
    auth: auth,
    // posts: postsReducer
  },
  middleware: [logger, ...getDefaultMiddleware()],
})

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./reducers', () => store.replaceReducer(auth))
// }

export default store