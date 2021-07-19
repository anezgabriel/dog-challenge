import { CircularProgress, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  loader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '20rem'
  },
  text: {
    marginTop: '1.5rem'
  }
});

function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <CircularProgress />
      <Typography className={classes.text} variant="h6" component="h2">
        Loading...
      </Typography>
    </div>
  );
}

export default Loader;
