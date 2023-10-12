import { getFeaturedPosts } from '@/service/posts';
import PostGrid from './PostGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className='m-8'>
      <h3 className='font-bold text-xl mb-2'>Featured Posts</h3>
      <PostGrid posts={posts} />
    </section>
  );
}
