import React from "react";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import CurrentBook from "./pages/currentbook"
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Home} />
          <Route exact path="/books/:id" component={CurrentBook} />
          <Route exact path="/Saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
