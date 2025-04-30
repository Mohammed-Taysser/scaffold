import dotenv from 'dotenv';
import { Configuration } from 'types/app';
import z from 'zod';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.coerce.number().int().positive(),
  DATABASE_URL: z.string().url(),
});

// Parse and validate environment variables
const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error('\n❌ Configuration Validation Error:\n');

  result.error.errors.forEach((err) => {
    console.error(
      ` 🔴 Field: ${err.path.join('.')}\n    ❗ Error: ${err.message}`,
    );
  });

  console.error(
    '\n💡 Fix the above errors in your .env file and restart the server.\n',
  );
  process.exit(1); // Stop execution due to invalid configuration
}

const CONFIG: Configuration = Object.freeze({
  env: result.data.NODE_ENV,
  server: {
    port: result.data.PORT,
    databaseUrl: result.data.DATABASE_URL,
  },
});

export default CONFIG;
