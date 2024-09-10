import z from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(), // Espera uma string/URL
});

/* O parse verifica se dentro do process.env existe a variável de ambiente solicitada */
export const env = envSchema.parse(process.env);
