import { z } from "zod/v3";
import type { SignFormData } from "../types/types";

export const signupSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "username need to be at least 3 characters" }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be 8 or more characters long" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be 8 or more characters long" }),
  })
  .refine((data: SignFormData) => data.password === data.confirmPassword, {
    message: "Passwords are not matching",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: "username need to be at least 3 characters" }),
  password: z
    .string()
    .min(8, { message: "Password must be 8 or more characters long" }),
});

export const commentSchema = z.object({
  comment: z.string().min(1, { message: "comment cannot be empty" }),
});

export const messageSchema = z.object({
  message: z.string().min(1, { message: "message cannot be empty" }),
});

export const BioSchema = z.object({
  bio: z.string(),
  profilePic: z.any().optional(),
});

export const postSchema = z.object({
  title: z
    .string()
    .min(2, { message: "title need to be at least 2 characters" })
    .max(30, { message: "title need to be below 30 characters" }),
  description: z.string(),
  img: z.any().optional(),
});
