import React from 'react';
import styles from './styles/Content.module.css';
import Box from './Box';
import Eg3 from './Eg3';

function Content() {
  return (
    <div className={styles.content}>
      <Box title='ToDoList'>
        <Eg3 />
      </Box>
    </div>
  );
}

export default Content;
