import React from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';

import '../../styles/dash.css';

const evalView = (props) => {
	return (
		<div className='eval'>
			<section className='evalInfo'>
				<div className='sectionHeader'>
					<span className='sectionSubHeading'>Your Startup's</span>
					<h2 className='sectionHeading'>Latest evaluation</h2>
				</div>
				I has the evaluations.
			</section>

			<section className='evalNext'>
				<div className='sectionHeader'>
					<span className='sectionSubHeading'>do you want to know how to</span>
					<h2 className='sectionHeading'>Increase your valuation?</h2>
				</div>
				And it can be better
			</section>
		</div>
	);
};

evalView.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(evalView);
