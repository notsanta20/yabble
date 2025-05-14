import { z } from "zod";

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
  .refine((data) => data.password === data.confirmPassword, {
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
