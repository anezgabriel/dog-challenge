import { useState, useEffect } from 'react';
import { List, makeStyles, Typography } from '@material-ui/core';
import DogListItem from './DogListItem';
import Loader from '../UI/Loader';
import { paginator } from '../../Helpers';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles({
  pagination: {
    marginTop: '2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

function DogList({ data }) {
  const classes = useStyles();
  const [dogs, setDogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (data) {
      const pageInfo = paginator(data, currentPage, 10);
      setDogs(pageInfo);
    }
  }, [data, currentPage]);

  const handleChange = (e, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      {!data && <Loader />}
      {data && data.length === 0 && (
        <Typography align="center" variant="h6" component="p">
          No results found :(
        </Typography>
      )}
      {data && data.length > 0 && dogs.data && (
        <>
          <List>
            {dogs.data.map((dog, index) => (
              <DogListItem
                key={dog.name}
                dog={dog}
                showDivider={index !== data.length - 1}
              />
            ))}
          </List>
          {dogs.totalPages > 1 && (
            <div className={classes.pagination}>
              <Pagination
                count={dogs.totalPages}
                page={currentPage}
                onChange={handleChange}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default DogList;
