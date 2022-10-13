import React, { useState } from "react";
import NavbarMobile from "../../molecules/navbar-mobile/NavbarMobile";

function ButtonNavbar() {
  const [openButton, setOpenButton] = useState(false);

  const handleNavButton = () => {
    setOpenButton(!openButton);
  };

  return (
    <>
      <button className="block" onClick={handleNavButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </button>

      {openButton && <NavbarMobile />}
    </>
  );
}

export default ButtonNavbar;
