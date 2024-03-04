import React from "react";
import "./Introduction.css";
import Card from "react-bootstrap/Card";

const Introduction = () => {
  return (
    <>
      <div className="intro-Dock">
        <div className="introduction">
          <div className="heading ">
            <h1 className="heads">OUR IMPRESSION.</h1>
          </div>
          <div className="paragraph">
            <p>
              We want to deliver with a skillset and capabilities to ensure that
              your relevant project is completed in the manner you want it to
              be. Our team has the expertise to help you out with your
              3D-designing model development project and give it a virtual
              reality for your business. All in all, we are a one-stop solution
              that can cater to all your needs.
            </p>
          </div>
        </div>
        <div className="evalution mt-5">
          <div className="years">
            <h1 style={{ color: "#2CA3CC" }}>
              2{" "}
              <span className="" style={{ fontSize: "12px", color: "#777" }}>
                Years
              </span>
            </h1>
          </div>
          <div className="Brands">
            <h1 style={{ color: "#2CA3CC" }}>
              4{" "}
              <span className="" style={{ fontSize: "12px", color: "#777" }}>
                Brands
              </span>
            </h1>
          </div>
          <div className="Technology">
            <h1 style={{ color: "#2CA3CC" }}>
              20+{" "}
              <span className="" style={{ fontSize: "12px", color: "#777" }}>
                Technologies
              </span>
            </h1>
          </div>
        </div>
        <div className="projects mt-5 ">
          <Card className="jbsaeed" style={{ width: "10rem", height: "10rem" }}>
            <Card.Img
              variant="center"
              src="/public/Images/Intro/masoomia.jpg"
              style={{ width: "10rem", height: "20rem" }}
            />
          </Card>
          <Card className="jbsaeed" style={{ width: "10rem", height: "10rem" }}>
            <Card.Img
              variant="center"
              src="/public/Images/Intro/rajput.png"
              style={{ width: "10rem", height: "10rem" }}
            />
          </Card>
          <Card className="jbsaeed" style={{ width: "10rem", height: "10rem" }}>
            <Card.Img
              variant="center"
              src="/public/Images/Intro/H&H.png"
              style={{ width: "10rem", height: "10rem" }}
            />
          </Card>
          <Card className="jbsaeed" style={{ width: "10rem", height: "10rem" }}>
            <Card.Img
              variant="center"
              src="/public/Images/Intro/Saima.png"
              style={{ width: "10rem", height: "10rem" }}
            />
          </Card>
          <Card className="jbsaeed" style={{ width: "10rem", height: "10rem" }}>
            <Card.Img
              variant="center"
              src="/public/Images/Intro/Arfeen.png"
              style={{ width: "10rem", height: "10rem" }}
            />
          </Card>
          <Card className="jbsaeed" style={{ width: "10rem", height: "10rem" }}>
            <Card.Img
              variant="center"
              src="/public/Images/Intro/qasmani.png"
              style={{ width: "10rem", height: "10rem" }}
            />
          </Card>
        </div>
        {/* <div className="projects mt-5">
          <Card className="jbsaeed" style={{ width: "10rem", height: "10rem" }}>
            <Card.Img
              variant="center"
              src="/Images/2.png"
              style={{ width: "10rem", height: "10rem" }}
            />
          </Card>
          <Card className="jbsaeed" style={{ width: "10rem", height: "10rem" }}>
            <Card.Img
              variant="center"
              src="/Images/2.png"
              style={{ width: "10rem", height: "10rem" }}
            />
          </Card>
          <Card className="jbsaeed" style={{ width: "10rem", height: "10rem" }}>
            <Card.Img
              variant="center"
              src="/Images/2.png"
              style={{ width: "10rem", height: "10rem" }}
            />
          </Card>
          <Card className="jbsaeed" style={{ width: "10rem", height: "10rem" }}>
            <Card.Img
              variant="center"
              src="/Images/2.png"
              style={{ width: "10rem", height: "10rem" }}
            />
          </Card>
        </div> */}
      </div>
    </>
  );
};

export default Introduction;
