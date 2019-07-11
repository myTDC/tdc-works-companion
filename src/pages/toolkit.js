import React, { Suspense, lazy } from 'react'; //useState, useEffect,
import { Router } from '@reach/router';
import NavLink from '../components/navLink';

// import { useWindowWidth } from "../App";
import styles from '../styles/tools.module.css';
import hero from '../res/imgs/toolkit-home-optim.svg';

const Valuations = lazy(() => import('../components/tools/valuations'));
const Page404 = lazy(() => import('../pages/page404'));
// import ValidForm from '../components/forms/validForm';
// import herov2 from "../res/imgs/tdc-toolkit-homi-o.svg"
// import Valuations from "./tools/valuations"

export const toolingRoutes = {
	ToolkitHome: { name: 'Toolkit Home', path: './' },
	Valuation: { name: 'Valuation', path: './find-valuation' },
	GoBack: { name: 'Go Back', path: '../' },
};

const ToolsNav = (props) => {
	const tool_routes = Object.values(toolingRoutes);

	return (
		<nav className={styles.toolsNav}>
			We really like our tools.
			<aside className={styles.linksContainer}>
				{tool_routes.map((route, i) => (
					<NavLink key={i} to={route.path}>
						{route.name}
					</NavLink>
				))}
			</aside>
		</nav>
	);
};

export const Tools = (props) => {
	const tool_routes = Object.values(toolingRoutes);
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
					<ol>
						{tool_routes.map((route, i) => (
							<li>
								<NavLink key={i} to={route.path}>
									{route.name}
								</NavLink>
							</li>
						))}
					</ol>
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
					<Valuations path='/find-valuation' width={props.width} />
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
