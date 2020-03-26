import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Router } from '@reach/router';
import { Helmet } from 'react-helmet';

import Footer from './components/footer';
// import logo from "./res/imgs/tdc-reach-full-ondark.svg"
import './styles/App.css';

// import styles from "./styles/app.module.css"

//Routes
import Navbar from './components/navbar';
import { useWindowWidth } from './commonHooks';

const Landing = lazy(() => import('./pages/landing'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Learn = lazy(() => import('./pages/learn'));
const Build = lazy(() => import('./pages/build'));
const Tdc = lazy(() => import('./pages/tdc'));
const Toolkit = lazy(() => import('./pages/toolkit'));
const Feedback = lazy(() => import('./pages/feedback'));
const Studio = lazy(() => import('./pages/cstudio'));
const Page404 = lazy(() => import('./pages/page404'));

const GenericForm = (props) => {
	return <div>Hi! i'm a generic form! {JSON.stringify(props)}</div>;
};

export const routes = {
	Home: { name: 'Home', path: '/' },
	Learn: { name: 'Learn', path: '/start-learning' },
	// Build: { name: 'Build', path: '/start-building' },
	Dash: { name: 'Dash', path: '/dash/', requiresAuth: true },
	Toolkit: { name: 'Toolkit', path: '/toolkit/' },
	Feedback: { name: 'Feedback', path: '/feedback/' },
	Studio: { name: 'Studio', path: '/create-forms', requiresAuth: true },
};

const App = () => {
	const [windWidth, isMobile] = useWindowWidth();

	return (
		<div className='App'>
			<Helmet>
				<title>Works Home</title>
				<meta
					name='description'
					content='Homepage of the companion App for TDC Workshops'
				/>
				<meta name='theme-color' content='#008f68' />
			</Helmet>
			<Navbar isMobile={isMobile} />
			<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
				<Router className='AppContainer'>
					<Landing path={routes.Home.path} />
					<Learn path={routes.Learn.path} />
					<Learn path='/works' />
					<Learn path='/learn' />
					{/* <Build path={routes.Build.path} /> */}
					<Build path='/build' />
					<Dashboard path={routes.Dash.path} />
					<Dashboard path='/me/*' />
					<Dashboard path='/user/*' />
					<Tdc path='/tdc' />
					<Toolkit path='/toolkit/*' width={windWidth} isMobile={isMobile} />
					<Feedback path='/feedback/*' />
					<Studio path={routes.Studio.path} />
					<GenericForm path='collab/:id/:id' />
					<Page404 default />
				</Router>
			</Suspense>
			<Footer />
		</div>
	);
};

export default App;

const Header = (props) => {
	return (
		<header className='App-header'>
			<img src={props.logo} className='App-logo' alt='logo' />
		</header>
	);
};

Header.propTypes = {
	logo: PropTypes.func,
};

const Loader = ({ children }) => (
	<Suspense
		delayMs={2000}
		fallback={<p>Loading Component. Sorry for the wait!</p>}>
		{children}
	</Suspense>
);

Loader.propTypes = {
	children: PropTypes.func,
};

// const [isMobile, setIsMobile] = useState(false)
// useEffect(() => {
//   if (window.innerWidth <= 480) {
// 		console.log("window is mobile!", window.innerWidth);
// 		setIsMobile(true)
// 	} else {
// 		console.log("current Width is: ", window.innerWidth ," so the window is not mobile!", );
//     setIsMobile(false)
// 	}
// }, [window.innerWidth]);
