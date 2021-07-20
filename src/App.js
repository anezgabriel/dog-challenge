import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, CssBaseline } from '@material-ui/core';
import { Breed, Home, MyTeam } from './Pages';
import Header from './Components/UI/Header';
import Sidebar from './Components/UI/Sidebar';
import useHttp from './hooks/useHttp';
import { setData, setTeamFromLocalStorate } from './features/dog/dogSlice';
import { formatDogsData } from './Helpers';
import SearchResults from './Pages/SearchResults';

function App() {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { error, sendRequest } = useHttp('https://dog.ceo/api/breeds/list/all');

  useEffect(() => {
    (async function () {
      const response = await sendRequest();
      const dogs = formatDogsData(response.data.message);
      dispatch(setData(dogs));
    })();
  }, [dispatch, sendRequest]);

  useEffect(() => {
    const team = JSON.parse(localStorage.getItem('team'));
    if (team) {
      dispatch(setTeamFromLocalStorate(team));
    }
  }, [dispatch]);

  const handleSidebarOpen = () => setIsSidebarOpen(true);
  const handleSidebarClose = () => setIsSidebarOpen(false);

  return (
    <>
      <BrowserRouter className="App">
        <Header openSidebar={handleSidebarOpen} />
        <Sidebar open={isSidebarOpen} handleClose={handleSidebarClose} />
        <CssBaseline />
        <Container>
          {error ? (
            <p>Something went wrong!</p>
          ) : (
            <>
              <Route path="/my-team" exact component={MyTeam} />
              <Route path="/dog/:breed" exact component={Breed} />
              <Route path="/search-results" exact component={SearchResults} />
              <Route path="/" exact component={Home} />
            </>
          )}
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
