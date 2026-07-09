import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center px-6 max-w-md mx-auto">
        <h1 className="font-display font-black text-8xl uppercase tracking-tight [font-stretch:118%] text-outline mb-4">
          404
        </h1>
        <h2 className="font-display font-bold uppercase tracking-tight text-2xl mb-4 [font-stretch:118%]">
          Page not found
        </h2>
        <p className="text-muted-foreground mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="rounded-full px-8">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </Button>
      </div>
    </div>
  );
}
