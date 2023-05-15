import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Films from "../pages/Films/Films";
import Orginals from "../pages/Orginals/Orginals";
import TVProgammes from "../pages/TVProgrammes/TVProgammes";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Search from "../components/Search/Search";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/films" element={<Films />} />
      <Route path="/orginals" element={<Orginals />} />
      <Route path="/detail/:id" element={<MovieDetail />} />
      <Route path="/search" element={<Search />} />
      <Route path="/tv" element={<TVProgammes />} />
    </Routes>
  );
}
