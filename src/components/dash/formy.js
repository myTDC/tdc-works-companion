import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { Formik, Form, FastField } from "formik";

const Formy = props => {
	return (
		<Formik>
			<Form>
				<FastField name="feelsToday" type="option" />
			</Form>
		</Formik>
	);
};

Formy.propTypes = {};

export default Formy;
