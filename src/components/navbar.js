import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './navLink';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { Menu, MenuList, MenuButton, MenuItem, MenuLink } from '@reach/menu-button';

import signon from '../redux/actions/auth';

import '../styles/nav.css';
// import logoOd from "../res/imgs/tdc-educate-full-ondark.svg"
import logoEduOnLi from '../res/imgs/tdc-educate-full-onlight.svg';
import ava_female_tee from '../res/avatars/avatar-female-tshirt.svg';
import { routes } from '../App';

// import { ReactComponent as Avatar } from '../res/imgs/user-outline-optim.svg';

// function test_logIn(event) {
// 	event.preventDefault();
// 	console.log('Loggin in User');
// 	return null;
// }

// function test_logOut(event) {
// 	event.preventDefault();
// 	return console.log("Loggin out User");;
// }

const AuthComp = (props) => {
	const { user } = props;
	const dispatch = useDispatch();
	return /*true*/ user ? (
		<aside
			{...props}
			role='button'
			className='authContainer'
			onClick={() => dispatch(signon())}
			onKeyPress={() => dispatch(signon())}
			tabIndex='0'>
			<img
				className='avatar'
				src={ava_female_tee}
				alt='Your user Avatar on TDC@Works'
				loading='lazy'
			/>
			<span className='authText'>profile</span>
			<NavLink to='./Logout'> X </NavLink>
		</aside>
	) : (
		<aside
			{...props}
			role='button'
			className='authContainer'
			onClick={() => dispatch(signon())}
			onKeyPress={() => dispatch(signon())}
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

const navbar = (props) => {
	const { isMobile, user } = props;
	const current_routes = Object.values(routes);
	// console.log(current_routes);
	return (
		<section className='container'>
			<header className='nav'>
				<section className='brand'>
					<img src={logoEduOnLi} className='logo' alt='TDC Reach logo for Dark Backgrounds' />
					{isMobile && <AuthComp user={user} />}
				</section>
				<nav className='links'>
					{current_routes.map((route, i) => (
						<NavLink key={i} to={route.path}>
							{route.name}
						</NavLink>
					))}
					{false && <NavLink to='dash'>Dashboard</NavLink>}
					{!isMobile && <AuthComp user={user} />}
				</nav>
			</header>
		</section>
	);
};

navbar.propTypes = {
	user: PropTypes.object,
};

navbar.defaultProps = {
	user: null,
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(
	mapStateToProps
	// { signon }
)(navbar);

// const mapDispatchToProps = (dispatch) => ({
// 	join: () => dispatch(signon()),
// });

/* <Link to='register'>Grow</Link>
					<Link to='tdc'>TDC</Link> */

// const NavMenu = (props) => {
// 	return (
// 		<Menu>
// 			{({ isOpen }) => (
// 				<React.Fragment>
// 					<MenuButton>
// 						{isOpen ? 'Close' : 'Open'} <span aria-hidden='true'>▾</span>
// 					</MenuButton>
// 					<MenuList>
// 						<MenuItem>Download</MenuItem>
// 						<MenuItem>Create a Copy</MenuItem>
// 						<MenuLink as={Link} to='/'>
// 							Home
// 						</MenuLink>
// 						<hr />
// 						<MenuItem>Logout</MenuItem>
// 					</MenuList>
// 				</React.Fragment>
// 			)}
// 		</Menu>
// 	);
// };

// NavMenu.propTypes = {};

// export default NavMenu
