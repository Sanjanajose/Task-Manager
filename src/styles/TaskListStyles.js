import styled from "styled-components";

// Main Container
import BackgroundImage from "../assets/Rectangle 422.png";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${BackgroundImage}) no-repeat center center;
  background-size: cover;
  overflow: hidden;
  padding-top: 0px; /* Remove extra space */
`;

// Background Blur Effect
export const BackgroundBlur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(221, 51, 51, 0.04) 20%, transparent 80%);
  filter: blur(55.7px);
  z-index: -1;
`;

// Header
export const Header = styled.div`
  width: 100vw;
  height: 70px; /* Keep header compact */
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute; /* Fix header without extra space */
  top: 0;
  left: 0;
  z-index: 10;
  padding: 0 20px;
`;

// Task List Title
export const TaskListTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: white;
  margin-left: 157px;
  margin-top: 0px; /* No extra space */
`;

// Popup Button
export const PopupButton = styled.button`
  background: #DD3333;
  color: white;
  border: none;
  padding: 14px 22px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 33px;
  cursor: pointer;
  margin-right: 105px;
  margin-top: 0px;
`;

// Main Content
export const Content = styled.div`
  width: 1440px; /* Matches Figma width */
  height: 810px; /* Matches Figma height */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 20px 40px 0px 156px; /* Reduce space */
`;

// Text Section
export const TextSection = styled.div`
  max-width: 553px;
`;

// Title
export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: black;
  margin-top: 0px; /* Removed unwanted space */
  margin-bottom: 10px;
`;

// Subtitle
export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #DD3333;
  margin-bottom: 15px;
`;

// Task Items
export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 12px;
  .icon {
    color: #DD3333;
  }
`;

// Button
export const Button = styled.button`
  background: #DD3333;
  color: white;
  border: none;
  padding: 16px 24px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 33px;
  cursor: pointer;
  margin-top: 25px;
  width: 225px;
  height: 54px;
`;

// Image Section
export const ImageSection = styled.div`
  position: relative;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Laptop Image
export const Laptop = styled.img`
  width: 100%;
`;





export const Popup = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 30px;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 80%;
  max-width: 900px;
  border-radius: 10px;
  overflow-y: auto;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: red;
  }
`;

export const PopupTitle = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
  border-bottom: 2px solid #f4f4f4;
  padding-bottom: 10px;
`;

export const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  background-color: #DD3333;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #b73131;
  }
`;

export const TaskListContainer = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  margin-top: 20px;
`;


export const TaskActions = styled.div`
  display: flex;
  gap: 12px;
`;

export const ActionButton = styled.button`
  background: ${props => (props.completed ? '#4CAF50' : '#DD3333')};
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${props => (props.completed ? '#45a049' : '#e53935')};
  }
`;

export const AddTaskForm = styled.form`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  margin-top: 15px;
`;

export const TaskInput = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
`;

export const AddButton = styled.button`
  background: #4CAF50;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #45a049;
  }
`;


// Edit Task Form
export const EditTaskForm = styled.form`
  background-color: #f9f9f9;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  h3 {
    font-size: 24px;
    color: #333;
  }

  input {
    width: 100%;
    padding: 12px;
    margin: 12px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }

  div {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

  button {
    background-color: #DD3333;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button[type="button"] {
    background-color: #bbb;
  }

  button:hover {
    background-color: #cc2f2f;
  }
  button[type="button"]:hover {
    background-color: #aaa;
  }
`;

