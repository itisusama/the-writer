import { ui } from "@/barrel/ui";
import { icons } from "@/barrel/icons";

interface AuthCardSlotProps {
  title: string;
  description: string;
  children: React.ReactNode;
  onGoogleLogin: () => void;
  footerText: string;
  footerLinkText: string;
  onFooterLinkClick: () => void;
}

const AuthCardSlot = ({
  title,
  description,
  children,
  onGoogleLogin,
  footerText,
  footerLinkText,
  onFooterLinkClick,
}: AuthCardSlotProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <ui.Card className="w-full max-w-md">
        {/* ── Header ──────────────────────────── */}
        <ui.CardHeader className="text-center space-y-2">
          <div className="flex justify-center">
            <icons.BookOpenText
              className="h-10 w-10 text-primary"
              strokeWidth={1.5}
            />
          </div>
          <ui.CardTitle className="text-2xl font-bold">{title}</ui.CardTitle>
          <ui.CardDescription>{description}</ui.CardDescription>
        </ui.CardHeader>

        {/* ── Body ────────────────────────────── */}
        <ui.CardContent className="space-y-6">
          {/* Form slot — injected by each page */}
          {children}

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <ui.Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">or</span>
            </div>
          </div>

          {/* Google login */}
          <ui.Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={onGoogleLogin}
          >
            Continue with Google
          </ui.Button>
        </ui.CardContent>

        {/* ── Footer ──────────────────────────── */}
        <ui.CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            {footerText}{" "}
            <ui.Button
              variant="link"
              className="p-0 h-auto text-sm"
              onClick={onFooterLinkClick}
            >
              {footerLinkText}
            </ui.Button>
          </p>
        </ui.CardFooter>
      </ui.Card>
    </div>
  );
};

export default AuthCardSlot;