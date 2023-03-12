import styled from "styled-components";

interface ICustomButtonProps {
  variant: "default" | "white";
}

const CustomButton = styled.button<ICustomButtonProps>`
  cursor: pointer;
  background-color: ${(props) => (props.variant === "default" ? props.theme.main : props.theme.purpleGray)};
  border: none;
  color: ${(props) => (props.variant === "default" ? "white" : props.theme.main)};
  font-family: "Graphie";
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  font-size: 0.7rem;
  letter-spacing: 0.05rem;
  width: 90%;
  min-width: 120px;
  margin: 0px auto;
`;

export default CustomButton;
