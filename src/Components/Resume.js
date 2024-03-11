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

    // const projects = this.props.data.projects.map(function (projects) {
    //   const images = projects.image.map(function (image) {
    //     let projectImage = "images/portfolio/" + image;

    //     return(<div className="column">
    //       <img alt={projects.title} src={projectImage}></img>
    //     </div>)
    //   })


    //   return (
    //     <div key={projects.title}>
    //       <div className="shadow row">
    //         <a href={projects.url}>{images}</a>
    //       </div>
          
    //       <div className="project-textbox">
    //         <h3>{projects.title}</h3>
    //         <p className="info">
    //           {projects.title}
    //           <span>&bull;</span> <em className="date"></em>
    //         </p>
    //         <p>{projects.description}</p>
    //       </div>
    //     </div>
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
            <div className="eleven columns main-col">
              {/* {projects} */}

              <div className="portfolio-row">
                <iframe src="https://www.youtube.com/embed/LXkd9o2MLok?si=k76Fa2oKiIdsmBqr" title="Glitch Witch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
                <div className="project-textbox">
                  <h3>Glitch Witch</h3>
                  <p className="info"> Developer <em className="date">USC Advanced Game Project</em> </p>
                  
                  <p>In a tech-dead future, you play as Rosette, repairing broken tech by solving circuit puzzles to uncover the surprising power of 80s technology. She is thrilled about this discovery - until she faces accusations of witchcraft. Will friendship triumph, or force her to choose between power and acceptance? </p>
                  <p>Technology: Unreal Engine 5, C++</p>
                  <p>Demo and Steam page coming soon ...</p>
                </div>
              </div>

              <div className="portfolio-row">
                  <a href="https://jk15162428.itch.io/ministry-of-smile">
                    <img alt="Ministry of Smile" src="images/portfolio/smile.png"></img>
                  </a>
                
                <div className="project-textbox">
                  <h3>Ministry of Smile</h3>
                  <p className="info"> Developer <em className="date">2024 Global Game Jam (Make me Laugh)</em> </p>
                  
                  <p>In Ministry of Smile, you play as an employee of the Smile Department, tasked with fulfilling the requests of citizens to keep them happy. The level of effort you put into your job will affect the citizens' willingness to stay and your career progression. Keep up the good work, young one!</p>
                  <p>Technology: Unity</p>
                </div>
              </div>
              
              <div className="portfolio-row">
                <iframe src="https://www.youtube.com/embed/QUNYl4jDiek?si=RZtCvErx6o-aeJNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
                <div className="project-textbox">
                  <h3>Photorealistic Lighting with Volumetric Rendering</h3>
                  <p className="info"> Developer <em className="date">Computer Graphics</em> </p>
                  
                  <p>Successfully simulated photorealistic light scattering effects using Raymarching algorithm and Unity built-in Rendering Pipeline</p>
                  <p>Explored and compared the resulting visual effects produced from different light scattering phase functions and researched the influences of the individual parameters</p>
                  <p>Experimented the performance of the algorithm on various light sources and complex environments and optimized the outcomes for presentation</p>
                  <p>Technology: Unity, Blender</p>
                  <p><a href="images/portfolio/Volumetric.pdf">Read the Paper</a></p>
                </div>
              </div>

              <div className="portfolio-row">
                  <a href="http://ss.0nut.com/">
                    <img alt="Starside" src="images/portfolio/2.jfif"></img>
                  </a>
                
                <div className="project-textbox">
                  <h3>Starside</h3>
                  <p className="info">Technical Designer <em className="date">Mobile Game</em> </p>
                  <p>Starside is a fantasy, action, role playing mobile game. In an apocalyptic world, you will use the power bestowed by fate to save the future of the world in intertwined reincarnations.</p>
                  <p>Technology: Unity</p>
                  <a href="https://www.bilibili.com/video/BV16f4y1q7do/?spm_id_from=333.337.search-card.all.click&vd_source=4b7824b762efbd95ceed7b0a98b521c4">Game Promotion Video</a>
                  <p><a href="https://www.bilibili.com/video/BV1yq4y1T7Dz/?spm_id_from=333.999.0.0&vd_source=4b7824b762efbd95ceed7b0a98b521c4">Gameplay demo</a></p>
                </div>
              </div>
 
              <div className="portfolio-row">
                  <a href="https://www.lokisloop.org/">
                    <img alt="The Euphorigen Investigation" src="images/portfolio/1.jpg"></img>
                  </a>
                
                <div className="project-textbox">
                  <h3>The Euphorigen Investigation</h3>
                  <p className="info">
                    Developer | Researcher
                    <em className="date">Research project by Center for an Informed Public</em>
                  </p>
                  <p>Explore the depths of misinformation with fun and collaborative games. Players learn to identify misinformation through a series of challenges and stop the spread of misinformation as part of the story. </p>
                  <p>Technology: JavaScript(React.js, Node.js), MongoDB, AWS</p>
                </div>
              </div>

              <div className="portfolio-row">
                <div className="shadow row columns">
                  <a href="http://pawdy.herokuapp.com/">
                    <img alt="Pawdy" src="images/portfolio/pawdy.png"></img>
                  </a>
                </div>
                
                <div className="project-textbox">
                  <h3>Pawdy</h3>
                  <p className="info">
                    Lead Developer
                    <a href="https://ischool.uw.edu/capstone/projects/2022/pawdy-free-pet-sitting-uw-community"><em className="date">UW Information School 2022 Capstone Project</em></a>
                  </p>
                  
                  <p>Pawdy is a web platform created for student pet owners to find affordable pet sitting services and connect with other pet owners to form an online community. University of Washington class of 2022 information school Capstone Project.</p>
                  <p>Technology: JavaScript(Node.js, React.js), MongoDB, Heroku</p>
                </div>
              </div>

              <div className="portfolio-row">
                  <a href="images/portfolio/SauvOS.pdf">
                    <img alt="SauvOS" src="images/portfolio/5.png"></img>
                  </a>
                
                <div className="project-textbox">
                  <h3>SauvOS</h3>
                  <p className="info">
                    UI/UX Designer
                    <em className="date">Figma Prototype</em>
                  </p>
                  <p>An innovative mobile operating system prototype designed to promote productivity for young adults. Me and my team prototyped 10+ applications with over 100 wireframes in Figma.</p>
                  <p>Technology: Figma</p>

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

              {/* <div className="portfolio-row">
                  <a href="images/portfolio/esports-infographic.pdf">
                    <img alt="Esports Infographic" src="images/portfolio/4.png"></img>
                  </a>
                
                <div className="project-textbox">
                  <h3>Esports Infographic</h3>
                  <p className="info">
                    Graphic Design
                  </p>
                  <p>An infographic capturing the key information and data about the history, development, and influence of Esports. Made with Adobe Illustrator.</p>
                  {/* <p><a href="images/portfolio/esports-infographic.pdf">Download Full Version</a></p>
                </div>
              </div> */}

            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
