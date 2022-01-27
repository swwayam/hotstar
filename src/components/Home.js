import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Banner from "./Banner";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Container>
      <HomeBanner>
        <Slider {...settings}>
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
      </HomeBanner>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  color: white;
  padding-top: 70px;
  margin: 0 30px;
`;

const HomeBanner = styled.div``;
