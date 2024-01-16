// pages/api/images.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const images = await prisma.image.findMany();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}
