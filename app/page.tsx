import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, BarChart3, Shield, Zap, Globe, TrendingUp } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col flex-1 items-center bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="w-full px-4 py-20 sm:py-32 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Zap className="size-4" />
            <span>Fast, Secure, and Reliable</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Shorten Your Links,
            <br />
            <span className="text-primary">Amplify Your Reach</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Create short, memorable links in seconds. Track clicks, analyze traffic, 
            and gain insights into your audience—all in one powerful platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/dashboard">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full px-4 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features to help you manage and optimize your links
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Link2 className="size-6 text-primary" />
                </div>
                <CardTitle>Instant Short Links</CardTitle>
                <CardDescription>
                  Create short, branded links in seconds. Easy to share and remember.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="size-6 text-primary" />
                </div>
                <CardTitle>Detailed Analytics</CardTitle>
                <CardDescription>
                  Track clicks, geographic data, and referrer sources to understand your audience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="size-6 text-primary" />
                </div>
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>
                  Your data is encrypted and secure. Control who can access your links.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="size-6 text-primary" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized for speed. Your links redirect instantly, every time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="size-6 text-primary" />
                </div>
                <CardTitle>Custom Domains</CardTitle>
                <CardDescription>
                  Use your own domain for a professional, branded experience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="size-6 text-primary" />
                </div>
                <CardTitle>Real-Time Tracking</CardTitle>
                <CardDescription>
                  Monitor link performance in real-time with live updates.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-16 sm:py-24">
        <Card className="max-w-4xl mx-auto text-center">
          <CardHeader className="space-y-6 py-12">
            <CardTitle className="text-3xl sm:text-4xl font-bold">
              Ready to Get Started?
            </CardTitle>
            <CardDescription className="text-lg">
              Join thousands of users who trust us with their links. 
              Create your first short link today—no credit card required.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/dashboard">Start Shortening</Link>
              </Button>
            </div>
          </CardHeader>
        </Card>
      </section>

      {/* Footer */}
      <footer className="w-full px-4 py-8 border-t">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Link Shortener. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
