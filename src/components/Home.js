import React, { Component } from "react";
//import styled from "styled-components";
import Slider from "react-slick";
import Banner from "./Banner";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"

function NoDefaultArrows() {
  return <div style={{ display: "none" }} />;
}

export default class Home extends Component {
  NextAndPreviousArrows() {
    return (
    
      <div className="arrows">
        <div className="arrow">
          <button
            className="arrow-btn prev"
            onClick={() => this.slider.slickPrev()}
          >
            <BsChevronLeft />
          </button>
        </div>
        <div className="arrow">
          <button
          className="arrow-btn next"
          onClick={() => this.slider.slickNext()}
        >
          <BsChevronRight />
        </button>
        </div>
        
      </div>
    );
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1.001,
      autoplay: true,
      speed: 400,
      autoplaySpeed: 3000,
      cssEase: "linear",
      nextArrow: <NoDefaultArrows />,
      prevArrow: <NoDefaultArrows />,
    };
    return (
      <>
      <div className="container">
        <div className="homeBanner">
          {this.NextAndPreviousArrows()}
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div>
              <Banner
                url={
                  "https://raw.githubusercontent.com/swwayam/hotstar/main/public/images/7.webp"
                }
              />
            </div>
            <div>
              <Banner
                url={
                  "https://raw.githubusercontent.com/swwayam/hotstar/main/public/images/slider-badag.jpg"
                }
              />
            </div>
            <div>
              <Banner
                url={
                  "https://raw.githubusercontent.com/swwayam/hotstar/main/public/images/slider-badag.jpg"
                }
              />
            </div>
            <div>
              <Banner
                url={
                  "https://raw.githubusercontent.com/swwayam/hotstar/main/public/images/slider-badag.jpg"
                }
              />
            </div>
            <div>
              <Banner
                url={
                  "https://raw.githubusercontent.com/swwayam/hotstar/main/public/images/slider-badag.jpg"
                }
              />
            </div>
            <div>
              <Banner
                url={
                  "https://raw.githubusercontent.com/swwayam/hotstar/main/public/images/slider-badag.jpg"
                }
              />
            </div>
            <div>
              <Banner
                url={
                  "https://raw.githubusercontent.com/swwayam/hotstar/main/public/images/slider-badag.jpg"
                }
              />
            </div>
            <div>
              <Banner
                url={
                  "https://raw.githubusercontent.com/swwayam/hotstar/main/public/images/slider-badag.jpg"
                }
              />
            </div>
          </Slider>
          
          {/* <Slider {...settings}>
            <Banner
              url={
                "https://raw.githubusercontent.com/swwayam/hotstar/main/public/images/slider-badag.jpg"
              }
            />
            <Banner
              url={
                "https://raw.githubusercontent.com/swwayam/hotstar/main/public/images/slider-badag.jpg"
              }
            />
            <Banner
              url={
                "https://raw.githubusercontent.com/swwayam/hotstar/main/public/images/slider-badag.jpg"
              }
            />
          </Slider>*/}
        </div>
        
      </div>
     
      </>
      
    );
  }
}

// const Container = styled.div`
//   position: relative;
// `;

// const HomeBanner = styled.div`
//   position: absolute;
//   width: 100%;
//   top: 70px;
//   left: 0;
//   bottom: 0;
// `;

// const Arrows = styled.div`
//   display: flex;
//   justify-content: space-between;
// `
