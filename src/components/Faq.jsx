import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";

const Faq = ({ question }) => {
   return (
      <Container>
         {question.map((item, key) => (
            <Accordion defaultActiveKey="0">
               <Accordion.Item eventKey={key}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
               </Accordion.Item>
            </Accordion>
         ))}
      </Container>
   );
};

export default Faq;