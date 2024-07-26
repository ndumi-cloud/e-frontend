import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const featuredProducts = [
  { id: 1, name: "Heels", price: 29.99, imageUrl: "/imgs/heels.jpg" },
  { id: 2, name: "Computer", price: 49.99, imageUrl: "/imgs/computer.jpg" },
 
  { id: 3, name: "Mac", price: 19.99, imageUrl: "/imgs/mac.jpg" },
  { id: 4, name: "Phone", price: 19.99, imageUrl: "/imgs/phone1.jpg" },
 
  { id: 5, name: "Blouses", price: 19.99, imageUrl: "/imgs/blouses.jpg" },
  { id: 6, name: "Chip", price: 19.99, imageUrl: "/imgs/electronic.jpg" },

];

export function Home() {
  return (
    <Container fluid>
      {/* Banner */}
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imgs/necklace.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Summer Sale</h3>
                <p>Up to 50% off on selected items!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imgs/clothes2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>New Arrivals</h3>
                <p>Check out the latest trends!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imgs/hats.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Best Sellers</h3>
                <p>Our most popular products!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Featured Products */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center">Featured Products</h2>
          <Row>
            {featuredProducts.map((product) => (
              <Col key={product.id} md={4} className="mt-4">
                <Card>
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{`$${product.price.toFixed(2)}`}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Footer */}
      <Row className="mt-5 bg-light py-3">
        <Col className="text-center">
          <p>&copy; 2024 Your E-Commerce Store. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}
