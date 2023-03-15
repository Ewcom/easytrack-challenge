import React, { FC, useState } from "react";
import styled from "styled-components";
import { packageInfoArray, truckInfoArray } from "../../dummyData";
import { IPackageInfo, ITruckInfo } from "../../interfaces";
import TruckCard from "../shipments/TruckCard";
import Packages from "./Packages";
import Tiers from "./Tiers";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { Space } from "@mantine/core";
import showCustomToast from "../../helpers/notification";

interface props {
  truck: ITruckInfo;
}

const TruckMenu: FC<props> = ({ truck }) => {
  const [truckData, setTruckData] = useState<ITruckInfo>(truck);
  const [packages, setPackages] = useState<IPackageInfo[]>([]);

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { draggableId } = result;
        const pckg = packageInfoArray.find((pckg: IPackageInfo) => pckg.parcelNumber === draggableId);

        if (!pckg) {
          return;
        }

        //check if package is already on truck
        if (packages.find((pckg) => pckg.parcelNumber === draggableId)) {
          showCustomToast("error", "Error adding the package", "Package is already on truck", 2000);
          return;
        }

        if (truckData.currentKG + pckg.packageWeight > truckData.maxKG) {
          showCustomToast("error", "Error adding the package", "You can't add more weight", 2000);
          return;
        }

        setPackages([...packages, pckg]);
        showCustomToast("info", "Package added to truck", undefined, 2000);

        setTruckData({ ...truckData, currentKG: truckData.currentKG + pckg.packageWeight });
      }}
    >
      <TruckMenuContainer>
        <div className="info">
          <span>Shipments /</span> <span className="number">{truck.shipmentNumber} </span>
        </div>
        <div className="title">
          <h2>
            {truck.trip}, {truck.shipmentNumber}
          </h2>
          <Space w="sm" />
          <div className="span gray"> {new Date().toLocaleDateString()} </div>
        </div>

        <div className="mainContainer">
          <div className="truckInfo">
            <TruckCard truckData={truckData} simple />
            <Tiers />
          </div>
          <div className="packages">
            <Droppable droppableId="packages">
              {(droppableProvided) => (
                <>
                  <Packages
                    packagesOnTruck={packages}
                    {...droppableProvided.droppableProps}
                    innerRef={droppableProvided.innerRef}
                  />
                  {droppableProvided.placeholder}{" "}
                </>
              )}
            </Droppable>
          </div>
        </div>
      </TruckMenuContainer>
    </DragDropContext>
  );
};

const TruckMenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 1rem 2rem;
  padding-left:3rem;
  box-sizing:border-box;

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
  }

  .number {
    color: ${({ theme }) => theme.main};
  }

  .mainContainer {
    border-radius: 8px;
    width: 90%;
    gap: 1rem;
    display: flex;
    background-color: white;
    padding: 1rem;
   &>* {
      display: flex;
      flex: 1;
      flex-direction:column;
    }

    .packages {
      width: 100%;
    }
  }
`;

export default TruckMenu;
