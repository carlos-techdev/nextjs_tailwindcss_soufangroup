"use client"

import Image from "next/image"
import { Fragment } from "react"
import { FaLinkedin, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa"
import { Menu, MenuItems, MenuItem, MenuButton, Transition } from "@headlessui/react"
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <div className="bg-stone-800 text-white">
        <div className="px-10 pb-10 pt-20 md:flex md:justify-between">
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <Image
                src="https://www.soufangroup.com/wp-content/themes/the-soufan-center/Logo-The-Soufan-Group-white.png"
                loader={() =>
                  "https://www.soufangroup.com/wp-content/themes/the-soufan-center/Logo-The-Soufan-Group-white.png"
                }
                alt="Soufan Group"
                width={300}
                height={90}
              />
            </Link>
          </div>
          <div>
            <div className="lg:flex">
              <div className="hidden text-lg lg:block">
                <div className="flex">
                  <Link href="/about" className="rounded-md px-3 text-2xl text-white">
                    ABOUT
                  </Link>
                  <Link href="/service" className="rounded-md px-3 text-2xl text-white">
                    SERVICE
                  </Link>
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <span className="rounded-md px-3 text-2xl text-white hover:bg-gray-700 hover:text-white">
                          MEDIA
                        </span>
                      </MenuButton>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuItem>
                          <Link href="/news" className="block px-4 py-2 text-xl text-white">
                            IN THE NEWS
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="/releases" className="block px-4 py-2 text-xl text-white">
                            PRESS RELEASES
                          </Link>
                        </MenuItem>
                      </MenuItems>
                    </Transition>
                  </Menu>
                  <Link href="/contact" className="rounded-md px-3 text-2xl text-white">
                    CONTACT
                  </Link>
                </div>
              </div>
              <div className="mt-5 lg:mt-0 lg:flex">
                <div className="flex justify-center md:justify-end">
                  <Link href="https://www.youtube.com/user/soufangroup/" target="_blank" className="mx-5">
                    <FaYoutube size={36} color="white" />
                  </Link>
                  <Link href="https://www.youtube.com/user/soufangroup/" target="_blank" className="mx-5">
                    <FaLinkedin size={36} color="white" />
                  </Link>
                  <Link href="https://www.youtube.com/user/soufangroup/" target="_blank" className="mx-5">
                    <FaFacebook size={36} color="white" />
                  </Link>
                  <Link href="https://www.youtube.com/user/soufangroup/" target="_blank" className="mx-5">
                    <FaTwitter size={36} color="white" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center md:mr-5 md:text-right">Privacy Policy</div>
            <div className="mt-5 text-center md:mr-5 md:text-right">
              © Copyright 2024 The Soufan Group. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
