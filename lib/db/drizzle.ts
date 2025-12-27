import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.POSTGRES_URL) {
  // Use a dummy connection string for build time if the env var is missing
  // This prevents the build from failing during static generation where the DB isn't actually used
  console.warn('POSTGRES_URL is not set. Using dummy connection for build.');
  process.env.POSTGRES_URL = 'postgres://user:password@localhost:5432/db';
}

export const client = postgres(process.env.POSTGRES_URL);
export const db = drizzle(client, { schema });
