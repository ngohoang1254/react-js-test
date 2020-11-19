import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Admin from "./containers/Admin";
import { routesHome, routesAdmin } from "./routes";
import PageNotFound from "./containers/PageNotFound";
import Auth from "./containers/Admin/Auth";

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Home
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Admin
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        {showLayoutAdmin(routesAdmin)}
        {showLayoutHome(routesHome)}

        <Route path="/admin" component={Auth} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
