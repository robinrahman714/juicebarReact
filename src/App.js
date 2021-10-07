import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { createContext, useEffect, useState } from 'react';
import Reviews from './components/Reviews/Reviews';
import FeaturedPRoducts from './components/FeaturedPRoducts/FeaturedPRoducts';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
// out context Api
export const drinkContext = createContext([]);

function App() {

  // fetching data 
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then(res => res.json())
      .then(data => setData(data?.drinks))
  }, [])

  return (
    <div className="App">

      <drinkContext.Provider value={data}>

        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/drinks">
              <Products />
            </Route>

            <Route exact path="/featured">
              <FeaturedPRoducts />
            </Route>

            <Route exact path="/drink/:id">

            </Route>

            <Route exact path="/Reviews">
              <Reviews />
            </Route>

            <Route exact path="/contact">

            </Route>


            <Route exact path="*">
              <NotFound />
            </Route>

          </Switch>
        </Router>

      </drinkContext.Provider>

    </div>
  );
}

export default App;
