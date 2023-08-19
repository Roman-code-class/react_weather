import React from "react";
import { Card } from "antd";
import S from "../png_svg/Солнце.png";
import "../degrees.scss";

// const { Meta } = Card;
const CardsImg = () => (
  <Card
    hoverable
    style={{
      padding: 20,
      border: "none",
      background: "#87CEFA",
      width: 240,
      height: 350,
    }}
    cover={<img alt="Солнце" src={S} />}
  >
    <h3 className="degrees">+23</h3>
    {/* <Meta title="Kaluga" description="19.08.23" /> */}
    <p className="text">Kaluga</p>
    <button className="btn">Сегодня</button>
  </Card>
);
export default CardsImg;
