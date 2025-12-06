import { ArticlePage } from "../../../pages/ArticlePage";

export function generateStaticParams() {
  return [
    { slug: "what-to-do-after-bike-stolen" },
  ];
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  return <ArticlePage slug={params.slug} />;
}