import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center">
      <div className="wrap">
        <h1 className="max-w-2xl text-headline">
          That page doesn&apos;t exist.
        </h1>
        <p className="mt-6 max-w-md text-lead text-muted-foreground">
          The link is either wrong or the page has moved. The work and the
          solutions are both still where you left them.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button variant="primary" size="lg" asChild>
            <Link href="/">Back to home</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">See the work</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
