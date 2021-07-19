import { useEffect, useState } from 'react';
import qs from 'query-string';
import { useSelector } from 'react-redux';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import Information from '../Components/SearchResults/Information';
import { selectData } from '../features/dog/dogSlice';
import { searchBreed } from '../Helpers';
import DogList from '../Components/Dogs/DogList';

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

function SearchResults() {
  const classes = useStyles();
  const data = useSelector(selectData);
  const { q } = qs.parse(window.location.search);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    if (data && q) {
      const results = searchBreed(data, q);
      setDogs(results);
    }
  }, [data, q]);

  useEffect(() => {
    console.log(dogs);
  }, [dogs]);

  return (
    <div className={classes.wrapper}>
      <Information />
      <Paper className={classes.paper}>
        <Typography align="center" variant="h6" component="p">
          You can click on a dog breed to go to its details page
        </Typography>
        <div className={classes.listWrapper}>
          <DogList data={dogs} />
        </div>
      </Paper>
    </div>
  );
}

export default SearchResults;
