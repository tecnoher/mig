import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BackdropProvider } from "@contexts";
import { Home } from "./Home";
import { Hola } from "./Hola";
import { MainLayout } from "@components";
import { Details } from "./Details";

function App() {
  return (
    <BackdropProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainLayout>
              <Home />
            </MainLayout>
          </Route>
          <Route exact path="/details">
            <MainLayout>
              <Details />
            </MainLayout>
          </Route>
          <Route exact path={["/user"]}>
            <Route path="/" component={Hola} />
          </Route>
        </Switch>
      </Router>
    </BackdropProvider>
  );
}

export default App;
