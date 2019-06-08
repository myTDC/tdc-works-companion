import React from 'react';
import PropTypes from 'prop-types';

const DynamicForm = (props) => {
	return (
		<>
			<h1>
				I Has <br /> Feedback Forms
			</h1>
		</>
	);
};

DynamicForm.propTypes = {
	dataSource: PropTypes.array,
};

export default DynamicForm;
