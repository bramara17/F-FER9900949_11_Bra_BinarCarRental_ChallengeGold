import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";

const Faq = ({ question }) => {
   return (
      <Container>
         <br/><br/><br/>
         <div className="faq">
            <Col>
               <h1>Frequently Asked Question</h1><br/>
               <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
            </Col>
            <Col>
               {question.map((item, key) => (
                  <Accordion defaultActiveKey="0">
                     <Accordion.Item eventKey={key}>
                        <Accordion.Header><h6>{item.question}</h6></Accordion.Header>
                        <Accordion.Body>{item.answer}</Accordion.Body>
                     </Accordion.Item><br/>
                  </Accordion>
               ))}
            </Col>
            
         </div>
         
         <br/><br/><br/>
         
      </Container>
   );
};

export default Faq;