import React from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import '../../styles/dash.css';

const evalView = (props) => {
	return (
		<div className='eval'>
			<section className='evalInfo'>
				<div className='sectionHeader'>
					<span className='sectionSubHeading'>Your Startup's</span>
					<h2 className='sectionHeading'>Latest evaluation</h2>
				</div>
				<div className='evalDisplay'>
					<article className='evalDisplayBlock'>
						<p className='evalTitle'>Latest valuation</p>
						<p className='evalValue'>US$ {'10'} mn</p>
					</article>
					<article className='evalDisplayBlock'>
						<p className='evalTitle'>for {'20%'} stake you can raise:</p>
						<p className='evalValue'>US$ {'2'} mn</p>
					</article>
				</div>
			</section>

			<section className='evalNext'>
				<div className='sectionHeader'>
					<span className='sectionSubHeading'>do you want to know how to</span>
					<h2 className='sectionHeading'>Increase your valuation?</h2>
				</div>
				<p>
					1. Build Product <br />
					2. Get Customers <br />
					3. Generate Revenue
				</p>
				<h3 className='evalAdLink'>
					<Link to='/register'>Learn How in our workshops 🞂</Link>
				</h3>
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
