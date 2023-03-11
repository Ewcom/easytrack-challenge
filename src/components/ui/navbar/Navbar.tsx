import { Divider, Space } from "@mantine/core";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavbarButton from "./NavbarButton";
import { Notification, Truck, AlertCircle, Flag, ThreeDCubeSphere, Dashboard, Dots } from "tabler-icons-react";
import CustomButton from "../../../styles/CustomButton";
const Navbar = () => {
  return (
    <NavbarContainer>
      <section className="top">
        <Logo />
        <Space h={"md"} />
        <div className="buttonsContainer">
          <NavbarButton notifications={10} icon={<AlertCircle size={"25px"} />} text="Requests" />
          <NavbarButton notifications={1} icon={<Notification size={"25px"} />} text="Notifications" />
          <Space h={"xl"} />
          <Divider size={"sm"} />
          <Space h={"xl"} />
          <NavbarButton icon={<Dashboard size={"25px"} />} text="Dashboard" />
          <NavbarButton active icon={<Truck size={"25px"} />} text="Shipments" />
          <NavbarButton notifications={2} important icon={<ThreeDCubeSphere size={"25px"} />} text="Parcels" />
          <NavbarButton icon={<Flag size={"25px"} />} text="Branches" />
          <NavbarButton icon={<Notification size={"25px"} />} text="Clients" />
        </div>
        <Space h={"xl"} />
      </section>
      <section className="bottom">
        <CustomButton variant="default">Create Shipment</CustomButton>
        <Space h={"xl"} />
        <Divider size={"sm"} />

        <div className="user">
          <div className="info">
            <p>Emiliano Villalpando</p>
            <p className="gray">Admin</p>
          </div>
          <Dots color="gray" />
        </div>
      </section>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  max-width: 250px;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .buttonsContainer {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin-top: 1rem;
  }

  .bottom {
    display: flex;
    width: 100%;
    flex-direction: column;

    .user {
      display: flex;
      justify-content:center;
      align-items:center;
      padding: 2rem;
      gap:10px;

      .info {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        p {
          margin: 0;
        }
      }
    }
  }
`;

export default Navbar;
