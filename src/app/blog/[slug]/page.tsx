import { ArticlePage } from "../../../views/ArticlePage";

export function generateStaticParams() {
  return [
    { slug: "what-to-do-after-bike-stolen" },
  ];
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <ArticlePage slug={slug} />;
}
