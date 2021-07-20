/**
 * This functions converts the data from the api
 * into an array of objets so its easier to iterate
 * and work with in the components
 */

export const formatDogsData = (obj) => {
  const arr = [];
  for (const prop in obj) {
    const dog = {
      name: prop,
      subBreeds: obj[prop]
    };

    arr.push(dog);
  }

  return arr;
};

/**
 *  This functions builds the pagination object
 *  used in the <Pagination> component from material ui
 */

export const paginator = (items, currentPage, perPageItems) => {
  const page = currentPage || 1;
  const perPage = perPageItems || 10;
  const offset = (page - 1) * perPage;
  const paginatedItems = items.slice(offset).slice(0, perPageItems);
  const total_pages = Math.ceil(items.length / perPage);

  return {
    page,
    perPage,
    prePage: page - 1 ? page - 1 : null,
    nextPage: total_pages > page ? page + 1 : null,
    total: items.length,
    totalPages: total_pages,
    data: paginatedItems
  };
};

/* This functions validates the following conditions:
 *  Maximum of 10 dogs
 *  Maximum of 3 dogs per breed
 *  and it builds the messages that are displayed on the
 *  snackbar component
 */

export const validateAddDogToTeam = (team, dog) => {
  let isValid = true;
  let message = 'The dog was added to your team!';
  let variant = 'success';

  if (team.length === 10) {
    isValid = false;
    message = 'You can only have a maximum of 10 dogs on your team!';
    variant = 'error';
  }

  let counter = 0;

  for (let i = 0; i < team.length; i++) {
    if (team[i].breed === dog.breed) {
      counter++;
    }

    if (counter === 3) {
      isValid = false;
      message = 'You can only have 3 dogs from the same breed on your team!';
      variant = 'error';
      break;
    }
  }

  return { isValid, message, variant };
};

/* This functions searchs the breeds array for matches
 * based on the query parameter
 */

export const searchBreed = (dogArr, query) => {
  return dogArr.filter((dog) => dog.name.includes(query));
};

/* This functions returns an array of breeds
 * for display on the <MyTeam /> Page
 */
export const sortBreeds = (myTeam) => {
  const allBreeds = [];
  const formattedBreeds = [];

  myTeam.forEach((dog) => {
    allBreeds.push(dog.breed);
  });

  const breeds = [...new Set(allBreeds)];

  breeds.forEach((item) => {
    const dogs = [];
    const name = item;
    myTeam.forEach((dog) => {
      if (dog.breed === name) {
        dogs.push(dog.img);
      }
    });

    formattedBreeds.push({ name, dogs });
  });

  return formattedBreeds;
};
