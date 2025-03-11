import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

export default function NotFound() {
  return (
    <>
      <Row>
        <Col md="12" className="text-center mt-5">
          <h1 className="notFoundNumber">404</h1>
          <h2 className="notFoundText">OOPS PAGE NOT FOUND</h2>
          <Link to="/">
            <Button color="danger" className="mt-2">
              Back to home
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
}
