import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BackdropProvider } from "@contexts";
import { Home } from "./Home";
import { Hola } from "./Hola";
import { MainLayout } from "@components";
import UserAppRoutes from "./Routes/UserAppRoutes";
import MainAppRoutes from "./Routes/MainAppRoutes";
import { Box } from "@material-ui/core";
import { Helmet } from "react-helmet";

function App() {
  return (
    <BackdropProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Box>
              <MainLayout>
                <Route exact path="home" component={Home} />
              </MainLayout>
            </Box>
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
