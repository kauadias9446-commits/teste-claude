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
Implementa a Hero cinematográfica da Dias K com as cores da marca (preto + dourado) e prepara o preview do produto (client-only, lazy-load).

Principais mudanças

• Adiciona tokens de design (apps/web/design/tokens.ts) com cores e motion tokens.

• Atualiza globals.css para usar as cores da marca e respeitar prefers-reduced-motion.

• Atualiza o componente Hero (apps/web/components/Hero.tsx) para usar a paleta preto/dourado e CTAs acessíveis.

• Branch: feat/hero-cinematic

O que falta (próximo trabalho)

• Implementar PreviewSandbox.client (mini-dashboard interativo, client-only).

• Criar Button atom e componentes reutilizáveis (atoms → molecules → organisms).

• Adicionar assets SVG otimizados e placeholders.

• Testes unitários e ajustes de performance (code-splitting do preview).

Checklist de revisão

• Acessibilidade: foco keyboard, aria-labels e contraste verificados

• prefers-reduced-motion respeitado

• Hero renderiza corretamente em mobile/desktop

• Cores da marca aplicadas e consistentes (preto #000000, dourado #C59D5F)

• Código limpo e tipado (TypeScript)

• Lighthouse (Desktop) — revisão de payload para manter score alto

• Testes manuais básicos (abrir /, clicar CTAs, navegar via teclado)


Comandos (GitHub CLI)

1. Atualize e faça checkout na branch:git fetch origingit checkout feat/hero-cinematic

2. Crie o PR (usa gh CLI). Execute exatamente (contendo newline heredoc):gh pr create –repo kauadias9446-commits/teste-claude –base main –head feat/hero-cinematic –title “feat(hero): cinematic hero + preview sandbox” –body “$(cat <<‘BODY’Implementa a Hero cinematográfica da Dias K com as cores da marca (preto + dourado) e prepara o preview do produto (client-only, lazy-load).

Principais mudanças

• Adiciona tokens de design (apps/web/design/tokens.ts) com cores e motion tokens.

• Atualiza globals.css para usar as cores da marca e respeitar prefers-reduced-motion.

• Atualiza o componente Hero (apps/web/components/Hero.tsx) para usar a paleta preto/dourado e CTAs acessíveis.

O que falta (próximo trabalho)

• Implementar PreviewSandbox.client (mini-dashboard interativo, client-only).

• Criar Button atom e componentes reutilizáveis (atoms → molecules → organisms).

• Adicionar assets SVG otimizados e placeholders.

• Testes unitários e ajustes de performance (code-splitting do preview).

Checklist de revisão

• Acessibilidade: foco keyboard, aria-labels e contraste verificados

• prefers-reduced-motion respeitado

• Hero renderiza corretamente em mobile/desktop

• Cores da marca aplicadas e consistentes (preto #000000, dourado #C59D5F)

• Código limpo e tipado (TypeScript)

• Lighthouse (Desktop) — revisão de payload para manter score alto

• Testes manuais básicos (abrir /, clicar CTAs, navegar via teclado)BODY)” –reviewer kauadias9446-commits –label “feature/UI” –label “ux” –label “ready-for-review” –web

Observações

• Optei por abrir o PR “Ready for review”. Se preferir criar como Draft, adicione –draft ao comando.

• Merge strategy recomendado: squash (pode ser escolhido no momento do merge).