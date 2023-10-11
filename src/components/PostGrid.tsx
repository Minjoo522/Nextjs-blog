import { Post } from '@/service/posts';
import PostCard from './PostCard';

type Props = {
  posts: Post[];
};

export default function PostGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
