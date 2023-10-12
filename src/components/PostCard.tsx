import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({ post: { title, description, date, category, path } }: { post: Post }) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='rounded-md overflow-hidden shadow-md hover:scale-105 transition duration-500 ease-in-out'>
        <Image
          src={`/images/posts/${path}.png`}
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt='post main image'
          width={300}
          height={200}
        />
        <div className='flex flex-col items-center p-4'>
          <time className='self-end text-sm text-slate-700'>{date.toString()}</time>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='w-full truncate text-center'>{description}</p>
          <span className='text-sm rounded-lg bg-green-100 my-2 px-2 py-1'>{category}</span>
        </div>
      </article>
    </Link>
  );
}
