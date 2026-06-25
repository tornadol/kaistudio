import BannerSlider from "@/components/BannerSlider";
import { banners } from "@/data/banners";

export default function Home() {
  const images = banners.map((b) => b.image.url);

  return (
    <div className="relative">
      {/* Fullscreen background slider — fills the entire viewport */}
      <BannerSlider images={images} />

      {/* Floating logo — absolutely positioned over the banner */}
      <header className="absolute top-0 left-0 right-0 z-10">
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
      </header>
    </div>
  );
}
