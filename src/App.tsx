import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Checkout from "./Checkout";
import TripDescription from "./TripDescription";
import TripLayout from "./TripLayout";

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
          path="/checkout"
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
      </Routes>
    </Router>
  );
};

export default App;
