import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import {
	//withStyles,
	makeStyles,
} from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Slider from '@material-ui/core/Slider';


import ErrorBoundary from '../ErrorBoundary'
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

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	formControl: {
		margin: theme.spacing(3),
	},
	formLabel: {
		backgroundColor: '#fff',
	},
	group: {
		margin: theme.spacing(1, 0),
	},
}));

// const MyCheckboxGroup = (props) => {
// 	const { field } = props;
// 	const classes = useStyles();

// };

const InputRenderer = (props) => {
	const { type, field } = props;
	const classes = useStyles();

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

		case 'rbg-mui': {
			return (
				<FormControl component='fieldset' className={classes.formControl}>
					<FormLabel component='legend' className={classes.formLabel}>
						{props.display}
					</FormLabel>
					<RadioGroup
						aria-label={field.display}
						name={field.name}
						className={classes.group}
						value={field.value}
						{...props}
						{...field}>
						{props.options &&
							props.options.map((option) => (
								<FormControlLabel
									key={field.name + option.value}
									value={option.value}
									control={<Radio name={field.name} />}
									label={option.display}
								/>
							))}
					</RadioGroup>
				</FormControl>
			);
		}
		case 'cbg-mui': {
			const handleClicked = (optionName, checked) => {
				const {
					form: { setFieldValue, setFieldTouched },
					field: { value },
				} = props;
				// console.log(props.form);
				// event.preventDefault();
				if (checked) {
					// console.log('Previosuly checked option: ', optionName, ' was unchecked in: ', field.name);
					setFieldValue(field.name, value.filter((x) => x !== optionName));
				} else {
					// console.log('Setting field value with option: "', optionName, '" in: ', field.name);
					// let newValues = [...value, optionName];
					// props.form.values.interests.push(optionName);
					// console.log('New Values are: ', newValues);
					setFieldValue(field.name, [...value, optionName]);
					setFieldTouched(field.name);
					// console.log('field ', field.name, 'had its values changed to: ', field.value);
				}
				// console.log('Form has the following values: ', props.form.values);
			};

			return (
				<FormControl component='fieldset' className={classes.formControl}>
					<FormLabel component='legend' className={classes.formLabel}>
						{props.display}
					</FormLabel>
					<FormGroup name={field.name}>
						{/* {console.log('Field has the following stuff: ', props.field)} */}
						{/* {console.log('Field has the following values: ', props.field.value)} */}
						{props.options &&
							props.options.map((option) => {
								let hasValue = option.value;
								let isChecked = field.value.includes(hasValue);

								return (
									<FormControlLabel
										key={option.value}
										control={
											<Checkbox
												id={option.value}
												value={option.value}
												checked={isChecked}
												onChange={() => handleClicked(hasValue, isChecked)}
												// onClick={() => handleClicked(hasValue, isChecked)}
											/>
										}
										label={option.display}
									/>
								);
							})}
					</FormGroup>
					<FormHelperText>Be careful</FormHelperText>
				</FormControl>
			);
		}

		case 'slider-mui': {
			return (
				<ErrorBoundary>
					<Slider
					name={field.name}
					id={field.name}
					defaultValue={props.placeholder}
					aria-labelledby='discrete-slider-always'
					step={props.step}
					marks={props.options}
					valueLabelDisplay='on'
					// onChange={field.onChange}
					{...field}
				/>
				</ErrorBoundary>
			);
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
