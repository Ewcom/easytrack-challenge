import { Space } from "@mantine/core";
import React from "react";
import styled from "styled-components";
import CustomButton from "../../../styles/CustomButton";
import CustomSelect from "../../../styles/CustomSelect";

const SortBar = () => {
  return (
    <SortBarContainer>
      <div className="container">
        <h2>Shipments</h2>
        <Space w={"md"} />
        <CustomButton style={{ padding: "0.8rem" }} variant="white">
          Arrival (20)
        </CustomButton>
        <Space w={"md"} />
        <CustomButton style={{ padding: "0.8rem" }} variant="default">
          Avaliable (5)
        </CustomButton>
        <Space w={"md"} />
        <CustomButton style={{ padding: "0.8rem" }} variant="white">
          Arrival (20)
        </CustomButton>
        <Space w={"xl"} />
      </div>
      <div className="container">
        <div className="select">
          <label>Sort by:</label>
          <CustomSelect variant="white" defaultValue={"Time"} data={["Time"]} />
        </div>
        <Space w={"xl"} />

        <div className="select">
          <label>Departure date:</label>

          <CustomSelect variant="white" defaultValue={"15 Jun"} data={["15 Jun"]} />
        </div>
      </div>
    </SortBarContainer>
  );
};

const SortBarContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  justify-content: space-between;
  height: 80px;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.secondary};
  }

  .select {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding-left: 8px;
    border-radius: 8px;

    label {
      font-size: 0.8rem;
      color: #a0a0a0;
      font-weight: bold;
    }
  }
`;

export default SortBar;
