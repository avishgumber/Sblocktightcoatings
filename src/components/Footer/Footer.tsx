import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

export default function Footer() {
  const links = [
    {
      id: 1,
      href: "/about",
      label: "About",
    },
    {
      id: 2,
      href: "/legal",
      label: "Legal",
    },
    {
        id: 3,
        href: "/products",
        label: "Products",
      },
      {
        id: 4,
        href: "/pre-applied-adhesives",
        label: "Pre Applied Adhesives",
      },
  ];

  return (
    <footer className="mt-32 mb-16 sm:mb-0">
      <div className="border-b border-b-dim-gray pb-6">
        <span className="sr-only">SB Locktight Coatings</span>
      </div>
      <div className="flex flex-col gap-y-12 gap-x-2 md:flex-row items-start justify-between pt-6 pb-10 text-text">
        <div className="gap-y-4 b-8 flex flex-col text-base xl:text-h6 2xl:text-h5">
          
          <div className="flex flex-col w-56 gap-x-1 xl:w-96 ">
            <span className="w-fit flex-nowrap whitespace-nowrap">
              S.B Locktight Coatings
            </span>
            <br />
            <span className="w-fit flex-nowrap whitespace-nowrap">
              Focal point, ludhiana , punjab
            </span>
            <br />
            <span className="w-fit flex-nowrap whitespace-nowrap">
              sachingumber02@gmail.com
            </span>
            <br />
            <span className="w-fit flex-nowrap whitespace-nowrap">
              9992034052
            </span>
          </div>
        </div>
        <ul className=" grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid xl:grid-cols-3 gap-x-8 gap-y-3">
          {links.map((link) => (
            <li
              key={link.id}
              className="flex w-fit group text-base xl:text-h7 2xl:text-h6"
            >
              {link.id === 2 || link.id === 4 ? (
                <Link
                  className="group"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Link>
              ) : (
                <Link className="group" href={link.href}>
                  {link.label}
                </Link>
              )}
              <span className="relative overflow-hidden h-fit w-fit">
                <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
