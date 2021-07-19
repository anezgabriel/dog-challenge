import { makeStyles, Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import DogList from '../Components/Dogs/DogList';
import Information from '../Components/Home/Information';
import { selectData } from '../features/dog/dogSlice';

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

function Home() {
  const classes = useStyles();
  const data = useSelector(selectData);

  return (
    <div className={classes.wrapper}>
      <Information />
      <Paper className={classes.paper}>
        <Typography align="center" variant="h6" component="p">
          You can click on a dog breed to go to its details page
        </Typography>
        <div className={classes.listWrapper}>
          <DogList data={data} />
        </div>
      </Paper>
    </div>
  );
}

export default Home;
