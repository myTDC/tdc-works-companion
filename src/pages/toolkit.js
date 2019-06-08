import React, { Suspense, lazy } from 'react'; //useState, useEffect,
import { Router, Link } from '@reach/router';

// import { useWindowWidth } from "../App";
import styles from '../styles/tools.module.css';
import hero from '../res/imgs/toolkit-home-optim.svg';

const Valuations = lazy(() => import('../components/tools/valuations'));
const Page404 = lazy(() => import('../pages/page404'));
// import ValidForm from '../components/forms/validForm';
// import herov2 from "../res/imgs/tdc-toolkit-homi-o.svg"
// import Valuations from "./tools/valuations"

const ToolsNav = (props) => {
	return (
		<nav className={styles.toolsNav}>
			We really like our tools.
			<aside className={styles.linksContainer}>
				<Link to='/toolkit'>Toolkit Home</Link> <Link to='find-valuation'>Startup Valuation</Link>{' '}
			</aside>
		</nav>
	);
};

export const Tools = (props) => {
	return (
		<>
			<section className={styles.heroContainer}>
				<img
					src={hero}
					alt='homepage illustration for TDC toolkit'
					className={styles.hero}
					style={{ width: '100%' }}
				/>
			</section>
			<section className={styles.fore}>
				I have all the cool tools.
				<br />
				Here you can find an index of all the tools availaible at TDC Works.
				<aside className={styles.linksIndexer}>
					<Link to='/toolkit'>Toolkit Home</Link>
					<Link to='find-valuation'>Startup Valuation</Link>{' '}
				</aside>
			</section>
		</>
	);
};

const Toolkit = (props) => {
	// const imageUrl = useWindowWidth() >= 650 ? "desktopImage" : "mobileImage";
	// const [windWidth, isMobile] = useWindowWidth();

	return (
		<div className={styles.container}>
			<ToolsNav isMobile={props.isMobile} />
			<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
				<Router>
					<Tools path='/' width={props.width} />
					<Valuations path='find-valuation' width={props.width} />
					<Page404 default />
				</Router>
			</Suspense>
		</div>
	);
};

// const useWindowWidth = () => {
// 	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// 	const handleWindowResize = () => {
// 		setWindowWidth(window.innerWidth);
// 	};

// 	useEffect(() => {
// 		window.addEventListener("resize", handleWindowResize);
// 		return () => window.removeEventListener("resize", handleWindowResize);
// 	}, []);

// 	return windowWidth;
// };

Toolkit.propTypes = {};

export default Toolkit;
