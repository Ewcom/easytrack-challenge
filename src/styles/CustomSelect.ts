import styled from "styled-components";
import { Select } from "@mantine/core";

interface ICustomSelect {
  variant: "default" | "white";
}

const CustomSelect = styled(Select)<ICustomSelect>`
  .mantine-Select-wrapper {
    background-color: #f9f9fb;
  }

  input {
    background-color: ${(props) => (props.variant === "default" ? "#f9f9fb" : "white")};
    border: none;
    position: relative;
    font-weight: bold;
    font-family: "Graphie";
    color: ${({ theme }) => theme.secondary};
  }

  .mantine-Input-rightSection {
  }
`;

export default CustomSelect;
