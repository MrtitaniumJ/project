import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css'; // Add your custom CSS for further styling

function LandingPage() {
  return (
    <div className="landing-page">
      <Container>
        <Row className="header-section">
          <Col md={6} className="hero-section">
            <h1>Elevate Your College Experience</h1>
            <p className="tagline">Join the GLA Connect Community</p>
            <Button variant="primary" size="lg">Get Started</Button>
          </Col>
          <Col md={6} className="hero-image">
            {/* Add your hero image or video here */}
          </Col>
        </Row>
        
        <Row className="features-section">
          <Col md={4}>
            <h2>Stay Connected</h2>
            <p>Engage with your peers through our interactive community page.</p>
          </Col>
          <Col md={4}>
            <h2>Explore Clubs</h2>
            <p>Discover exciting club activities, achievements, and events.</p>
          </Col>
          <Col md={4}>
            <h2>Get Academic Support</h2>
            <p>Ask questions, provide answers, and access valuable study resources.</p>
          </Col>
        </Row>
        
        {/* More sections like Testimonials, How It Works, and Footer */}
        
      </Container>
    </div>
  );
}

export default LandingPage;
