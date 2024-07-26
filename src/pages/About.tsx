import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export function About() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>About Us</h1>
          <p className="lead">
            Welcome to Our E-Commerce Store! We are committed to bringing you the best products at unbeatable prices.
          </p>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col md={6}>
          <Image src="/imgs/necklace.jpg" rounded fluid />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <p>
            Our mission is to offer a seamless and enjoyable shopping experience, whether you're shopping for the latest electronics, fashion trends, or home essentials. We pride ourselves on our wide range of high-quality products, fast and reliable shipping, and exceptional customer service.
          </p>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col md={6} className="d-flex align-items-center">
          <p>
            Founded in [Year], our store has quickly grown to become a favorite among shoppers. We believe in the power of community and strive to build strong relationships with our customers. Your satisfaction is our top priority, and we are here to help you find exactly what you're looking for.
          </p>
        </Col>
        <Col md={6}>
          <Image src="imgs/Floral.jpg" rounded fluid />
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col md={12} className="text-center">
          <h2>Why Shop With Us?</h2>
          <p>
            At Our E-Commerce Store, we offer:
          </p>
          <ul className="list-unstyled">
            <li>• A wide selection of products</li>
            <li>• Competitive prices</li>
            <li>• Fast and secure shipping</li>
            <li>• Excellent customer service</li>
            <li>• Easy returns and exchanges</li>
          </ul>
        </Col>
      </Row>
      
      <Row className="mt-4 mb-5">
        <Col className="text-center">
          <p>
            Thank you for choosing Our E-Commerce Store. We look forward to serving you and providing you with an exceptional shopping experience!
          </p>
        </Col>
      </Row>
    </Container>
  );
}
