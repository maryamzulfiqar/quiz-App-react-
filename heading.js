import React from 'react';
import {question} from './question';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function Heading() {
    return (
        <div>
            {question.map((data)=>(
            data.question
            ))}
        </div>
    )
}
export default Heading;
    