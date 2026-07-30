// src/components/Achievements.js
import React from 'react';
import { Box, Card, Typography } from '@mui/material';
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
    <Box component="section" id="achievements" sx={{ overflow: 'hidden' }}>
      <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, textAlign: 'center', mb: 4 }}>
        Achievements
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' },
          gap: 2.5,
          maxWidth: 950,
          mx: 'auto',
        }}
      >
        {achievementsData.map((item, index) => (
          <Card
            key={item.label}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
            sx={{
              p: { xs: 2, md: 3 },
              textAlign: 'center',
              height: '100%',
              gridColumn: {
                xs: index === achievementsData.length - 1 && achievementsData.length % 2 !== 0 ? '1 / -1' : 'auto',
                sm: 'auto',
              },
              maxWidth: {
                xs: index === achievementsData.length - 1 && achievementsData.length % 2 !== 0 ? 180 : 'none',
                sm: 'none',
              },
              mx: { xs: index === achievementsData.length - 1 && achievementsData.length % 2 !== 0 ? 'auto' : 0, sm: 0 },
            }}
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
        ))}
      </Box>
    </Box>
  );
}

export default Achievements;
