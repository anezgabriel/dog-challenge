import { Typography } from '@material-ui/core';
import React from 'react';

function Information({ breedName }) {
  return (
    <>
      <Typography align="center" variant="h1">
        Dog Breed
      </Typography>
      <Typography align="center" variant="body1">
        Here you can find pictures of the selected breed ({breedName})
      </Typography>
    </>
  );
}

export default Information;
