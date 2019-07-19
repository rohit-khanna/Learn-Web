import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Field } from 'formik';
import FormikInput from '../FormikInput';
import BaseComponent from '../BaseComponent';
import './SearchComponent.css';

class SearchComponentInner extends Component {
	render() {
		const { initialValues, handleLocationSubmit } = this.props;
		return (
			<Formik
				initialValues={initialValues}
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
							{values.result && (
								<div className="result">
									<Form.Group>
										<Form.Label className="label-heading">total distance:</Form.Label>
										<Form.Label> {values.result.totDistance}</Form.Label>
									</Form.Group>
									<Form.Group>
										<Form.Label className="label-heading">total time:</Form.Label>
										<Form.Label> {values.result.totTime}</Form.Label>
									</Form.Group>
								</div>
							)}

							<div className="buttonGroup">
								<Button variant="secondary" type="submit" title="Submit">
									{values.result ? 'Re-Submit' : 'Submit'}
								</Button>
								<Button variant="outline-secondary" onClick={handleReset} title="Reset">
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
