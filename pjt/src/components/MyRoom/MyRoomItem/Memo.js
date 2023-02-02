import React from 'react';
import { Box } from '@mui/system';
// import { TextField } from '@mui/material';

const Memo = () => {
  return (
    <Box
      sx={{
        width: "350px",
        height: "220px",
        // marginTop: "25px",
        borderRadius: "30px",
        backgroundColor: "#FFFFFF",
        boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.35)",
        textAlign: "center",
        paddingY: "20px"
      }}>
      <h2>MEMO</h2>
      {/* <hr></hr> */}
      <form>
        <input
          id="memo"
          // multiline
          rows={8}
          fullWidth
          placeholder =" 메모 추가"
          // variant="standard"
          // sx={{margin:'3px'}}
        />
        <button type="submit">등록</button>
      </form>
    </Box>
  );
}

export default Memo;