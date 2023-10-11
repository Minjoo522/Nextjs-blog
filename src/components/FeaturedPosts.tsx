import { getFeaturedPosts } from '@/service/posts';
import PostGrid from './PostGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section>
      <h3>Featured Posts</h3>
      <PostGrid posts={posts} />
    </section>
  );
}
