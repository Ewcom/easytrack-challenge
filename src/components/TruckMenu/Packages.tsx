import { Checkbox, Divider } from "@mantine/core";
import React from "react";
import styled from "styled-components";
import { packageInfoArray } from "../../dummyData";
import { IPackageInfo } from "../../interfaces/index";

const Packages = () => {
  return (
    <PackagesContainer>
      <div className="title">
        <h2>Available packages</h2>

        <span>
          Selected: <span>0</span>
        </span>
        <span>
          Weight, kg: <span>0</span>
        </span>
      </div>
      <div className="header">
        <ul className="gray">
          <li>Parcel Number</li>
          <li>Volume weight</li>
          <li>Admission date</li>
        </ul>
      </div>
      <div className="packagesContainer">
        <ul>
          {packageInfoArray.map((packageInfo: IPackageInfo) => (
            <>
              <div className="package">
                <li>
                  <Checkbox color={"grape"} label={packageInfo.parcelNumber} />
                </li>
                <li>{packageInfo.packageWeight}</li>
                <li>{packageInfo.admisionDate.toLocaleDateString()}</li>
              </div>
                <Divider />
            </>
          ))}
        </ul>
      </div>
    </PackagesContainer>
  );
};

const PackagesContainer = styled.div`
  .header {
    background-color: #f9f9fb;
    padding: 0.1rem 0;
    border-radius:1rem;

    ul {
      display: flex;
      gap: 10px;
      list-style: none;
      gap: 1rem;
      li {
        flex: 1;
      }
    }
  }

  .packagesContainer {
    display: flex;
    flex-direction: column;
    text-align: center;
    ul {
      gap: 1rem;
      list-style-type: none;
      display: flex;
      flex-direction: column;

      li {
        flex: 1;
      }
    }
  }

  .package {
    display: flex;
  }
`;

export default Packages;
