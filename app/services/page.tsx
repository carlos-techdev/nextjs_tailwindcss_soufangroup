"use client"

import Link from "next/link"
import { FaPlus } from "react-icons/fa"

interface Service {
  title: string
  content: string,
  url: string
}

let service: Service = {
  title: "Intelligence Services",
  content: "Our unique combination of experience, access, and on-the-ground insight enables us to stay one step ahead, providing the most accurate and timely intelligence and analysis to our clients. We work to translate...",
  url: 'intelligence-services'
}

let services: Service[] = []

for (let i = 0; i < 10; i++) {
  services.push(service)
}

export default function About() {
  return (
    <>
      <div className="bg-service h-auto w-full bg-cover bg-center ">
        <div className="mx-auto w-4/5 pt-40 pb-20">
          <div className="bg-gray-600 bg-opacity-70 px-12 py-20 text-white">
            <div className="w-40 bg-blue-500 p-1"></div>
            <div className="py-5 text-3xl">
              “We are a global intelligence and security consultancy that helps clients in the public and private
              sectors enhance their ability to identify and assess national and international challenges and
              successfully operate in high-risk, high-opportunity environments.”
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-10 md:px-8 xl:px-32 bg-gradient-to-t from-gray-800 to-white">
        <p className="text-5xl px-4">Our Services</p>
        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div key={idx} className="p-4 lg:p-6 bg-white">
              <p className="text-4xl">{service.title}</p>
              <p className="text-md mt-4">{service.content}</p>
              <div className="text-md mt-12 flex h-8 items-center border-y-2 border-black">
                <Link href={`/services/${service.url}`}>
                  <FaPlus className="text-blue-600" />
                </Link>
                <span className="ml-1 font-bold">Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
