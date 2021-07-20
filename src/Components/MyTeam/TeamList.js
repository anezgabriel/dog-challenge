import { List, Typography } from '@material-ui/core';
import Loader from '../UI/Loader';

function TeamList({ dogs, name }) {
  return (
    <>
      {!dogs && <Loader />}
      {dogs && dogs.length === 0 && (
        <Typography align="center" variant="h6" component="p">
          You have no dogs on your team D:
        </Typography>
      )}
      {dogs && dogs.length > 0 && (
        <>
          <Typography variant="h3">{name}</Typography>
          <List>
            {dogs.map((dog) => (
              <p>{dog}</p>
            ))}
          </List>
        </>
      )}
    </>
  );
}

export default TeamList;
