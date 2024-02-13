// Import PrismaClient
import { PrismaClient } from '@prisma/client';

// Initialize PrismaClient
const prisma = new PrismaClient();

// API route handler
export default async function images(req, res) {
  try {
    // Query the database for all images
    const images = await prisma.image.findMany({
      select: {
        id: true,
        path_display: true,  // Assuming this is the correct column name for the image path
        name: true,          // Assuming this is the correct column name for the image name
        width: true,
        height: true,
      },
    });
    console.log('images fetched');
    // If the images array is empty, send a 404 response
    if (images.length === 0) {
      return res.status(404).json({ message: 'No images found' });
    }

    // Check if Content-Disposition header already exists
    if (!res.getHeader('Content-Disposition')) {
      // Set Content-Disposition header if it doesn't already exist
      res.setHeader('Content-Disposition', 'inline');
    }

    // Respond with the image data as JSON
    res.status(200).json(images);
  } catch (error) {
    // Log the error to the server console
    console.error('Failed to fetch images:', error);

    // Respond with a 500 status code and an error message
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}
