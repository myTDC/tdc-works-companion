import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './navLink';

const FeedbackCard = (props) => {
	const { slug, topic, feedback } = props;
	return (
		<NavLink to={slug}>
			<div className='feedbCardContainer'>
				<div className='feedbCardTitleContainer'>
					<h4 className='feedbCardTitle'>{topic}</h4>
				</div>
				<aside className='feedbCardRatingContainer'>
					<div className='feedbCardRatingClip'>
						<span className='feedbCardRating'>⚝ {feedback}</span>
						<span className='feedbCardRatingMax'>/5.0</span>
					</div>
				</aside>
			</div>
		</NavLink>
	);
};

FeedbackCard.propTypes = {
	slug: PropTypes.string.isRequired,
	topic: PropTypes.string.isRequired,
	feedback: PropTypes.number.isRequired,
};

export default FeedbackCard;
