// app/posts/[id]/page.tsx
import { getPostData, getAllPostIds } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((p: any) => ({ id: p.id }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post: any = await getPostData(params.id); // 👈 esto evita los errores de tipo

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <article
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}