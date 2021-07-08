import React from 'react';
import {Route, Redirect} from 'react-router-dom';



function ProtectedRoute({component: Component, ...props}) {
  return <Route>
    function () {
    props.loggedIn ? <Component {...props}/> : <Redirect to='/signin'/>
  }
  </Route>}

export default ProtectedRoute;
