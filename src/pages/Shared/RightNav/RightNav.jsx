import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";
const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button className="mb-2" variant="primary">
        <FaGoogle />
        Login With Google
      </Button>
      <Button variant="secondary">
        <FaGithub />
        Login With Github
      </Button>
      <div>
        <h4 className="mt-4">Find Us on</h4>
        <ListGroup>
          <ListGroup.Item className="mb-3">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            height: "500px",
            width: "270px",
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        >
          <div className="">
            <h3 className="text-light text-center pt-5 ">
              Create an Amazing Newspaper
            </h3>
            <h5 className="text-light text-center px-3 pt-4">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </h5>
            <div className="text-center pt-4">
              <button className="bg-danger text-light pt-3 fs-5 pb-3 px-5 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
