import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method === 'GET') {
    const testimonials = await storage.getTestimonials();
    return res.json(testimonials);
  }
  
  return res.status(405).json({ message: 'Method not allowed' });
}
