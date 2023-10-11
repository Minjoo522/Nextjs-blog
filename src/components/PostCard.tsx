import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({ post: { id, title, summary, category, createdAt, image } }: { post: Post }) {
  return (
    <Link href={`/posts/${id}`}>
      <article className='rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 ease-in-out'>
        <Image
          src={`/images/${image}`}
          sizes='100vw'
          style={{
            width: '100%',
            height: '200px',
          }}
          alt='post main image'
          width={300}
          height={200}
        />
        <div className='flex flex-col items-center p-4'>
          <time className='self-end'>{createdAt.toString()}</time>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='w-full truncate text-center'>{summary}</p>
          <span className='text-sm rounded-lg bg-green-100 my-2 px-2 py-1'>{category}</span>
        </div>
      </article>
    </Link>
  );
}
