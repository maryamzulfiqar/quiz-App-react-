import React, { useState } from "react";
import useEffect from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Container, Card, Form, Button, Table } from "react-bootstrap";
let init = 0;
var myans=[];
var j=0;
const Quiz = ({ mydata }) => {
    let outcome=mydata;
    const[val,setVAL]=useState("Next");
/* usestate for qwuiz data that hold the state of data */
    const [qstn,setQ]=useState(mydata[0].question)
const[QuestionId, setId]=useState(mydata[0].id);
const [choice, setChoice]=useState(mydata[0].options[0]);
const[statev,setstate]=useState(0); 
const nextQ = (e) => {
if(val== "Finish") {
    setstate(1);
}
if (init <mydata.length - 1) {
   init=init + 1;
   setId(mydata[init].id);
   setQ(mydata[init].question);
   setChoice(mydata[init].options[0]);
}
if (init==mydata.length - 1) {
    setVAL("Finish")
}}
const checkAns = (e) => {
    if (outcome[init].answer == e) {
        outcome[init].score = "1";
        myans[init]=e;
    }
    else{
        outcome[init].score = "0";
    }
}
const prevQ= (e) => {
    if (init> 0) {
    init=init- 1;
        setVAL("Next");
        setId(mydata[init].id);
        setQ(mydata[init].question);
        setChoice(mydata[init].options[0]);
}} 
if (statev == 0) {
        return (
            <Container className="text-left"> 
                <Card floated='left'>
                    <Card.Body>
                <h5>        <Card.Header className="text-center" >Quiz</Card.Header>
                        <Card.Text>Question: {QuestionId}. {qstn}</Card.Text>
                        <ListGroup >
                            {
                                Object.entries(choice).map((output) => (
                                    <ListGroup.Item>
                                        <div className="block-example border border-light">
                                            <Form.Check.Input type="radio" name={"quiz" + init}  onChange={() => checkAns(output[1])} />
                                            <Form.Check.Label>{output[1]}</Form.Check.Label>
                                        </div>
                                    </ListGroup.Item>
                                ))                           }
                        </ListGroup>
                        <div>    
                        <Button   variant="success"  onClick={prevQ}>Previous</Button>&nbsp; &nbsp;
                        <Button variant="success" onClick={nextQ}> {val}</Button>   
                        </div>
                  </h5>  </Card.Body>
                    <Card.Footer>Total Questions: {QuestionId}/{mydata.length}</Card.Footer>
                </Card>
            </Container>

        )}
        else if (statev == 1) {
            let finl=0;
            const compileRes=(dta) => {
                dta.map((mydta)=>(
                    finl=finl+parseInt(mydta.score)    
                ))
             return finl;
            }     
          return (
            <div>
            <Card floated="center">
                    <Card.Body>
                     <h3>   <Card.Header floated="center">Quiz</Card.Header></h3>
                        <ListGroup >
                            <ListGroup.Item>
                                <div className="text-left">
                                <h1>  Total Score:  {compileRes(outcome)}/{outcome.length}</h1>
                                </div>
                            </ListGroup.Item>
                            {
                                outcome.map((disp) => (
                                    <ListGroup.Item>
                                        <div className="text-left">
                                          Question:   {disp.id}. {disp.question}
                                        </div>
                                        <div className="text-left">
                                            <b>correct answer:</b> {disp.answer}
                                        </div>
                                        <div className="text-left">
                                            <b>Your Score is :</b> {disp.score} 
                                        </div>
                                    </ListGroup.Item>           
                                ))    }
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        ) }
     
    }
export default Quiz;