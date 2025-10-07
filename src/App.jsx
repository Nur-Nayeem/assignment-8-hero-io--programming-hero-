import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import { Outlet } from "react-router";
const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
