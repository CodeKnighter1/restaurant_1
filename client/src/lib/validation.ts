import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string().min(2).max(20),
  email: z.string().min(2).max(50),
  password: z.string().min(6).max(12),
});
export const loginSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(6).max(12),
});
export const forgotPasswordSchema = z.object({
  email: z.string().min(2).max(50),
});