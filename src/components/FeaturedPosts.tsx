import { getFeaturedPosts, getPosts } from '@/service/posts';
import PostCard from './PostCard';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section>
      <h3>Featured Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
