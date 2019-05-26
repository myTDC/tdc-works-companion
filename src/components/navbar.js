import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { connect } from "react-redux";

import signon from "../redux/actions/auth";

import styles from "../styles/nav.module.css";
// import logoOd from "../res/imgs/tdc-educate-full-ondark.svg"
import logoEduOnLi from "../res/imgs/tdc-educate-full-onlight.svg";
import ava_female_tee from "../res/avatars/avatar-female-tshirt.svg";

import { ReactComponent as Avatar } from "../res/imgs/user-outline-optim.svg";

function test_logIn(event) {
	event.preventDefault();
	console.log("Loggin in User");
	return null;
}

// function test_logOut(event) {
// 	event.preventDefault();
// 	return console.log("Loggin out User");;
// }

const AuthComp = props => {
	const {
		//user,
		join,
	} = props;

	return /**user*/ true ? (
		<aside
			{...props}
			role="button"
			className={styles.authContainer}
			onClick={event => test_logIn(event)}
			onKeyPress={event => test_logIn(event)}
			tabIndex="0">
			<img
				className={styles.avatar}
				src={ava_female_tee}
				alt="Your user Avatar on TDC@Works"
				loading="lazy"
			/>
			<span className={styles.authText}>profile</span>
		</aside>
	) : (
		<aside
			{...props}
			role="button"
			className={styles.authContainer}
			onClick={join}
			onKeyPress={join}
			tabIndex="0">
			<Avatar
				className={styles.avatar}
				alt="TDC Reach logo for Dark Backgrounds"
			/>
			<span className={styles.authText}>login</span>
		</aside>
	);
};

const navbar = props => {
	const { isMobile } = props;
	return (
		<section className={styles.container}>
			<header className={styles.nav}>
				<section className={styles.brand}>
					<img
						src={logoEduOnLi}
						className={styles.logo}
						alt="TDC Reach logo for Dark Backgrounds"
					/>
					{isMobile && <AuthComp user={props.user} />}
				</section>
				<nav className={styles.links}>
					<Link to="/">Home</Link>
					<Link to="works">Learn</Link>
					<Link to="register">Reg</Link>
					<Link to="build">Build</Link>
					<Link to="register">Grow</Link>
					<Link to="toolkit">ToolKit</Link>
					<Link to="tdc">TDC</Link>
					<Link to="user">Dash</Link>
					{!isMobile && <AuthComp user={props.user} />}
				</nav>
			</header>
		</section>
	);
};

navbar.propTypes = {
	user: PropTypes.string,
};

navbar.defaultProps = {
	user: null,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	join: () => dispatch(signon()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(navbar);
