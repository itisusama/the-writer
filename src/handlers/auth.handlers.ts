import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "@/schemas/auth.schemas";

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

  const handleGoogleLogin = () => {
    console.log("Google login triggered");
    navigate("/dashboard");
  };

  // ── Navigation ─────────────────────────────────
  const handleNavigateToRegister = () => {
    navigate("/register");
  };

  return {
    loginForm,
    handleLogin,
    handleGoogleLogin,
    handleNavigateToRegister,
  };
};