import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Our Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus
        iusto unde voluptatum cupiditate laborum placeat? Quos nulla beatae cum.
      </p>
      <p>
        Go Back to <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
