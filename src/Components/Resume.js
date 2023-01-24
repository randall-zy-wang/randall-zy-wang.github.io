import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={projects.title}>
          <div className="shadow">
            <a href={projects.url}><img alt={projects.title} src={projectImage} ></img></a>
          </div>
          
          <div className="project-textbox">
            <h3>{projects.title}</h3>
            <p className="info">
              {/* {projects.title} */}
              {/* <span>&bull;</span> <em className="date">{projects.years}</em> */}
            </p>
            <p>{projects.description}</p>
          </div>
        </div>
      );
    });

    return (
      <section id="works">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>My Projects</span>
              </h1>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="nine columns main-col">{projects}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
