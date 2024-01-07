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
      <SheetContent side="right">

        <ul>
          {Object.keys(navData).map((key) => {
            // @ts-expect-error
            const item = navData[key];

            // Check if the item is an array
            if (Array.isArray(item)) {
              return null; // Skip rendering if it's an array
            }

            return (
              <li key={key}>
                <Link href={item.link} className="text-black">{item.text}</Link>
              </li>
            );
          })}
        </ul>
        <div className="grid grid-cols-1">
          {Object.keys(navData).map((key) => {
            // @ts-expect-error
            const item = navData[key];

            if (!Array.isArray(item)) {
              return null;
            }

            return (
              <div className="col-span-1" key={key}>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1 flex">
                    <AccordionTrigger>
                      <h4 className="font-bold cursor-pointer">{key}</h4>
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.map((subItem, index) => (
                        <li key={index}>
                          <Link href={subItem.link} legacyBehavior passHref>{subItem.text}</Link>
                        </li>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
