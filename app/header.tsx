"use client"

import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"
import {
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
  Menu,
  MenuItems,
  MenuItem,
  MenuButton,
  Transition,
} from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const navigation = [
  { name: "ABOUT", href: "/about", current: false },
  { name: "SERVICES", href: "/services", current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto h-32 w-full px-2 sm:px-4 lg:px-6 xl:px-20">
            <div className="relative top-8 flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex justify-start sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href='/'>
                    <Image
                      src="https://www.soufangroup.com/wp-content/uploads/2019/10/Logo-The-Soufan-Group.png"
                      loader={() => "https://www.soufangroup.com/wp-content/uploads/2019/10/Logo-The-Soufan-Group.png"}
                      alt="Soufan Group"
                      width={200}
                      height={90}
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className={classNames("text-white", "rounded-md px-3 py-2 text-2xl font-medium")}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="relative flex bg-black text-sm">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <span className="rounded-md px-3 py-2 text-2xl font-medium text-white">
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
                            {({ active }) => (
                              <Link href="/news" className={classNames("block px-4 py-2 text-xl text-white")}>
                                IN THE NEWS
                              </Link>
                            )}
                          </MenuItem>
                          <MenuItem>
                            {({ active }) => (
                              <Link href="/releases" className={classNames("block px-4 py-2 text-xl text-white")}>
                                PRESS RELEASES
                              </Link>
                            )}
                          </MenuItem>
                        </MenuItems>
                      </Transition>
                    </Menu>
                    <Link href="/contact" className="rounded-md px-3 py-2 text-2xl font-medium text-white">
                      CONTACT
                    </Link>
                  </div>
                </div>

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, idx) => (
                <DisclosureButton
                  key={idx}
                  as="a"
                  href={item.href}
                  className={classNames(
                    "block rounded-md px-3 py-2 text-right text-2xl font-medium text-white hover:rounded-none hover:border-y-2 hover:border-white"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <Menu as="div" className="relative ml-3 ">
                <div className="flex flex-row-reverse hover:rounded-none hover:border-y-2 hover:border-white">
                  <MenuButton className="relative flex bg-black text-sm">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <Link href="/news" className="rounded-md px-3 py-2 text-2xl font-medium text-white ">
                      MEDIA
                    </Link>
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
                      {({ active }) => (
                        <Link href="/news" className={classNames("block px-4 py-2 text-xl text-white")}>
                          IN THE NEWS
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link href="/releases" className={classNames("block px-4 py-2 text-xl text-white")}>
                          PRESS RELEASES
                        </Link>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
              <div className="text-right hover:rounded-none hover:border-y-2 hover:border-white">
                <a href="#" className={classNames("text-white", "rounded-md px-3 py-2 text-2xl font-medium")}>
                  CONTACT
                </a>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
