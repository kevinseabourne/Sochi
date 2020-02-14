import React from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Accommodation from "./components/accommodation";
import PropertyPage from "./components/propertyPage";
import Reservation from "./components/reservation";
import Gallery from "./components/gallery";
import AboutUs from "./components/aboutUs";
import Blog from "./components/blog";
import ContactUs from "./components/contactUs";
import HomePage from "./components/homePage";
import NotFound from "./components/notFound";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={props => <HomePage {...props} />} />
            <Route
              path="/accommodation"
              render={props => <Accommodation {...props} />}
            />
            <Route
              path="/accommodation"
              render={props => <PropertyPage {...props} />}
            />
            <Route
              path="/reservation"
              render={props => <Reservation {...props} />}
            />
            <Route path="/gallery" render={props => <Gallery {...props} />} />
            <Route path="/about-us" render={props => <AboutUs {...props} />} />
            <Route path="/blog" render={props => <Blog {...props} />} />
            <Route
              path="/contact-us"
              render={props => <ContactUs {...props} />}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </main>
    </React.Fragment>
  );
}

export default App;
