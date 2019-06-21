import React, { Suspense } from 'react';
// import { Router } from '@reach/router';
import { Formik, FieldArray, Form } from 'formik';

// import NavLink from '../components/navLink';
import LightInput from '../components/forms/inline_InputLight';
import '../components/forms/workshopRegForm.css';

import '../styles/cstudio.css';

const GenericInput = (props) => {
	switch (props.type) {
		case 'text': {
			return (
				<div className='studioText'>
					I has <br /> text inputs
				</div>
			);
		}

		default: {
			return (
				<div className='studioError'>
					UNKOWN INPUT TYPE ENCOUNTERED <br /> Check Input
				</div>
			);
		}
	}
};

const StudioCreate = (props) => {
	return (
		<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
			<section {...props}>What do you want to make today?</section>
		</Suspense>
	);
};

const StudioPreview = (props) => {
	return (
		<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
			<section {...props}>
				<Formik>
					<FieldArray>
						<Form>
							<LightInput />
						</Form>
					</FieldArray>
				</Formik>
				Form Stuff
			</section>
		</Suspense>
	);
};

const CStudio = (props) => {
	return (
		<div className='studioLayout'>
			<StudioCreate className='studioCreator WIP' />
			<StudioPreview className='studioPreviewer WIP2' />
		</div>
	);
};

export default CStudio;
