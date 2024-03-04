import Card from "react-bootstrap/Card";
// import CardNavLink from "react-bootstrap/esm/CardNavLink";
import "./ServicesWeOffer.css";
import { NavLink } from "react-router-dom";

const ServicesWeOffer = () => {
  return (
    <>
      <div className="ServiceWeOffer">
        <div className="Serviceheading"> </div>
        <div className="Services-Box mt-4">
          <div className="service-text" style={{ paddingTop: "50px" }}>
            <h2
              style={{
                fontSize: "64px",
                width: "20rem",
                color: "white",
                marginTop: "-10px",
              }}
            >
              SERVICES
              <br /> WE OFFER
            </h2>
            <p
              style={{
                width: "20rem",
                height: "10rem",
                fontSize: "21px",
                color: "white",
              }}
            >
              Welcome to VirtuBuild, your premier destination for cutting-edge
              3D modeling services tailored to meet your unique needs.
            </p>
          </div>
          <Card
            className="cardbox"
            style={{ marginLeft: "50px", width: "20rem", height: "25rem" }}
          >
            <Card.Body className="card-body">
              <img
                className="hover-image"
                src="../../../public/Images/serviceweoffer/image1.jpeg"
                alt="Hover Image"
              />
              <div className="serviceBox1">
                <div className="seo-div">
                  <h1 style={{ fontSize: "80px" }}>
                    <b>01</b>
                  </h1>
                  <h3 style={{ fontSize: "30px" }}>
                    PRODUCT
                    <br /> DESIGN
                  </h3>
                  <p className="service-div">
                    We Create 3D models of products that are in the design phase
                    or in basic structure
                  </p>
                  <NavLink
                    to="/services"
                    style={{
                      color: "#427ad4",
                      fontSize: "16px",
                      fontWeight: "800",
                    }}
                    className={"a"}
                  >
                    VIEW MORE{" "}
                  </NavLink>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="cardbox" style={{ width: "20rem", height: "25rem" }}>
            <Card.Body className="card-body">
              <img
                className="hover-image"
                src="../../../public/Images/serviceweoffer/image2.jpeg"
                alt="Hover Image"
              />
              <div className="serviceBox1">
                <div className="seo-div">
                  <h1 style={{ fontSize: "80px" }}>
                    <b>02</b>
                  </h1>
                  <h3 style={{ fontSize: "30px" }}>
                    ARCHITECTURAL
                    <br /> RENDERING
                  </h3>
                  <p className="service-div">
                    We are skilled in creating realistic randerings of buildings
                    and structures
                  </p>
                  <NavLink
                    to="/"
                    style={{
                      color: "#427ad4",
                      fontSize: "16px",
                      fontWeight: "800",
                    }}
                    className={"a"}
                  >
                    VIEW MORE{" "}
                  </NavLink>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="cardbox" style={{ width: "20rem", height: "25rem" }}>
            <Card.Body className="card-body">
              <img
                className="hover-image"
                src="../../../public/Images/serviceweoffer/image3.jpeg"
                alt="Hover Image"
              />
              <div className="serviceBox1">
                <div className="seo-div">
                  <h1 style={{ fontSize: "80px" }}>
                    <b>03</b>
                  </h1>
                  <h3 style={{ fontSize: "30px" }}>
                    VIRTUAL
                    <br /> REALITY
                  </h3>
                  <p className="service-div">
                    We Create immersive virtual reality experiences for clients
                    of their projects
                  </p>
                  <NavLink
                    to="/"
                    style={{
                      color: "#427ad4",
                      fontSize: "16px",
                      fontWeight: "800",
                    }}
                    className={"a"}
                  >
                    VIEW MORE{" "}
                  </NavLink>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ServicesWeOffer;
