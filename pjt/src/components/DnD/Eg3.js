import React from 'react';
import Draggable from './Draggable';
import DragGroup from './DragGroup';
import Droppable from './Droppable';

function Eg3() {
  const [box1, setBox1] = React.useState([
    { text: 'React1' },
    { text: 'CS' },
    { text: 'React2' },
  ]);
  const [box2, setBox2] = React.useState([]);

  const handleBox1 = (item, monitor, state) => {
    if (state.find((each) => each.text === item.text)) return;
    // remove from box2
    setBox2((prev) => {
      const index = prev.findIndex((each) => each.text === item.text);
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
    // add to box1
    setBox1((prev) => {
      return [...prev, { text: item.text }];
    });
  };

  const handleBox2 = (item, monitor, state) => {
    if (state.find((each) => each.text === item.text)) return;
    // remove from box1
    setBox1((prev) => {
      const index = prev.findIndex((each) => each.text === item.text);
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
    // add to box2
    setBox2((prev) => {
      return [...prev, { text: item.text }];
    });
  };

  return (
    <>
      <Droppable
        accept='drag-3'
        handleDrop={handleBox1}
        text='To do'
        state={box1}
      >
        <DragGroup>
          {box1.map((drag) => (
            <Draggable
              key={drag.text}
              type='drag-3'
              text={drag.text}
              item={{ text: drag.text }}
              state={box1}
            />
          ))}
        </DragGroup>
      </Droppable>
      <Droppable
        accept='drag-3'
        handleDrop={handleBox2}
        text='Done'
        state={box2}
      >
        <DragGroup>
          {box2.map((drag) => (
            <Draggable
              key={drag.text}
              type='drag-3'
              text={drag.text}
              item={{ text: drag.text }}
              state={box2}
            />
          ))}
        </DragGroup>
      </Droppable>
    </>
  );
}

export default Eg3;
