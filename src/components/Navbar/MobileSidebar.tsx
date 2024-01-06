import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion";
  
  import { Button } from "../ui/button";
  import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
  import { Menu } from "lucide-react";
  import Link from "next/link";
  import { useEffect, useState } from "react";
  import { navData } from "../../utils/config";
  
  const MobileSidebar = () => {
    const [isMounted, setIsMounted] = useState(false);
  
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
  
    return (
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="default" className="md:hidden">
            <Menu className="text-black dark:text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="flex justify-between flex-col">
  
          <ul className="flex justify-between items-center">
            {Object.keys(navData).map((key) => {
              const item = navData[key];
  
              // Check if the item is an array
              if (Array.isArray(item)) {
                return null; // Skip rendering if it's an array
              }
  
              return (
                <li key={key}>
                  <Link href={item.link}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(navData).map((key) => {
              const item = navData[key];
  
              if (!Array.isArray(item)) {
                return null;
              }
  
              return (
                <div className="col-span-1">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <h4 className="font-bold cursor-pointer">{key}</h4>
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.map((subItem, index) => (
                          <li key={index}>
                            <Link href={subItem.link}>{subItem.text}</Link>
                          </li>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              );
            })}
          </div>
  
          <div className="flex flex-col items-center">
            <Link className="w-full" href="sign-up">
              <Button className="w-full">Sign Up</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    );
  };
  
  export default MobileSidebar;