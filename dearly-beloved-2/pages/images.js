// // pages/api/images.js
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   try {
//     const images = await prisma.image.findMany();
//     res.status(200).json(images);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch images' });
//   }
// }

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    // Query the database for all images
    const images = await prisma.image.findMany({
      select: {
        path_display: true,  // Assuming 'fileName' is the column name for the image file name
        name: true,   // Assuming 'altText' is the column name for the alt text (optional)
        // Include other fields as necessary
      },
    });

    // Respond with the image data as JSON
    res.status(200).json(images);
  } catch (error) {
    // Handle any errors
    console.error('Failed to fetch images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}
