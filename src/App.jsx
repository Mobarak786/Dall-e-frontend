import React from "react";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/create-post"} element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
