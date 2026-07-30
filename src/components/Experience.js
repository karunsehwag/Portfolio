// src/components/Experience.js
import React from 'react';
import { Box, Card, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experienceData = [
  {
    company: 'Synactive Inc. — Enterprise SAP Platform',
    role: 'Software Engineer',
    location: 'Hyderabad, India',
    period: 'June 2025 – Present',
  },
  {
    company: 'International Institute of Information Technology, Hyderabad',
    role: 'Backend Developer',
    location: 'Hyderabad, India',
    period: 'Aug 2024 – Dec 2024',
  },
];

function Experience() {
  return (
    <Box component="section" id="experience">
      <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, textAlign: 'center', mb: 5 }}>
        Experience
      </Typography>
      <Box sx={{ maxWidth: 850, mx: 'auto' }}>
        {experienceData.map((job, index) => {
          const isLast = index === experienceData.length - 1;
          return (
            <Box key={job.company} sx={{ position: 'relative', pl: { xs: 7, sm: 8 }, pb: isLast ? 0 : 4 }}>
              <Box
                component={motion.div}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  width: { xs: 44, sm: 52 },
                  height: { xs: 44, sm: 52 },
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #22d3ee, #a855f7)',
                  color: '#fff',
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  boxShadow: '0 0 0 4px rgba(34,211,238,0.12), 0 8px 24px rgba(168,85,247,0.35)',
                  zIndex: 1,
                }}
              >
                <FaBriefcase />
              </Box>
              {!isLast && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 22, sm: 26 },
                    top: { xs: 48, sm: 56 },
                    bottom: 0,
                    width: '2px',
                    background: 'linear-gradient(180deg, rgba(34,211,238,0.5), rgba(168,85,247,0.15))',
                  }}
                />
              )}

              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                sx={{ p: { xs: 2.5, md: 3 } }}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ sm: 'baseline' }}
                  spacing={0.5}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {job.role} · {job.company}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {job.period}
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {job.location}
                </Typography>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Experience;
