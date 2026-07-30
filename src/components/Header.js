// src/components/Header.js
import React from 'react';
import { Box, Avatar, Typography, IconButton, Stack, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/karun-choudhary-108982191', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/karunsehwag', label: 'GitHub' },
  { icon: FaPhone, href: 'tel:+916301491349', label: 'Phone' },
  { icon: FaEnvelope, href: 'mailto:karunchoudhary.dev@gmail.com', label: 'Email' },
];

function Header({ mode, toggleMode }) {
  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        minHeight: { xs: '80vh', md: '85vh' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '8%',
          width: { xs: 220, md: 380 },
          height: { xs: 220, md: 380 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.28), transparent 70%)',
          filter: 'blur(40px)',
          animation: 'drift1 16s ease-in-out infinite',
          pointerEvents: 'none',
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
          '@keyframes drift1': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(40px, 30px)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          right: '10%',
          width: { xs: 260, md: 420 },
          height: { xs: 260, md: 420 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)',
          filter: 'blur(40px)',
          animation: 'drift2 20s ease-in-out infinite',
          pointerEvents: 'none',
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
          '@keyframes drift2': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(-50px, -20px)' },
          },
        }}
      />

      <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
        <IconButton
          onClick={toggleMode}
          aria-label="Toggle color mode"
          sx={{
            position: 'absolute',
            top: { xs: 16, md: 24 },
            right: { xs: 16, md: 24 },
            bgcolor: 'action.hover',
            backdropFilter: 'blur(10px)',
          }}
        >
          {mode === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
        </IconButton>
      </Tooltip>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        sx={{ position: 'relative', zIndex: 1 }}
      >
        <Avatar
          sx={{
            width: 120,
            height: 120,
            mx: 'auto',
            mb: 3,
            fontSize: '2.5rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #22d3ee, #a855f7)',
            boxShadow: '0 0 0 4px rgba(34,211,238,0.15), 0 12px 40px rgba(168,85,247,0.35)',
          }}
        >
          KC
        </Avatar>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4rem' },
            background: 'linear-gradient(135deg, #22d3ee, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            mb: 1.5,
          }}
        >
          Karun Choudhary
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: 'text.primary', fontWeight: 600, mb: 0.5 }}
        >
          Software Engineer at Synactive Inc.
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', fontWeight: 500, mb: 4 }}
        >
          Distributed Systems · AI Infrastructure · Open Source Contributor
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Tooltip key={label} title={label}>
              <IconButton
                component="a"
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                sx={{
                  bgcolor: 'action.hover',
                  border: '1px solid',
                  borderColor: 'divider',
                  backdropFilter: 'blur(10px)',
                  '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                }}
              >
                <Icon size={18} />
              </IconButton>
            </Tooltip>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default Header;
