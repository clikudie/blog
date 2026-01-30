type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
