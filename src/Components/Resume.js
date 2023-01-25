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
      const images = projects.image.map(function (image) {
        let projectImage = "images/portfolio/" + image;

        return(<div className="column">
          <img alt={projects.title} src={projectImage}></img>
        </div>)
      })


      return (
        <div key={projects.title}>
          <div className="shadow row">
            <a href={projects.url}>{images}</a>
          </div>
          
          <div className="project-textbox">
            <h3>{projects.title}</h3>
            <p className="info">
              {projects.title}
              <span>&bull;</span> <em className="date"></em>
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
            <div className="nine columns main-col">
              {/* {projects} */}

              <div>
                <div className="shadow row">
                  <a href="http://ss.0nut.com/">
                    <img alt="Starside" src="images/portfolio/2.jfif"></img>
                  </a>
                </div>
                
                <div className="project-textbox">
                  <h3>Starside</h3>
                  <p className="info">
                    Game Designer | Battle Design
                    {/* <span>&bull;</span> <em className="date">Aug 2022 ~ Present</em> */}
                  </p>
                  <p>Starside is a fantasy, action, role playing mobile game. In an apocalyptic world, you will use the power bestowed by fate to save the future of the world in intertwined reincarnations.</p>
                  <p><a href="https://www.bilibili.com/video/BV16f4y1q7do/?spm_id_from=333.337.search-card.all.click&vd_source=4b7824b762efbd95ceed7b0a98b521c4">Game Promotion Video</a></p>
                  <p><a href="https://www.bilibili.com/video/BV1yq4y1T7Dz/?spm_id_from=333.999.0.0&vd_source=4b7824b762efbd95ceed7b0a98b521c4">Gameplay demo</a></p>
                </div>
              </div>

              <div>
                <div className="shadow row">
                  <a href="https://www.lokisloop.org/">
                    <img alt="The Euphorigen Investigation" src="images/portfolio/1.jpg"></img>
                  </a>
                </div>
                
                <div className="project-textbox">
                  <h3>The Euphorigen Investigation</h3>
                  <p className="info">
                    Co-Designer | User Experience Design 
                    <span>&bull;</span> <em className="date">Research</em>
                  </p>
                  <p>Explore the depths of misinformation with fun and collaborative games. Players learn to identify misinformation through a series of challenges and stop the spread of misinformation as part of the story.</p>
                </div>
              </div>

              <div>
                <div className="shadow row">
                  <a href="http://pawdy.herokuapp.com/">
                    <img alt="Pawdy" src="images/portfolio/3.jpg"></img>
                  </a>
                </div>
                
                <div className="project-textbox">
                  <h3>Pawdy</h3>
                  <p className="info">
                    Lead Developer | Full-stack Development
                  </p>
                  
                  <p>Pawdy is a web platform created for student pet owners to find affordable pet sitting services and connect with other pet owners to form an online community. Class of 2022 UW information school Capstone Project.</p>
                  <p>Libraries and tools: Node.js, React.js, MongoDB, Heroku</p>
                </div>
              </div>

              <div>
                <div className="shadow row">
                  <a href="images/portfolio/SauvOS.pdf">
                    <img alt="SauvOS" src="images/portfolio/5.png"></img>
                  </a>
                </div>
                
                <div className="project-textbox">
                  <h3>SauvOS</h3>
                  <p className="info">
                    Product Designer | UI/UX Design | Mobile Design
                  </p>
                  <p>An innovative mobile operating system prototype designed to promote productivity for young adults. Prototyped 10 + applications with Figma in 2021.</p>

                  {/* <div className="columns download">
                    <p>
                      <a href="images/portfolio/SauvOS.pdf" className="button">
                        <i className="fa fa-download"></i>Download
                      </a>
                    </p>
                  </div> */}
                  
                  {/* <p><a href="images/portfolio/SauvOS.pdf">Download Prototype Summary</a></p> */}
                </div>
              </div>

              <div>
                <div className="shadow row">
                  <a href="images/portfolio/esports-infographic.pdf">
                    <img alt="Esports Infographic" src="images/portfolio/4.png"></img>
                  </a>
                </div>
                
                <div className="project-textbox">
                  <h3>Esports Infographic</h3>
                  <p className="info">
                    Graphic Design
                    <span>&bull;</span> <em className="date">Individual Project</em>
                  </p>
                  <p>An infographic capturing the key information and data about the history, development, and influence of Esports. Made in 2019 with Adobe Illustrator.</p>
                  {/* <p><a href="images/portfolio/esports-infographic.pdf">Download Full Version</a></p> */}
                </div>
              </div>

            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
