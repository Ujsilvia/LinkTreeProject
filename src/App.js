import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { AppStyle } from "./AppStyle";
import Profile from "./components/Profile";
import Links from "./components/Links";
import Social from "./components/Social";
import Footer from "./components/Footer";
import ContactPage from './components/Contacts'

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AppStyle>
                  <Profile />
                  <Links />
                  <Social />
                </AppStyle>
               
              </>
            }
          />
          <Route path="/contact" element={<ContactPage/>} />
          
         
        </Routes>
      </Router> 
      <Footer />
    </Fragment>
  );
}

export default App;
