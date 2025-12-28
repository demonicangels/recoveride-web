import { ArticlePage } from "../../../views/ArticlePage";

export function generateStaticParams() {
  return [
    { slug: "protect-your-bike-from-theft" },
    { slug: "bike-theft-netherlands-real-stories"}
  ];
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <ArticlePage slug={slug} />;
}
