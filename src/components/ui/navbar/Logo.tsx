import { RingProgress } from "@mantine/core";
import styled, { useTheme } from "styled-components";

const Logo = () => {
  const theme = useTheme();

  return (
    <LogoContainer>
      <div className="ring">
        <RingProgress
          size={70}
          sections={[
            { value: 30, color: theme.secondary },
            { value: 50, color: theme.success },
            { value: 20, color: theme.danger },
          ]}
        />
      </div>
      <div className="text">
        <h1 className="title">EasyTrack</h1>
        <p className="subTitle">workSpace</p>
      </div>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  .ring {
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    .title {
      font-size: 1.3rem;
      font-weight: 700;
      color: ${({ theme }) => theme.main};
    }
    .subTitle {
      margin-top: -15px;
      font-size: 0.8rem;
      font-weight: 400;
      color: ${({ theme }) => theme.gray};
    }
  }
`;

export default Logo;
