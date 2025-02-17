import React from "react";
import styled from "styled-components";
import TaskIcon from "../assets/icons.png"; 
import BackgroundImage from "../assets/2.png"; 

// Main Section
const TaskSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 10%;
  background: #ffffff;
  width: 100%;
  max-width: 1440px;
  margin: auto;

  @media (max-width: 1024px) {
    padding: 40px 5%;
  }
`;

// Top Section (Checklist & Image)
const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Left Content
const TextContainer = styled.div`
  max-width: 50%;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const SmallText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #7b7b7b;
  margin: 0;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: #000;
  width: 554px;
  height: 104px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
    width: 100%;
    height: auto;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #000;
  width: 552px;
  height: 135px;
  text-align: left;
  margin: 0;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    height: auto;
  }
`;

// Checklist
const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 250px);
  gap: 20px 80px;
  align-items: start;
  margin-top: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  width: 250px;
  height: auto;
  line-height: 21px;
  text-align: left;
  margin: 0;
  white-space: normal;
  word-break: break-word;
`;

const TaskIconWrapper = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  flex-shrink: 0;
  align-self: flex-start;
`;

const ImageContainer = styled.div`
  width: 554px;
  height: 510px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TaskSection = () => {
  return (
    <TaskSectionContainer>
      <TopSection>
        <TextContainer>
          <SmallText>Lorem</SmallText>
          <Title>Lorem ipsum dolor sit amet consectetur. Sed sapien.</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur. Tortor sed eget nisl arcu
            phasellus. Nisi lorem sed scelerisque scelerisque diam nibh. Sed
            commodo nunc molestie ut consectetur a. Nunc placerat laoreet eros
            turpis ac a ipsum morbi quisque.
          </Subtitle>
          <TaskList>
            <TaskItem>
              <TaskIconWrapper src={TaskIcon} alt="Checkmark" />
              Lorem ipsum dolor sit amet consectetur.
            </TaskItem>
            <TaskItem>
              <TaskIconWrapper src={TaskIcon} alt="Checkmark" />
              Lorem ipsum dolor sit amet consectetur. A enim convallis.
            </TaskItem>
            <TaskItem>
              <TaskIconWrapper src={TaskIcon} alt="Checkmark" />
              Lorem ipsum dolor sit amet co.
            </TaskItem>
            <TaskItem>
              <TaskIconWrapper src={TaskIcon} alt="Checkmark" />
              Lorem ipsum dolor sit amet consectetur. Amet dictum.
            </TaskItem>
            <TaskItem>
              <TaskIconWrapper src={TaskIcon} alt="Checkmark" />
              Lorem ipsum dolor sit amet.
            </TaskItem>
            <TaskItem>
              <TaskIconWrapper src={TaskIcon} alt="Checkmark" />
              Lorem ipsum dolor sit amet.
            </TaskItem>
            <TaskItem>
              <TaskIconWrapper src={TaskIcon} alt="Checkmark" />
              Lorem ipsum dolor sit amet consectetu.
            </TaskItem>
            <TaskItem>
              <TaskIconWrapper src={TaskIcon} alt="Checkmark" />
              Lorem ipsum dolor Nisi ultricies.
            </TaskItem>
            <TaskItem>
              <TaskIconWrapper src={TaskIcon} alt="Checkmark" />
              Lorem ipsum dolor sit amet consectetur.
            </TaskItem>
            <TaskItem>
              <TaskIconWrapper src={TaskIcon} alt="Checkmark" />
              Lorem ipsum dolor sit amet.
            </TaskItem>
          </TaskList>
        </TextContainer>
        <ImageContainer>
          <Image src={BackgroundImage} alt="Task Section" />
        </ImageContainer>
      </TopSection>
    </TaskSectionContainer>
  );
};

export default TaskSection;
