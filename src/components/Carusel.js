import React from "react";
import { Carousel } from "antd";
import Cards from "./Cards";
const contentStyle = {
  margin: 0,
  height: "560px",
  color: "#fff",
  lineHeight: "560px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "#364d79",
};
const CaruselWether = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          <Cards />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Cards />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Cards />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Cards />
        </h3>
      </div>
    </Carousel>
  );
};
export default CaruselWether;
