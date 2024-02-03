// pages/api/upload.js
import nextConnect from 'next-connect';
import multer from 'multer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const upload = multer({
  storage: multer.diskStorage({
    destination: '../public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const handler = nextConnect()
  .use(upload.array('files'))
  .post(async (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
      return res.status(400).send('No files uploaded.');
    }

    // Store each image metadata in the database
    const imagePromises = files.map(file => 
      prisma.image.create({
        data: { url: `../public/uploads/${file.filename}` },
      })
    );

    try {
      const images = await Promise.all(imagePromises);
      res.status(200).json({ message: 'Images uploaded successfully', images });
    } catch (error) {
      res.status(500).json({ error: 'Failed to upload images' });
    }
  });

export default handler;
