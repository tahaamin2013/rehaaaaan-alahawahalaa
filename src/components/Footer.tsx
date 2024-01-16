import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
<footer className="bg-transparent text-center sm:text-left rounded-lg shadow-xl dark:shadow-white/5 dark:bg-transparent m-4 border border-black/55 dark:border-[#252525]">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Your Website Name</span>
            <ul className="flex items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-black/55 sm:mx-auto dark:border-[#252525] lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Your Website Name. All Rights Reserved.</span>
    </div>
</footer>

  );
};

export default Footer;
