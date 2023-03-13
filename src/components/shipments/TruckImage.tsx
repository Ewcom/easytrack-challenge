import React, { FC } from "react";
import styled from "styled-components";
import truckImage from "../../assets/truck.png";

interface props {
  percentage: number;
}

interface ITruckImageContainer {}

const TruckImage: FC<props> = ({ percentage }) => {
  const greenLines = "repeating-linear-gradient(45deg, #58cc82, #58cc82 10px, #47c072 10px, #47c072 20px)";
  const redLines = "repeating-linear-gradient(45deg, #de5969, #de5969 10px, #d94f60 10px, #d94f60 20px)";
  const YellowLines = "repeating-linear-gradient(45deg, #eea73e, #eea73e 10px, #ef9f29 10px, #ef9f29 20px)";

  function getPercentageColor(percentage: number) {
    if (percentage > 80) {
      return redLines;
    } else if (percentage > 50) {
      return YellowLines;
    } else {
      return greenLines;
    }
  }

  function getCargoWidth(percentage: number) {
    return `${percentage - 4}%`;
  }

  return (
    <TruckImageContainer>
      <img src={truckImage} alt="" />
      <div
        style={{ background: getPercentageColor(percentage), width: getCargoWidth(percentage) }}
        className="porcentaje"
      ></div>
    </TruckImageContainer>
  );
};

const TruckImageContainer = styled.div<ITruckImageContainer>`
  max-width: 300px;
  position: relative;

  .porcentaje {
    z-index: 1;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 106%;
    height: 145px;
    transition: all 0.5s ease;
  }

  img {
    position: relative;
    z-index: 100;
    opacity: 0.6;
    max-width: 450px;
  }
`;

export default TruckImage;
