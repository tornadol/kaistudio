import BannerSlider from "@/components/BannerSlider";
import { banners } from "@/data/banners";

export default function Home() {
  const images = banners.map((b) => b.image.url);

  return (
    <>
      <header>
        <div className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex justify-end items-end py-6 md:space-x-10">
              <a href="/project" className="pl-6">
                <img
                  className="h-10 w-auto sm:h-20"
                  src="/images/logo.png"
                  alt="logo"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <BannerSlider images={images} />
    </>
  );
}
