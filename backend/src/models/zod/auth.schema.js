const zod = require("zod");

const signupSchema = zod.object({
  username: zod
    .string()
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username cannot exceed 20 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),

  email: zod
    .string()
    .email("Invalid email address")
    .max(100, "Email cannot exceed 100 characters"),

  firstName: zod
    .string()
    .min(3, "First name must be at least 3 characters")  // Corrected to 3
    .max(30, "First name cannot exceed 30 characters")
    .regex(/^[a-zA-Z]+$/, "First name can only contain letters"),

  lastName: zod
    .string()
    .min(3, "Last name must be at least 3 characters")  // Corrected to 3
    .max(30, "Last name cannot exceed 30 characters")
    .regex(/^[a-zA-Z]+$/, "Last name can only contain letters"),

  password: zod
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[@$!%*?&]/,
      "Password must contain at least one special character (@, $, %, etc.)"
    ),
});

const signInSchema = zod.object({
  username: zod
    .string()
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username cannot exceed 20 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),

  email: zod
    .string()
    .email("Invalid email address")
    .max(100, "Email cannot exceed 100 characters"),

  password: zod
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[@$!%*?&]/,
      "Password must contain at least one special character (@, $, %, etc.)"
    ),
});

module.exports = {
  signupSchema,
  signInSchema,
};
