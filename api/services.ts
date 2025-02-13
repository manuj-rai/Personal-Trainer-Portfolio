import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method === 'GET') {
    const services = await storage.getServices();
    return res.json(services);
  }
  
  return res.status(405).json({ message: 'Method not allowed' });
}
