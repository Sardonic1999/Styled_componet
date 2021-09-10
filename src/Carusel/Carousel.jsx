import React, { Component } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import img01 from "../assets/img01.jpg";
import img02 from "../assets/img02.jpg";
import img03 from "../assets/img03.jpg";
import img04 from "../assets/img04.jpg";

export default class Carousel extends Component {
  render() {
    return (
      <div style={{ height: "5px" }}>
        <h1>Carousel</h1>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={40}
          totalSlides={4}
        >
          <Slider>
            <Slide index={0}>
              <img
                style={{
                  width: "100%",
                  padding: "10px 0px 0px 0px",
                  height: "100%",
                }}
                src={img01}
                alt=""
              />
            </Slide>
            <Slide index={1}>
              <img
                style={{
                  width: "100%",
                  padding: "10px 0px 0px 0px",
                  height: "100%",
                }}
                src={img02}
                alt=""
              />
            </Slide>
            <Slide index={2}>
              <img
                style={{
                  width: "100%",
                  padding: "10px 0px 0px 0px",
                  height: "100%",
                }}
                src={img03}
                alt=""
              />
            </Slide>
            <Slide index={2}>
              <img
                style={{
                  width: "100%",
                  padding: "10px 0px 0px 0px",
                  height: "100%",
                }}
                src={img04}
                alt=""
              />
            </Slide>
          </Slider>
          <ButtonBack>{"<"}</ButtonBack>
          <ButtonNext>{">"}</ButtonNext>
        </CarouselProvider>
      </div>
    );
  }
}
