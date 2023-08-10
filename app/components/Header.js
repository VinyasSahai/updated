"use client";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
import { getServerSideProps } from "../search/page";

export default function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
    getServerSideProps(term);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-4 items-center">
        <Image
          src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg"
          alt="google logo"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />

        <form className="flex flex-grow border-gray-200 rounded-full shadow-md hover:shadow-lg px-6 py-3 ml-10 mr-5 max-w-3xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />

          <XMarkIcon
            className="sm:mr-3 h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => {
              searchInputRef.current.value = "";
            }}
          />

          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />

          <MagnifyingGlassIcon className="h-6 text-blue-500 hidden sm:inline-flex" />

          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <Avatar
          className="ml-auto"
          url="https://static.vecteezy.com/system/resources/thumbnails/007/404/880/small/cute-cat-clipart-cute-cat-cartoon-sitting-animals-pets-cat-kitten-kitten-clipart-pets-clipart-vector.jpg"
        />
      </div>

      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
}
