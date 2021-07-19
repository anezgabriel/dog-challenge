import { makeStyles, Paper, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import ImageGallery from '../Components/Breed/ImageGallery';
import Information from '../Components/Breed/Information';

const useStyles = makeStyles({
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
    marginRight: 'auto'
  },
  listWrapper: {
    marginTop: '2rem'
  }
});

function Breed() {
  const classes = useStyles();
  const { breed } = useParams();
  const url = `https://dog.ceo/api/breed/${breed}/images`;

  return (
    <div className={classes.wrapper}>
      <Information breedName={breed} />
      <Paper className={classes.paper}>
        <Typography align="center" variant="h6" component="p">
          Click on the heart icon to add the dog to your team!
        </Typography>
        <Typography align="center" variant="h6" component="p">
          You can add multiple dogs to your team!
        </Typography>
        <div className={classes.picturesWrapper}>
          <ImageGallery url={url} />
        </div>
      </Paper>
    </div>
  );
}

export default Breed;
