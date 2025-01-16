import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Checkout from "./Checkout";
import TripDescription from "./TripDescription";
import TripLayout from "./TripLayout";
import AllItems from "./AllItems";
import GuidePage from "./GuidePage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* Checkout Page */}
        <Route
          path="/checkout/:tripId"
          element={
            <Layout>
              <Checkout />
            </Layout>
          }
        />

        <Route
          path="/trip/:tripId"
          element={
            <TripLayout>
              <TripDescription />
            </TripLayout>
          }
        />
        <Route
          path="/alltrips"
          element={
            <Layout>
              <AllItems type="trip" />
            </Layout>
          }
        />
        <Route
          path="/allguides"
          element={
            <Layout>
              <AllItems type="guide" />
            </Layout>
          }
        />

        <Route
          path="/guide/:guideId"
          element={
            <Layout>
              <GuidePage />
            </Layout>
          }
        />

        <Route
          path="/aboutus"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />

        <Route
          path="/contactus"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
