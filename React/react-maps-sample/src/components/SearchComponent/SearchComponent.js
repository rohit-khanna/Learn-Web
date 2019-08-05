import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik, Field } from "formik";
import FormikInput from "../FormikInput";
import BaseComponent from "../BaseComponent";
import "./SearchComponent.css";

//constant to hold formik props and titles
const intl = {
  startLocation: {
    props: "startLocation",
    title: "Start Location*"
  },
  endLocation: {
    props: "endLocation",
    title: "End Location*"
  }
};

/**
 * Inner component for Search capabilities
 */
const SearchComponentInner = ({
  initialValues,
  handleReset,
  handleLocationSubmit,
  hasError,
  info
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validate={values => {
        const error = {};
        if (!values.startLocation) error.startLocation = "required";
        if (!values.endLocation) error.endLocation = "required";
        return error;
      }}
      onSubmit={values => {
        handleLocationSubmit(values);
      }}
    >
      {({ values, errors, handleSubmit, setFieldValue }) => {
        return (
          <Form onSubmit={handleSubmit} className="SearchComponent_Container">
            <Form.Group controlId={intl.startLocation.props}>
              <Form.Label className="label-heading">
                {intl.startLocation.title}
              </Form.Label>
              <Field
                name={intl.startLocation.props}
                component={FormikInput}
                value={values[intl.startLocation.props]}
                setFieldValue={setFieldValue}
                handleClearClick={() => {
                  setFieldValue(intl.startLocation.props, "");
                }}
              />
            </Form.Group>
            <Form.Group controlId={intl.endLocation.props}>
              <Form.Label className="label-heading">
                {intl.endLocation.title}
              </Form.Label>
              <Field
                name={intl.endLocation.props}
                component={FormikInput}
                required
                value={values[intl.endLocation.props]}
                setFieldValue={setFieldValue}
                handleClearClick={() => {
                  setFieldValue(intl.endLocation.props, "");
                }}
              />
            </Form.Group>

            {info && (
              <div className={`${hasError ? "error" : "information"}`}>
                {info}
              </div>
            )}

            {values.result.total_distance && (
              <div className="result">
                <Form.Group>
                  <Form.Label className="label-heading">
                    total distance:
                  </Form.Label>
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
                disabled={
                  values.isApiCallInProgress || Object.keys(errors).length > 0
                }
                className={
                  values.isApiCallInProgress || Object.keys(errors).length > 0
                    ? "disabled"
                    : ""
                }
              >
                {values.result.total_distance ? "Re-Submit" : "Submit"}
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
};

const SearchComponent = BaseComponent(SearchComponentInner);

export default SearchComponent;
