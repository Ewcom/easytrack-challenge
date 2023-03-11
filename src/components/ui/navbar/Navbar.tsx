import { Divider, Space } from "@mantine/core";
import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavbarButton from "./NavbarButton";
import { Notification, Truck, AlertCircle, Flag, ThreeDCubeSphere, Dashboard, Dots } from "tabler-icons-react";
import CustomButton from "../../../styles/CustomButton";
const Navbar = () => {
  const [active, setActive] = useState(4);

  function handleActive(id: number) {
    setActive(id);
  }

  return (
    <NavbarContainer>
      <section className="top">
        <Logo />
        <Space h={"md"} />
        <div className="buttonsContainer">
          <NavbarButton
            active={active === 1}
            onClick={() => {
              handleActive(1);
            }}
            notifications={10}
            icon={<AlertCircle size={"25px"} />}
            text="Requests"
          />
          <NavbarButton
            active={active === 2}
            onClick={() => {
              handleActive(2);
            }}
            notifications={1}
            icon={<Notification size={"25px"} />}
            text="Notifications"
          />
          <Space h={"xl"} />
          <Divider size={"sm"} />
          <Space h={"xl"} />
          <NavbarButton
            active={active === 3}
            onClick={() => {
              handleActive(3);
            }}
            icon={<Dashboard size={"25px"} />}
            text="Dashboard"
          />
          <NavbarButton
            active={active === 4}
            onClick={() => {
              handleActive(4);
            }}
            icon={<Truck size={"25px"} />}
            text="Shipments"
          />
          <NavbarButton
            active={active === 5}
            onClick={() => {
              handleActive(5);
            }}
            notifications={2}
            important
            icon={<ThreeDCubeSphere size={"25px"} />}
            text="Parcels"
          />
          <NavbarButton
            active={active === 6}
            onClick={() => {
              handleActive(6);
            }}
            icon={<Flag size={"25px"} />}
            text="Branches"
          />
          <NavbarButton
            active={active === 7}
            onClick={() => {
              handleActive(7);
            }}
            icon={<Notification size={"25px"} />}
            text="Clients"
          />
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
      justify-content: center;
      align-items: center;
      padding: 2rem;
      gap: 10px;
      cursor: pointer;

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
