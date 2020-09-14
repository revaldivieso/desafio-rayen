import React from 'react';
import { Card } from 'react-bootstrap';

const TutorialItem = (props) => {
    const { nombre, profesor, fecha } = props.data;
    return (<Card>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{profesor}</Card.Text>
            <Card.Text>{fecha}</Card.Text>
    </Card>);

}
export default TutorialItem;