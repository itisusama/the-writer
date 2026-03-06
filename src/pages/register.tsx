import { ui } from "@/barrel/ui";
import { icons } from "@/barrel/icons";
import { slots } from "@/barrel/slots";
import { useAuthHandlers } from "@/handlers/auth.handlers";

const Register = () => {
  const {
    registerForm,
    handleRegister,
    handleGoogleLogin,
    handleNavigateToLogin,
  } = useAuthHandlers();

  return (
    <slots.AuthCard
      title="Create an account"
      description="Start sharing your stories on The Writer"
      onGoogleLogin={handleGoogleLogin}
      footerText="Already have an account?"
      footerLinkText="Log in"
      onFooterLinkClick={handleNavigateToLogin}
    >
      <ui.Form {...registerForm}>
        <form
          onSubmit={registerForm.handleSubmit(handleRegister)}
          className="space-y-4"
        >
          <ui.FormField
            control={registerForm.control}
            name="name"
            render={({ field }) => (
              <ui.FormItem>
                <ui.FormLabel>Name</ui.FormLabel>
                <ui.FormControl>
                  <ui.Input
                    type="text"
                    placeholder="Your pen name"
                    {...field}
                  />
                </ui.FormControl>
                <ui.FormMessage />
              </ui.FormItem>
            )}
          />

          <ui.FormField
            control={registerForm.control}
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
            control={registerForm.control}
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

          <ui.FormField
            control={registerForm.control}
            name="confirmPassword"
            render={({ field }) => (
              <ui.FormItem>
                <ui.FormLabel>Confirm Password</ui.FormLabel>
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
            Create Account
            <icons.UserPlus className="h-4 w-4" />
          </ui.Button>
        </form>
      </ui.Form>
    </slots.AuthCard>
  );
};

export default Register;