import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form, FastField, FieldArray } from 'formik';
import * as yup from 'yup';

import DynamicInput from './dynamicInput';
import './dynamicForm.css';
/**
 * Fetches the form creation data and handles the overall formik implementation including validation and submission.
 * Submission is handled based on the form context
 * fetches form data based on the URL/History Parameters
 */

const FormController = (props) => {
	const { formName, formQuestions, initValues, validationScheme } = props.formStructure;
	return (
		<Formik
			initialValues={initValues}
			validationSchema={yup.object().shape(validationScheme)}
			{...props}
			onSubmit={(values, actions, errors) => {
				actions.setSubmitting(true);
				if (values) {
					alert('form submitted:-', JSON.stringify(values));
					console.log('Form has values:', values);
				} else {
					alert(`uh-oh looks like you're trying to submit an empty form`);
					console.log('Devs! Check the submit function for the form');
				}
				errors && console.log('Form has errors:', errors);
				actions.setSubmitting(false);
			}}>
			{(formikProps) => (
				//values, errors, status, touched, isSubmitting
				<FieldArray name={formName}>
					{(arrayHelpers) => {
						//({ /* move, swap, push, insert, unshift, pop, form */ })
						// console.log("Formik Props are:", formikProps);
						// console.log("FieldArray Props are:", arrayHelpers);
						return (
							<Form className='form'>
								<h2>Apply for Workshops</h2>
								<p className='form_into'>
									{
										'Hi team TDC. I heard about TDC giving sessions on Entrepreneurship & I want to join your workshops.'
									}
									<br />
								</p>
								{formName && formQuestions.length > 0 ? (
									formQuestions.map((peeps, index) => (
										<FastField
											key={index}
											type={peeps.type}
											name={peeps.name}
											placeholder={peeps.placeholder}
											label={peeps.label}
											pretext={peeps.pretext}
											component={DynamicInput}
											{...peeps}
										/>
									))
								) : (
									<div>We're getting yuo the shortest form. please wait </div>
								)}
								<br />
								<button type='submit'>I want to learn!</button>
								<pre className='debugger'>{JSON.stringify(formikProps, null, 4)}</pre>
								{console.table(formikProps)}
							</Form>
						);
					}}
				</FieldArray>
			)}
		</Formik>
	);
};

FormController.propTypes = {
	formStructure: PropTypes.object,
};

FormController.defaultProps = {
	formStructure: {
		type: 'dummy',
		style: 'inline',
		formName: 'dummy',
		formQuestions: [
			{
				name: `user_name`,
				id: 'Q.1 ',
				display: `Your Full Name`,
				type: `text`,
				options: null,
				placeholder: `Eg. John Smith?`,
				classes: '',
				pretext: 'My name is ',
				posttext: null,
				suggestions: null,
			},
			{
				name: `age`,
				id: 'Q.2 ',
				display: `How old are you?`,
				type: `number`,
				options: null,
				placeholder: `Eg. 21`,
				classes: '',
				pretext: 'I may look experienced but I am only ',
				posttext: ' years old',
			},
			{
				name: `gender`,
				id: 'Q.3 ',
				display: `I am a:`,
				type: `select`,
				options: [
					{ value: 'male', display: 'Male' },
					{ value: 'female', display: 'Female', default: true },
					{ value: 'others', display: 'Others' },
				],
				placeholder: `Eg. John Smith?`,
				classes: '',
				pretext: 'How do you identify your gender ',
				posttext: null,
			},
			{
				name: `qualifications`,
				id: 'Q.4 ',
				display: `qualifications`,
				type: `rbg-mui`,
				options: [
					{ value: 'highschool', display: 'High School' },
					{ value: 'undergraduate', display: 'Undergraduate' },
					{ value: 'postgraduate', display: 'Postgraduate' },
					{ value: 'phd', display: 'Ph.D.' },
				],
				classes: '',
				pretext: `What's your educational background?`,
				posttext: null,
			},
			{
				name: `interests`,
				id: 'Q.5 ',
				display: `interests`,
				type: `cbg-mui`,
				// type: `checkboxgroup`,
				options: [
					{ value: 'campus marketing', display: 'Campus Marketing' },
					{ value: 'digital marketing', display: 'Digital Marketing' },
					{ value: 'public relations', display: 'Public Relations' },
					{ value: 'graphics design', display: 'Graphics Design' },
					{ value: 'web dev', display: 'Web Dev' },
					{ value: 'mobile dev', display: 'Mobile Dev' },
				],
				pretext: `What are your interests?`,
			},
			{
				name: `college`,
				id: 'Q.6 ',
				display: `Your College`,
				type: `combobox`,
				options: [
					{ value: 'campus marketing', display: 'Campus Marketing' },
					{ value: 'digital marketing', display: 'Digital Marketing' },
					{ value: 'public relations', display: 'Public Relations' },
					{ value: 'graphics design', display: 'Graphics Design' },
					{ value: 'mobile dev', display: 'Mobile Development' },
					{ value: 'web dev', display: 'Web Development' },
				],
				placeholder: `Eg. ANDC`,
				classes: '',
				pretext: `I'm a student at `,
				posttext: null,
				suggestions: null,
			},
			{
				name: `excitement`,
				id: 'Q.7 ',
				display: `How excited are you? `,
				type: `slider-mui`,
				options: [
					{
						value: 0,
						label: '0°C',
					},
					{
						value: 20,
						label: '20°C',
					},
					{
						value: 37,
						label: '37°C',
					},
					{
						value: 100,
						label: '100°C',
					},
				],
				placeholder: 0,
				min: 0,
				max: 100,
				step: 5,
				classes: '',
				pretext: `How excited are you? `,
				posttext: null,
				suggestions: null,
			},
		],
		initValues: {
			user_name: '',
			age: '',
			gender: '',
			qualifications: '',
			interests: [],
			college: '',
			excitement: '',
		},
		validationScheme: {
			user_name: yup
				.string()
				.matches(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/, {
					message: 'We prefer full names that only contain alphabets',
					excludeEmptyString: true,
				})
				.min(4, "We're sure you complete name has more than 4 letters.")
				.required('We would really like to know what to call you!!'),
			age: yup
				.number()
				.min(16, "You sure you're old enough to be here? 16 or GTFO")
				.max(30, "Damn! you seem too old for this stuff! you sure you're not younger than 30?")
				.required('We would really like to know what to call you!!'),
			gender: yup
				.string()
				.min(4, "We're sure you complete name has more than 4 letters.")
				.required('We would really like to know what to call you!!'),
			qualifications: yup
				.string()
				.min(3, "We're sure you complete name has more than 4 letters.")
				.required('We would really like to know what to call you!!'),
			interests: yup
				.array()
				.of(yup.string().min(5))
				.min(1, 'You must be interested in something???')
				.required('We would really like to know what to call you!!'),
			college: yup
				.string()
				.matches(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/, {
					message: 'We prefer college names that contain only alphabets',
					excludeEmptyString: true,
				})
				.min(4, "We're sure you complete name has more than 4 letters.")
				.required('We would really like to know what to call you!!'),
			excitement: yup
				.number()
				.min(0, "You sure you're old enough to be here? 16 or GTFO")
				.max(100, "Damn! you seem too old for this stuff! you sure you're not younger than 30?")
				.required('We would love to know how excited you are!!'),
		},
	},
};

const mapStateToProps = (state) => ({});

export default connect(
	mapStateToProps,
	{}
)(FormController);
