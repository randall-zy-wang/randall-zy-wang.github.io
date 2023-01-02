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

    // const skillmessage = this.props.data.skillmessage;
    
    // const projects = this.props.data.education.map(function (projects) {
    //   let projectImage = "images/portfolio/" + projects.image;

    //   return (
    //     <div key={projects.school}>
    //       <img alt={projects.title} src={projectImage} ></img>
    //       <h3>{projects.school}</h3>
    //       <p className="info">
    //         {projects.degree} <span>&bull;</span>
    //         <em className="date">{projects.graduated}</em>
    //       </p>
    //       <p>{projects.description}</p>
    //     </div>
    //   );
    // });

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={projects.title}>
          <div>
            <a href={projects.url}><img alt={projects.title} src={projectImage}></img></a>
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

    // const skills = this.props.data.skills.map((skills) => {
    //   const backgroundColor = this.getRandomColor();
    //   const className = "bar-expand " + skills.name.toLowerCase();
    //   const width = skills.level;

    //   return (
    //     <li key={skills.name}>
    //       <span style={{ width, backgroundColor }} className={className}></span>
    //       <em>{skills.name}</em>
    //     </li>
    //   );
    // });

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