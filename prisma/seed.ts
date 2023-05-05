import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  const newPost = await prisma.post.create({
    data: {
      url: 'www.isaaccortes.com',
    },
  });
}
