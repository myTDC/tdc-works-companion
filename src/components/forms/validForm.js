import React from 'react';
// import { Router, Link } from "@reach/router"
import {
	Formik,
	FastField,
	Form,
	getIn,
	FieldArray,
	// Field,
} from 'formik';
import * as yup from 'yup';

import styles from '../../styles/forms.module.css';

// const formFieldLogger = (field, form, props, errors) => {
// 	console.group("Data for", field.name);
// 	console.log("Props Data: ", props /**JSON.stringify(props) */);
// 	console.log("Field Data: ", field /**JSON.stringify(field) */);
// 	console.log("Form Data: ", form /**JSON.stringify(form) */);
// 	console.log("Error Data: ", errors);
// 	console.groupEnd();
// };

const LightInput = ({ field, form, ...props }) => {
	const errorMessage = getIn(form.errors, field.name);
	// const error = getIn(form.errors, field.name);
	const touched = getIn(form.touched, field.name);
	// console.log(field.name, 'is touched? :', touched);
	// console.log(field.name, 'has error? :', errorMessage);
	return (
		<React.Fragment>
			{/**console.log(JSON.stringify(props))*/}
			{/**formFieldLogger(field, form, props, errorMessage) */}
			<span className={styles.inline_pretext}>
				<br />
				{props.pretext}
			</span>
			<span className={styles.inline_container}>
				<input className={styles.inline_input} {...field} {...props} />
				{touched && errorMessage ? (
					<React.Fragment>
						<br />
						<span className={styles.inline_error}>{errorMessage}</span>
					</React.Fragment>
				) : null}
			</span>
			{/** <span><ErrorMessage name={field.name} /></span> */}
		</React.Fragment>
	);
};

const people = [
	// Input Form Meta Data
	{
		name: `user_name`,
		label: `Your Full Name`,
		type: `text`,
		options: null,
		placeholder: `Enter your name here. <Eg. Jack Barker>`,
		classes: '',
		pretext: 'Hello there stranger, Can i get your name please?: ',
	},
	{
		name: `age`,
		label: `Your Age`,
		type: `number`,
		options: null,
		placeholder: `Enter your age here. <Eg. 14>`,
		classes: '',
		pretext:
			' You seem old enough to start a startup. But just to be sure, exactly how old are you? :',
	},
	{
		name: `college`,
		label: `Your College's Name`,
		type: `textarea`,
		options: null,
		placeholder: `Enter your college here. <Eg. St. Stephers College>`,
		classes: '',
		pretext:
			' You seem old enough to attend college. If you do, can you please tell us the name of your college? :',
	},
];

const initialValues = {
	user_name: '',
	age: '',
	college: '',
};

const validationScheme = yup.object().shape({
	user_name: yup
		.string()
		.min(
			4,
			"Ummmm... We'd like to know you better before we can use your nickname. Do let us know what to call you in more than 4 letters"
		)
		.max(40)
		.required('We would really like to know what to call you!!'),
	age: yup
		.number('Age is just a number')
		// .integer("Let's be lazy and only input numbers shall we?")
		// .positive("Age backwards is not natural, not even for Benjamin Button")
		.max(28, 'Uh-oh! You seem to be a bit too old for this stuff! Above 28 is a no-go')
		.min(16, 'But you gotta be at least 16 to start')
		.required(
			'Our interactions are tailored to your age group so we do need to know how old you are'
		),
	college: yup
		.string()
		.min(4, 'Even the shortest college names have 4 letters!')
		.max(40, 'woah, can we recommed using a shoter name?')
		.required('The more we know the better we can help you.'),
});

const RegForm = (props) => (
	<Formik
		initialValues={initialValues}
		validationSchema={validationScheme}
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
						<Form>
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
								<div>We need more fields you know </div>
							)}
							{' | '}
							<button type='submit'>Submit</button>
						</Form>
					);
				}}
			</FieldArray>
		)}
	</Formik>
);

const ValidForm = (props) => {
	return (
		<div>
			<h4>We Like our own forms. Thank you very much!</h4>
			<RegForm data={''} dataName={''} />
			<h4>##--This is the part where the form breaks down.--##</h4>
		</div>
	);
};

export default ValidForm;

// const ErrorMessage = ({ name }) => (
// 	<FastField
// 		name={name}
// 		render={({ form }) => {
// 			const error = getIn(form.errors, name);
// 			const touch = getIn(form.touched, name);
// 			console.log("Error is: ", error);
// 			return touch && error ? error : null;
// 		}}
// 	/>
// );

// const newValScheme = yup.array().of(
// 	yup.object().shape({
// 		name: yup.string()
// 			.min(4, "too Short")
// 			.required("Required"),
// 		age: yup.number("Age is just a number")
// 			.max(20)
// 			.min(14, "But you gotta be at least 14 to start")
// 			.positive("Age backwards is not natural, not even for bejamin button")
// 			.integer()
// 			.required("the more we know the better we can help you."),
// 		college: yup.string()
// 			.min(4, "too Short")
// 			.max(40, "woah, can we recommed using a shoter name?")
// 			.required("Required"),
// 	})
// );
