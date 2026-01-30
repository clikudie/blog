import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  slug: string;
};

export function PostPreview({ title, date, slug }: Props) {
  return (
    <article className="py-3">
      <h3 className="text-lg">
        <Link
          href={`/posts/${slug}`}
          className="text-foreground hover:underline"
        >
          {title}
        </Link>
      </h3>
      <time className="text-secondary-foreground text-sm whitespace-nowrap">
        <DateFormatter dateString={date} />
      </time>
    </article>
  );
}
