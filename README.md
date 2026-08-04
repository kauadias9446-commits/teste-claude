# Dias K — MVP (GitHub Edition)

A premium MVP for Dias K: AI for continuous personal evolution.

This repository contains a Next.js + TypeScript starter focused on a cinematic marketing landing and an interactive demo (dashboard + chat). The scaffold emphasizes performance, accessibility, modular architecture, and readiness for IA integration.

Quickstart (development)

Requirements
- Node.js 18+ (recommended)
- pnpm (recommended) or npm/yarn

Install

```bash
# from repo root
cd apps/web
pnpm install
pnpm prisma:generate
pnpm dev
```

Environment
Copy .env.example to .env.local and fill the values.

Scripts (apps/web)
- pnpm dev — run development server
- pnpm build — production build
- pnpm start — start built app
- pnpm lint — run ESLint
- pnpm prisma:migrate — run Prisma migrations
- pnpm prisma:generate — generate Prisma client
- pnpm seed — run seed script

Design & Tech
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- NextAuth (auth scaffold)
- Framer Motion (animations)

Structure (high level)
- apps/web — Next.js application (marketing + protected app)
- prisma — schema and seed
- .github — CI workflows

License
MIT

Contributing
See CONTRIBUTING.md (coming soon).
