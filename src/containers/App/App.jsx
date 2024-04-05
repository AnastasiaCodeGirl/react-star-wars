import React from "react";
import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import styles from "./App.module.css";

import { getApiResource } from "@utils/network";

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/people">People</Link>
        <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
