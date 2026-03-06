import { ui } from "@/barrel/ui";
import { icons } from "@/barrel/icons";
import { slots } from "@/barrel/slots";
import { useAuthHandlers } from "@/handlers/auth.handlers";

const Login = () => {
  const {
    loginForm,
    handleLogin,
    handleGoogleLogin,
    handleNavigateToRegister,
  } = useAuthHandlers();

  return (
    <slots.AuthCard
      title="Welcome back"
      description="Sign in to continue to The Writer"
      onGoogleLogin={handleGoogleLogin}
      footerText="Don't have an account?"
      footerLinkText="Create an account"
      onFooterLinkClick={handleNavigateToRegister}
    >
      <ui.Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(handleLogin)}
          className="space-y-4"
        >
          <ui.FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <ui.FormItem>
                <ui.FormLabel>Email</ui.FormLabel>
                <ui.FormControl>
                  <ui.Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </ui.FormControl>
                <ui.FormMessage />
              </ui.FormItem>
            )}
          />

          <ui.FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <ui.FormItem>
                <ui.FormLabel>Password</ui.FormLabel>
                <ui.FormControl>
                  <ui.Input
                    type="password"
                    placeholder="••••••••"
                    {...field}
                  />
                </ui.FormControl>
                <ui.FormMessage />
              </ui.FormItem>
            )}
          />

          <ui.Button type="submit" className="w-full gap-2">
            Log In
            <icons.LogIn className="h-4 w-4" />
          </ui.Button>
        </form>
      </ui.Form>
    </slots.AuthCard>
  );
};

export default Login;