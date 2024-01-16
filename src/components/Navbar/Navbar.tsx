"use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import NavItems from "../Navitems";

// export default function Navbar() {
//   const [sticky, setSticky] = useState<boolean>(false);
//   const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
//   // const {setSearchResults, setSearchQuery} = useContext(GlobalContext)
//   function handleStickyNavbar() {
//     if (window.scrollY >= 80) setSticky(true);
//     else setSticky(false);
//   }
//   function handleNavbarToggle() {
//     setNavbarOpen(!navbarOpen);
//   }
//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyNavbar);
//   });

//   //   useEffect(()=> {
//   //     setSearchResults([])
//   //     setSearchQuery('')
//   //   },[pathName])

//   return (
//     <div className="w-full">
//       <header
//         className={`bg-[#2b58c5] px-4 flex items-center w-full text-black top-0
//         ${
//             sticky
//               ? "!fixed !z-[9999] !bg-[#2b58c5] !text-black !bg-opacity-80 shadow-sticky backdrop:blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
//               : "absolute text-black"
//           }
//         `}
//       >
//         <div className="container">
//           <div className="relative -mx-4 flex items-center justify-between">
//             <div className="w-60 max-w-full px-4 xl:mr-12">
//               <Link
//                 href={"/"}
//                 className={`text-[30px] font-extrabold cursor-pointer block w-full
//                     ${sticky ? "py-3" : "py-3"}
//                     `}
//               >
//                 <Image src="/Logo.svg" alt="Logo" width={55} height={59} />
//               </Link>
//             </div>
//             <div className="flex w-full items-center justify-between px-4">
//               <div>
//                 <button
//                   onClick={handleNavbarToggle}
//                   id="navbarToggler"
//                   aria-label="Mobile Menu"
//                   className="absolute right-4 top-1/2 block translate-y-[-50%] lg:hidden"
//                 >
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300
//                         ${navbarOpen ? "top-[7px] rotate-45" : ""}
//                         `}
//                   />
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px]transition-all duration-300 bg-white
//                         ${navbarOpen ? "opacity-0" : ""}
//                         `}
//                   />
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px]transition-all duration-300 bg-white
//                         ${navbarOpen ? "top-[-8px] -rotate-45" : ""}
//                         `}
//                   />
//                 </button>
//                 <nav
//                   id="navbarCollapse"
//                   className={`absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-[#2b58c5] 
//                   text-white border-body-color/50 py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100

//                 ${
//                   navbarOpen
//                     ? "visible top-full opacity-100"
//                     : "invisible top-[120%] opacity-0"
//                 }
//                 `}
//                 >
//                   <ul className="block lg:flex lg:space-x-12 w-full">
//                     <NavItems />
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";
import { useEffect, useState } from "react";
import { navData } from "../../utils/config";
import Image from "next/image";
import ThemeToggler from "../themes";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sticky, setSticky] = useState<boolean>(false);

  function handleStickyNavbar() {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
    className={`top-0 shadow-lg px-4 left-0 z-40 flex w-full items-center bg-transparent
    ${
      sticky
      ? "fixed z-[9999] bg-zinc-200 dark:bg-transparent bg-opacity-30 backdrop-blur-sm shadow-sticky backdrop:blur-sm transition transform translate-y-0"
      : "absolute"
    } 
    `}
    >

        <header className="w-full h-fit py-2 px-3 md:px-7 flex justify-between items-center">
          <Link href="/" className="font-mono">
            <div><Image src="/Logo.svg" alt="Logo" width={50} height={40} /></div>
          </Link>

          {isMobile && <MobileSidebar />}

          {!isMobile && (
            <NavigationMenu>
              <NavigationMenuList>
                {Object.entries(navData).map(([category, items]:any, index) => (
                  <NavigationMenuItem key={index}>
                    {Array.isArray(items) ? (
                      <a href={category}>
                      <NavigationMenuTrigger>
                      {category}
                      </NavigationMenuTrigger>
                      </a>
                    ) : (
                      <Link href={items.link} legacyBehavior passHref>
                        <NavigationMenuLink
                        
                          className={`${navigationMenuTriggerStyle()}`}
                        >
                          {items.text}
                        </NavigationMenuLink>
                      </Link>
                    )}
                    {Array.isArray(items) && (
                       <NavigationMenuContent>
                        <ul className="p-6 text-left">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link href={`/categories/${item.link}`}>{item.text}</Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>

              <div className=" ml-4">
              <ThemeToggler />
              </div>  
            </NavigationMenu>
             
          )}
         
        </header>
    </div>
  );
};

export default NavBar;