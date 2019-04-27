import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Formik, Field, Form  } from 'formik';
import * as yup from 'yup';

import styles from '../styles/registration.module.css'

const DarkInput = (props) => {
  //const { } =  props
  const name= props.name
  const value = props.values;
  const placeholder = "Enter your placeholder";
  const type = 'text'
  return (
    <>
    {value && <h5>{placeholder}</h5>}
      {/*errors.email && touched.email && <div>{errors.email}</div>*/}
      <input type={type} placeholder={placeholder} name={name}/>
    </>
  )
}

const validationschema = yup.object().shape({
    name: yup.string().max(40).min(6).required(),
    email: '',
    contactNo: '',
    college: '',
    course: '',
    //yup.object().shape()
})

const registry = {
  name: '',
  email: '',
  contactNo: '',
  college: '',
  course: '',
  eCell: {
    hasECells: true,
    eCellName: '',
    hasIncubator: true,
    hasStartupEvents: true,
  },
  eCellHeads: {
    name: '',
    email: '',
    contactNo: '',
  },
}

// const handleEnter = e => {
//     //onKeyDown
//     const ENTER_KEY = 13;
//     if(e.keyCode === ENTER_KEY && !isSubmitting) { handleSubmit() }
// }

const options = [
  { id: "red", display: "Berkus Model" },
  { id: "yellow", display: "VC Model" },
  { id: "blue", display: "All Stat Model" }
];

class Registration extends Component {
  static propTypes = {
    //prop: PropTypes
  }
  state = {

  }

  handleSubmit() {

  }

  
  render() {
    return (
      <>
        <div style={{ height: '62vh', paddingTop: '8vh', }} className={styles.heroContainer} >
          I'm a hero image container 
        </div>
        <Formik className={styles.formContainer}
        initialValues={registry /** { email, social } */}
        onSubmit={(values, actions) => {
          this.handleSubmit(values).then(
            updatedValues => {
              actions.setSubmitting(false);
              console.log("Form has values:" , values)
              //updateUser(updatedUser);
              //onClose();
            },
            error => {
              actions.setSubmitting(false);
              //actions.setErrors(transformMyRestApiErrorsToAnObject(error));
              actions.setStatus({ msg: 'Set some arbitrary status or data' });
            }
          );
        }}
        render={({ values, errors, status, touched, isSubmitting }) => (
          <Form className={styles.form}>
            {
             /*
              <Field type="text" name="name" placeholder="Your Name" />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field type="contactNo" name="contactNo" placeholder="Your Mobile Number" />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field type="email" name="email" placeholder="Your email Id" />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field name="darkemail" placeholder="Your dark email Id" render={DarkInput} />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field type="text" name="emailmod" value={values.email+" hi"} placeholder="Your email Id" />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field type="email" name="email" placeholder="Your email Id" />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field type="email" name="email" placeholder="Your email Id" />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field type="email" name="email" placeholder="Your email Id" />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field type="text" name="social.facebook" placeholder="Your facebook id"/>
            {errors.social && errors.social.facebook &&
              touched.social.facebook && <div>{errors.social.facebook}</div>}
            <Field type="text" name="social.twitter" placeholder="Your twitter handle" />
            {errors.social && errors.social.twitter &&
              touched.social.twitter && <div>{errors.social.twitter}</div>}
            {status && status.msg && <div>{status.msg}</div>}
             */ 
            }
            <div style={{textAlign: 'left', minWidth: '400px', backgroundColor: '#FFFFFF20', padding: '16px'}}>
            <h3>Evaluating Pre-Revenue Startups</h3>
            <Field name="model" component="select">
              {options.map(option => (
                <option key={`model-${option.id}`} value={option.id}>
                  {option.display}
                </option>
              ))}
            </Field>
            <h1 style={{fontSize: '2.4rem', letterSpacing: '2px'}}>
              The Berkus Model
            </h1>
            <p>
            Berkus Method uses both qualitative and quantitative factors to calculate valuation based on five elements:
            <br />
            <code>
            <ul> 
            <li> Sound Idea (basic value)</li>
            <li> Prototype (reduces technology risk)</li>
            <li> Quality Management Team (reduces execution risk)</li>
            <li> Strategic Relationships (reduces market risk)</li>
            <li> Product Rollout or Sales (reduces production risk)</li>
          </ul>
            </code>
            But the Berkus Method doesn’t stop with just qualitative drivers — you must assign a monetary value to each. In particular, up to $500K. $500K is the maximum value that can be earned in each category, giving the opportunity for a pre-money valuation of up to $2M-$2.5M. Berkus sets the hurdle number at $20M (in the fifth year in business) to “provide some opportunity for the investment to achieve a ten-times increase in value over its life.”
            
            <h6>find out more @ <a href="https://berkonomics.com/?p=1214">Berkonomics</a></h6>
            </p>
            
            <br />
            <br />
            <br />
            <h2>What's your projected Revenue in 5 Years ? (Thousands USD)</h2>
            <Field type="revenue" name="revenue" placeholder="for example: 200" style={{width: "400px"}} />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <br />
            <br />
            <br />
            <h2 style={{textAlign: 'left'}}>Your Valuation:</h2>
            {(!values.revenue)? <h4 style={{fontSize: '.8rem', letterSpacing: '2px', wordSpacing: '3px', fontVariant: 'All Caps'}}> Enter your projected Revenue First: </h4> : null}
            <Field type="valuation" name="email" value={(values.revenue)?("Your startup is valued at: " + values.revenue/10000 + "Million USD"):('Enter Revenue First')} placeholder="Your Valuation" disabled={true} style={{width: "400px"}}/>
            {errors.email && touched.email && <div>{errors.email}</div>}
            </div>
            
            
            <button type="submit" disabled={isSubmitting}>
              Calculate Now
            </button>
          </Form>
        )}
      />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
