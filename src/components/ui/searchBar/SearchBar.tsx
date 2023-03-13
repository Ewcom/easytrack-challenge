import React from "react";
import styled from "styled-components";
import CustomSelect from "../../../styles/CustomSelect";
import CustomTextInput from "../../../styles/CustomTextInput";
import CurrentTime from "./CurrentTime";
import { Search } from "tabler-icons-react";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <div className="container">
        <CustomTextInput icon={<Search />} placeholder="Search By tracking number" />
      </div>
      <div className="container">
        <div className="select">
          <label>City</label>
          <CustomSelect variant="default" defaultValue={"Barcelona"} data={["Barcelona"]} />
        </div>
        <div className="select">
          <label>Ap</label>
          <CustomSelect variant="default" defaultValue={"1"} data={["1"]} />
        </div>
        <CurrentTime />
      </div>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  height: 30px;
  padding: 1rem;
  width: 94%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .select {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9fb;
    padding-left: 8px;
    border-radius: 8px;

    label {
      font-size: 0.8rem;
      color: #a0a0a0;
      font-weight: bold;
    }
  }
`;

export default SearchBar;
