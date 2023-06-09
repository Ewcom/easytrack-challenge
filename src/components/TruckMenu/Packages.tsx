import { Checkbox, Divider } from "@mantine/core";
import React, { FC, useMemo } from "react";
import { Draggable } from "@hello-pangea/dnd";
import styled from "styled-components";
import { packageInfoArray } from "../../dummyData";
import { IPackageInfo } from "../../interfaces/index";

interface props extends React.ComponentPropsWithRef<"div"> {
  innerRef?: React.Ref<HTMLDivElement>;
  packagesOnTruck: IPackageInfo[];
}
const Packages: FC<props> = ({ packagesOnTruck, innerRef, ...rest }) => {
  const packagesTotalWeight = useMemo(
    () => packagesOnTruck.reduce((acc, pckg) => acc + pckg.packageWeight, 0),
    [packagesOnTruck]
  );
  return (
    <PackagesContainer {...rest} ref={innerRef}>
      <div className="title">
        <h2>Available packages</h2>

        <span>
          Selected: <span>{packagesOnTruck.length}</span>
        </span>
        <span>
          Weight, kg: <span>{packagesTotalWeight}</span>
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
          {packageInfoArray.map((packageInfo: IPackageInfo, i) => (
            <Draggable key={packageInfo.parcelNumber} draggableId={packageInfo.parcelNumber} index={i}>
              {(draggableProvider) => (
                <div
                  {...draggableProvider.draggableProps}
                  {...draggableProvider.dragHandleProps}
                  ref={draggableProvider.innerRef}
                  key={packageInfo.parcelNumber}
                  id={packageInfo.parcelNumber}
                  className="package"
                >
                  <li>
                    <Checkbox
                      checked={
                        packagesOnTruck.find((pckg) => pckg.parcelNumber === packageInfo.parcelNumber) ? true : false
                      }
                      color={"grape"}
                      label={packageInfo.parcelNumber}
                    />
                  </li>
                  <li>{packageInfo.packageWeight}</li>
                  <li>{packageInfo.admisionDate.toLocaleDateString()}</li>
                </div>
              )}
            </Draggable>
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
    border-radius: 1rem;

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
    cursor: -webkit-grab;
    display: flex;

    .active {
      background-color: ${({ theme }) => theme.main};
      border-color: ${({ theme }) => theme.main};
    }
  }
`;

export default Packages;
