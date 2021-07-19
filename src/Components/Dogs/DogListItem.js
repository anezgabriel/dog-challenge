import { Divider, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

function DogListItem({ dog, showDivider }) {
  const history = useHistory();

  const handleClick = (e) => {
    history.push(`/dog/${dog.name}`);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={dog.name} />
      </ListItem>
      {showDivider && <Divider />}
    </>
  );
}

export default DogListItem;
