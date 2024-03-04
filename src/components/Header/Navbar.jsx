import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logos/logo.png"

export default function Navbar() {
  return (
    <header className="border-b-2 border-b-dim-gray border-opacity-30">
      <nav className="px-0 sm:px-6 pt-1 pb-2 xl:pb-4 2xl:pb-6 border-gray border-opacity-20 mt-4 xl:mt-8 2xl:mt-10  flex items-center justify-between">
        <Link aria-label="Back to Home" href="/">
            <Image 
                className="scale-150"
                placeholder="blur"
                blurDataURL="url"
                src={logo}
                width={50}
                height={50}
                alt="S.B Locktight coatings"
            />          
        </Link>
        <div className="flex items-center gap-x-8">
        <Link className="font-medium hidden sm:block relative overflow-hidden group h-fit text-base xl:text-h6 2xl:text-h5" href="/">
            <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">Home</span>
            <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline">Home</span>
          </Link>
          <Link className="font-medium hidden sm:block relative overflow-hidden group h-fit text-base xl:text-h6 2xl:text-h5" href="/about">
            <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">About</span>
            <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline">About</span>
          </Link>
          <Link className="font-medium hidden sm:block relative overflow-hidden group h-fit text-base xl:text-h6 2xl:text-h5" href="/pre-applied-adhesives">
            <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">Pre-Applied-Adhesives</span>
            <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline">Pre-Applied-Adhesives</span>
          </Link>
          <Link className="font-medium hidden sm:block relative overflow-hidden group h-fit text-base xl:text-h6 2xl:text-h5" href="/products">
            <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">Products</span>
            <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline">Products</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
