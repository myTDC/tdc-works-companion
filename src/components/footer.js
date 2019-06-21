import React from 'react';
// import PropTypes from 'prop-types'
import { Formik, Form, FastField } from 'formik';
import { Link } from '@reach/router';
//Components and reducers

//Styles
import styles from '../styles/footer.module.css';

//Image Resources
// import Img from "../components/ImgExt"
import logo from '../res/imgs/tdc-educate-full-onlight.svg';

const Footer = (props) => {
	return (
		<footer className={styles.homeFooter}>
			<div className={styles.homeFooterGroup}>
				<img src={logo} className={styles.homeFooterLogo} alt='' />
				<p>
					info.tdc18@gmail.com
					<br />
					<br />
					103, DDA Flats, S5, Dwarka, New Delhi - 75
				</p>
			</div>
			<div className={styles.homeFooterGroup}>
				<h4>Upstart Series</h4>
				<Link to='/'>Mobile Education</Link>
				<Link to='/'>Campus Workshops</Link>
				<Link to='/'>Build the MVP</Link>
				<Link to='/'>Find an InLab</Link>
			</div>
			<div className={styles.homeFooterGroup}>
				<h4>Growth Series</h4>
				<Link to='/'>Dev Support</Link>
				<Link to='/'>Analytics Engine</Link>
				<Link to='/'>Sales Engine</Link>
				<Link to='/'>Get Funded</Link>
			</div>
			<div className={styles.homeFooterGroup}>
				<h4>Upstart Service</h4>
				<Link to='/'>Mobile Education</Link>
				<Link to='/'>Campus Workshops</Link>
				<Link to='/'>Build the MVP</Link>
				<Link to='/'>Find an InLab</Link>
			</div>
			<div className={styles.homeFooterGroup}>
				<h4>Freebies over Mail</h4>

				<p>
					Feeling old school enough to subscribe to our mailing list?
					<br /> Ssshh... we often give away freebies over mails
				</p>
				<Formik
					initialValues={{
						users_email: '',
					}}
					onSubmit={(values, actions) => {
						actions.setSubmitting(true);
						console.log('Form has values:', values);
						actions.setSubmitting(false);
					}}>
					<Form className={styles.homeFooterFrom}>
						<FastField name='users_email' type='email' placeholder='Enter email here' />
						<button type='button'>Sign Up</button>
					</Form>
				</Formik>
				<h6>PS: We love freebies too...</h6>
			</div>
		</footer>
	);
};

Footer.propTypes = {};

export default Footer;
