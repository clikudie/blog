import { SITE_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <section className="pt-16 pb-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        <Link href="/" className="hover:text-secondary-foreground transition-colors">
          {SITE_NAME}
        </Link>
      </h1>
    </section>
  );
}
