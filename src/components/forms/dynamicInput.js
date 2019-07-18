import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
// import '@palmerhq/radio-group/styles.css';

/**
 * Handles the render logic for the form data as sent by the master form controller
 * uses a switch case to check input type and render components (text, textarea, email, selection, checkboxes, radiobuttons, sliders, etc) accordingly.
 * Dynamically allocates classes based on the input type and corresponding form selection (inline, block, etc.)
 * also renders any pre-text, post-text, tooltips or additional information that the user may require to successfully fill and submit the form.
 */

// function DRadioGroup(props) {
// 	const [{ onChange, onBlur, ...field }] = useField(props.name);
// 	return (
// 		<RadioGroup
// 			{...props}
// 			{...field}
// 			labelledBy={props.name}
// 			onBlur={onBlur(props.name)}
// 			onChange={onChange(props.name)}
// 		/>
// 	);
// }

const InputRenderer = (props) => {
	const { type, field } = props;

	switch (type) {
		case 'text': {
			return <input type='text' className='inline_input' {...props} {...field} />;
		}
		case 'number': {
			return <input type='number' className='inline_input' {...props} {...field} />;
		}
		case 'select': {
			const selectionOptions = [
				{ value: null, display: 'Click here to select an option' },
				...props.options,
			];
			return (
				<select {...props} {...field}>
					{selectionOptions.map((option) => (
						<option
							className='options'
							key={`${field.name}-${option.value}`}
							value={option.value}
							placeholder='Click here to select an option'>
							{option.display}
						</option>
					))}
				</select>
			);
		}
		case 'checkboxgroup': {
			return (
				<div className='optionsContainer' {...field} {...props}>
					{props.options &&
						props.options.map((option) => (
							<span className='options' key={field.name + option.value}>
								<input type='checkbox' id={field.name} name={field.name} value={option.value} />
								<label htmlFor={option.value}>{option.display}</label>
							</span>
						))}
				</div>
			);
		}
		case 'radiogroup': {
			return (
				<div className='optionsContainer' name={field.name} {...field} {...props}>
					{props.options &&
						props.options.map((option) => (
							<span className='options' key={field.name + option.value}>
								<input type='radio' id={field.name} name={field.name} value={option.value} />
								<label htmlFor={option.value}>{option.display}</label>
							</span>
							// <Radio
							// 	className='options'
							// 	onChange={field.onChange}
							// 	value={option.value}
							// 	key={option.value}>
							// 	{option.display}
							// </Radio>
						))}
				</div>
			);
		}
		case 'range': {
			return (
				<div>
					<label htmlFor={field.name}>{props.min}</label>
					<input
						className='range'
						type='range'
						id={field.name}
						name={field.name}
						value={props.placeholder}
						{...field}
						{...props}
					/>
					<label htmlFor={field.name}>{props.max}</label>
					<input
						type='number'
						placeholder={'Enter between ' + props.min + ' & ' + props.max}
						name={props.name}
						id={props.name}
						list={props.id}
						value={field.value}
						{...field}
					/>
				</div>
			);
		}
		case 'combobox': {
			return (
				<>
					<input
						className='inline_input'
						type='text'
						name={field.name}
						{...field}
						{...props}
						id={props.name}
						list={props.id}
					/>
					<datalist id={props.id}>
						<label htmlFor={field.name}>or pick a fruit</label>
						<select id={field.name} name={'alt' + props.name}>
							{props.options &&
								props.options.map((optional) => (
									<option className='options' key={optional.value}>
										{optional.display}
									</option>
								))}
						</select>
					</datalist>
				</>
			);
		}

		//Add a combobox element to this
		case 'textarea': {
			return <textarea className='inline_input' {...props} {...field} />;
		}
		default: {
			return (
				<>
					<span>Can't understand field type!!! rendering default field</span>
					<input className='inline_input' {...props} {...field} />
				</>
			);
		}
	}
};

InputRenderer.propTypes = {
	type: PropTypes.string,
};

const DynamicInput = (props) => {
	const { field, form } = props;
	let errorMessage = null;
	let touched = null;
	if (form) {
		errorMessage = getIn(form.errors, field.name);
		touched = getIn(form.touched, field.name);
		// console.log(field.name, 'is touched? :', touched);
		// console.log(field.name, 'has error? :', errorMessage);
	}
	return (
		<div className='inputContainer'>
			<fieldset
				className='inputRenderer'
				style={{
					borderColor: touched ? (errorMessage ? 'crimson' : '#16df84') : 'grey',
					borderWidth: touched ? '2px' : '1px',
				}}>
				<legend className='inline_pretext'>{props.pretext}</legend>
				<InputRenderer type={props.type} field={field} {...props} />
				{props.posttext && (
					<span className='inline_posttext'>
						{props.posttext}
						<br />
					</span>
				)}
			</fieldset>
			{touched && errorMessage ? <div className='inline_error'>⚠ {errorMessage} ⚠</div> : null}
		</div>
	);
};

DynamicInput.propTypes = {
	dataSource: PropTypes.array,
};

export default DynamicInput;
