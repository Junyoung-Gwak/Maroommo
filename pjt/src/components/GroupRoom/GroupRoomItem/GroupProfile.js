import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';
import styled from "styled-components";
import GroupProfileModal from '../../Modal/GroupProfileModal';
// import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
// import PersonIcon from '@mui/icons-material/Person';

import './GroupProfile.css';

const GroupProfile = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const onClickButton = () => {
    setIsOpen(true);
  };

  let getGroupName = localStorage.getItem('groupname');
  let getGroupIntro = localStorage.getItem('groupintro');

  return (
    <Box
      sx={{
        width: "250px",
        height: "220px",
        // marginLeft: "15px",
        borderRadius: "30px",
        backgroundColor: "#FFFFFF",
        boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
      }}>
      <div className='profile-btn'>
        <ProfileButton onClick={onClickButton}>
          <EditIcon 
            sx={{
              width: "18px",
              height: "18px",
            }}>
          </EditIcon>
        </ProfileButton>
        {isOpen && (<GroupProfileModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />)}
      </div>
      <div className='inbox1'>
        {/* <PersonIcon
          sx={{
            width: "120px",
            height: "120px",
          }}>
        </PersonIcon> */}
        <img src='/images/user.png' alt="user" className='user-image' />
        <h2>{getGroupName}</h2>
        <h4>{getGroupIntro}</h4>
      </div>
    </Box>
  );
}

const ProfileButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 35px;
  height: 35px;
  border-radius: 10px;
  border: none;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;

export default GroupProfile;