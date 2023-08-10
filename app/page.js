"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"
import Head from "next/head";
import {MagnifyingGlassIcon, MicrophoneIcon, Squares2X2Icon} from '@heroicons/react/24/solid'
import Avatar from "./components/Avatar";
import Image from "next/image";
import Footer from "./components/Footer";


export default function Home() {
  const searchInputRef= useRef(null);
  const router = useRouter();


  const search =(e)=>{
    e.preventDefault()
    const term = searchInputRef.current.value
    console.log(term)
    if(!term) return;

    router.push(`/search?term=${term}`)
  }



  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <Squares2X2Icon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

          {/* Avatar */}
          <Avatar url="https://static.vecteezy.com/system/resources/thumbnails/007/404/880/small/cute-cat-clipart-cute-cat-cartoon-sitting-animals-pets-cat-kitten-kitten-clipart-pets-clipart-vector.jpg" />
        </div>
      </header>

      {/* body */}
      <form className="flex flex-col items-center mt-32 flex-grow w-4/5">
        <Image 
          src='https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg'
          height={100}
          width={300}
          />
          <div className="flex w-full mt-2 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
            <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500"/>
            <input ref={searchInputRef} type="text" className="focus:outline-none flex-grow"/>
            <MicrophoneIcon className="h-5"/>
          </div>
          <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
            <button onClick={search} className="btn">Google Search</button>
            <button onClick={search} className="btn">I'm Feeling Lucky</button>
          </div>
      </form>


      {/* Footer */}
      <Footer/>
    </div>
  );
}