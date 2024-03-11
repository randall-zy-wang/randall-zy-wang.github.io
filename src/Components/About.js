import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    // const street = this.props.data.address.street;
    // const city = this.props.data.address.city;
    // const state = this.props.data.address.state;
    // const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
    // const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Zhengyang Wang Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h1>Randall Wang</h1>
              <h2>Student at University of Southern California</h2>
              <h2>Master of Science in Computer Science - Game Development</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h1>Contact Me</h1>
                  <p className="address">
                    {/* <span>{name}</span> */}
                    {/* <br /> */}
                    {/* <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span> */}
                    
                    <span>{phone}
                    <br />
                    <a href="mailto:randallzywang@gmail.com">{email}</a>
                    <br />
                    <ul className="social-links">{networks}</ul>
                    </span>
                  </p>
                </div>
                {/* <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
