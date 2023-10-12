type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className='text-center'>
      <h2 className='font-bold text-lg border-b-2 border-pink-400 px-2 mb-2'>Category</h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:bg-pink-200 rounded-md my-1 duration-500 ease-in-out px-1 ${
              category === selected && 'font-semibold text-pink-500'
            }`}
            key={category}
            onClick={() => onClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
