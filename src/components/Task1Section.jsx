import React from "react";
import styled from "styled-components";
import Icon1 from "../assets/icon1.png"; 
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/3.png";
import Icon4 from "../assets/4.png";
import Icon5 from "../assets/5.png";
import Icon6 from "../assets/6.png";


const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 60px 20px;
`;

const SmallText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #7B7B7B;
  text-align: left;
  margin-bottom: 5px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: #000;
  text-align: left;
  margin-bottom: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 80px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const TaskItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 16px 7px;
  background: none;
`;

const TaskIcon = styled.img`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
`;

const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 23.58px;
  color: #000;
  margin: 0 0 5px 0;
  width: auto;
  white-space: nowrap;
`;

const TaskDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #555;
  margin: 0;
  width: 465px;
  height: 48px;
`;

const Task1Section = () => {
  return (
    <Container>
      <SmallText>Lorem ipsum</SmallText>
      <Title>Lorem ipsum dolor sit amet consectetur.</Title>
      <Title>Vel et feugiat non facilisi. Tristique.</Title>
      
      <GridContainer>
        <TaskItem>
          <TaskIcon src={Icon1} alt="Task Icon" />
          <TaskContent>
            <TaskTitle>Lorem ipsum dolor sit</TaskTitle>
            <TaskDescription>Lorem ipsum dolor sit amet consectetur. Integer amet cras imperdiet nunc ultrices et. Sem vitae mi eu in. Fringilla.</TaskDescription>
          </TaskContent>
        </TaskItem>
        <TaskItem>
          <TaskIcon src={Icon2} alt="Task Icon" />
          <TaskContent>
            <TaskTitle>Lorem ipsum dolor</TaskTitle>
            <TaskDescription>Lorem ipsum dolor sit amet consectetur. Eu arcu dictumst dolor dolor volutpat.</TaskDescription>
          </TaskContent>
        </TaskItem>
        <TaskItem>
          <TaskIcon src={Icon3} alt="Task Icon" />
          <TaskContent>
            <TaskTitle>Lorem ipsum dolor sit amet.</TaskTitle>
            <TaskDescription>Lorem ipsum dolor sit amet consectetur. Sed pellentesque ante aliquet nunc ipsum magna molestie at in. Risus praesent volutpat elementum nec velit euismod. At dui facilisis ac.</TaskDescription>
          </TaskContent>
        </TaskItem>
        <TaskItem>
          <TaskIcon src={Icon4} alt="Task Icon" />
          <TaskContent>
            <TaskTitle>Lorem ipsum dolor sit</TaskTitle>
            <TaskDescription>Lorem ipsum dolor sit amet consectetur. Elementum velit vitae etiam amet viverra enim.</TaskDescription>
          </TaskContent>
        </TaskItem>
        <TaskItem>
          <TaskIcon src={Icon5} alt="Task Icon" />
          <TaskContent>
            <TaskTitle>Lorem ipsum</TaskTitle>
            <TaskDescription>Lorem ipsum dolor sit amet consectetur. Ut quis lorem mauris imperdiet aliquet amet tempus risus habitasse. Fringilla mus.</TaskDescription>
          </TaskContent>
        </TaskItem>
        <TaskItem>
          <TaskIcon src={Icon6} alt="Task Icon" />
          <TaskContent>
            <TaskTitle>Lorem ipsum dolor</TaskTitle>
            <TaskDescription>Lorem ipsum dolor sit amet consectetur. Dolor vel leo magna pulvinar nunc fringilla.</TaskDescription>
          </TaskContent>
        </TaskItem>
      </GridContainer>

      
    </Container>
  );
};

export default Task1Section;
