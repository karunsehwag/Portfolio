// src/components/Achievements.js
import React from 'react';
import { Box, Card, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaLaptopCode, FaCheckCircle, FaCodeBranch } from 'react-icons/fa';

const achievementsData = [
  {
    icon: FaCodeBranch,
    stat: '6+',
    label: 'Merged OSS PRs',
    sub: 'Kubernetes · Redis · OpenAPI Generator',
  },
  {
    icon: FaTrophy,
    stat: '#258',
    label: 'Google Hash Code 2021',
    sub: 'Global Rank',
  },
  {
    icon: FaMedal,
    stat: '97.82%ile',
    label: 'GATE CS 2023',
    sub: 'Among 75,680 candidates',
  },
  {
    icon: FaLaptopCode,
    stat: '700+',
    label: 'LeetCode',
    sub: 'Problems solved',
  },
  {
    icon: FaCheckCircle,
    stat: '2018',
    label: 'JEE Mains',
    sub: 'Cleared',
  },
];

function Achievements() {
  return (
    <Box component="section" id="achievements">
      <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, textAlign: 'center', mb: 4 }}>
        Achievements
      </Typography>
      <Grid container spacing={2.5} sx={{ maxWidth: 950, mx: 'auto' }} justifyContent="center">
        {achievementsData.map((item, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={item.label}>
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              sx={{ p: { xs: 2, md: 3 }, textAlign: 'center', height: '100%' }}
            >
              <Box sx={{ color: 'primary.main', fontSize: '1.8rem', mb: 1 }}>
                <item.icon />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #22d3ee, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {item.stat}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 0.5 }}>
                {item.label}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                {item.sub}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Achievements;
