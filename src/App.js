import React, {lazy, Suspense} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from "./components/Nav";
import { UserPlaceholder } from "./components/User";

// pages
// import Home from './pages/Home'
// import Posts from "./pages/Posts";
const Home = lazy(() => import('./pages/Home'))
const Posts = lazy(() => import("./pages/Posts"))

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Suspense fallback={<UserPlaceholder />}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
