import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6"
import { links } from '../../utils/data';
export default function Footer() {

  const linkSection = links.map((link) => <li key={link.id}> <Link to={link.path}  target="_blank" className="text-white text-decoration-none">{link.title}</Link></li>
  )

  return (
    <Row>
      <footer className="text-white mt-2 bg-dark" >
        <Row className='p-3 mt-2'>
          <Col lg='3' md='6' className='mb-4 mb-md-0 p-2'>
            <h5>درباره فروشگاه</h5>
            <p style={{ fontSize: '12px' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
          </Col>

          <Col lg='3' md='6' className='mb-4 mb-md-0 p-2'>
            <h5>لینک های مرتبط</h5>
            <ul className="list-unstyled mb-0" style={{ fontSize: '14px' }}>
              {linkSection}
            </ul>
          </Col>
          <Col lg='3' md='6' className='mb-4 mb-md-0 p-2'>
            <h5>درباره فروشگاه</h5>
            <p style={{ fontSize: '12px' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
          </Col>
          <Col lg='3' md='6' className='mb-4 mb-md-0 p-2' style={{ fontSize: '14px' }}>
            <h5>تماس با ما</h5>
            <p>ایران-تهران</p>
            <p> info@example.com</p>
            <p> 01 234 567 88</p>
          </Col>
        </Row>
        <hr className="mb-4" />
        <section className="mb-4 text-center">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          ><FaGoogle data-testid="googleIcon" /></a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          ><FaSquareInstagram /></a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          ><FaLinkedin /></a>

        </section>
      </footer>
    </Row>

  )
}
