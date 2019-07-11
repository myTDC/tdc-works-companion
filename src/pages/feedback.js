import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import FormController from '../components/forms/formController';
import { Router } from '@reach/router';
import Page404 from './page404';
import FeedbackCard from '../components/feedbackCard';

import '../styles/feedback.css';

const sample_feedback_routes = [
	{
		slug: './workshop-1',
		topic: 'How to start a startup',
		feedback: 4.9,
	},
	{
		slug: './workshop-2',
		topic: 'The Biology of a startup idea',
		feedback: 4.9,
	},
	{
		slug: './workshop-3',
		topic: 'Jumping Legal Hoops',
		feedback: 4.5,
	},
	{
		slug: './workshop-4',
		topic: 'The Mogul of Marketing',
		feedback: 4.9,
	},
	{
		slug: './workshop-5',
		topic: 'Product Design Google Style',
		feedback: 4.9,
	},
	{
		slug: './workshop-6',
		topic: 'The 30 second investment pitch',
		feedback: 4.9,
	},
	{
		slug: './workshop-7',
		topic: 'The life and lies of startups',
		feedback: 4.5,
	},
	{
		slug: './workshop-8',
		topic: 'Design thy savior',
		feedback: 4.9,
	},
	{
		slug: './workshop-9',
		topic: 'Learn to React (Web Apps)',
		feedback: 4.9,
	},
	{
		slug: './workshop-10',
		topic: 'Slaving on Android',
		feedback: 4.5,
	},
];

const FeedbackIndex = (props) => {
	const { activeFeedRoutes } = props;
	return (
		<div>
			<h1>I handle the Feedback Forms</h1>
			<p>
				Here's a list of all the feedbacks you've unlocked. feel free to review and update them on
				your whim!
			</p>
			<section>
				{activeFeedRoutes &&
					activeFeedRoutes.map((feedroute) => (
						<FeedbackCard
							key={feedroute.slug}
							slug={feedroute.slug}
							topic={feedroute.topic}
							feedback={feedroute.feedback}
						/>
					))}
			</section>
		</div>
	);
};

FeedbackIndex.propTypes = {
	activeFeedRoutes: PropTypes.arrayOf(PropTypes.object),
};

FeedbackIndex.defaultProps = {
	activeFeedRoutes: sample_feedback_routes,
};

const FeedbackRenderer = (props) => {
	return (
		<div>
			<h1>I render all the Feedback Forms</h1>
			<FormController pathArg={props.feedbackid} />
		</div>
	);
};

FeedbackRenderer.propTypes = {};

const Feedback = (props) => {
	return (
		<div className='feedbContainer'>
			<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
				<Router>
					<FeedbackIndex path='/' />
					<FeedbackRenderer path='/:feedbackid' />
					<Page404 default />
				</Router>
			</Suspense>
		</div>
	);
};

Feedback.propTypes = {
	user: PropTypes.object,
};

export default Feedback;
