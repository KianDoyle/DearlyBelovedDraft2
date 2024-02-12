import { PrismaClient } from '@prisma/client';

// Initialize PrismaClient
const prisma = new PrismaClient();

export default async function bookings(req, res) {
    try {
      // Query the database for all images
      const bookings = await prisma.Booking.findMany({
        select: {
            bookingID: true,
            date: true,
            location: true, 
            price: true,
            name: true,
            phone: true, 
            email: true,
        },
      });
      console.log('bookings fetched');
      // If the images array is empty, send a 404 response
      if (bookings.length === 0) {
        return res.status(404).json({ message: 'No bookings found' });
      }
  
      // Respond with the image data as JSON
      res.status(200).json(bookings);
    } catch (error) {
      // Log the error to the server console
      console.error('Failed to fetch bookings:', error);
  
      // Respond with a 500 status code and an error message
      res.status(500).json({ error: 'Failed to fetch bookings' });
    }
  }