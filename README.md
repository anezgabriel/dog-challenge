# Technologies Used

For his project I used create-react-app to bootstrap a react project, I used the `--template redux` flag
In order to have redux with `@reduxjs/toolkit` package already installed in the project.
The command used was:

`npx create-react-app my-app --template redux`

### Packages used

- [React Router](https://reactrouter.com/): For navigation and routing of the different pages in the APP
- [Redux](https://redux-toolkit.js.org/): For app level state managment
- [Material UI](https://material-ui.com/): CSS Library with many components, this was used for the general UI of the project
- [Axios](https://github.com/axios/axios): For HTTP Requests to work with the dogs API
- [notistack](https://github.com/iamhosseindhv/notistack): For displaying user notificacion with snackbars
- [query-string](https://www.npmjs.com/package/query-string): To parse query parameters, used to implement the search functionality

### Reviewing the project

###### You can view a live version of this project deployed with [netlify](https://dog-challenge-anezgabriel.netlify.app/)

To run the project follow these steps:

- clone this repository with: `git clone https://gitlab.com/greencodesoftware/interview-challenges/dogs-challenge-gabriel.git`
- checkout to the master branch in the terminal type: `git checkout master`
- in the master branch run `yarn` or `npm i` (Node: 15.10.0) and (npm 7.5.3) versions were used
- after the dependecies were installed run `npm start` or `yarn start`
- local development server should run on [port 3000](http://localhost:3000/)
