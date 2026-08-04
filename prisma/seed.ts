import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
  const user = await prisma.user.upsert({
    where: { email: 'demo@dias-k.local' },
    update: {},
    create: {
      email: 'demo@dias-k.local',
      name: 'Demo User'
    }
  })

  await prisma.plan.create({
    data: {
      userId: user.id,
      title: 'Primeiros passos para evolução',
      progress: 24
    }
  })

  console.log('Seed concluído')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
