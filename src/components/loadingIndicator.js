import React from 'react';
import PropTypes from 'prop-types';

const LoadingIndicator = (props) => {
	return <div>{props.msg}</div>;
};

LoadingIndicator.propTypes = {
	msg: PropTypes.string,
};

export default LoadingIndicator;
