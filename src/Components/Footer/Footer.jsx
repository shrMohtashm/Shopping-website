import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { FaLinkedin, FaGoogle, FaSquareInstagram } from "react-icons/fa6";
import { links } from "utils/data";

export default function Footer() {
  const linkSection = links.map((link) => (
    <li key={link.id}>
      <Link to={link.path} target="_blank" className="text-white text-decoration-none">
        {link.title}
      </Link>
    </li>
  ));

  return (
    <Row>
      <footer className="text-white mt-2 bg-dark">
        <Row className="p-3 mt-2">
          <Col lg="3" md="6" className="mb-4 mb-md-0 p-2">
            <h5>About the Store</h5>
            <p style={{ fontSize: "12px" }}>
              Lorem ipsum is a placeholder text used in the printing and typesetting industry.
              It has been the industry's standard dummy text since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries but also the leap into electronic typesetting.
            </p>
          </Col>

          <Col lg="3" md="6" className="mb-4 mb-md-0 p-2">
            <h5>Related Links</h5>
            <ul className="list-unstyled mb-0" style={{ fontSize: "14px" }}>
              {linkSection}
            </ul>
          </Col>
          
          <Col lg="3" md="6" className="mb-4 mb-md-0 p-2">
            <h5>About the Store</h5>
            <p style={{ fontSize: "12px" }}>
              Lorem ipsum is a placeholder text used in the printing and typesetting industry.
              It has been the industry's standard dummy text since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries but also the leap into electronic typesetting.
            </p>
          </Col>

          <Col lg="3" md="6" className="mb-4 mb-md-0 p-2" style={{ fontSize: "14px" }}>
            <h5>Contact Us</h5>
            <p>Iran - Tehran</p>
            <p>info@example.com</p>
            <p>01 234 567 88</p>
          </Col>
        </Row>
        
        <hr className="mb-4" />
        
        <section className="mb-4 text-center">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FaGoogle data-testid="googleIcon" />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FaSquareInstagram />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FaLinkedin />
          </a>
        </section>
      </footer>
    </Row>
  );
}
