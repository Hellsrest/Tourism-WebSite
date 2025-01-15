import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Checkout from "./Checkout";
import TripDescription from "./TripDescription";
import TripLayout from "./TripLayout";
import AllItems from "./AllItems";

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
        element={<Layout><AllItems type="trip" /></Layout>}
      />
      <Route
        path="/allguides"
        element={<Layout><AllItems type="guide" /></Layout>}
      />
      </Routes>
    </Router>
  );
};

export default App;
