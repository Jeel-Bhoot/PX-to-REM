import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import { Helmet } from "react-helmet";
import data from "./Data/Data.json";

export default function App() {
  return (
    <div className="App flex flex-col bg-light-white dark:bg-default font-sans tracking-tight gap-5">
      <BrowserRouter>
        <Header />
        <Helmet>
          <title>{data.app}</title>
          <meta
            name="description"
            content="PX to REM Converter converts pixels to the CSS unit REM. The conversion is based on the default font-size of 16px pixel."
          ></meta>
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
