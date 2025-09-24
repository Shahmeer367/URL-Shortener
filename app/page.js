import Image from "next/image";
import Link from "next/link"; 

export default function Home() {
  return (
    <>
      <main className="bg-purple-100">
        <section className="grid grid-cols-2 h-[70vh]">
          <div className="flex flex-col gap-3 px-1 items-center justify-center">
            <p className="text-4xl font-bold">The best URL shortener in Market</p>
            <p className="text-center py-1 px-20">I built a simple yet efficient URL shortener that takes long, cluttered URLs and converts them into clean, compact links.</p>
            <div className="flex items-center text-white gap-3">
                    <Link href="/shorten"><button className="bg-purple-600 px-4 cursor-pointer hover:bg-purple-500 py-2 shadow-lg rounded-lg font-bold">Try Now</button></Link>
                    {/* <Link href="/github"><button className="bg-purple-600 px-3 cursor-pointer hover:bg-purple-500 py-1 shadow-xl rounded-lg font-bold">GitHub</button></Link> */}
                </div>
          </div>


          <div className="flex flexstart relative">
            <Image className="mix-blend-darken" src="/vector.jpeg" alt="Hero Image" fill="true" />
          </div>
        </section>
      </main>
    </>
  );
}
