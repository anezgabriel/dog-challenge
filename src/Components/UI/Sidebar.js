import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import { House, Favorite } from '@material-ui/icons';

const useStyles = makeStyles({
  list: {
    width: 250
  }
});

export default function Sidebar({ open, handleClose }) {
  const classes = useStyles();
  const history = useHistory();

  const handleRedirect = (url) => {
    history.push(url);
    handleClose();
  };

  return (
    <Drawer anchor="left" open={open} onClose={handleClose}>
      <div className={classes.list}>
        <List>
          <ListItem button onClick={() => handleRedirect('/')}>
            <ListItemIcon>
              <House />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleRedirect('/my-team')}>
            <ListItemIcon>
              <Favorite />
            </ListItemIcon>
            <ListItemText primary="My Team" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
