import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import imageLink from "../../resources/projects/link2.png";
import imageRM from "../../resources/projects/rmLeague.png";
import imageDR from "../../resources/projects/dr.png";
import imageJRC from "../../resources/projects/jrc.png";
import hudsonLogo from "../../resources/projects/hudsonLogo.png";
import rcLogo from "../../resources/projects/goldrclogo.gif";

const demos = [
  {
    heading: "nydraft.com",
    description: "NYC-based Soccer League.",
    url: "https://nydraft.com",
    imageSrc: imageRM,
  },
  {
    heading: "deanrivers.io",
    description: "Personal Website",
    url: "https://deanrivers.io",
    imageSrc: imageDR,
  },
  {
    heading: "jcaicedo.io",
    description: "Personal Website",
    url: "https://jcaicedo.io",
    imageSrc: imageJRC,
  },
  {
    heading: "hudsoncatholic.org",
    description: "School Website.",
    url: "https://hudsoncatholic.org",
    imageSrc: hudsonLogo,
  },
  {
    heading: "rreekoh.club",
    description: "Shopify Clothing Store.",
    url: "https://rreekoh.club",
    imageSrc: rcLogo,
    rcImage: true,
  },
];

const DemoContainerChild = (props) => {
  return (
    <div className="demo__container__children">
      <div
        className={
          props.child.rcImage
            ? "image__container rcLogoImg"
            : "image__container"
        }
      >
        <img src={props.child.imageSrc} className="myImg" alt="Sliders"></img>
      </div>

      <div className="bottom__bar">
        <div className="container__title">
          <h2>{props.child.heading}</h2>
          <p>{props.child.description}</p>
        </div>
        <div className="button__container">
          <a href={props.child.url} target="_blank">
            <label>
              <img
                className="link__image"
                src={imageLink}
                alt="Image Site"
              ></img>
            </label>
          </a>
        </div>
      </div>
    </div>
  );
};

class Projects extends Component {
  render() {
    return (
      <div className="projects__container">
        <div style={{ paddingLeft: "1rem" }}>
          <h1 className="header">projects</h1>
          <p style={{ marginTop: "5%", marginBottom: "5%" }}>
            <span style={{ fontSize: "1.5em" }}>-> </span>
            <NavLink className="link" to="/">
              goHome
            </NavLink>
            <span style={{ fontSize: "1.5em" }}>()</span>
          </p>
        </div>

        <div className="demo__container">
          {demos.map((child) => {
            return <DemoContainerChild child={child} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
