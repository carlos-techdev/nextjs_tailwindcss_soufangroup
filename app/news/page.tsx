"use client"

import Image from "next/image"
import Link from "next/link"

interface Data {
  date: string
  title: string
  source: string
  author: {
    name: string
    url: string
  }
  image: string
  more: string
}

let data: Data = {
  date: "January 4, 2024",
  title: "Islamic State Claims Responsibility for Deadly Bombings in Iran",
  source: "New York Times",
  author: {
    name: "Colin P. Clarke",
    url: "team-member/colin-p-clarke",
  },
  image: "https://www.soufangroup.com/wp-content/uploads/2024/01/unnamed-3-400x280-1.png",
  more: "https://www.nytimes.com/2024/01/04/world/middleeast/us-isis-iran-general-suleimani.html",
}

let datas: Data[] = []

for (let i = 0; i < 10; i++) {
  datas.push(data)
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
      <div className="px-10 py-10 xl:pl-20">
        <p className="text-5xl">In The News</p>
        {datas.map((data, idx) => (
          <div key={idx} className="block py-5 md:flex">
            <div className="w-3/5 md:w-1/4">
              <Image
                src={data.image}
                loader={() => data.image}
                alt={data.image}
                width={0}
                height={0}
                className="h-auto w-full bg-cover bg-center"
              />
            </div>
            <div className="w-full md:w-3/4">
              <div className="py-1 text-lg md:p-2 lg:p-4 xl:p-10">
                <p>{data.date}</p>
                <p className="font-bold">{data.title}</p>
                <p className="font-bold">{data.source}</p>
                <Link href={data.author.url} className="text-blue-700 underline">
                  {data.author.name}
                </Link>
                <span className="m-1">|</span>
                <Link href={data.more} className="text-blue-700 underline">
                  More
                </Link>
              </div>
            </div>
          </div>
        ))}
        <Link href="https://www.soufangroup.com/blog/">
          <div className="mx-auto border-2 border-black p-2 text-center hover:cursor-pointer hover:bg-black hover:text-white md:w-1/3">
            Archieve
          </div>
        </Link>

        <div className="mx-auto mt-16 w-11/12 border-b-2 border-black text-center md:w-2/5"></div>
      </div>
    </>
  )
}
