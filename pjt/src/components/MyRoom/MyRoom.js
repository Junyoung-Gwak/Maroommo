// import { Fragment } from 'react';
import React, { useState } from 'react';

import { Grid } from '@mui/material';
import { Box } from '@mui/system';

import PageIcon from './MyRoomItem/PageIcon';
import Profile from './MyRoomItem/Profile';
import StudyTime from './MyRoomItem/StudyTime';
import Todo from './MyRoomItem/Todo';
import CalendarBox from './MyRoomItem/Calendar';
import Memo from './MyRoomItem/Memo';
import TimeTable from './MyRoomItem/TimeTable';
import Choice from './MyRoomItem/Choice';
import { Link } from 'react-router-dom';
import TodoTable from './MyRoomItem/TodoTable';

import RoomModal from "../Modal/RoomModal";
import styled from "styled-components";
// import classes from '../rooms/myroom.css';
// import mealsImage from '../../assets/meals.jpg';

const MyRoom = () => {

  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <Grid container>
      <Box
        sx={{
          width: "5vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#4A4A4A",
        }}>
        <Box>
          <PageIcon />
        </Box>
        <Box
          sx={{
            width: "4vw",
            height: "5px",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px"
          }}>
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
          <Box>
            <Link to={`/group`}><PageIcon /></Link>
          </Box>
          <Box>
            {/* <Box
              sx={{
                width: "4rem",
                height: "4rem",
                marginTop: "25px",
                marginBottom: "25px",
                backgroundColor: "#FFFFFF",
                borderRadius: "15px",
                transform: "rotate(45deg)",
                boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
                ":hover": {
                  transform: "rotate(0)",
                  transition: "0.8s",
                }
              }}> */}
              <AppWrap>
                <Button onClick={onClickButton}>+</Button>
                {isOpen && (<RoomModal
                  open={isOpen}
                  onClose={() => {
                    setIsOpen(false);
                  }}
                />)}
              </AppWrap>
            {/* </Box> */}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}>
        <Box
          sx={{
            width: "95vw",
            height: "24vh",
            paddingY: "1vh",
            display: "flex",
            // alignItems: "center",
            justifyContent: "space-evenly",
            // alignItems: "center",
            backgroundColor: "#ebe5d1",
          }}>
          <Profile />
          <StudyTime />
          <Todo />
          <CalendarBox />
        </Box>
        <Box
          sx={{
            width: "90vw",
            height: "70vh",
            display: "flex",
          }}>
          <Box
            sx={{
              width: "65vw",
              height: "70vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}>
            <Box
              sx={{
                width: "50vw",
                height: "10vh",
                display: "flex",
              }}>
              <Choice />
              <Box
                sx={{
                  width: "5px",
                  height: "5vw",
                  backgroundColor: "#FFFFFF",
                  marginX: "15px",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px"
                }}>
              </Box>
              <Choice />
              <Choice />
            </Box>
            <Box
              sx={{
                width: "50vw",
                height: "50vh",
                // marginTop: "15px",
                borderRadius: "30px",
                backgroundColor: "#FFFFFF",
                boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)"
              }}>
              <TodoTable sx={{
                fontSize:"55"

              }}/>
            </Box>
          </Box>
          <Box
            sx={{
              width: "25vw",
              height: "70vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}>
            <Memo />
            <h2>TIME TABLE</h2>
            <TimeTable />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

const Button = styled.button`
  font-size: 40px;
  padding: 10px 20px;
  border: none;
  background-color: #ffffff;
  border-radius: 10px;
  color: black;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;

const AppWrap = styled.div`
  text-align: center;
  margin: 50px auto;
`;

export default MyRoom;