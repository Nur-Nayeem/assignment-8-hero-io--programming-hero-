import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import { Outlet } from "react-router";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
