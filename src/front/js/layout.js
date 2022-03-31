import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";

import { Home } from "./pages/Home";
import { Demo } from "./pages/Demo";
import { Contact } from "./pages/Contact";
import { Single } from "./pages/Single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/demo" component={Demo} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/single/:id" component={Single} />
            <Route
              component={() => <h1 className="text-center">Not found!</h1>}
            />
          </Switch>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
