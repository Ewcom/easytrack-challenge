import React, { FC, useState } from "react";
import styled from "styled-components";
import { packageInfoArray, truckInfoArray } from "../../dummyData";
import { IPackageInfo, ITruckInfo } from "../../interfaces";
import TruckCard from "../shipments/TruckCard";
import Packages from "./Packages";
import Tiers from "./Tiers";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

interface props {
  truck: ITruckInfo;
}

const TruckMenu: FC<props> = ({ truck }) => {
  const [truckData, setTruckData] = useState<ITruckInfo>(truck);

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { draggableId } = result;

        const pckg = packageInfoArray.find((pckg: IPackageInfo) => pckg.parcelNumber === draggableId);

        if (!pckg || truckData.currentKG + pckg.packageWeight > truckData.maxKG) {
          return;
        }

        setTruckData({ ...truckData, currentKG: truckData.currentKG + pckg.packageWeight });
      }}
    >
      <TruckMenuContainer>
        <div className="info">
          <span>Shipments /</span> <span className="number">S9889898</span>
        </div>
        <div className="title">
          <h2>Barcelona - Seville, S934345</h2>
          <div className="span gray">{new Date().toLocaleDateString()}</div>
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
                  <Packages {...droppableProvided.droppableProps} innerRef={droppableProvided.innerRef} />
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
  width: 85%;
  padding: 1rem 2rem;

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
    width: 90%;
    gap: 1rem;
    display: flex;
    background-color: white;
    padding: 1rem;
    * > {
      display: flex;
      flex: 1;
    }

    .packages {
      width: 100%;
    }
  }
`;

export default TruckMenu;
