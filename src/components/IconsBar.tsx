import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineFacebook } from "react-icons/md";
import { SlSocialYoutube } from "react-icons/sl";
import { Tooltip } from "@nextui-org/tooltip";
import Link  from 'next/link';
const IconsBar = () => {
  return (
    
<div className="flex gap-6 sm:justify-start justify-center">
                  <Tooltip content="Instagram">
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/alightmotion"
                    >
                      <FaInstagram
                        size={20}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                  </Tooltip>

                  <Tooltip content="Twitter">
                    <Link
                      target="_blank"
                      href="https://twitter.com/alightcreative"
                    >
                      <RiTwitterXFill
                        size={20}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                  </Tooltip>

                  <Tooltip content="Facebook">
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/alightcreative"
                    >
                      <MdOutlineFacebook
                        size={20}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                  </Tooltip>

                  <Tooltip content="Youtube">
                    <Link
                      target="_blank"
                      href="https://www.youtube.com/@rehanallahwala"
                    >
                      <SlSocialYoutube
                        size={20}
                        className="hover:scale-125 transition-all w-8"
                      />
                    </Link>
                  </Tooltip>
                </div>
  )
}

export default IconsBar