import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Menu, MenuList, MenuButton, MenuItem, MenuLink } from '@reach/menu-button';

import signon from '../redux/actions/auth';

import '../styles/nav.css';
// import logoOd from "../res/imgs/tdc-educate-full-ondark.svg"
import logoEduOnLi from '../res/imgs/tdc-educate-full-onlight.svg';
import ava_female_tee from '../res/avatars/avatar-female-tshirt.svg';

// import { ReactComponent as Avatar } from '../res/imgs/user-outline-optim.svg';

function test_logIn(event) {
	event.preventDefault();
	console.log('Loggin in User');
	return null;
}

// function test_logOut(event) {
// 	event.preventDefault();
// 	return console.log("Loggin out User");;
// }

const AuthComp = (props) => {
	const {
		//user,
		join,
	} = props;
	const dispatch = useDispatch();
	return /**user*/ true ? (
		<aside
			{...props}
			role='button'
			className='authContainer'
			onClick={() => dispatch(signon)}
			onKeyPress={() => dispatch(signon)}
			tabIndex='0'>
			<img
				className='avatar'
				src={ava_female_tee}
				alt='Your user Avatar on TDC@Works'
				loading='lazy'
			/>
			<span className='authText'>profile</span>
		</aside>
	) : (
		<aside
			{...props}
			role='button'
			className='authContainer'
			onClick={join}
			onKeyPress={join}
			tabIndex='0'>
			<img
				className='avatar'
				src={ava_female_tee}
				alt='Your user Avatar on TDC@Works'
				loading='lazy'
			/>
			<span className='authText'>login</span>
		</aside>
	);
};

const NavMenu = (props) => {
	return (
		<Menu>
			{({ isOpen }) => (
				<React.Fragment>
					<MenuButton>
						{isOpen ? 'Close' : 'Open'} <span aria-hidden='true'>▾</span>
					</MenuButton>
					<MenuList>
						<MenuItem>Download</MenuItem>
						<MenuItem>Create a Copy</MenuItem>
						<MenuLink as={Link} to='/'>
							Home
						</MenuLink>
						<hr />
						<MenuItem>Logout</MenuItem>
					</MenuList>
				</React.Fragment>
			)}
		</Menu>
	);
};

NavMenu.propTypes = {};

// export default NavMenu

const navbar = (props) => {
	const { isMobile, user, signon } = props;
	return (
		<section className='container'>
			<header className='nav'>
				<section className='brand'>
					<img src={logoEduOnLi} className='logo' alt='TDC Reach logo for Dark Backgrounds' />
					{isMobile && <AuthComp user={user} />}
				</section>
				<nav className='links'>
					<Link to='/'>Home</Link>
					<Link to='works'>Learn</Link>
					<Link to='build'>Build</Link>
					<Link to='register'>Register</Link>
					<Link to='toolkit'>Tools</Link>
					{true && <Link to='dash'>Dashboard</Link>}
					{!isMobile && <AuthComp user={user} loginhandler={signon} />}
					{false && <NavMenu />}
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

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({
// 	join: () => dispatch(signon()),
// });

export default connect(
	mapStateToProps,
	{ signon }
)(navbar);
/* <Link to='register'>Grow</Link>
					<Link to='tdc'>TDC</Link> */
