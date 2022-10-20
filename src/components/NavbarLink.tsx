import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";


interface NavLink {
  href: string,
  name: string
}

export default function NavbarLink({ href, name }: NavLink) {
  return (
    <Link
      to={href}
      activeClass="transition duration-150 ease-in-out font-mplus font-regular text-sm cursor-pointer"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      class="hover:text-blue-600 transition duration-150 ease-in-out font-mplus font-regular text-sm cursor-pointer"
    >
      {name}
    </Link>
  )
}
