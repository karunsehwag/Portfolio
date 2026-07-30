// src/components/OpenSource.js
import React from 'react';
import { Box, Card, CardContent, Typography, Stack, Chip, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiKubernetes, SiRedis, SiSpring, SiOpenapiinitiative } from 'react-icons/si';

const ossData = [
  {
    project: 'Kubernetes',
    repo: 'kubernetes/kubernetes',
    url: 'https://github.com/kubernetes/kubernetes',
    icon: SiKubernetes,
    color: '#326CE5',
    summary:
      '1 merged PR fixing a nil-pointer panic in e2e node restart tests; 3 open PRs including a kubelet credential-exposure fix under SIG Node review.',
    prs: [
      {
        title: 'e2e_node: fix nil pointer panic in StandaloneMode restart test',
        url: 'https://github.com/kubernetes/kubernetes/pull/140259',
        status: 'Merged',
      },
      {
        title: 'kubelet: stop logging raw HTTP probe header values (credential exposure)',
        url: 'https://github.com/kubernetes/kubernetes/pull/140196',
        status: 'Open',
      },
      {
        title: 'kube-aggregator: restrict external APIService OpenAPI v3 discovery',
        url: 'https://github.com/kubernetes/kubernetes/pull/140324',
        status: 'Open',
      },
      {
        title: 'kubelet: only track pod certificates for admitted pods',
        url: 'https://github.com/kubernetes/kubernetes/pull/140318',
        status: 'Open',
      },
    ],
  },
  {
    project: 'Lettuce (Redis)',
    repo: 'redis/lettuce',
    url: 'https://github.com/redis/lettuce',
    icon: SiRedis,
    color: '#DC382D',
    summary:
      '3 merged PRs: fixed quadratic key-order restoration in reactive MGET, native transport selection, and Redis Cluster topology-refresh handling.',
    prs: [
      {
        title: 'Fix quadratic key-order restoration in cluster reactive MGET',
        url: 'https://github.com/redis/lettuce/pull/3819',
        status: 'Merged',
      },
      {
        title: 'Align native transport option selection with default order',
        url: 'https://github.com/redis/lettuce/pull/3818',
        status: 'Merged',
      },
      {
        title: 'Reset topology-refresh in-progress flag on synchronous exception',
        url: 'https://github.com/redis/lettuce/pull/3817',
        status: 'Merged',
      },
    ],
  },
  {
    project: 'OpenAPI Generator',
    repo: 'OpenAPITools/openapi-generator',
    url: 'https://github.com/OpenAPITools/openapi-generator',
    icon: SiOpenapiinitiative,
    color: '#6BA539',
    summary: '2 merged PRs (v7.24.0): cpp-httplib-server enum serialization and AsciiDoc pipe escaping via a Mustache lambda.',
    prs: [
      {
        title: 'fix(cpp-httplib-server): serialize enums using spec values',
        url: 'https://github.com/OpenAPITools/openapi-generator/pull/24187',
        status: 'Merged',
      },
      {
        title: 'fix(asciidoc): escape table cell pipes in generated docs',
        url: 'https://github.com/OpenAPITools/openapi-generator/pull/24184',
        status: 'Merged',
      },
    ],
  },
  {
    project: 'Spring Framework',
    repo: 'spring-projects/spring-framework',
    url: 'https://github.com/spring-projects/spring-framework',
    icon: SiSpring,
    color: '#6DB33F',
    summary: 'Open PR fixing ImportHttpServices to exclude concrete classes.',
    prs: [
      {
        title: 'Ignore concrete classes in ImportHttpServices scanning',
        url: 'https://github.com/spring-projects/spring-framework/pull/37006',
        status: 'Open',
      },
    ],
  },
];

function StatusChip({ status }) {
  const isMerged = status === 'Merged';
  return (
    <Chip
      label={status}
      size="small"
      sx={{
        height: 20,
        fontSize: '0.7rem',
        fontWeight: 700,
        color: isMerged ? '#0d9488' : '#a855f7',
        bgcolor: isMerged ? 'rgba(34,211,238,0.15)' : 'rgba(168,85,247,0.15)',
      }}
    />
  );
}

function OpenSource() {
  return (
    <Box component="section" id="open-source">
      <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, textAlign: 'center', mb: 1 }}>
        Open Source Contributions
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', mb: 4, maxWidth: 600, mx: 'auto' }}>
        Merged and in-review pull requests to production infrastructure projects used by millions of developers.
      </Typography>
      <Stack spacing={2.5} sx={{ maxWidth: 900, mx: 'auto' }}>
        {ossData.map((entry, index) => (
          <Card
            key={entry.project}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
          >
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                <Box sx={{ color: entry.color, fontSize: '1.6rem', display: 'flex' }}>
                  <entry.icon />
                </Box>
                <Link
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ fontWeight: 700, fontSize: '1.1rem', color: 'text.primary' }}
                >
                  {entry.repo}
                </Link>
              </Stack>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                {entry.summary}
              </Typography>
              <Stack spacing={1.2}>
                {entry.prs.map((pr) => (
                  <Stack
                    key={pr.url}
                    direction="row"
                    spacing={1.2}
                    alignItems="center"
                    component="a"
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textDecoration: 'none',
                      color: 'text.secondary',
                      fontSize: '0.92rem',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    <StatusChip status={pr.status} />
                    <Typography variant="body2" sx={{ flexGrow: 1, color: 'inherit' }}>
                      {pr.title}
                    </Typography>
                    <FaExternalLinkAlt size={11} style={{ flexShrink: 0, opacity: 0.6 }} />
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default OpenSource;
