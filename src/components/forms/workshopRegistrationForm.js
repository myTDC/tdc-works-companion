import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form, FastField, FieldArray } from 'formik';
import * as yup from 'yup';

import '../../styles/registration.css';
import LightInput from './inline_InputLight';
// const formFieldLogger = (field, form, props, errors) => {
// 	console.group('Data for', field.name);
// 	console.log('Props Data: ', props /**JSON.stringify(props) */);
// 	console.log('Field Data: ', field /**JSON.stringify(field) */);
// 	console.log('Form Data: ', form /**JSON.stringify(form) */);
// 	console.log('Error Data: ', errors);
// 	console.groupEnd();
// };

const people = [
	// Input Form Meta Data
	{
		name: `user_name`,
		label: `Your Full Name`,
		type: `text`,
		options: null,
		placeholder: `Eg. John Smith?`,
		classes: '',
		pretext: 'My name is ',
		posttext: null,
	},
	{
		name: `age`,
		label: `Your Age`,
		type: `number`,
		options: null,
		placeholder: `Eg. 21`,
		classes: '',
		pretext: ' and I am ',
		posttext: ' years old. ',
	},
	{
		name: `college`,
		label: `Your College's Name`,
		type: `textarea`,
		options: null,
		placeholder: `Eg. Acharya Narendra Dev College, DU`,
		classes: '',
		pretext: ' I am a student at',
		posttext: null,
	},
	{
		name: `contact_num`,
		label: `Your Contact Number`,
		type: `text`,
		options: null,
		placeholder: `Eg. 4312 987 652`,
		classes: '',
		pretext: <>{'You can contact me on my mobile number :'}</>,
		posttext: null,
	},
	{
		name: `email`,
		label: `Your Primary Email ID`,
		type: `text`,
		options: null,
		placeholder: `Eg. john_smith@gmail.com`,
		classes: '',
		pretext: ' And I would love to get the updates at my email id ',
		posttext: null,
	},
];
const initialValues = {
	user_name: '',
	age: '',
	contact_num: '',
	email: '',
	college: '',
};

const validationScheme = yup.object().shape({
	user_name: yup
		.string()
		.min(4, "We're sure you complete name has more than 4 letters.")
		.required('We would really like to know what to call you!!'),
	age: yup
		.number('Age is just a number')
		.max(20, 'Uh-oh! You seem to be a bit too old for this stuff!')
		.min(14, 'But you gotta be at least 14 to start')
		.positive('uh-oh! Aging backwards is not natural, not even for Benjamin Button')
		.max(28, 'Uh-oh! You seem to be a bit too old for this stuff! Above 28 is a no-go')
		.min(16, 'But you gotta be at least 16 to start')
		.required(
			'Our interactions are tailored to your age group so we do need to know how old you are'
		),
	college: yup
		.string()
		.min(4, "We're sorry but that doesn't look like the complete college name")
		.max(80, 'woah! can we recommend using a abbreviated name for the college?')
		.required(`We often have college specific offers & pricing, Don't Miss out!`),
	contact_num: yup
		.string()
		.min(10, 'Your mobile number seems a bit short! could you check it again please?')
		.max(11, 'We only need one of your mobile number(s)')
		.required(`We'd love to keep you updated about the workshops`),
	email: yup
		.string()
		.email()
		.min(8, 'Your email seems a bit short! could you check it again please?')
		.required('We need your emailid to send you the receipts, offers & more opportunities'),
});

const RegForm = (props) => (
	<Formik
		initialValues={initialValues}
		validationSchema={validationScheme}
		{...props}
		onSubmit={(values, actions, errors) => {
			actions.setSubmitting(true);
			console.log('Form has values:', values);
			console.log('Form has errors:', errors);
			alert('form submitted:-', JSON.stringify(values));
			actions.setSubmitting(false);
		}}>
		{(formikProps) => (
			//values, errors, status, touched, isSubmitting
			<FieldArray name='people'>
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
							{people && people.length > 0 ? (
								people.map((peeps, index) => (
									<FastField
										key={index}
										type={peeps.type}
										name={peeps.name}
										placeholder={peeps.placeholder}
										label={peeps.label}
										pretext={peeps.pretext}
										component={LightInput}
										{...peeps}
									/>
								))
							) : (
								<div>We're getting yuo the shortest form. please wait </div>
							)}
							<br />
							<button type='submit'>I want to learn!</button>
						</Form>
					);
				}}
			</FieldArray>
		)}
	</Formik>
);

const WorksReg = (props) => {
	return (
		<>
			<RegForm data={''} dataName={''} />
		</>
	);
};

WorksReg.propTypes = {
	user: PropTypes.string,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WorksReg);

// const people_v2 = [
// 	// Input Form Meta Data
// 	{
// 		name: `user_name`,
// 		label: `Your Full Name`,
// 		type: `text`,
// 		options: null,
// 		placeholder: `Enter your name here`,
// 		classes: '',
// 		pretext: 'Hello there stranger, Can i get your name please?: ',
// 	},
// 	{
// 		name: `age`,
// 		label: `Your Age`,
// 		type: `number`,
// 		options: null,
// 		placeholder: `Enter your age here`,
// 		classes: '',
// 		pretext:
// 			' You seem old enough to start a startup. But just to be sure, exactly how old are you? :',
// 	},
// 	{
// 		name: `contact_num`,
// 		label: `Your Contact Number`,
// 		type: `text`,
// 		options: null,
// 		placeholder: `Enter your contact number here`,
// 		classes: '',
// 		pretext:
// 			'Can we please have your contact number, so we can help you use our services better? :',
// 	},
// 	{
// 		name: `email`,
// 		label: `Your Primary Email ID`,
// 		type: `text`,
// 		options: null,
// 		placeholder: `Enter your email id here`,
// 		classes: '',
// 		pretext: ' We do need to verify your email Id before we give you access to our toolkits :',
// 	},
// 	{
// 		name: `college`,
// 		label: `Your College's Name`,
// 		type: `textarea`,
// 		options: null,
// 		placeholder: `Enter your college here`,
// 		classes: '',
// 		pretext:
// 			' You seem old enough to attend college. If you do, can you please tell us the name of your college? :',
// 	},
// ];
