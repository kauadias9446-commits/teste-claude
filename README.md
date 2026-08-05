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


1. PR Draft — auth + prismagh pr create –base main –head feat/auth-prisma –title “feat(auth+prisma): NextAuth + Prisma” –body $‘Scaffold de autenticação com NextAuth e adapter Prisma.\n\nO que inclui:\n- Modelos Prisma (User, Account, Session, VerificationToken) e modelos de app\n- prisma/seed.ts (usuário demo + seed de plano)\n- pages/api/auth/[…nextauth].ts (NextAuth)\n- middleware e helper de sessão\n\nChecklist:\n- [ ] Adicionar secrets (DATABASE_URL, NEXTAUTH_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, EMAIL_SERVER, EMAIL_FROM)\n- [ ] Rodar migrações / seed localmente ou via Actions\n\nInstruções de teste: ver apps/web/READY_FOR_DEPLOY.md’ –draft –label “feature/auth” –reviewer kauadias9446-commits

Compare URL (web):https://github.com/kauadias9446-commits/teste-claude/compare/main…feat/auth-prisma

2. PR Draft — API IAgh pr create –base main –head feat/api-ia –title “feat(api): add /api/ai proxy to OpenAI” –body $‘Endpoint server-side /api/ai que proxya para OpenAI.\n\nO que inclui:\n- apps/web/pages/api/ai/index.ts (validação, rate-limit in-memory, exige sessão)\n- apps/web/lib/server/rateLimit.ts\n\nChecklist:\n- [ ] Adicionar OPENAI_API_KEY em Secrets\n- [ ] Revisar limites e trocar rate limiter por Redis em produção\n\nExemplo curl no README.’ –draft –label “feature/api” –reviewer kauadias9446-commits

Compare URL (web):https://github.com/kauadias9446-commits/teste-claude/compare/main…feat/api-ia

3. PR Draft — CI / prepare-deploy (opcional)gh pr create –base main –head chore/prepare-deploy –title “chore(ci): add CI workflow and deploy guide” –body $‘Adiciona workflow CI (build) e job manual para aplicar migrações via workflow_dispatch.\n\nChecklist:\n- [ ] Adicionar DATABASE_URL em GitHub Secrets (ou usar Vercel envs)\n- [ ] Executar Apply Prisma Migrations manualmente via Actions após merge’ –draft –label “chore/ci” –reviewer kauadias9446-commits
