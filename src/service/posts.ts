import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  id: string;
  title: string;
  summary: string;
  category: string;
  createdAt: Date;
  image: string;
  featured: boolean;
};

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return (
    readFile(filePath, 'utf-8')
      .then<Post[]>(JSON.parse)
      // 최신순으로 정리되도록 가공
      .then((posts) => posts.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1)))
  );
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return getPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}
