// src/components/Projects.js
import React from 'react';
import { Box, Card, CardContent, Typography, Button, Stack, Chip, List, ListItem } from '@mui/material';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaGithub } from 'react-icons/fa';

const accentGradients = [
  'linear-gradient(90deg, #22d3ee, #6366f1)',
  'linear-gradient(90deg, #a855f7, #ec4899)',
  'linear-gradient(90deg, #f59e0b, #ef4444)',
];

const featuredProjects = [
  {
    title: 'Strife — Secure Distributed Payment Gateway',
    tech: ['Python', 'FastAPI', 'gRPC', 'Kafka', 'Docker', 'AWS'],
    points: [
      'Built a scalable payment microservices backend with gRPC, FastAPI gateways, JWT auth, and mutual TLS for secure, low-latency service-to-service communication — deployed on AWS via Docker and a GitHub Actions CI/CD pipeline.',
      'Ensured exactly-once semantics via Two-Phase Commit, idempotency logs, and Kafka retry queues — eliminating double-charge and lost-payment failures under node/network failure.',
    ],
    repoLink: 'https://github.com/karunsehwag/strife',
  },
  {
    title: 'Distributed File Storage System',
    tech: ['C++', 'MPI', 'Linux', 'IPC', 'Replication', 'Fault Tolerance'],
    points: [
      'Built a fault-tolerant distributed storage system in C++/MPI with 3x replication, heartbeat-based failure detection, and automatic node failover.',
      'Non-blocking chunk retrieval with replica fallback sustained 100% read availability through single-node failures.',
    ],
    repoLink: 'https://github.com/karunsehwag/Distributed-File-System',
  },
  {
    title: 'Real-Time Messaging App',
    tech: ['React', 'Redux', 'Node.js', 'Express', 'Socket.IO', 'MongoDB'],
    points: [
      'Built a full-stack real-time chat platform — React/Redux frontend and Express/MongoDB backend with one-to-one and group messaging over Socket.IO WebSockets, JWT authentication, and Cloudinary-backed media sharing.',
    ],
    repoLink: 'https://github.com/karunsehwag/messaging-app',
  },
];

const otherProjects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Material UI.',
    liveLink: 'https://portfolio-1ewv.vercel.app/',
    repoLink: 'https://github.com/karunsehwag/Portfolio',
  },
  {
    title: 'Job Seeker',
    description:
      'Aggregates live SDE1 / entry-level software engineering job openings across Hyderabad, Delhi, Gurugram, Noida, and Bengaluru into a single searchable page, pulling from Amazon, Microsoft, Apple, Instahyre, JSearch, and ~35 companies on Greenhouse/Lever/Ashby/SmartRecruiters.',
    liveLink: 'https://karunsehwag.github.io/job-seeker/',
    repoLink: 'https://github.com/karunsehwag/job-seeker',
  },
  {
    title: 'Seam Carver',
    description:
      'A seam carving algorithm for content-aware image resizing, built with C++ and OpenCV to identify and remove the least important pixels (seams) from images while preserving key visual elements.',
    liveLink: 'https://seam-carving-1.onrender.com/',
    repoLink: 'https://github.com/karunsehwag/seam_carving',
  },
  {
    title: 'Bitspeed',
    description: 'Identity-reconciliation backend (contact linking service) built with Express and Prisma.',
    repoLink: 'https://github.com/karunsehwag/bitspeed',
  },
  {
    title: 'Kids Game',
    description:
      'Interactive kids’ games — "Spot the Difference", "Match Pairs", and "What Goes Together" — built with HTML, CSS, and JavaScript to build cognitive skills like memory, association, and attention to detail.',
    liveLink: 'https://karunsehwag.github.io/kids-game/',
    repoLink: 'https://github.com/karunsehwag/kids-game',
  },
  {
    title: 'E-commerce Website',
    description: 'A PHP e-commerce site with cart, checkout, and admin panel.',
    repoLink: 'https://github.com/karunsehwag/E-commerce-website',
  },
  {
    title: 'Environment Tracker',
    description: 'A climate-change tracking app with a Node.js backend.',
    repoLink: 'https://github.com/karunsehwag/ENVIRONMENT',
  },
  {
    title: 'POSIX Shell',
    description: 'A POSIX-like shell implemented in C++, supporting cd, ls, echo, pipes, and search.',
    repoLink: 'https://github.com/karunsehwag/posix-shell',
  },
  {
    title: 'LeetCode Daily',
    description: '300+ solved LeetCode problems in C++, organized by problem number.',
    repoLink: 'https://github.com/karunsehwag/leetcode_daily',
  },
  {
    title: 'Student Interaction Portal',
    description: 'A mini social interaction portal for students with an ask-me option and a blog option.',
    repoLink: 'https://github.com/karunsehwag/-STUDENT-INTERACTION-PORTAL',
  },
  {
    title: 'Books Library',
    description: 'A web application for managing a personal book library, built with Node.js and Express.',
    repoLink: 'https://github.com/serc-courses/se-project-1--_27',
  },
];

const moreRepos = [
  { name: 'chat-app', url: 'https://github.com/karunsehwag/chat-app' },
  { name: 'login_page', url: 'https://github.com/karunsehwag/login_page' },
  { name: 'QuickRefs', url: 'https://github.com/karunsehwag/QuickRefs' },
  { name: 'rsai', url: 'https://github.com/karunsehwag/rsai' },
  { name: 'just', url: 'https://github.com/karunsehwag/just' },
  { name: 'project', url: 'https://github.com/karunsehwag/project' },
  { name: 'Tutorial', url: 'https://github.com/karunsehwag/Tutorial' },
  { name: 'books-work-report', url: 'https://github.com/karunsehwag/books-work-report' },
  { name: 'SSD_23_2023201038', url: 'https://github.com/karunsehwag/SSD_23_2023201038' },
  {
    name: 'Task-8-Timeline-analysis-covid-19',
    url: 'https://github.com/karunsehwag/Task-8-Timeline-analysis-covid-19-',
  },
];

function Projects() {
  return (
    <Box component="section" id="projects" sx={{ overflow: 'hidden' }}>
      <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, textAlign: 'center', mb: 4 }}>
        Projects
      </Typography>

      <Stack spacing={2.5} sx={{ maxWidth: 850, mx: 'auto', mb: 6 }}>
        {featuredProjects.map((project, index) => (
          <Card
            key={project.title}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            sx={{
              p: { xs: 2.5, md: 3.5 },
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: accentGradients[index % accentGradients.length],
              },
            }}
          >
            <Typography
              sx={{
                position: 'absolute',
                top: { xs: 8, md: 4 },
                right: { xs: 12, md: 20 },
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1,
                color: 'text.primary',
                opacity: 0.06,
                userSelect: 'none',
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, pr: 4 }}>
              {project.title}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
              {project.tech.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  size="small"
                  sx={{ bgcolor: 'action.hover', fontWeight: 600, fontSize: '0.72rem' }}
                />
              ))}
            </Stack>
            <List sx={{ p: 0, mb: 2 }}>
              {project.points.map((point) => (
                <ListItem
                  key={point}
                  sx={{
                    display: 'list-item',
                    listStyleType: 'disc',
                    ml: 2.5,
                    p: 0,
                    mb: 1,
                    color: 'text.secondary',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                  }}
                >
                  {point}
                </ListItem>
              ))}
            </List>
            <Button
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              startIcon={<FaCode size={13} />}
            >
              Source
            </Button>
          </Card>
        ))}
      </Stack>

      <Typography variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 700, mb: 3, color: 'text.secondary' }}>
        More Projects
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {otherProjects.map((project, index) => (
          <Card
            key={project.title}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: (index % 6) * 0.06, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', whiteSpace: 'pre-line', mb: 2.5, flexGrow: 1 }}
              >
                {project.description}
              </Typography>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                {project.liveLink && (
                  <Button
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="small"
                    startIcon={<FaExternalLinkAlt size={13} />}
                  >
                    Live
                  </Button>
                )}
                {project.repoLink && (
                  <Button
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="small"
                    startIcon={<FaCode size={13} />}
                  >
                    Source
                  </Button>
                )}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 2 }}>
          More on GitHub
        </Typography>
        <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap justifyContent="center">
          {moreRepos.map((repo) => (
            <Chip
              key={repo.name}
              component="a"
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              clickable
              icon={<FaGithub />}
              label={repo.name}
              variant="outlined"
              sx={{ '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default Projects;
