import { Post } from '@/service/posts';
import Image from 'next/image';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article>
      <Image src={`/images/${post.image}`} alt='post main image' width={300} height={300} />
      <div>
        <span>{post.createdAt.toString()}</span>
        <h3>{post.title}</h3>
        <p>{post.summary}</p>
        <span>{post.category}</span>
      </div>
    </article>
  );
}
