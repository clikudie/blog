import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  return (
    <section>
      <div className="space-y-1">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
