import React from "react";
import {Route, Switch} from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";


function App() {
  return (
    <div className="app__root">
      <div className="app__page">
        <Header/>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/movies">
            <Movies/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
