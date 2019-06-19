import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Router } from '@reach/router';

// import logo from "./res/imgs/tdc-reach-full-ondark.svg"
import './styles/App.css';

// import styles from "./styles/app.module.css"

//Routes
import Navbar from './components/navbar';
import { useWindowWidth } from './commonHooks';

const Landing = lazy(() => import('./pages/landing'));
const Registration = lazy(() => import('./pages/registration'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Learn = lazy(() => import('./pages/learn'));
const Build = lazy(() => import('./pages/build'));
const Tdc = lazy(() => import('./pages/tdc'));
const Toolkit = lazy(() => import('./pages/toolkit'));
const Page404 = lazy(() => import('./pages/page404'));

const GenericForm = (props) => {
	return <div>Hi! i'm a generic form! {JSON.stringify(props)}</div>;
};

const App = () => {
	const [windWidth, isMobile] = useWindowWidth();

	return (
		<div className='App'>
			<Navbar isMobile={isMobile} />
			<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
				<Router className='AppContainer'>
					<Landing path='/' />
					<Learn path='/works' />
					<Learn path='/learn' />
					<Build path='/build' />
					<Dashboard path='/dash/*' />
					<Dashboard path='/me/*' />
					<Dashboard path='/user/*' />
					<Registration path='/register' />
					<Registration path='/registration' />
					<Tdc path='/tdc' />
					<Toolkit path='/toolkit/*' width={windWidth} isMobile={isMobile} />
					<Toolkit path='/toolkit/:toolId' />
					<Page404 default />
					<GenericForm path='collab/:id/:id' />
				</Router>
			</Suspense>
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
	<Suspense delayMs={2000} fallback={<p>Loading Component. Sorry for the wait!</p>}>
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
