"use client";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "../ui/navigation-menu";
// import Link from "next/link";
// import MobileSidebar from "./MobileSidebar";
// import { useEffect, useState } from "react";
// import { navData } from "../../utils/config";
// import Image from "next/image";
// import ThemeToggler from "../themes";

// const NavBar = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [sticky, setSticky] = useState<boolean>(false);

//   function handleStickyNavbar() {
//     if (window.scrollY >= 80) setSticky(true);
//     else setSticky(false);
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyNavbar);
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       {/* <header
//         className={`top-0 shadow-lg left-0 z-40 flex w-full items-center justify-between py-1
//         ${
//           sticky
//             ? "!fixed inset-x-0 border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:shadow-none dark:backdrop-blur-none from-white/40 dark:bg-black/40"
//             : "absolute"
//         }
//         `}
//       >
//           <Link href="/" className="font-mono ml-6">
//             <div><Image src="/Logo.svg" alt="Logo" width={50} height={40} /></div>
//           </Link>

//           {isMobile && <MobileSidebar />}

//           {!isMobile && (
//             <NavigationMenu className="mr-5">
//               <NavigationMenuList>
//                 {Object.entries(navData).map(([category, items]:any, index) => (
//                   <NavigationMenuItem key={index}>
//                     {Array.isArray(items) ? (
//                       <a href={category}>
//                       <NavigationMenuTrigger>
//                       {category}
//                       </NavigationMenuTrigger>
//                       </a>
//                     ) : (
//                       <Link href={items.link} legacyBehavior passHref>
//                         <NavigationMenuLink
                        
//                           className={`${navigationMenuTriggerStyle()}`}
//                         >
//                           {items.text}
//                         </NavigationMenuLink>
//                       </Link>
//                     )}
//                     {Array.isArray(items) && (
//                        <NavigationMenuContent>
//                         <ul className="p-6 text-left">
//                           {items.map((item, itemIndex) => (
//                             <li key={itemIndex}>
//                               <Link href={`/categories/${item.link}`}>{item.text}</Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </NavigationMenuContent>
//                     )}
//                   </NavigationMenuItem>
//                 ))}
//               </NavigationMenuList>

//               <div className=" ml-4">
//               <ThemeToggler />
//               </div>  
//             </NavigationMenu>
             
//           )}
         
//         </header> */}
//         Navbar
//     </div>
//   );
// };

// export default NavBar;