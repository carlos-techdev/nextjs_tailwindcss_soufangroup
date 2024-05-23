"use client"

import Image from "next/image"
import Link from "next/link"

interface Release {
  title: string
  location: string
  date: string
  url: string
  content: string
  more: {
    name: string
    url: string
  }
}

let release: Release = {
  title: "Press Release – The Soufan Group Welcomes Christopher O’leary as Senior Vice President for Global Operations",
  location: "New York, NY",
  date: " October 26, 2023",
  url: "https://www.soufangroup.com/press-releases/the-soufan-group-welcomes-former-congressman-max-rose-as-vice-chairman/",
  content:
    "The Soufan Group (TSG) announces the appointment of Christopher O’Leary as Senior Vice President for Global Operations. Building on a career spanning over two decades of service working on counterterrorism investigations and operations for the Federal Bureau of Investigation, Mr. O’Leary will oversee TSG’s global projects and operations.",
  more: {
    name: "READ MORE",
    url: "https://www.soufangroup.com/press-releases/the-soufan-group-welcomes-christopher-oleary-as-senior-vice-president-for-global-operations/",
  },
}

let releases: Release[] = []

for (let i = 0; i < 10; i++) {
  releases.push(release)
}

export default function About() {
  return (
    <>
      <Image
        src="https://www.soufangroup.com/wp-content/uploads/2019/10/team-members-background.jpg"
        alt="member-background"
        loader={() => "https://www.soufangroup.com/wp-content/uploads/2019/10/team-members-background.jpg"}
        width={0}
        height={0}
        className="h-40 w-full bg-cover bg-center"
      />
      <div className="py-10 pl-2 sm:pl-4 lg:pl-6 xl:pl-20">
        <p className="text-4xl">Press Releases</p>
        <div className="mt-16">
          {releases.map((release, idx) => (
            <div key={idx} className="block md:flex">
              <div className="w-1/3 p-4 md:w-1/6">
                <Image
                  src="https://www.soufangroup.com/wp-content/uploads/2020/10/TSG-logo-150x150.jpg"
                  loader={() => "https://www.soufangroup.com/wp-content/uploads/2020/10/TSG-logo-150x150.jpg"}
                  alt="TSG"
                  width={0}
                  height={0}
                  className="h-auto w-full bg-cover bg-center"
                />
              </div>
              <div className="w-full p-4 md:w-5/6 md:py-2">
                <p className="text-6xl">{release.title}</p>
                <p className="py-6 text-xl font-bold">
                  {release.location} - {release.date}
                </p>
                <p>{release.content}</p>
                <Link href={release.more.url}>
                  <div className=" my-5 inline-block bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-700">
                    {release.more.name}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 w-11/12 border-b-2 border-black text-center md:w-2/5"></div>
      </div>
    </>
  )
}
