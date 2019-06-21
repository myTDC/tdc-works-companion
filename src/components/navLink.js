import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const NavLink = (props) => {
	return (
		<Link
			{...props}
			getProps={(innerprops) => {
				// the object returned here is passed to the
				// anchor element's props
				// console.log(innerprops);
				return {
					style: {
						borderBottom: innerprops.isCurrent ? `solid 3px #16df84` : null,
					},
				};
			}}
		/>
	);
};

NavLink.propTypes = {
	color: PropTypes.string,
};

NavLink.defaultProps = {
	color: '#16df84',
};

export default NavLink;
