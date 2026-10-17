import 'dotenv/config';

console.log('Working directory:', process.cwd());
console.log('MONGO_URI loaded:', Boolean(process.env.MONGO_URI));

if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is missing from .env');
}