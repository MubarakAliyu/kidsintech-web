import { notFound } from "next/navigation";
import PostView from "@/components/views/news/PostView";
import { getPost, publishedNews, relatedPosts } from "@/data/news";

const baseUrl = "https://kidsintech.school";

export function generateStaticParams() {
  return publishedNews.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const ogImage = post.cover || "/assets/images/gallerypic1.avif"; // real on-disk .avif
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} | Kids in Tech`,
      description: post.excerpt,
      url: `${baseUrl}/news/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      title: `${post.title} | Kids in Tech`,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

function buildJsonLd(post) {
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.cover ? `${baseUrl}${post.cover}` : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author || "Kids in Tech" },
    publisher: {
      "@type": "Organization",
      name: "Kids in Tech",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/images/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/news/${post.slug}`,
    },
    articleSection: post.category,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "News",
        item: `${baseUrl}/news`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${baseUrl}/news/${post.slug}`,
      },
    ],
  };
  return [blogPosting, breadcrumb];
}

export default async function NewsPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedPosts(post, 3);
  const jsonLd = buildJsonLd(post);

  return (
    <>
      {jsonLd.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from local data.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PostView post={post} related={related} />
    </>
  );
}
