import FilterPosts from '@/components/FilterPosts';
import { getPosts } from '@/service/posts';

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterPosts posts={posts} categories={categories} />;
}
