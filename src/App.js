import React from "react";
import Home from "./components/Home";
import "./App.css";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Section />

    </div>
  );
}

export default App;
