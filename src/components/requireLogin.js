import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@reach/dialog';

const RequireLogin = (props) => {
	const [showDialog, toggleDialog] = useState(true);

	return (
		<div>
			Sign In
			<button onClick={() => toggleDialog(!showDialog)}>Open Dialog</button>
			<Dialog
				styles={{ width: '100vw', height: '100vh', backgroundColor: '#212121' }}
				isOpen={showDialog}
				onDismiss={() => toggleDialog(!showDialog)}>
				<button className='close-button' onClick={() => toggleDialog(!showDialog)}>
					<span aria-hidden>×</span>
				</button>
				<p>Hello there. I am a dialog</p>
			</Dialog>
		</div>
	);
};

RequireLogin.propTypes = {};

export default RequireLogin;
