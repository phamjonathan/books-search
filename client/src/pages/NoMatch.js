import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
    return (
        <Container fluid>
        <Row>
            <Col size="md-15">
            <Jumbotron>
            <h1 className="text-absolute"> Error Try Again </h1>
            </Jumbotron>
            </Col>
        </Row>
        </Container>
    );
}

export default NoMatch;