import Navs from "../../../Components/Navbar/Navs";
import "./Services.css";
import Footer from "../../../Components/footer/Footer";
import GetInTouch from "../../../Components/body/GetInTouch/GetInTouch";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Navs />

      <div className="servicePage">
        <div className="containerSlider3">
          <div className="front2">
            <img
              src="/public/Images/serviceweoffer/piecture5.jpeg"
              alt="Slider"
            />
            <div className="text-overlay">SERVICES</div>
          </div>
        </div>

        <div className="service-head">
          <h1 style={{ fontSize: "60px", color: "#88abe3" }}>Our Services</h1>
          <p style={{ fontSize: "30px" }}>
            At VirtuBuild, we are dedicated to providing comprehensive solutions
            to meet all your architectural design needs. Our services are
            tailored to cater to builders, architects, property developers, and
            investors, offering cutting-edge technologies and innovative
            approaches to elevate your projects. Here's an overview of the
            services we offer:
          </p>
        </div>
        <div className="service">
          <div className="service-content">
            <h2>3D Modeling</h2>
            <p>
              Revolutionize your architectural design process with our
              VirtuBuild 3D modeling service. We create immersive 3D models that
              allow you
              <br /> to visualize and showcase your building designs
              <br /> with unparalleled realism.
            </p>
          </div>
          <div className="images-3d">
            <img
              src="./../../../public/Images/blender/sample1-removebg-preview.png"
              alt="3D Modeling"
            />
            <img
              className="img2"
              src="./../../../public/Images/blender/sample2-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
        <div className="service2">
          <div className="service-vr-content">
            <h2>Virtual Reality Walkthroughs</h2>
            <p>
              Experience your designs like never before with our virtual reality
              walkthroughs. Take your clients on a journey through their
              <br /> future homes, exploring every detail and dimension
              <br /> in immersive virtual reality.
            </p>
            <NavLink
              to={"https://hubs.mozilla.com/PUzFwkk/tattered-calm-place"}
              target="_blank"
              rel="noopener noreferrer"
              className="navlink"
            >
              VIEW IN VR
            </NavLink>
          </div>
          <div className="images-vr">
            <img
              src="../../../public/Images/serviceweoffer/picture1.jpg"
              alt="User-Friendly Controls"
            />
          </div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Services;
