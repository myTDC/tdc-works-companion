import React from 'react';
import PropTypes from 'prop-types';

const tdc = (props) => {
	return (
		<div>
			Hi, Here you can find the parts <br />
			to make the most of your startup with TDC Build.
		</div>
	);
};

tdc.propTypes = {
	uri: PropTypes.string,
};

export default tdc;
