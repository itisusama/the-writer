import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  registerSchema,
  type LoginFormValues,
  type RegisterFormValues,
} from "@/schemas/auth.schemas";

export const useAuthHandlers = () => {
  const navigate = useNavigate();

  // ── Login ──────────────────────────────────────
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (data: LoginFormValues) => {
    console.log("Login:", data);
    navigate("/dashboard");
  };

  // ── Register ───────────────────────────────────
  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegister = (data: RegisterFormValues) => {
    console.log("Register:", data);
    navigate("/dashboard");
  };

  // ── Google ─────────────────────────────────────
  const handleGoogleLogin = () => {
    console.log("Google login triggered");
    navigate("/dashboard");
  };

  // ── Navigation ─────────────────────────────────
  const handleNavigateToRegister = () => {
    navigate("/register");
  };

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  return {
    loginForm,
    handleLogin,
    registerForm,
    handleRegister,
    handleGoogleLogin,
    handleNavigateToRegister,
    handleNavigateToLogin,
  };
};