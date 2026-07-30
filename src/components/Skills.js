// src/components/Skills.js
import React from 'react';
import { Box, Card, Typography, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const skillGroups = [
  { category: 'Languages', items: ['C++', 'Python', 'Java', 'SQL', 'Bash'] },
  { category: 'Frontend', items: ['React (ReactJS)', 'JavaScript', 'HTML', 'CSS'] },
  {
    category: 'Backend & APIs',
    items: ['Spring Boot', 'FastAPI', 'REST APIs', 'gRPC', 'Microservices', 'Hibernate/JPA'],
  },
  {
    category: 'Systems & Design',
    items: [
      'Distributed Systems',
      'Concurrency & Multithreading',
      'Replication & Sharding',
      'Load Balancing',
      'Event-Driven & Pub/Sub Architecture',
      'Caching',
    ],
  },
  { category: 'Security & Testing', items: ['JWT', 'Spring Security', 'JUnit', 'Mockito'] },
  { category: 'Databases & Caching', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'Kafka', 'Linux', 'Git'] },
];

function Skills() {
  return (
    <Box component="section" id="skills" sx={{ overflow: 'hidden' }}>
      <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, textAlign: 'center', mb: 4 }}>
        Skills
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: 2.5,
          maxWidth: 1000,
          mx: 'auto',
        }}
      >
        {skillGroups.map((group, index) => (
          <Card
            key={group.category}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: (index % 6) * 0.05, ease: 'easeOut' }}
            sx={{ p: 2.5, height: '100%' }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, color: 'primary.main', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '0.78rem' }}
            >
              {group.category}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {group.items.map((item) => (
                <Chip key={item} label={item} size="small" sx={{ bgcolor: 'action.hover', fontWeight: 500 }} />
              ))}
            </Stack>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
