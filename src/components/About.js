// src/components/About.js
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';

function About() {
  return (
    <Box
      component={motion.section}
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card sx={{ maxWidth: 800, mx: 'auto', p: { xs: 3, md: 5 }, textAlign: 'center' }}>
        <CardContent>
          <FaUserCircle size={48} color="#a855f7" style={{ marginBottom: 16 }} />
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 3 }}>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary', mb: 2 }}>
            I'm Karun Choudhary, a Software Engineer building production distributed systems and AI
            infrastructure at Synactive Inc. My work spans concurrent server architecture, JVM performance
            diagnostics, and embedding native runtimes into production services — the kind of systems-level
            problems that show up under real concurrency and scale.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
            Outside of work, I contribute to open-source infrastructure projects like Kubernetes, Redis, and
            Spring Framework, and stay sharp with competitive programming — 700+ problems solved on LeetCode
            and a Global Rank of 258 at Google Hash Code 2021.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default About;
