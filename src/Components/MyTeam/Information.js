import { Typography } from '@material-ui/core';
import React from 'react';

function Information() {
  return (
    <>
      <Typography align="center" variant="h1">
        My Team
      </Typography>
      <Typography align="center" variant="body1">
        Here you can find a list with all the dogs that are on your team
      </Typography>
      <Typography align="center" variant="body1">
        You can remove each dog from your team if you want!
      </Typography>
    </>
  );
}

export default Information;
