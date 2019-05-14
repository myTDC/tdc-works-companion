import React from "react";
import PropTypes from "prop-types";

const button = props => {
	return <div {...props}>{props.children}</div>;
};

button.propTypes = {
	children: PropTypes.string,
};

export default button;
