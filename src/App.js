// src/App.js
import React, { useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline, Box, Stack } from '@mui/material';
import { getTheme } from './theme';
import Header from './components/Header';
import Achievements from './components/Achievements';
import About from './components/About';
import Experience from './components/Experience';
import OpenSource from './components/OpenSource';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

const STORAGE_KEY = 'portfolio-theme-mode';

function getInitialMode() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return 'dark';
}

function App() {
  const [mode, setMode] = useState(getInitialMode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app">
        <Header mode={mode} toggleMode={toggleMode} />
        <Stack spacing={{ xs: 6, md: 10 }} sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3 }, py: { xs: 6, md: 10 } }}>
          <Achievements />
          <About />
          <Experience />
          <OpenSource />
          <Education />
          <Projects />
          <Skills />
        </Stack>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
