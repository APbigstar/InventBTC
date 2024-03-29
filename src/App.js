import React, { useEffect, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import themeSettings from "./theme";
import Home from "./pages/home";
import ProjectDetail from "./pages/projectDetail";
import BackerSection from "./pages/BackerSection";
import StartupSection from "./pages/StartupSection";

function App() {
  const theme = useMemo(() => createTheme(themeSettings));
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project_detail" element={<ProjectDetail />} />
        <Route exact path="/backer" element={<BackerSection />} />
        <Route exact path="/startup" element={<StartupSection />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
