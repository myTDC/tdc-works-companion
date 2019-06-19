import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const NavLink = (props) => {
	return (
		<Link
			{...props}
			getProps={({ isCurrent }) => {
				// the object returned here is passed to the
				// anchor element's props
				return {
					style: {
						borderBottom: isCurrent ? `solid 2px ${props.color}` : null,
					},
				};
			}}
		/>
	);
};

NavLink.propTypes = {
	isCurrent: PropTypes.string,
};

export default NavLink;
