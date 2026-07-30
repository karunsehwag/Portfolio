// src/components/Education.js
import React from 'react';
import { Box, Card, Typography, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const educationData = [
  {
    icon: FaGraduationCap,
    degree: 'M.Tech in Computer Science and Engineering',
    school: 'International Institute of Information Technology, Hyderabad',
    period: 'July 2023 – May 2025',
    description: 'CGPA: 7.58',
  },
  {
    icon: FaUniversity,
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'Indian Institute of Information Technology, Bhopal',
    period: 'July 2018 – May 2022',
    description: 'CGPA: 8.35',
  },
];

const coursework = [
  'Web Development',
  'Operating Systems',
  'Database Management Systems',
  'Computer Networks',
  'Computer Architecture',
  'Statistical Methods in AI',
  'Data Structures',
  'Algorithms',
];

function Education() {
  return (
    <Box component="section" id="education">
      <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, textAlign: 'center', mb: 4 }}>
        Education
      </Typography>
      <Stack spacing={2.5} sx={{ maxWidth: 800, mx: 'auto' }}>
        {educationData.map((item, index) => (
          <Card
            key={item.degree}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
            sx={{ p: { xs: 2.5, md: 3.5 } }}
          >
            <Stack direction="row" spacing={2.5} alignItems="flex-start">
              <Box sx={{ color: 'primary.main', fontSize: '1.8rem', pt: 0.5 }}>
                <item.icon />
              </Box>
              <Box sx={{ textAlign: 'left', width: '100%' }}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ sm: 'baseline' }}
                  spacing={0.5}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {item.degree}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {item.period}
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, mb: 0.5 }}>
                  {item.school}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.description}
                </Typography>
              </Box>
            </Stack>
          </Card>
        ))}

        <Card sx={{ p: { xs: 2.5, md: 3 } }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, color: 'primary.main', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '0.78rem' }}
          >
            Relevant Coursework
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {coursework.map((course) => (
              <Chip key={course} label={course} size="small" sx={{ bgcolor: 'action.hover', fontWeight: 500 }} />
            ))}
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}

export default Education;
