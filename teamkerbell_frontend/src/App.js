// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import MainPage from "./pages/main";
import Header from "./components/Header";
import TeamTool from "./pages/teamtool";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/teamtool" element={<TeamTool />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
