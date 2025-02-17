import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Task List</Title>
      <TaskListButton>Tasklist Pop Up</TaskListButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
`;

const TaskListButton = styled.button`
  background: red;
  color: white;
  padding: 12px 24px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
`;
