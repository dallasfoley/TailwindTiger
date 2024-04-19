import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-around items-center mx-64">
      <p className="font-bold text-4xl text-white">
        Welcome to Tailwind Tiger, a game where you help the tiger hide in the
        tall grass by writing Tailwind CSS code!
      </p>
      <Link href="/levels/1" className="rounded-full h-16 w-16 bg-slate-500">
        Click
      </Link>
    </div>
  );
}
