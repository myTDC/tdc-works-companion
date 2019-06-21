import React from 'react';
import { getIn } from 'formik';

const LightInput = ({ field, form, ...props }) => {
	let errorMessage = null;
	let touched = null;
	if (form) {
		errorMessage = getIn(form.errors, field.name);
		touched = getIn(form.touched, field.name);

		// console.log(field.name, 'is touched? :', touched);
		// console.log(field.name, 'has error? :', errorMessage);
	}

	return (
		<React.Fragment>
			{/**console.log(JSON.stringify(props))*/}
			{/**formFieldLogger(field, form, props, errorMessage) */}
			<span className='inline_pretext'>{props.pretext}</span>
			<input className='inline_input' {...field} {...props} />
			{props.posttext && (
				<span className='inline_pretext'>
					{props.posttext}
					<br />
				</span>
			)}
			{touched && errorMessage ? (
				<span className='inline_error'>
					{errorMessage} <br />
				</span>
			) : null}
			{/** <span><ErrorMessage name={field.name} /></span> */}
		</React.Fragment>
	);
};

LightInput.propTypes = {};

LightInput.defaultProps = {
	pretext: '<pre-text goes here>',
	name: 'defaulter',
	value: '',
	placeholder: '<WARN! Generic Placeholder>',
	posttext: '<post-text goes here>',
};

export default LightInput;
