import React from 'react';
import Form from 'react-bootstrap/Form';
import { MdClose } from 'react-icons/md';
import './FormikInput.css';

const FormikInput = ({ field, value, setFieldValue, handleClearClick, ...restProps }) => {
	return (
		<div className="formikInput_Container">
			<Form.Control
				type="text"
				name={field.name}
				value={value}
				onChange={(event) => {
					setFieldValue(field.name, event.target.value);
				}}
			/>
			<MdClose className="icon" title="clear" onClick={handleClearClick} />
		</div>
	);
};

export default FormikInput;
