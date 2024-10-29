import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
{/* Top navigation bar with logo */}
<div className="bg-white h-16 flex items-center justify-start px-8 sticky top-0 z-50 shadow-md"> {/* z-index deals with what elements eppear on top of others */}

        {/* Add a link to the Calculator page */}
        <Link
          href="/chatbot"
          className="ml-8 font-bold text-sm uppercase tracking-wider text-black hover:text-coffee-green"
        >
          Page1
        </Link>
        {/* Add a link to the FAQ page */}
        <Link
          href="/faq"
          className="ml-8 font-bold text-sm uppercase tracking-wider text-black hover:text-coffee-green"
        >
          Page2
        </Link>
        {/* Add a link to the GreenExpecations website */}
        <Link
          href="https://greenexpectations.us/"
          className="ml-auto font-bold text-sm uppercase tracking-wider text-black hover:text-coffee-green" 
          // Used to open website in a new tab
          target="_blank" rel="noopener noreferrer"
        >
          GreenExpectations.US
        </Link>
      </div>
    </>
  );
};

export default Navbar;