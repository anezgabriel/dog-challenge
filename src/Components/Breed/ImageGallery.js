import { makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { paginator } from '../../Helpers';
import clsx from 'clsx';
import useHttp from '../../hooks/useHttp';
import Loader from '../UI/Loader';
import DogGalleryItem from '../Dogs/DogGalleryItem';

const useStyles = makeStyles((theme) => ({
  galleryGrid: {
    marginTop: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    '& > div': {
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
    }
  },
  pagination: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end'
    }
  },
  topPagination: {
    marginTop: '1rem'
  },
  bottomPagination: {
    marginTop: '1rem'
  }
}));

function ImageGallery({ url }) {
  const { loading, error, sendRequest } = useHttp(url);
  const classes = useStyles();
  const [data, setData] = useState();
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async function () {
      const res = await sendRequest();
      setData(res.data.message);
    })();
  }, [sendRequest]);

  useEffect(() => {
    if (data) {
      const parsedData = paginator(data, currentPage, 9);
      setImages(parsedData);
    }
  }, [currentPage, data]);

  const handleChange = (_, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <p>something went wrong</p>}
      {!loading && !error && images.data && images.data.length > 0 && (
        <>
          <div className={clsx(classes.topPagination, classes.pagination)}>
            <Pagination
              size="small"
              count={images.totalPages}
              page={currentPage}
              onChange={handleChange}
            />
          </div>
          <div className={classes.galleryGrid}>
            {images.data.map((img) => (
              <DogGalleryItem key={img} img={img} />
            ))}
          </div>
          <div className={clsx(classes.bottomPagination, classes.pagination)}>
            <Pagination
              size="small"
              count={images.totalPages}
              page={currentPage}
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default ImageGallery;
