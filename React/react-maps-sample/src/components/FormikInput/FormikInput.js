import React from "react";
import Form from "react-bootstrap/Form";
import "./FormikInput.css";

/**
 * Custom Input Field: Used along wit Formik
 */
const FormikInput = ({ field, value, setFieldValue, handleClearClick }) => {
  return (
    <div>
      <div className="formikInput_Container">
        <Form.Control
          type="text"
          name={field.name}
          value={value}
          onChange={event => {
            setFieldValue(field.name, event.target.value);
          }}
        />

        <div className="icon" title="clear" onClick={handleClearClick}>
          x
        </div>
      </div>
    </div>
  );
};

export default FormikInput;
