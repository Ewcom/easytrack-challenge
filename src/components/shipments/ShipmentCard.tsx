import React, { FC } from "react";
import styled, { useTheme } from "styled-components";
import { ITruckInfo } from "../../interfaces";
import TruckImage from "./TruckImage";

interface props {
  truckData: ITruckInfo;
}

const ShipmentCard: FC<props> = ({ truckData }) => {
  const theme = useTheme();

  function getPercentageColor(percentage: number) {
    if (percentage > 80) {
      return theme.warning;
    } else if (percentage > 50) {
      return theme.danger;
    } else {
      return theme.success;
    }
  }

  return (
    <ShipmentContainer>
      <div className="title">
        <div className="container">
          <h2 className="destination">{truckData.trip}</h2>
          <span className="date gray">{new Date().toLocaleString("ES-MX")}</span>
        </div>
        <span style={{ color: getPercentageColor(truckData.percentage) }} className="percentage">
          {truckData.percentage}%
        </span>
      </div>

      <div className="container-bottom">
        <div className="info">
          <div className="data">
            <p className="gray">Avaliable Kg</p>
            <p className="item">{`${truckData.currentKG}/${truckData.maxKG}`}</p>
          </div>
          <div className="data">
            {" "}
            <p className="gray">Shipment Number</p>
            <p className="item">V{truckData.shipmentNumber}</p>
          </div>
          <div className="data">
            <p className="gray">Truck</p>
            <p className="item">{truckData.truckName}</p>
          </div>
        </div>
        <TruckImage percentage={truckData.percentage} />
      </div>
    </ShipmentContainer>
  );
};

const ShipmentContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  min-width: 600px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .percentage {
      font-size: 1.5rem;
      color: red;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .container-bottom {
    display: flex;
    gap: 2rem;
  }

  .data {
    .item {
      margin-top: -10px;
    }
  }
`;

export default ShipmentCard;
