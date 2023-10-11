import { Post } from '@/service/posts';
import PostCard from './PostCard';

type Props = {
  posts: Post[];
};

export default function PostGrid({ posts }: Props) {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-4'>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
