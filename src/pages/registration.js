import React from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import WorksReg from '../components/forms/workshopRegistrationForm';

import regHero from '../res/imgs/undraw_teaching_optim.svg';
import '../styles/registration.css';
import { useWindowWidth } from '../commonHooks';
// import RequireLogin from '../components/requireLogin';

const Registration = (props) => {
	const isMobile = useWindowWidth('mobile');
	return (
		<div className='regContainer'>
			<div className='heroContainer'>
				<h2>Fill up the form to complete your registration {isMobile ? '🞃' : '🞂'} </h2>
				<br />
				<img
					className='heroImg'
					src={regHero}
					alt='A teacher standing next to a board to signify the registration form at the bottom of the page is for a classroom workshop'
				/>
				<p>Learn how to build amazing startups. Right in your campus.</p>
			</div>
			<WorksReg />
		</div>
	);
};

Registration.propTypes = {};

const mapStateToProps = ({ auth: { user } }) => ({
	user,
});

export default connect(
	mapStateToProps,
	{}
)(Registration);
