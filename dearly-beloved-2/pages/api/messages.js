import { PrismaClient } from '@prisma/client';

// Initialize PrismaClient
const prisma = new PrismaClient();

export default async function messages(req, res) {
    try {
      // Query the database for all images
      const messages = await prisma.Messages.findMany({
        select: {
          messageID: true,
          name: true,  // Assuming this is the correct column name for the image path
          phone: true,          // Assuming this is the correct column name for the image name
          email: true,
          message: true,
          date: true,
        },
      });
      console.log('messages fetched');
      // If the images array is empty, send a 404 response
      if (messages.length === 0) {
        return res.status(404).json({ message: 'No messages found' });
      }
  
      // Respond with the image data as JSON
      res.status(200).json(messages);
    } catch (error) {
      // Log the error to the server console
      console.error('Failed to fetch messages:', error);
  
      // Respond with a 500 status code and an error message
      res.status(500).json({ error: 'Failed to fetch messages' });
    }
  }
