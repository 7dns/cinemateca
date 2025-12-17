import { MongoClient } from 'mongodb';
import { DATABASE } from './constants.js';

// Use environment variable in production, fallback to constants for local dev
const uri = process.env.MONGODB_URI || DATABASE.URI;
const client = new MongoClient(uri);

await client.connect();
export const database = client.db(DATABASE.NAME);

console.log(`Connected to Database: ${DATABASE.NAME}`);