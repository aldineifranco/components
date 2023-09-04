import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ButtonPage } from "../pages/ButtonPage";
import { Card } from "../pages/Card";

import { Home } from "../pages/Home";
import { Input } from "../pages/Input";
import { Table } from "../pages/Table";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Home>
        <Routes>
          <Route path="/" element={<ButtonPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/card" element={<Card />} />
          <Route path="/input" element={<Input />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Home>
    </BrowserRouter>

  )
}