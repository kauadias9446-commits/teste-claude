# Dias K — MVP (GitHub Edition)

## Configuração (Auth + Database)

Para rodar localmente com autenticação e banco de dados, siga estes passos:

1) Crie um arquivo de ambiente em apps/web/.env.local copiando o exemplo:

   cp .env.example apps/web/.env.local

2) Preencha as variáveis obrigatórias no .env.local ou nas Environment Variables do Vercel:

   - DATABASE_URL (postgresql://user:password@host:port/dbname)
   - NEXTAUTH_URL (ex.: http://localhost:3000)
   - NEXTAUTH_SECRET (uma string forte)
   - GITHUB_CLIENT_ID
   - GITHUB_CLIENT_SECRET
   - EMAIL_SERVER (ex.: smtp://user:pass@smtp.provider:587)
   - EMAIL_FROM (ex.: "Dias K <no-reply@your-domain.com>")
   - OPENAI_API_KEY (para integração de IA)

3) Instale dependências e gere o cliente Prisma:

   cd apps/web
   pnpm install
   pnpm prisma:generate

4) Rode as migrations locais e o seed:

   pnpm prisma:migrate dev --name nextauth
   pnpm seed

5) Rode o servidor de desenvolvimento:

   pnpm dev


## Observações
- As migrations serão geradas na branch feat/auth-prisma. Se você preferir revisar antes de rodá-las, fique à vontade para abrir o PR e executar as migrações localmente.
- Para deploy em Vercel, adicione as mesmas variáveis de ambiente no painel do projeto (Settings → Environment Variables).

