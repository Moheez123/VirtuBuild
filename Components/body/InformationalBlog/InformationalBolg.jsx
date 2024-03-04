import React, { useState, useEffect } from "react";
import "./informationalBlog.css";

import Card from "react-bootstrap/Card";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const InformationalBolg = () => {
  const [hoveredCards, setHoveredCards] = useState(Array(10).fill(false));

  const handleMouseEnter = (index) => {
    setHoveredCards((prev) => {
      const updatedHoveredCards = [...prev];
      updatedHoveredCards[index] = true;
      return updatedHoveredCards;
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredCards((prev) => {
      const updatedHoveredCards = [...prev];
      updatedHoveredCards[index] = false;
      return updatedHoveredCards;
    });
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cards = [
    {
      img: "/public/Images/home-image.jpeg",
      title: "VirtuBuild Overview",
      description:
        "Discover how VirtuBuild revolutionizes architectural design.",
      link: "/virtubuild-overview",
    },
    {
      img: "/public/Images/InfoblogPages/benefits.jpg",
      title: "VirtuBuild Benefits",
      description:
        "Explore the benefits of using VirtuBuild for builders and architects.",
      link: "/virtubuild-benefits",
    },
    {
      img: "/public/Images/InfoblogPages/features.jpg",
      title: "VirtuBuild Features",
      description:
        "Discover VirtuBuild's powerful features for crafting immersive architectural designs.",
      link: "/virtubuild-features",
    },
    // {
    //   img: "/public/Images/InfoblogPages/VirtuBuild/image6.jpg",
    //   title: "VirtuBuild FAQs",
    //   description: "Find answers to commonly asked questions about VirtuBuild and its usage.",
    //   link: "/virtubuild-faqs",
    // },
    {
      img: "/public/Images/InfoblogPages/demo.jpg",
      title: "VirtuBuild Demo",
      description:
        "Experience a demo of VirtuBuild's features and functionalities.",
      link: "/virtubuild-demo",
    },
    {
      img: "/public/Images/InfoblogPages/testionials.jpg",
      title: "VirtuBuild Testimonials",
      description:
        "Read testimonials from satisfied users who have benefited from using VirtuBuild.",
      link: "/virtubuild-testimonials",
    },
    {
      img: "/public/Images/InfoblogPages/case-study.jpg",
      title: "VirtuBuild Case Studies",
      description:
        "Read real-world case studies showcasing the success stories of VirtuBuild users.",
      link: "/virtubuild-case-studies",
    },
    // {
    //   img: "/public/Images/InfoblogPages/VirtuBuild/image5.jpg",
    //   title: "VirtuBuild Implementation Guide",
    //   description: "Get step-by-step instructions on how to implement VirtuBuild in your architectural projects.",
    //   link: "/virtubuild-implementation-guide",
    // },
  ];
  return (
    <>
      <div className="InformationalBlog">
        <div className="Info-Blog-heading">
          <h2 style={{ fontWeight: "800", marginTop: "5%", marginRight: "0%" }}>
            Insights to help you stay ahead of change
          </h2>
          <p>Informational Blogs</p>
          <div className="main-countainer">
            <div className="col-12 col-md-3 col-lg-2  card-mini">
              <div
                className="card-body"
                style={{
                  alignItems: "center",
                  top: "-120px",
                  position: "relative",
                }}
              >
                <img
                  src="/public/Images/InfoblogPages/blg.jpg"
                  style={{
                    width: "45%",
                    aspectRatio: "3/2",
                    objectFit: "contain",
                  }}
                />
                <h5
                  className="card-title"
                  style={{ color: "black", fontWeight: "800" }}
                >
                  Informational Blogs
                </h5>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>

            <div className="mini-card-grid col-13">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`col-8 col-md-4 col-lg-4 mini-card ${
                    hoveredCards[index] ? "hovered" : ""
                  } ${scrollPosition > 50 ? "hidden" : ""}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div className="card-content">
                    <Card.Img
                      variant="top"
                      src={card.img}
                      style={{
                        width: "45%",
                        aspectRatio: "3/2",
                        objectFit: "contain",
                      }}
                    />
                    <h5
                      className="card-title mt-4"
                      style={{ color: "black", fontWeight: "800" }}
                    >
                      {card.title}
                    </h5>
                    <p className="card-text" style={{ fontSize: "17px" }}>
                      {card.description}
                    </p>
                    <NavLink to={card.link}>
                      <ReadMoreButton />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <Card style={{ width: "18rem" }} className="fles">
              <Card.Img variant="top" src="/Images/2.png" />
              <Card.Body>
                <Card.Title>
                  The role of social media in modern marketing strategies
                </Card.Title>
                <Card.Text>
                  The world of marketing has seen a massive transformation over
                  the last few decades, thanks to the advent of social media
                  platforms
                </Card.Text>
                <NavLink to='/socialmediastrategies' ><ReadMoreButton /></NavLink>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/Images/2.png" />
              <Card.Body>
                <Card.Title>
                  How to improve your website's user experience for better
                  engagement
                </Card.Title>
                <Card.Text>
                  In the present era of digitalization, it is imperative for any
                  business to have a website.
                </Card.Text>
                <NavLink to='/websiteexperience' ><ReadMoreButton /></NavLink>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/Images/2.png" />
              <Card.Body>
                <Card.Title>
                  How to create a successful e-commerce website for your
                  business
                </Card.Title>
                <Card.Text>
                  As more and more people turn to online shopping, it's becoming
                  increasingly important for businesses to have a successful
                  e-commerce website
                </Card.Text>
                <NavLink to='/ecommercewebsite' ><ReadMoreButton /></NavLink>
                
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="fles">
              <Card.Img variant="top" src="/Images/2.png" />
              <Card.Body>
                <Card.Title>
                  The role of social media in modern marketing strategies
                </Card.Title>
                <Card.Text>
                  The world of marketing has seen a massive transformation over
                  the last few decades, thanks to the advent of social media
                  platforms
                </Card.Text>
                <NavLink to='/socialmediastrategies' ><ReadMoreButton /></NavLink>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/Images/2.png" />
              <Card.Body>
                <Card.Title>
                  How to improve your website's user experience for better
                  engagement
                </Card.Title>
                <Card.Text>
                  In the present era of digitalization, it is imperative for any
                  business to have a website.
                </Card.Text>
                <NavLink to='/websiteexperience' ><ReadMoreButton /></NavLink>
              </Card.Body>
            </Card> */}
        </div>
      </div>
    </>
  );
};

export default InformationalBolg;
