# Guia rápido para preparar o site para rodar (PRs em Draft)

Resumo
- Criei uma branch "chore/prepare-deploy" com um workflow de CI que valida build e inclui um job manual para aplicar migrations via workflow_dispatch.
- As branches com código estão em:
  - feat/auth-prisma (autenticação + Prisma)
  - feat/api-ia (API de IA)

O que falta (você precisa confirmar / adicionar antes do deploy)
- Adicionar as variáveis de ambiente no Vercel ou no GitHub Secrets:
  - DATABASE_URL (postgresql://user:pass@host:port/dbname)
  - NEXTAUTH_URL
  - NEXTAUTH_SECRET
  - GITHUB_CLIENT_ID
  - GITHUB_CLIENT_SECRET
  - EMAIL_SERVER
  - EMAIL_FROM
  - OPENAI_API_KEY

- Decidir se quer aplicar migrations automaticamente em production. Recomendo migrar manualmente e usar o job `Apply Prisma Migrations` no workflow (disponível via Actions → Run workflow).

Como abrir os PRs como Draft (CLI)
- Abra PR Draft para auth:
  gh pr create --base main --head feat/auth-prisma --title "feat(auth+prisma): NextAuth + Prisma" --body "Scaffold de autenticação, modelos Prisma e seed. Ver README para instruções." --draft

- Abra PR Draft para API IA:
  gh pr create --base main --head feat/api-ia --title "feat(api): add /api/ai proxy to OpenAI" --body "Endpoint server-side para proxiar requisições à OpenAI (requere sessão)." --draft

Se preferir abrir via UI (GitHub Web): vá em Pull requests → New pull request → compare branch (feat/auth-prisma) → Draft pull request → Create.

Como proceder após adicionar secrets
1) Revise os PRs e faça merge em main quando pronto.
2) Para aplicar migrations em produção manualmente via Actions:
   - Vá em Actions → CI / Build → Run workflow → escolha branch main e clique Run.
   - Isso executará o job `apply_migrations` que usa DATABASE_URL do Secrets.

Notas de segurança
- Não adicione secrets nos arquivos do repo. Use Vercel Environment Variables ou GitHub Secrets.
- O workflow inclui um job manual para migrations; não aplicamos migrations automaticamente por segurança.

Se quiser que eu crie os PRs Draft para você eu posso (preciso que autorize via gh CLI ou conceda permissões). Caso prefira que eu crie as PRs, responda: "Criar PRs".
