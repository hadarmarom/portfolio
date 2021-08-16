import Minesweeper from "../imgs/minesweeper.gif"
import Memegenerator from "../imgs/memegenerator.gif"
import taskMan from "../imgs/taskMan.gif"
// import Appsus from "../imgs/appsus.gif"
import Jukify from "../imgs/jukify.gif"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const Projects = () => {

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  };
  return (
    <div id="projects" className="projects-container container">
      <div className="my-carusel">
        <Slider {...settings}>
          <div className="proj">
            <img src={taskMan} alt="First slide" />
            <div className="my-card-body">
              <h5 className="">TaskMan - July 2021</h5>
              <p className="lowercase">An advanced Project management tool, inspired by Trello</p>
              <p className="">⦿ React ⦿ Redux ⦿ Sass ⦿ Web Sockets ⦿ Node.js ⦿ MySQL ⦿</p>
              <a href="https://taskman-app.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">Check it out!</a>
            </div>
          </div>
          <div className="proj">
            <img src={Jukify} alt="Second slide" />
            <div className="my-card-body">
              <h5 className="">Jukify - April, 2021</h5>
              <p className="lowercase">Jukify is a live music sharing website, where you can listen to music stations together, create art music together, and throw a party in different places at the same time!</p>
              <p className="">⦿ Vue ⦿ Vuex ⦿ Sass ⦿ Web Sockets ⦿ Node.js ⦿ MongoDB ⦿</p>
              <a href="https://jukify-music-app.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">Check it out!</a>
            </div>
          </div>
          {/* <div className="proj">
            <img src={Memegenerator} alt="Third slide" />
            <div className="my-card-body">
              <h5 className="">Meme Generator - Feb 15, 2021</h5>
              <p className="lowercase">Create Memes to add humor to your day!</p>
              <p className="">⦿ JavaScript Vanila ⦿ Canvas ⦿</p>
              <a href="https://skopis.github.io/meme-generator/" target="_blank" rel="noreferrer" className="btn btn-primary">Check it out!</a>
            </div>
          </div> */}
          {/* <div className="proj">
            <img src={Minesweeper} alt="Fourth slide" />
            <div className="my-card-body">
              <h5 className="">Minesweeper - Jan 21, 2021</h5>
              <p className="lowercase">Inspired by the game we all know and love</p>
              <p className="">⦿ JavaScript Vanila ⦿</p>
              <a href="https://skopis.github.io/Minesweeper/" target="_blank" rel="noreferrer" className="btn btn-primary">Check it out!</a>
            </div>
          </div> */}
          {/* <div className="proj">
            <img src={drSuss} alt="Fourth slide" />
            <div className="my-card-body">
              <h5 className="">Minesweeper - Jan 21, 2021</h5>
              <p className="lowercase">Send Emails, create Notes and search for Books! Inspired by Google Apps</p> 
              <p className="">⦿ JavaScript Vanila ⦿</p>
              <a href="https://skopis.github.io/Minesweeper/" target="_blank" rel="noreferrer" className="btn btn-primary">Check it out!</a>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
}

export default Projects