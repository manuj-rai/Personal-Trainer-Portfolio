import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertContactSchema } from '../shared/schema';
import { pool } from '../server/db';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    if (req.method === 'POST') {
      const result = insertContactSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid contact form data" });
      }

      const contact = await storage.createContact({
        ...result.data,
        date: new Date()
      });

      return res.json(contact);
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Contact API Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  } finally {
    // Ensure we close the pool connection in serverless environment
    await pool.end();
  }
}