import React from "react";
import Home from "./Home/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        {/* <Header /> */}
        <Switch>
          <Route path="/" component={Home} exact />
          {/* <Route path="/:movieId" component={Movie} exact />
          <Route component={NotFound} /> */}
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
