"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const path = usePathname();
    const menuItem = [
        {
            name: "Dashboard",
            link: "/dashboard"
        },
        {
            name: "Profile",
            link: "/profile"
        },
        {
            name: "FAQ",
            link: "/faq"
        }
    ]

    return (
        <div>
            <div className="flex flex-row">
                <div>
                    GEACRE Logo
                </div>
                <ul className="flex">
                    {menuItem.map((menu) => {
                        const isActive = menu.link === path;
                            return (
                            <li key={menu.link}>
                                <Link 
                                    href = {menu.link}
                                    className = 
                                    {
                                        isActive?
                                        "ml-8 font-bold text-sm uppercase tracking-wider text-black hover:text-coffee-green border-b-2 border-coffee-green":
                                        "ml-8 font-bold text-sm uppercase tracking-wider text-black hover:text-coffee-green"
                                    }
                                >
                                    {menu.name}
                                </Link>
                            </li>
                            );
                        }
                    )}
                </ul>
            </div>
        </div>
    );
  };
  
  export default Navbar;