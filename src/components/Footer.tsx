import Link from "next/link";
import React from "react";
import IconsBar from "./IconsBar";

const Footer = () => {
  return (
<footer className="bg-transparent text-center sm:text-left rounded-lg shadow-xl dark:shadow-white/5 dark:bg-transparent m-4 border border-black/55 dark:border-[#252525]">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rehan Web</span>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-[5px] sm:mt-0 mt-4 gap-x-5 mb-6 text-left ml-5 sm:ml-0 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li> <Link href="#" className="hover:underline me-4 md:me-6">Who is Rehan Allahwala</Link> </li>
                <li><Link href="#" className="hover:underline me-4 md:me-6">How To Teach</Link> </li> 
                <li> <Link href="#" className="hover:underline me-4 md:me-6">Books</Link> </li> 
                <li> <Link href="#" className="hover:underline">500 Mutual Friend</Link> </li>
                <li> <Link href="#" className="hover:underline">Contact</Link> </li>
                <li> <Link href="#" className="hover:underline">Press</Link> </li>
                <li> <Link href="#" className="hover:underline">Startup</Link> </li>
                <li> <Link href="#" className="hover:underline">Ethics Series</Link> </li>
                <li> <Link href="#" className="hover:underline">Canva group</Link> </li>
                <li> <Link href="#" className="hover:underline">Chainak</Link> </li>
                <li> <Link href="#" className="hover:underline">Abdullah Bot</Link> </li>
                <li> <Link href="#" className="hover:underline">FBProfile</Link> </li>
                <li> <Link href="#" className="hover:underline">LinkedIn Profile</Link> </li>
                <li> <Link href="#" className="hover:underline">ChatGPT</Link> </li>
                <li> <Link href="#" className="hover:underline">ABCD of Freeabcd</Link> </li>
                <li> <Link href="#" className="hover:underline">Socials</Link> </li>
                <li> <Link href="#" className="hover:underline">Meetup</Link> </li>
            </ul>
        </div>
        <hr className="my-6 border-black/55 sm:mx-auto dark:border-[#252525] lg:my-8" />
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex sm:flex-row flex-col justify-between">
          <div>© 2024 Rehan Allahwala. All Rights Reserved.</div>
          <div><IconsBar /></div>
          </span>
    </div>
</footer>

  );
};

export default Footer;
