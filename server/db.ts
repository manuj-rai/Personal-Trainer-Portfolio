import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

// This is required for Neon serverless to work in Edge functions
neonConfig.webSocketConstructor = ws;

// Check if we're in development or production
const isDev = process.env.NODE_ENV === 'development';

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Configure the pool with specific settings for serverless environment
const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 5000, // Reduce connection timeout for serverless
  max: 1, // Limit pool size for serverless environment
});

export const db = drizzle({ client: pool, schema });

// Export pool to allow proper cleanup
export { pool };