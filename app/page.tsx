import Image from 'next/image';
import Button from './_components/button';

export default function Home() {
  return (
    <main style={{ backgroundImage: `url(${'/images/web_size.jpg'})`, backgroundSize: 'cover' }}>
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold">Welcome to Tailwind!</h1>
        <p className="text-xl md:text-2xl max-w-xl mx-auto">
          Build modern and responsive UIs with utility-first CSS. Fast, elegant, and fun to use.
        </p>
        <Button title="Get Started" />
      </div>
    </main>
  );
}
