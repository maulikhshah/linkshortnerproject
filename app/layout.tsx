import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Link Shortener - Shorten URLs and Track Analytics",
  description: "Create short, memorable links in seconds. Track clicks, analyze traffic, and gain insights into your audience with our powerful link shortener.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider
          appearance={{
            baseTheme: undefined, // Use custom theme
            variables: {
              colorPrimary: "oklch(0.922 0 0)", // --primary in dark mode
              colorBackground: "oklch(0.145 0 0)", // --background in dark mode
              colorInputBackground: "oklch(0.205 0 0)", // --card in dark mode
              colorInputText: "oklch(0.985 0 0)", // --foreground in dark mode
              colorText: "oklch(0.985 0 0)", // --foreground
              colorTextSecondary: "oklch(0.708 0 0)", // --muted-foreground
              colorDanger: "oklch(0.704 0.191 22.216)", // --destructive
              fontFamily: "var(--font-geist-sans), sans-serif",
              borderRadius: "0.625rem", // --radius
            },
            elements: {
              card: "bg-card shadow-lg border-border",
              headerTitle: "text-foreground font-semibold",
              headerSubtitle: "text-muted-foreground",
              socialButtonsBlockButton: "border-border hover:bg-accent hover:text-accent-foreground",
              formButtonPrimary: "bg-primary text-primary-foreground hover:bg-primary/90",
              footerActionLink: "text-primary hover:text-primary/80",
              formFieldLabel: "text-foreground",
              formFieldInput: "bg-input border-border text-foreground focus:ring-ring",
              identityPreviewText: "text-foreground",
              identityPreviewEditButton: "text-muted-foreground hover:text-foreground",
              formResendCodeLink: "text-primary hover:text-primary/80",
              otpCodeFieldInput: "border-border text-foreground",
              userButtonPopoverCard: "bg-popover border-border",
              userButtonPopoverActionButton: "text-foreground hover:bg-accent hover:text-accent-foreground",
              userButtonPopoverActionButtonText: "text-foreground",
              userButtonPopoverFooter: "border-t-border",
            },
          }}
        >
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4">
              <div className="flex items-center gap-2 font-semibold text-lg">
                <Link2 className="size-6 text-primary" />
                <span>Link Shortener</span>
              </div>
              <div className="flex items-center gap-2">
                <Show when="signed-out">
                  <SignInButton>
                    <Button variant="ghost">Sign in</Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button>Sign up</Button>
                  </SignUpButton>
                </Show>
                <Show when="signed-in">
                  <UserButton />
                </Show>
              </div>
            </div>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
