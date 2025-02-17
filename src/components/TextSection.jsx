import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const TextSection = () => {
  return (
    <TextContainer>
      <Title>Lorem ipsum dolor sit amet consectetur. Eros libero.</Title>
      <Subtitle>Lorem ipsum dolor sit amet consectetur. Odio.</Subtitle>
      <List>
        <ListItem>
          <FaCheckCircle color="red" />
          <span>Lorem ipsum dolor sit amet</span>
        </ListItem>
        <ListItem>
          <FaCheckCircle color="red" />
          <span>Lorem ipsum dolor sit amet</span>
        </ListItem>
        <ListItem>
          <FaCheckCircle color="red" />
          <span>Lorem ipsum dolor sit amet</span>
        </ListItem>
      </List>
      <CheckButton>Check Tasklist</CheckButton>
    </TextContainer>
  );
};

export default TextSection;

const TextContainer = styled.div`
  padding: 30px;
  max-width: 600px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: red;
`;

const List = styled.ul`
  margin: 20px 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  margin-bottom: 10px;
`;

const CheckButton = styled.button`
  background: red;
  color: white;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
