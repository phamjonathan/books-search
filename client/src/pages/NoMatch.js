import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>

      <Row>
        <Col size= "md-12">
          <Jumbotron>
            <h1 className= "text-center"> Error 304 </h1>
            <h1 className= "text-center">
              <span role= "img" aria-label= "Face With Rolling Eyes Emoji" >
                Please, click "Search" to try again
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      
    </Container>
  );
}

export default NoMatch;
