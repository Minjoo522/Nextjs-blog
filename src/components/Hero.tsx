import Image from 'next/image';
import ProfileImage from '../../public/images/mainprofile.png';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='flex flex-col items-center justify-center text-center lg:flex-row lg:text-start p-4'>
      <Image src={ProfileImage} alt='Profile 사진' className='rounded-full w-64' priority />
      <div>
        <h2 className='font-bold text-2xl'>{"Hi, I'm Minjoo!"}</h2>
        <p className='my-2'>
          새로운 것을 습득하고 확장해 나가며 그 것을 활용하여 가치를 창출하고 스스로를 성장시키는 것을 좋아합니다.
          <br />
          꾸준함을 최우선으로 생각하여 새롭게 배운 내용들을 깃허브에 꾸준히 기록하고 있습니다.
          <br />더 가독성 좋은 코드를 작성하기 위해 매일 고민합니다.
        </p>
        <Link href='/contact'>
          <button className='font-semibold text-sm bg-pink-400 text-white px-2 py-1 rounded shadow-md hover:bg-pink-200 transition duration-500 ease-in-out'>
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
}
