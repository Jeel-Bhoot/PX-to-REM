import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import { Helmet } from "react-helmet";
import data from "./Data/Data.json";

function App() {
  return (
    <div className="App flex flex-col font-sans bg-slate-900 gap-5">
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
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
