import { useEffect, useState } from 'react';
import { Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Information from '../Components/MyTeam/Information';
import { selectTeam } from '../features/dog/dogSlice';
import { sortBreeds } from '../Helpers';
import DogGalleryItem from '../Components/Dogs/DogGalleryItem';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: '2rem',
    paddingBottom: '3rem',
    '& > h1': {
      fontSize: '4.5rem',
      marginBottom: '1rem'
    }
  },
  paper: {
    marginTop: '2rem',
    padding: '2rem',
    maxWidth: '1024px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '& > div:not(:first-child)': {
      marginTop: '2rem'
    }
  },
  title: {
    textTransform: 'capitalize',
    paddingBottom: '.75rem'
  },
  breedWrapper: {
    marginTop: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      '& > img': {
        filter: 'brightness(0.35)'
      },
      '&:hover > img': {
        filter: 'brightness(0.75)'
      }
    }
  }
}));

function MyTeam() {
  const team = useSelector(selectTeam);
  const classes = useStyles();
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    if (team) {
      const formattedBreeds = sortBreeds(team);
      setBreeds(formattedBreeds);
    }
  }, [team]);

  return (
    <div className={classes.wrapper}>
      <Information />
      <Paper className={classes.paper}>
        {breeds && breeds.length > 0 ? (
          breeds.map((breed) => (
            <div key={breed.name}>
              <Typography className={classes.title} variant="h4">
                {breed.name}
              </Typography>
              <Divider />
              <div className={classes.breedWrapper}>
                {breed.dogs.map((dog) => (
                  <DogGalleryItem key={dog} img={dog} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <>
            <Typography
              align="center"
              className={classes.title}
              variant="h6"
              component="p">
              There are currently no dogs on your team
            </Typography>
            <Typography
              align="center"
              className={classes.title}
              variant="h6"
              component="p">
              Go to a breed page and add dogs to your team
            </Typography>
          </>
        )}
      </Paper>
    </div>
  );
}

export default MyTeam;
