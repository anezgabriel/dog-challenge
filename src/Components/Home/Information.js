import { Typography } from '@material-ui/core';
import React from 'react';

function Information() {
  return (
    <>
      <Typography align="center" variant="h1">
        Dog Breed
      </Typography>
      <Typography align="center" variant="body1">
        Here you can find a list with all the dogs breeds
      </Typography>
      <Typography align="center" variant="body1">
        You can also search for a specific breed on top of the site.
      </Typography>
    </>
  );
}

export default Information;
