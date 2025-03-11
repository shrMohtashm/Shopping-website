import React from "react";
import { Row } from "reactstrap";
import AboutTeam from "./AboutTeam";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import RelatedLinks from "./RelatedLinks";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <Row>
      <footer className="text-white mt-2 bg-dark">
        <Row className="p-3 mt-2">
          <AboutUs />
          <RelatedLinks />
          <AboutTeam />
          <ContactUs />
        </Row>
        <hr className="mb-4" />
        <SocialMedia />
      </footer>
    </Row>
  );
}
