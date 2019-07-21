import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BaseComponent from '../BaseComponent';

const ContainerComponentInner = (props) => {
	return (
		<div>
			<Row>
				<Col lg={3} md={6} xs={12}>
					{props.children[0]}
				</Col>
				<Col>{props.children[1]}</Col>
			</Row>
			{props.children.length > 2 && (
				<Row>
					<Col>{props.children[2]}</Col>
				</Row>
			)}
		</div>
	);
};

const ContainerComponent = BaseComponent(ContainerComponentInner);

export default ContainerComponent;
