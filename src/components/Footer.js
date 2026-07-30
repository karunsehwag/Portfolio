// src/components/Footer.js
import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack spacing={1.5} alignItems="center">
        <Stack direction="row" spacing={2}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/karun-choudhary-108982191"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            <FaLinkedin />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/karunsehwag"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            <FaGithub />
          </IconButton>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          © {new Date().getFullYear()} Karun Choudhary
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
