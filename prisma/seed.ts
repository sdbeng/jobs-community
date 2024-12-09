import { db } from '@/lib/db'

async function main() {
  await db.project.create({
    data: {
      name: 'Jobs Community App',
      description: 'Ongoing project to implement several views: a chat assistant and a list of projects. Built with Next.js v.15.',
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
})
  .finally(async () => {
    await db.$disconnect()
  })

//   run cmd: npx ts-node prisma/seed.ts