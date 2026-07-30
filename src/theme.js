// src/theme.js
import { createTheme } from '@mui/material/styles';

export function getTheme(mode) {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: { main: '#22d3ee' },
      secondary: { main: '#a855f7' },
      background: {
        default: isDark ? '#070b14' : '#eef1f8',
        paper: isDark ? '#0d1420' : '#ffffff',
      },
      text: {
        primary: isDark ? '#e7ecf3' : '#141b2d',
        secondary: isDark ? 'rgba(231,236,243,0.65)' : 'rgba(20,27,45,0.62)',
      },
      divider: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)',
    },
    shape: { borderRadius: 16 },
    typography: {
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      h1: { fontWeight: 800 },
      h2: { fontWeight: 700, letterSpacing: '-0.02em' },
      h3: { fontWeight: 700 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: () => ({
          body: {
            backgroundColor: isDark ? '#070b14' : '#eef1f8',
            backgroundImage: isDark
              ? 'radial-gradient(circle at 12% 0%, rgba(34,211,238,0.12), transparent 40%), ' +
                'radial-gradient(circle at 88% 15%, rgba(168,85,247,0.14), transparent 45%), ' +
                'radial-gradient(circle at 50% 100%, rgba(34,211,238,0.06), transparent 50%)'
              : 'radial-gradient(circle at 12% 0%, rgba(34,211,238,0.12), transparent 40%), ' +
                'radial-gradient(circle at 88% 15%, rgba(168,85,247,0.10), transparent 45%)',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
          },
        }),
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            background:
              theme.palette.mode === 'dark'
                ? 'rgba(255,255,255,0.045)'
                : 'rgba(255,255,255,0.68)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 20,
            boxShadow:
              theme.palette.mode === 'dark'
                ? '0 8px 32px rgba(0,0,0,0.45)'
                : '0 8px 32px rgba(15,23,42,0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { textTransform: 'none', fontWeight: 600, borderRadius: 999 },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 500 },
        },
      },
    },
  });
}
