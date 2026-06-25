import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-end items-end py-6 md:space-x-10">
            <nav className="flex space-x-4 md:space-x-10">
              <Link
                href="/about"
                className="inline-flex items-end text-[#4e807c] text-sm md:text-base"
              >
                ABOUT
              </Link>
              <Link
                href="/project"
                className="inline-flex items-end text-[#4e807c] text-sm md:text-base"
              >
                PROJECT
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-end text-[#4e807c] text-sm md:text-base"
              >
                CONTACT
              </Link>
            </nav>
            <Link href="/" className="pl-6">
              <img
                className="h-10 w-auto sm:h-20"
                src="/images/logo.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
