import styled from "styled-components";

const Background = () => {
  return <GradientBackground />;
};

export default Background;

const GradientBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #ffdede, #ffffff);
  z-index: -1;
`;
