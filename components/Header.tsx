import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between  fixed top-0 w-full  bg-white z-50 shadow">
      <Link href={"/"}>
        <Image
          src="https://img.freepik.com/free-vector/flat-design-online-shop-logo-collection_23-2148946349.jpg?w=740&t=st=1685530459~exp=1685531059~hmac=27d2a6a4138164e276d385e1c1e6469376378f9f2c26d1e874559e43a9f888d3"
          width={70}
          height={70}
          alt="logo"
        />
      </Link>

      <div className="flex space-x-2.5 items-center text-sm">
        <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600  hover:bg-transparent hover:text-black">
          Log in
        </button>
        <button className="button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white  hover:border-transparent">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
