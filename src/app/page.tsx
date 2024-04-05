import BigCarousel from "@/components/carousel-big";
import CarouselProduct from "@/components/carousel-product";
import NewsBanner from "@/components/news-banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <BigCarousel />
      <h1 className="font-medium text-l mt-5">Produk Populer</h1>
      <hr className="w-3/4 mb-4 lg:w-48" />
      <CarouselProduct />
      <h1 className="font-medium text-l mt-5">Tentang Kami</h1>
      <hr className="w-3/4 mb-4 lg:w-48" />
      <div className="flex w-3/4 aspect-5/2 my-5">
        <div className="lg:w-1/2 p-5 flex items-center">
          <p className="text-wrap text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu
            feugiat pretium nibh ipsum consequat nisl vel. Morbi tincidunt
            ornare massa eget egestas. Vitae turpis massa sed elementum tempus
            egestas sed sed risus. Enim neque volutpat ac tincidunt vitae
            semper. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus
            mattis rhoncus. Proin sed libero enim sed faucibus. Vitae sapien
            pellentesque habitant morbi tristique senectus et. Ac turpis egestas
            sed tempus. Ut tortor pretium viverra suspendisse potenti nullam ac
            tortor. Arcu dictum varius duis at consectetur. Elit pellentesque
            habitant morbi tristique senectus et. Nunc sed blandit libero
            volutpat sed cras ornare. Iaculis urna id volutpat lacus laoreet.
            Nisi lacus sed viverra tellus in. Ut enim blandit volutpat maecenas
            volutpat blandit.
          </p>
        </div>
        <div className="hidden lg:block lg:w-1/2 bg-red-300"></div>
      </div>
      {/* <NewsBanner /> */}
    </main>
  );
}
