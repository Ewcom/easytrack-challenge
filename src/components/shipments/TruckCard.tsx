import { FC } from "react";
import styled, { useTheme } from "styled-components";
import { ITruckInfo } from "../../interfaces";
import TruckImage from "./TruckImage";

interface props extends React.ComponentPropsWithoutRef<"div"> {
  truckData: ITruckInfo;
  simple?: boolean;
}

const TruckCard: FC<props> = ({ truckData, simple, ...props }) => {
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

  const loadPercentage = Math.round((truckData.currentKG / truckData.maxKG) * 100);

  return (
    <ShipmentContainer {...props}>
      <div className="title">
        {!simple ? (
          <div className="container">
            <h2 className="destination">{truckData.trip}</h2>
            <span className="date gray">{truckData.deliveryDate.toLocaleString()}</span>
          </div>
        ) : (
          <h2 className="destination">Truck Load</h2>
        )}
        <span style={{ color: getPercentageColor(loadPercentage) }} className="percentage">
          {loadPercentage}%
        </span>
      </div>

      <div className="container-bottom">
        <div className="info">
          <div className="data">
            <p className="gray">Avaliable Kg</p>
            <p style={{ fontSize: "1.5rem" }} className="item">
              {truckData.currentKG}/
              <span style={{ fontSize: "1.5rem" }} className="gray">
                {truckData.maxKG}
              </span>
            </p>
          </div>
          {!simple ? (
            <>
              <div className="data">
                <p className="gray">Shipment Number</p>
                <p className="item">V{truckData.shipmentNumber}</p>
              </div>
              <div className="data">
                <p className="gray">Truck</p>
                <p className="item">{truckData.truckName}</p>
              </div>
            </>
          ) : null}
        </div>
        <TruckImage percentage={loadPercentage} />
      </div>
    </ShipmentContainer>
  );
};

const ShipmentContainer = styled.div`
  cursor: pointer;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  min-width: 600px;
  transition: all 0.3s ease;

  /* &:hover {
    transform: scale(1.01);
  } */

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

export default TruckCard;
