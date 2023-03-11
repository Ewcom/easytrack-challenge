import React, { FC } from "react";
import styled from "styled-components";

interface props extends INavbarButtonProps {
  icon: React.ReactNode;
  text: string;
  notifications?: number;
}

interface INavbarButtonProps {
  active?: boolean;
  important?: boolean;
}
const NavbarButton: FC<props> = ({ icon, text, active, notifications, important }) => {
  return (
    <NavbarButtonContainer active={active!} important={important}>
      <div className="container">
        <div className="icon">{icon}</div>
        <span className="text">{text}</span>
      </div>

      {notifications && notifications > 0 && <span className="notification">{notifications}</span>}
    </NavbarButtonContainer>
  );
};

const NavbarButtonContainer = styled.button<INavbarButtonProps>`
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.active ? "#f9f9fb" : "white")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Graphie";
  padding: 0.5rem;
  padding-left: 1.5rem;
  font-size: 1rem;
  color: ${(props) => (props.active ? props.theme.secondary : props.theme.gray)};

  .container {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .icon {
    color: ${(props) => (props.active ? props.theme.main : props.theme.gray)};
    margin-top: 2px;
  }

  .notification {
    margin-right: 1rem;
    background-color: ${(props) => (props.important ? props.theme.warning : "#f6f5fa")};
    color: ${(props) => (props.important ? "white" : props.theme.gray)};
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
    border-radius: 5px;
  }
`;

export default NavbarButton;
