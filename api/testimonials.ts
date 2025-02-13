import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { pool } from '../server/db';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    if (req.method === 'GET') {
      const testimonials = await storage.getTestimonials();
      return res.json(testimonials);
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Testimonials API Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  } finally {
    // Ensure we close the pool connection in serverless environment
    await pool.end();
  }
}