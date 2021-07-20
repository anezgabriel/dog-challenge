import { useState, useEffect } from 'react';
import { IconButton, makeStyles, Tooltip } from '@material-ui/core';
import { Favorite, Delete } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addToTeam,
  removeFromTeam,
  selectTeam
} from '../../features/dog/dogSlice';
import { validateAddDogToTeam } from '../../Helpers';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  galleryItem: {
    width: '300px',
    height: '300px',
    marginBottom: '1rem',
    position: 'relative',
    '& > img': {
      objectFit: 'cover',
      width: '100%',
      height: '100%'
    },
    [theme.breakpoints.up('md')]: {
      '& > img': {
        filter: 'brightness(0.35)'
      },
      '&:hover > img': {
        filter: 'brightness(0.75)'
      }
    }
  },
  favoriteButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: '5'
  }
}));

function DogGalleryItem({ img }) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [isOnTeam, setIsOnTeam] = useState(false);
  const { breed } = useParams();
  const classes = useStyles();
  const team = useSelector(selectTeam);

  useEffect(() => {
    if (team) {
      let dogFound = false;

      team.forEach((dog) => {
        if (dog.img === img) {
          dogFound = true;
        }
      });

      dogFound ? setIsOnTeam(true) : setIsOnTeam(false);
    }
  }, [team, setIsOnTeam, img]);

  const handleAdd = (img) => {
    const dog = { breed, img };
    const { isValid, message, variant } = validateAddDogToTeam(team, dog);

    if (isValid) {
      dispatch(addToTeam(dog));
    }

    enqueueSnackbar(message, { variant });
  };

  const handleRemove = (img) => {
    dispatch(removeFromTeam(img));
    enqueueSnackbar('The dog was removed from your team', {
      variant: 'success'
    });
  };

  return (
    <div className={classes.galleryItem}>
      {!isOnTeam ? (
        <Tooltip title="Add to my team!">
          <IconButton
            onClick={() => handleAdd(img)}
            color="secondary"
            aria-label="add to my team"
            className={classes.favoriteButton}
            size="medium">
            <Favorite fontSize="inherit" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Remove from your team!">
          <IconButton
            onClick={() => handleRemove(img)}
            aria-label="Remove from your team!"
            className={classes.favoriteButton}
            size="medium">
            <Delete fontSize="inherit" />
          </IconButton>
        </Tooltip>
      )}

      <img src={img} alt="" />
    </div>
  );
}

export default DogGalleryItem;
