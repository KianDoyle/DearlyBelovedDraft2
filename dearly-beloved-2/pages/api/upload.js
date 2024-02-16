// // pages/api/upload.js
// // import nextConnect from 'next-connect';
// // import multer from 'multer';
// // import { PrismaClient } from '@prisma/client';

// // const prisma = new PrismaClient();

// // const upload = multer({
// //   storage: multer.diskStorage({
// //     destination: '../public/uploads',
// //     filename: (req, file, cb) => cb(null, file.originalname),
// //   }),
// // });

// // const handler = nextConnect()
// //   .use(upload.array('files'))
// //   .post(async (req, res) => {
// //     const files = req.files;
// //     if (!files || files.length === 0) {
// //       return res.status(400).send('No files uploaded.');
// //     }

// //     // Store each image metadata in the database
// //     const imagePromises = files.map(file => 
// //       prisma.image.create({
// //         data: { url: `../public/uploads/${file.filename}` },
// //       })
// //     );

// //     try {
// //       const images = await Promise.all(imagePromises);
// //       res.status(200).json({ message: 'Images uploaded successfully', images });
// //     } catch (error) {
// //       res.status(500).json({ error: 'Failed to upload images' });
// //     }
// //   });

// // export default handler;


// // pages/api/upload.js
// import nextConnect from 'next-connect';
// import multer from 'multer';
// import sharp from 'sharp';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: './public/uploads', // Make sure this path is correct
//     filename: (req, file, cb) => cb(null, file.originalname),
//   }),
// });

// const handler = nextConnect()
//   .use(upload.array('files'))
//   .post(async (req, res) => {
//     const files = req.files;
//     if (!files || files.length === 0) {
//       return res.status(400).send('No files uploaded.');
//     }

//     const imagePromises = files.map(async (file) => {
//       const { width, height } = await sharp(file.path).metadata();
//       return prisma.image.create({
//         data: {
//           path_display: `${file.filename}`,
//           name: `Image ${file.filename}`,
//           width, // Storing width
//           height, // Storing height
//         },
//       });
//     });

//     try {
//       const images = await Promise.all(imagePromises);
//       res.status(200).json({ message: 'Images uploaded successfully', images });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to upload images' });
//     }
//   });

// export default handler;

// pages/api/upload.js
// import nextConnect from 'next-connect';
// const nextConnect = require('next-connect');;
// const multer = require('multer');;
// import fs from 'fs';
// import path from 'path';

// const uploadDirectory = path.join(process.cwd(), 'public/uploads');

// // Ensure upload directory exists
// if (!fs.existsSync(uploadDirectory)) {
//   fs.mkdirSync(uploadDirectory, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDirectory);
//   },
//   filename: (req, file, cb) => {
//     // Sanitize the file name or use as is for simplicity
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// const handler = nextConnect()
//   .use(upload.array('files')) // 'files' is the name attribute from your form
//   .post((req, res) => {
//     const files = req.files;
//     if (!files || files.length === 0) {
//       return res.status(400).json({ error: 'No files uploaded.' });
//     }

//     try {
//       const uploadedFiles = files.map(file => file.originalname);
//       res.status(200).json({ message: 'Files uploaded successfully', files: uploadedFiles });
//     } catch (error) {
//       console.error('Upload error:', error);
//       res.status(500).json({ error: 'Internal server error during file upload' });
//     }
//   });

// export default handler;


// const nextConnect = require('next-connect');
// const multer = require('multer');

// const upload = multer({
//   dest: 'public/uploads/', // Use a simple destination to avoid complications
// });

// const handler = nextConnect();

// handler.use(upload.array('files'));

// handler.post((req, res) => {
//   if (!req.files || req.files.length === 0) {
//     return res.status(400).json({ error: 'No files uploaded.' });
//   }
//   // Respond with file details for confirmation
//   const fileInfo = req.files.map(file => ({ filename: file.filename, path: file.path }));
//   res.status(200).json({ message: 'Files uploaded successfully', files: fileInfo });
// });

// export default handler;




import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Configure storage for multer
const uploadDirectory = path.join(process.cwd(), 'public');

// Ensure the upload directory exists
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDirectory),
  filename: (req, file, cb) => cb(null, file.originalname), // Use the original file name
});

const upload = multer({ storage }).array('files');

export const config = {
  api: {
    bodyParser: false, // Disabling bodyParser to allow multer to parse multipart/form-data
  },
};

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: 'An unknown error occurred during the file upload.' });
    }

    // Process the uploaded files and add entries to the database
    try {
      const imageEntries = req.files.map(async (file) => {
        return await prisma.image.create({
          data: {
            name: file.originalname, // Assuming 'name' is the field in your Image model for the file name
            path_display: file.filename,
            
            // Add other fields as necessary, e.g., path: file.path, etc.
          },
        });
      });

      await Promise.all(imageEntries);

      res.status(200).json({ message: 'Files uploaded and database entries created successfully', files: req.files.map(file => file.originalname) });
    } catch (dbError) {
      console.error('Database error:', dbError);
      res.status(500).json({ error: 'Failed to create database entries for uploaded files.' });
    }
  });
}
