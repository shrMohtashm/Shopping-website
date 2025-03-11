import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { links } from "utils/data";

export default function RelatedLinks() {
  const linkSection =
    links &&
    links.map((link) => (
      <li key={link.id}>
        <Link
          to={link.path}
          target="_blank"
          className="text-white text-decoration-none"
        >
          {link.title}
        </Link>
      </li>
    ));

  return (
    <Col lg="3" md="6" className="mb-4 mb-md-0 p-2">
      <h5>Related Links</h5>
      <ul className="list-unstyled mb-0" style={{ fontSize: "14px" }}>
        {linkSection}
      </ul>
    </Col>
  );
}
