import React from "react";
import styled from "styled-components";
import CustomButton from "../../styles/CustomButton";
import { Space } from "@mantine/core";

const Tiers = () => {
  return (
    <TiersContainer>
      <div className="tier">
        <h3>Upper Tier</h3>
        <div className="boxContainer">
          <div className="box available"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box available"></div>
        </div>
      </div>
      <div className="tier">
        {" "}
        <h3>Upper Tier</h3>
        <div className="boxContainer">
          <div className="box"></div>
          <div className="box available"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
      <div className="tier">
        {" "}
        <h3>Upper Tier</h3>
        <div className="boxContainer">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box available"></div>
          <div className="box"></div>
        </div>
      </div>
      <Space h={"xl"} />
      <div className="buttons">
        <CustomButton variant="white">View parcels List</CustomButton>
        <CustomButton variant="white">Finish Loading</CustomButton>
      </div>
    </TiersContainer>
  );
};

const TiersContainer = styled.div`
  h3 {
    color: ${({ theme }) => theme.secondary};
    margin-bottom: -10px;
  }
  .tier {
    display: flex;
    gap: 1rem;
    flex-direction: column;

    .boxContainer {
      display: flex;
      gap: 1rem;
      width: 100%;

      .available {
        background-color: #beeacd !important;
      }
      .box {
        border-radius: 1rem;
        width: 25%;
        height: 100px;
        background-color: #f9f9fb;
      }
    }
  }

  .buttons {
    display: flex;
    gap: 1rem;
  }
`;

export default Tiers;
