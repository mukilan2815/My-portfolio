import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Services" },
    { id: 4, text: "Portfolio" },
    { id: 5, text: "Contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`flex ${
        isMenuOpen ? "flex-col" : "flex-row"
      } items-center md:justify-around  justify-between  bg-white md:bg-transparent md:text-white text-black px-5 py-5`}
    >
      <h1 className="text-3xl font-extrabold ">Mukilan</h1>
      <span onClick={toggleMenu} className="md:hidden">
        {isMenuOpen ? (
          <AiOutlineClose size={20} />
        ) : (
          <GiHamburgerMenu size={30} />
        )}
      </span>
      <ul
        className={`flex ${
          isMenuOpen ? "flex-col items-center" : "hidden"
        } md:flex`}
      >
        {menuItems.map((item) => (
          <li key={item.id} className="mx-5 md:text-white font-semibold text-gray-600">
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
