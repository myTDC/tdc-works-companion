import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import auth from './reducers/auth';
import admin from './reducers/admin';
import feedback from './reducers/feedback';
import tools from './reducers/tools';
import users from './reducers/users';

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('storedState');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		console.log('[Red/Index] -> [loadState()] Error Getting Serilaized State', err);
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('storedState', serializedState);
	} catch (err) {
		console.log('[Red/Index] -> [setState()] Error Setting Serilaized State', err);
	}
};

const initState = loadState();
const store = configureStore({
	reducer: {
		auth: auth,
		admin: admin,
		feedback: feedback,
		tools: tools,
		users: users,
	},
	middleware: [logger, ...getDefaultMiddleware()],
	preloadedState: initState,
});

store.subscribe(
	throttle(() => {
		const currentState = store.getState();
		saveState(currentState);
	}, 2000)
);

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./reducers', () => store.replaceReducer(auth))
// }

export default store;
