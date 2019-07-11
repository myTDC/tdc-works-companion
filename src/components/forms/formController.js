import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form, FastField, FieldArray } from 'formik';
import * as yup from 'yup';

import DynamicInput from './dynamicInput';
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
				display: `How old are you?`,
				type: `number`,
				options: null,
				placeholder: `Eg. 21`,
				classes: '',
				pretext: 'You must be at least ',
				posttext: ' years old',
			},
			{
				name: `gender`,
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
				display: `qualifications`,
				type: `radiogroup`,
				options: [
					{ value: 'undergraduate', display: 'Undergraduate' },
					{ value: 'postgraduate', display: 'Postgraduate' },
					{ value: 'phd', display: 'Ph.D.' },
					{ value: 'highschool', display: 'High School' },
				],
				classes: '',
				pretext: `What's your educational background?`,
				posttext: null,
			},
			{
				name: `interests`,
				display: `interests`,
				type: `checkboxgroup`,
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
				name: `College`,
				display: `Your College`,
				type: `combobox`,
				id: 'college',
				options: [
					{ value: 'campus marketing', display: 'Campus Marketing' },
					{ value: 'digital marketing', display: 'Digital Marketing' },
					{ value: 'public relations', display: 'Public Relations' },
					{ value: 'graphics design', display: 'Graphics Design' },
					{ value: 'web dev', display: 'Web Dev' },
					{ value: 'mobile dev', display: 'Mobile Dev' },
				],
				placeholder: `Eg. ANDC`,
				classes: '',
				pretext: `I'm a student at `,
				posttext: null,
				suggestions: null,
			},
			{
				name: `excitement`,
				display: `How excited are you? `,
				type: `range`,
				options: null,
				placeholder: 50,
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
			interests: '',
			college: '',
			excitement: '',
		},
		validationScheme: {
			user_name: yup
				.string()
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
				.min(4, "We're sure you complete name has more than 4 letters.")
				.required('We would really like to know what to call you!!'),
			interests: yup
				.array()
				.of(yup.string().min(5))
				.required('We would really like to know what to call you!!'),
			college: yup
				.string()
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
