import BigCarousel from "@/components/carousel-big";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <BigCarousel />
      <h1 className="font-medium text-l mt-5">Produk Terbaru</h1>
      <hr className="w-3/4" />
    </main>
  );
}
