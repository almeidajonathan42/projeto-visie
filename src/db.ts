import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = 
globalForPrisma.prisma ??
new PrismaClient({
    log: ['query'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// This is needed because of this: https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices