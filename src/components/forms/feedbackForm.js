import React from 'react';
import PropTypes from 'prop-types';

const FeedbackForm = (props) => {
	return (
		<>
			<h1>
				I Has <br /> Feedback Forms
			</h1>
		</>
	);
};

FeedbackForm.propTypes = {
	source: PropTypes.array,
};

export default FeedbackForm;
