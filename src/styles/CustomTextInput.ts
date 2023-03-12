import styled from "styled-components";
import { TextInput } from "@mantine/core";

const CustomTextInput = styled(TextInput)`
  min-width: 300px;
  .mantine-TextInput-input {
    letter-spacing: 0.07em;
    border: none;
    font-family: "Graphie";
    font-size:1rem;
  }

  .mantine-Input-icon {
    left:-5px;
  }
`;

export default CustomTextInput;
