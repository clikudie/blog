import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
};

export function PostHeader({ title, date }: Props) {
  return (
    <header className="mb-12">
      <Link
        href="/"
        className="text-secondary-foreground hover:text-foreground hover:underline text-sm mb-6 inline-block"
      >
        &larr; Back to home
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        {title}
      </h1>
      <time className="text-secondary-foreground">
        <DateFormatter dateString={date} />
      </time>
    </header>
  );
}
