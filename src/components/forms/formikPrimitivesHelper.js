import React from 'react';
import { Formik, Field } from 'formik';
import Yup from 'yup';

// Input feedback
const InputFeedback = ({ error }) => (error ? <div className='input-feedback'>{error}</div> : null);

const Checkbox = ({
	field: { name, value, onChange, onBlur },
	form: { errors, touched, setFieldValue },
	id,
	label,
	className,
	...props
}) => {
	return (
		<div>
			<input
				name={name}
				id={id}
				type='checkbox'
				value={value}
				checked={value}
				onChange={onChange}
				onBlur={onBlur}
				className='radio-button'
			/>
			<label htmlFor={id}>{label}</label>
			{touched[name] && <InputFeedback error={errors[name]} />}
		</div>
	);
};

const handleChange = (event) => {
	const target = event.currentTarget;
	let valueArray = [...this.props.value] || [];

	if (target.checked) {
		valueArray.push(target.id);
	} else {
		valueArray.splice(valueArray.indexOf(target.id), 1);
	}

	this.props.onChange(this.props.id, valueArray);
};

const handleBlur = () => {
	// take care of touched
	this.props.onBlur(this.props.id, true);
};
// Checkbox group
const CheckboxGroup = (props) => {
	const { value, error, touched, label, children } = props;

	return (
		//class = "input-field" + value || (!error && touched) ? "is-success" : ((error && touched)?"is-error" : null)
		<div className={'input-field'}>
			<fieldset>
				<legend>{label}</legend>
				{React.Children.map(children, (child) => {
					return React.cloneElement(child, {
						field: {
							value: value.includes(child.props.id),
							onChange: handleChange,
							onBlur: handleBlur,
						},
					});
				})}
				{touched && <InputFeedback error={error} />}
			</fieldset>
		</div>
	);
};

// Radio input
const RadioButton = ({
	field: { name, value, onChange, onBlur },
	id,
	label,
	className,
	...props
}) => {
	return (
		<div>
			<input
				name={name}
				id={id}
				type='radio'
				value={id} // could be something else for output?
				checked={id === value}
				onChange={onChange}
				onBlur={onBlur}
				className={'radio-button'}
				{...props}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

// Radio group
const RadioButtonGroup = ({ value, error, touched, id, label, children }) => {
	const classes = 'input-field';

	return (
		<div className={classes}>
			<fieldset>
				<legend>{label}</legend>
				{children}
				{touched && <InputFeedback error={error} />}
			</fieldset>
		</div>
	);
};
