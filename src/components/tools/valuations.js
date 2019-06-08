import React from 'react';
// import { Router, Link } from "@reach/router"
import { Formik, Field, FastField, Form, getIn } from 'formik';
import * as yup from 'yup';

// import "../../styles/valuation.css"
import './valuation.css';
import heroval from '../../res/imgs/toolkit-eval-optim.svg';

export const InfoBerkus = (props) => {
	return (
		<div className='infoContainer'>
			<span className='infoContainersubtitle'>We use:</span>
			<div className='infoContainertitle'>The Berkus Model</div>
			<p>
				Berkus Method uses both qualitative and quantitative factors to calculate valuation based on
				five elements:
			</p>
			<ul>
				<li> Sound Idea (basic value)</li>
				<li> Prototype (reduces technology risk)</li>
				<li> Quality Management Team (reduces execution risk)</li>
				<li> Strategic Relationships (reduces market risk)</li>
				<li> Product Rollout or Sales (reduces production risk)</li>
			</ul>
			<p>
				But it doesn’t stop with just qualitative drivers — you must assign a monetary value to
				each. In particular, up to $500K. $500K is the maximum value that can be earned in each
				category, giving the opportunity for a pre-money valuation of up to $2M-$2.5M. Berkus sets
				the hurdle number at $20M (in the fifth year in business) to “provide some opportunity for
				the investment to achieve a ten-times increase in value over its life.”
			</p>
			<h4>
				find out more @ <a href='https://berkonomics.com/?p=1214'>Berkonomics</a>
			</h4>
			<hr />
		</div>
	);
};

const LightInput = ({ field, form, ...props }) => {
	const errorMessage = getIn(form.error, field.name);
	return (
		<>
			{console.log('Props Are as: ', props, 'FieldProps Are as: ', field)}
			{console.log('FormProps Are as: ', form)}
			<input {...field} {...props} />
			{form.error && form.touched && <div>{errorMessage}</div>}
		</>
	);
};

const calculateValuation = (values) => {
	// console.log("Calculating on:", values)
	values.revenue_total =
		Number(values.revenue_y1) +
		Number(values.revenue_y2) +
		Number(values.revenue_y3) +
		Number(values.revenue_y4) +
		Number(values.revenue_y5);
	if (values.currency === 'USD') {
		values.valuation = (values.revenue_total / 10).toFixed(3);
	} else {
		values.valuation = (values.revenue_total / (10 * 70)).toFixed(3);
	}
	return values;
};

const calculateFunding = (values) => {
	// console.log("Calculating on:", values)
	values.money_for_equity = values.valuation * (values.percentage_equity / 100);
	return values;
};

const validationSchema = yup.object().shape({
	name: yup
		.string()
		.max(40, 'Too Long')
		.min(6, 'Too Short')
		.required('We do need this'),
	eval_model: '',
	industry: '',
	age_of_startup: yup
		.number()
		.required()
		.positive()
		.integer()
		.max(12)
		.required('We really do need the age of your startup'),
	contac_no: yup
		.string()
		.required("Without it we won't be able to forward your estimations to our investors"),
	revenue_y1: 0,
	revenue_y2: 0,
	revenue_y3: 0,
	revenue_y4: 0,
	revenue_y5: 0,
	revenue_total: 0,
	valutaion: 0,
	percentage_equity: yup
		.number()
		.required('To fundraise you need to give equity!')
		.positive("You definitely can't give negative equity")
		.integer('This also needs to be a number, A Positive one.')
		.max(50, "Woah giving away too much there. 51% in india and they'll own you."),
	money_for_equity: 0,
	//yup.object().shape()
});

const valuation = {
	eval_model: 'berkus',
	industry: '',
	age_of_startup: '',
	contac_no: '',
	currency: '',
	revenue_y1: '',
	revenue_y2: '',
	revenue_y3: '',
	revenue_y4: '',
	revenue_y5: '',
	revenue_total: '',
	valuation: '',
	percentage_equity: '',
	money_for_equity: '',
};

// const eval_model_options = [
// 	{ id: "berkus", default: true, display: "Berkus Model" },
// 	{ id: "vc", display: "VC Model" },
// 	{ id: "stats", display: "All Stat Model" },
// ];

const currency_options = [
	{ id: 'INR', default: true, display: '₹ (INR)' },
	{ id: 'USD', display: '$ (USD)' },
];

export const EvalFormBerkus = (props) => (
	<Formik
		initialValues={valuation}
		validationScheme={validationSchema}
		onSubmit={(values, actions) => {
			actions.setSubmitting(true);
			console.log('Form has values:', values);
			actions.setSubmitting(false);
		}}>
		{({ values, errors, status, touched, isSubmitting }) => (
			<Form className='form'>
				<div className='formSection'>
					<h1>Enter your projected yearly revenue (in Thousands)</h1>
					<aside className='formRow'>
						<h3>Select Currency: </h3>
						<Field name='currency' component='select' className='formSelecter'>
							{currency_options.map((option) => (
								<option
									key={`currency-${option.id}`}
									default={option.default || false}
									value={option.id}>
									{option.display}
								</option>
							))}
						</Field>
					</aside>
					<h3>Projected Revenue in the 1st Year? </h3>
					<Field
						type='number'
						name='revenue_y1'
						placeholder='for example: 200'
						className='formfield'
						component={LightInput}
					/>
					{/*errors.revenue_y1 && touched.revenue_y1 && (<div>{errors.revenue_y1}</div>)*/}
					<h3>Projected Revenue in the 2nd Year?</h3>
					<Field
						type='number'
						name='revenue_y2'
						placeholder='for example: 500'
						className='formfield'
						component={LightInput}
					/>
					{/*errors.revenue_y1 && touched.revenue_y1 && (<div>{errors.revenue_y1}</div>)*/}
					<h3>Projected Revenue in the 3rd Year?</h3>
					<Field
						type='number'
						name='revenue_y3'
						placeholder='for example: 1200'
						className='formfield'
						component={LightInput}
					/>
					{/*errors.revenue_y1 && touched.revenue_y1 && (<div>{errors.revenue_y1}</div>)*/}
					<h3>Projected Revenue in the 4th Year?</h3>
					<Field
						type='number'
						name='revenue_y4'
						placeholder='for example: 2100'
						className='formfield'
						component={LightInput}
					/>
					{/*errors.revenue_y1 && touched.revenue_y1 && (<div>{errors.revenue_y1}</div>)*/}
					<h3>Projected Revenue in the 5th Year?</h3>
					<FastField
						type='number'
						name='revenue_y5'
						placeholder='for example: 3200'
						className='formfield'
						component={LightInput}
					/>
					{/*errors.revenue_y1 && touched.revenue_y1 && (<div>{errors.revenue_y1}</div>)*/}
					<h3>Equity you're willing to give up? (x%)</h3>
					<FastField
						type='number'
						name='percentage_equity'
						placeholder='for example: 15'
						className='formfield'
						component={LightInput}
					/>
					{/*errors.revenue_y1 && touched.revenue_y1 && (<div>{errors.revenue_y1}</div>)*/}
				</div>
				<div className='formSection'>
					<br />
					<hr />
					<button type='submit' disabled={props.isSubmitting} className='formButton'>
						Calculate Now
					</button>
				</div>
				<div className='formSection'>
					<h2>Your Valuation is:</h2>
					<Field
						type='textarea'
						name='valutaion'
						className='resultantField'
						disabled={true}
						placeholder='Uh-Oh! Seems like you need to input revenue projections.'
						value={values.revenue_y5 ? calculateValuation(values).valuation + ' Thousand USD' : ''}
						component={LightInput}
					/>
					<br />
					<h2>For {values.percentage_equity}% equity you can raise upto: </h2>
					<Field
						type='textarea'
						name='money_for_equity'
						className='resultantField2'
						disabled={true}
						placeholder='You also need to input the equity you can give.'
						value={
							values.percentage_equity
								? calculateFunding(values).money_for_equity + ' Thousand USD'
								: ''
						}
						component={LightInput}
					/>
				</div>
			</Form>
		)}
	</Formik>
);

const Valuations = (props) => {
	// minWidth: `${props.width}px`
	return (
		<div className='valuationContainer'>
			<div className='heroContainer'>
				<img
					src={heroval}
					alt='homepage illustration for TDC toolkit'
					className='hero'
					style={{ width: '100%' }}
				/>
				<hr />
			</div>
			<div className='formContainer'>
				<h1 className='title'>Evaluating Pre-Revenue Startups</h1>
				<InfoBerkus />
				<EvalFormBerkus />
			</div>
		</div>
	);
};

export default Valuations;
/*
  {
    <div className="formSection}>
    <div className="formRow}>
      <h3>Select your model</h3>
      <Field name="eval_model" component="select">
        {eval_model_options.map(option => (
          <option
            key={`eval_model-${option.id}`}
            default={option.default || false}
            value={option.id}
          >
            {option.display}
          </option>
        ))}
      </Field>
    </div>
    {!(values.eval_model === "berkus") ? null : <InfoBerkus />}
    </div> 
  }
*/
