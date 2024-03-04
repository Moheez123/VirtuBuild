import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import { Carousel } from "bootstrap"; // Import Carousel component

import Navs from "../../../Components/Navbar/Navs";
import Footer from "../../../Components/footer/Footer";
import "./Aboutus.css";

const Aboutus = () => {
  useEffect(() => {
    const initCarousel = () => {
      const carouselElement = document.getElementById(
        "carouselMultiItemExample"
      );
      const carousel = new Carousel(carouselElement, {
        interval: 5000, // Set interval to 5000 milliseconds (5 seconds)
      });

      // Optionally, you can pause the carousel on hover
      carouselElement.addEventListener("mouseenter", () => {
        carousel.pause();
      });

      carouselElement.addEventListener("mouseleave", () => {
        carousel.cycle();
      });
    };

    // Initialize the carousel when the component mounts
    initCarousel();

    // Destroy the carousel when the component unmounts
    return () => {
      const carouselElement = document.getElementById(
        "carouselMultiItemExample"
      );
      carouselElement.removeEventListener("mouseenter", () => {});
      carouselElement.removeEventListener("mouseleave", () => {});
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render
  return (
    <>
      <Navs />
      <div className="about-container">
        <div className="aboutus-page">
          <div className="containerSlider2">
            <div className="front1">
              <img
                src="/public/Images/serviceweoffer/VRGoggles3D.png"
                alt="Slider"
              />
              <div className="text-overlay">ABOUT US</div>
          </div>
          </div>
        </div>
        <div className="about-tag">
          <h3 className="about-head">
            We Are
            <br />
            VirtuBuilderzz.
          </h3>
          <p className="about-para">
            Welcome to VirtuBuild, where innovation meets excellence.
            <br /> <br />
            At VirtuBuild, we're committed to revolutionizing the architectural
            landscape with cutting-edge technology and unparalleled expertise.
            Our primary goal is to empower architects, builders, and designers
            like you to unleash your creativity and achieve extraordinary
            results.
            <br /> With VirtuBuild, you gain access to a comprehensive suite of
            tools and resources designed to streamline your architectural
            projects from conception to completion. From intuitive design
            interfaces to advanced rendering capabilities, we provide everything
            you need to bring your vision to life with precision and efficiency.{" "}
            <br />
            But our commitment doesn't stop there. We understand the importance
            of reliability and affordability, which is why our solutions are not
            only state-of-the-art but also highly reliable and cost-effective.
            We believe that every project deserves the best, and we're here to
            ensure that you get exactly that.
            <br />
            Whether you're working on residential developments, commercial
            projects, or urban landscapes, VirtuBuild is your trusted partner
            every step of the way. Join us in shaping the future of architecture
            and discover the limitless possibilities with VirtuBuild today.
            <br /> With our experience, we can help you dethrone your
            competitors and increase your revenue.
          </p>
        </div>
        <div className="about-mission">
          <div>
            <h3 className="mission-head">
              <b>Mission And Vision </b>
            </h3>
          </div>
          <div className="mission-container">
            <div className="container-img">
              <img
                src="/public/Images/aboutUs/Vision-Mission.png"
                alt="Mission Image"
              />
            </div>
            <div className="moto-vision">
              <h4>
                <b>Our Vision</b>
              </h4>
              <p>
                Our vision at VirtuBuild is to lead the transformation of
                architectural design processes globally. By leveraging VR
                technology and advanced 3D modeling, we aspire to become the
                go-to platform for builders and architects, empowering them to
                create stunning, immersive building designs that exceed client
                expectations, drive industry innovation, and are cost-effective
              </p>
              <h4>
                <b>Our Moto</b>
              </h4>
              <p>Design, Integrate, Deploy - We Make It Happen</p>
            </div>
          </div>
        </div>
        <div className="ourvalue-head">
          <h3>
            <b>Our Values</b>
          </h3>
        </div>
        <div className="ourvalue-container">
          <div className="ourvalue-subcontainer">
            <img
              className="value-container-img"
              src="/public/Images/aboutUs/passion.png"
              alt="Passion"
            />
            <h6 className="value-container-head">
              <b>Passion</b>
            </h6>
            <p className="value-container-para">
              We are fueled by our passion and committed to infusing purpose
              into every aspect of our endeavors.
            </p>
          </div>
          <div className="ourvalue-subcontainer">
            <img
              className="value-container-img1"
              src="/public/Images/aboutUs/innovation.png"
              alt="Innovation"
            />
            <h6 className="value-container-head1">
              <b>Impactful Innovation</b>
            </h6>
            <p className="value-container-para1">
              We constantly strive to challenge the current norms and envision
              the future demands of the market in order to create significant
              value.
            </p>
          </div>
          <div className="ourvalue-subcontainer">
            <img
              className="value-container-img2"
              src="/public/Images/aboutUs/trust.png"
              alt="Trust"
            />
            <h6 className="value-container-head2">
              <b>Trust & Diversity</b>
            </h6>
            <p className="value-container-para2">
              We honor and embrace a variety of viewpoints, while cultivating a
              culture of mutual reliance and responsibility
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="customerreview-head">
          <h5 className="head">
            <b>See What Our Customer Says About Us</b>
          </h5>
        </div>
        <div className="customerreview-content">
          <div
            id="carouselMultiItemExample"
            className="carousel slide carousel-dark text-center"
            data-mdb-ride="carousel"
          >
            {/* Controls */}
            <div className="d-flex justify-content-center mb-4">
              <button
                className="carousel-control-prev position-relative"
                type="button"
                data-bs-target="#carouselMultiItemExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next position-relative"
                type="button"
                data-bs-target="#carouselMultiItemExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* Inner */}
            <div className="carousel-inner py-4">
              {/* Single item */}
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                        alt="avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="mb-3">Anna Deynah</h5>
                      <p>XYZ BUILDERS</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        As a tech enthusiast, finding a reliable platform for my
                        projects was crucial. VIRTUBUILD exceeded my
                        expectations in every way. The seamless integration of
                        cutting-edge features and the intuitive design made the
                        development process a joy.
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-4 d-lg-block">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="mb-3">John Doe</h5>
                      <p>Web Developer</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        Ut enim ad minima veniam, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam, nisi ut aliquid
                        commodi.
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star-half-alt fa-sm"></i>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-4 d-lg-block">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                        alt="avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="mb-3">Maria Kate</h5>
                      <p>Photographer</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti.
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="far fa-star fa-sm"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src="../../../public/Images/aboutUs/testimonial1.jpeg"
                        alt="avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="mb-3">MAAZ TARIQ</h5>
                      <p>ABC BUILDERS</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        Meow meow meow, purr purr purr. Pawsitively delightful!
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src="../../../public/Images/aboutUs/testimonial2.jpeg"
                        alt="avatar"
                        style={{ width: "120px" }}
                      />
                      <h5 className="mb-3">ANAS SIDDIQUI</h5>
                      <p>BCD BUILDERS</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad, sequi?
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star-half-alt fa-sm"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 d-lg-block">
                      <img
                        className="rounded-circle shadow-1-strong mb-4"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        style={{ width: "150px" }}
                      />
                      <h5 className="mb-3">JHON DOE</h5>
                      <p>ZYA BUILDERS</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Facere, aspernatur!
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                        <li>
                          <i className="fas fa-star fa-sm"></i>
                        </li>
                      </ul>
                    </div>
                    {/* Add more reviewers for Slide 2 */}
                  </div>
                </div>
              </div>

              {/* Additional items go here */}
            </div>
            {/* Inner */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aboutus;
