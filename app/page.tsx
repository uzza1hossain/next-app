import Image from 'next/image';
import coffee from '@/public/images/coffee.jpg';
async function Home() {
  return (
    <main className="relative h-screen">
      {/* <Image src={coffee} alt="Coffee" /> */}
      <Image
        src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Coffee"
        fill
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
        className="object-cover"
      />
    </main>
  );
}

export default Home;
