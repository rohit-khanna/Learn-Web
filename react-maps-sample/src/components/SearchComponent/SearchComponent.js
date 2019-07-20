import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Field } from 'formik';
import FormikInput from '../FormikInput';
import BaseComponent from '../BaseComponent';
import './SearchComponent.css';

class SearchComponentInner extends Component {
	render() {
		const { initialValues, handleLocationSubmit, hasError, info } = this.props;
		return (
			<Formik
				enableReinitialize
				initialValues={initialValues}
				validate={(values) => {
					const error = {};

					if (!values.startLocation) error.startLocation = 'required';
					if (!values.endLocation) error.endLocation = 'required';
					return error;
				}}
				onSubmit={(values, { resetForm }) => {
					handleLocationSubmit(values);
					resetForm();
				}}
			>
				{({ values, errors, handleSubmit, handleReset, setFieldValue }) => {
					return (
						<Form onSubmit={handleSubmit} className="SearchComponent_Container">
							<Form.Group>
								<Form.Label className="label-heading">Starting Location</Form.Label>
								<Field
									name="startLocation"
									component={FormikInput}
									value={values['startLocation']}
									setFieldValue={setFieldValue}
									handleClearClick={() => {
										setFieldValue('startLocation', '');
									}}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label className="label-heading">Drop-off Location</Form.Label>
								<Field
									name="endLocation"
									component={FormikInput}
									value={values['endLocation']}
									setFieldValue={setFieldValue}
									handleClearClick={() => {
										setFieldValue('endLocation', '');
									}}
								/>
							</Form.Group>

							{info && <div className={`${hasError ? 'error' : 'information'}`}>{info}</div>}

							{values.result.total_distance && (
								<div className="result">
									<Form.Group>
										<Form.Label className="label-heading">total distance:</Form.Label>
										<Form.Label> {values.result.total_distance}</Form.Label>
									</Form.Group>
									<Form.Group>
										<Form.Label className="label-heading">total time:</Form.Label>
										<Form.Label> {values.result.total_time}</Form.Label>
									</Form.Group>
								</div>
							)}

							<div className="buttonGroup">
								<Button
									variant="primary"
									type="submit"
									title="Submit"
									disabled={values.isApiCallInProgress || Object.keys(errors).length > 0}
									className={
										values.isApiCallInProgress || Object.keys(errors).length > 0 ? 'disabled' : ''
									}
								>
									{values.result.total_distance ? 'Re-Submit' : 'Submit'}
								</Button>
								<Button
									variant="outline-secondary"
									onClick={handleReset}
									title="Reset"
									disabled={values.isApiCallInProgress}
								>
									Reset
								</Button>
							</div>
						</Form>
					);
				}}
			</Formik>
		);
	}
}

const SearchComponent = BaseComponent(SearchComponentInner);

export default SearchComponent;
