import React from "react";
import { Route } from "react-router-dom";
import Template from "./components/Template";
//HOC Routing
import {Redirect} from "react-router-dom";
export default function Admin({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if(localStorage.getItem("userAdmin")){
          return (
            <Template>
            <Component {...propsComponent} />
          </Template>
          );
        }
      return <Redirect to = "/admin"/>  
      // Logout
        // localStorage.removeItem("userAdmin");
      }}
    />
  );
}
