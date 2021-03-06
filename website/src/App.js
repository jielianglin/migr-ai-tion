import React from "react";
import Navbar from "./Navbar";
import AppRouter from "./AppRouter";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter></AppRouter>
    </div>
  );
}
