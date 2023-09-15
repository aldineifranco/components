import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ButtonPage } from "../pages/ButtonPage";
import { Card } from "../pages/Card";

import { Home } from "../pages/Home";
import { Input } from "../pages/Input";
import { Table } from "../pages/Table";
import { Credenciais } from "../pages/Credenciais";
import { Formulario } from "../pages/Formulario";

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
          <Route path="/credenciais" element={<Credenciais />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </Home>
    </BrowserRouter>

  )
}