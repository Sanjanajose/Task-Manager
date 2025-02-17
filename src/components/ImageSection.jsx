import styled from "styled-components";
import techbot from "../assets/techbot.png"; 

const ImageSection = () => {
  return (
    <ImageContainer>
      <LaptopImage src={techbot} alt="Techbot" />
    </ImageContainer>
  );
};

export default ImageSection;

const ImageContainer = styled.div`
  position: relative;
  max-width: 500px;
`;

const LaptopImage = styled.img`
  width: 100%;
`;
