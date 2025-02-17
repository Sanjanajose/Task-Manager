import React from "react";
import styled from "styled-components";
import LocationIcon from "../assets/location.png";

const Footer = styled.footer`
  background: #000;
  color: #fff;
  padding: 30px 160px; 
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px; 
`;

const FooterTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  color: #ffffff;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 446px;
  text-align: left;
`;

const FooterIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const FooterText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #979797;
  margin: 0;
`;

const FooterSection = () => (
  <Footer>
    <FooterTitle>Task list</FooterTitle>
    <FooterContent>
      <FooterIcon src={LocationIcon} alt="Location Icon" />
      <FooterText>Lorem ipsum dolor sit amet consectetur. Morbi pharetra quis hendrerit amet et aenean. Consectetur.</FooterText>
    </FooterContent>
  </Footer>
);

export default FooterSection;
