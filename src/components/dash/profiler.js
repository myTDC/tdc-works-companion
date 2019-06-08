import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { connect } from 'react-redux';

import './profiler.css';
import ava_male_specs from '../../res/avatars/avatar-male-specs.svg';
// import ava_female_tee from "../../res/avatars/avatar-female-tshirt.svg"

const DailyQA = (props) => {
	return (
		<div>
			Hi i have <br /> The daily QA
		</div>
	);
};

DailyQA.propTypes = {};

// export default dailyQA

const Profile = (props) => {
	const { ugName, ufName, designationLife, designationTdc, uSkills, joined } = props;
	return (
		<section className='profile'>
			<div className='avatarContainerDash'>
				<img
					className='avatarDash'
					src={ava_male_specs}
					alt='Your user Avatar on TDC@Works'
					loading='lazy'
				/>
			</div>
			<div className='userIdentity'>
				<span className='userGivenName'>{ugName}</span> {ufName}
				<div className='userDesig'>{designationLife + ' | ' + designationTdc}</div>
			</div>
			<div className='userSkills'>
				{uSkills ? (
					uSkills.map((skill, i) => (
						<div className='skillItem' key={i}>
							<span className='skillName'>{skill.label}: </span>
							<progress className='skillProgress' value={skill.progress} max='100' />
						</div>
					))
				) : (
					<span>"Still honing my skills to become a founder"</span>
				)}
			</div>
			<div className='userSocial'>
				<div className='userSocialLinks'>
					<a href='https://www.facebook.com/tdcsif'>f</a>
					<a href='https://www.linkedin.com/company/tdcsif/'>in</a>
					<a href='https://twitter.com/the_tdcsif'>t</a>
				</div>
				<span className='userSocialAge'>Joined: {joined}</span>
			</div>
		</section>
	);
};

const Profiler = (props) => {
	const { ugName } = props;
	return (
		<div className='welcomeContainer'>
			<Profile {...props} />
			<section className='welcome'>
				<h2>Hi, {ugName}!</h2>
				<h3>Welcome to Works@TDC</h3>
				<span>
					Uh-oh! Looks like you haven't registered for the upcoming workshop series yet. <br />{' '}
					<Link to='/register'>Take me there 🞂</Link>
				</span>
			</section>
		</div>
	);
};

Profiler.propTypes = {
	user: PropTypes.string,
	ugName: PropTypes.string,
	ufName: PropTypes.string,
	designationLife: PropTypes.string,
	designationTdc: PropTypes.string,
	joined: PropTypes.string,
	uSkills: PropTypes.array,
};

Profiler.defaultProps = {
	user: null,
	ugName: 'Jhonathan',
	ufName: 'Devore',
	designationLife: 'Student',
	designationTdc: 'Founder in Making',
	joined: '16th May 2019',
	// uSkills: [
	// 	{ label: "Product", progress: 20 },
	// 	{ label: "Market", progress: 33 },
	// ],
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profiler);
