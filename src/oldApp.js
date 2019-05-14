import React, { Component, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { Router } from "@reach/router";

// import logo from "./res/imgs/tdc-reach-full-ondark.svg"
import "./styles/App.css";

// import styles from "./styles/app.module.css"

//Routes
import Navbar from "./components/navbar";
// import Landing from "./pages/landing"
// import Registration from "./pages/registration";
// import Tdc from "./pages/tdc";
// import Page404 from "./pages/page404";
// import Toolkit from "./pages/toolkit";

const Landing = lazy(() => import("./pages/landing"));
const Registration = lazy(() => import("./pages/registration"));
const Tdc = lazy(() => import("./pages/tdc"));
const Toolkit = lazy(() => import("./pages/toolkit"));
const Page404 = lazy(() => import("./pages/page404"));

class App extends Component {
	state = {
		mobile: false,
		windWidth: window.innerWidth
	};

	// getWindowSize() {
	//   console.log('checking window width!', window.innerWidth)
	//   this.setState(prevState => {
	//     return {
	//       ...prevState,
	//       windWidth: window.innerWidth
	//     }
	//   })
	// }

	async isMobile() {
		// console.log('checking if window is mobile!')
		const width = this.state.windWidth;
		if (width <= 480) {
			console.log("window is mobile!", width);
			this.setState(prevState => {
				return {
					...prevState,
					mobile: true
				};
			});
		} else {
			console.log("window is not mobile!", width);
			this.setState(prevState => {
				return {
					...prevState,
					mobile: false
				};
			});
		}
	}

	componentDidUpdate() {
		// this.getWindowSize()
	}

	componentDidMount() {
		this.isMobile();
		// TODO: Check from lcoal storage if the user is logged in.
		// TODO: Fetch user data from the server if user is logged in.
	}

	render() {
		return (
			<div className="App">
				<Navbar isMobile={this.state.mobile} />
				<Suspense delayMs="50" fallback={<div>Loading the cool stuff... </div>}>
					<Router className="AppContainer">
						<Landing path="/" />
						<Registration path="/works" />
						<Registration path="/register" />
						<Registration path="/registration" />
						<Tdc path="/tdc" />
						<Toolkit path="/toolkit/*" width={this.state.windWidth} />
						<Page404 default />
					</Router>
				</Suspense>
			</div>
		);
	}
}

export default App;
// const NotFound = () => <p>Sorry, nothing here</p>
/**path="invoices/:invoiceId" */

const Header = props => {
	return (
		<header className="App-header">
			<img src={props.logo} className="App-logo" alt="logo" />
		</header>
	);
};

Header.propTypes = {
	logo: PropTypes.func
};

const Loader = ({ children }) => (
	<Suspense
		delayMs={2000}
		fallback={<p>Loading Component. Sorry for the wait!</p>}>
		{children}
	</Suspense>
);

Loader.propTypes = {
	children: PropTypes.func
};
