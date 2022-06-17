import React, { Component } from "react";

import Slider from "react-slick";
import BannerSection from "./BannerSection";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"



function NoDefaultArrows() {
  return <div style={{ display: "none" }} />;
}

export default class Section extends Component {
  NextAndPreviousArrows() {
    return (
      <div className="arrows-section">
        <div className="arrow-section">
          <button
            className="arrow-btn-section prev"
            onClick={() => this.slider.slickPrev()}
          >
            <BsChevronLeft />
          </button>
        </div>
        <div className="arrow-section">
          <button
          className="arrow-btn-section next"
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
      slidesToShow: 8,
      slidesToScroll: 5,
      nextArrow: <NoDefaultArrows />,
      prevArrow: <NoDefaultArrows />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container-section">
        
        <div className="homeBanner-section">
        <h2 className="section-title">Latest and trending</h2>
          {this.NextAndPreviousArrows()}
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div>
              <BannerSection
                url={
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1"
                }
              />
            </div>
            <div>
              <BannerSection
                url={
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1"
                }
              />
            </div>
            <div>
              <BannerSection
                url={
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1"
                }
              />
            </div>
            <div>
              <BannerSection
                url={
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1"
                }
              />
            </div>
            <div>
              <BannerSection
                url={
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1"
                }
              />
            </div>
            <div>
              <BannerSection
                url={
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1"
                }
              />
            </div>
            <div>
              <BannerSection
                url={
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1"
                }
              />
            </div>
            <div>
              <BannerSection
                url={
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1"
                }
              />
            </div>
            <div>
              <BannerSection
                url={
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1"
                }
              />
            </div>
            <div>
              <BannerSection
                url={
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1"
                }
              />
            </div>
            <div>
              <BannerSection
                url={
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1"
                }
              />
            </div>
          </Slider>
          {/* <Slider {...settings}>
            <BannerSection
              url={
                "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1"
              }
            />
            <Banner
              url={
                "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1"
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
    );
  }
}
