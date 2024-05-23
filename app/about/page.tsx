"use client"

import Image from "next/image"
import Link from "next/link"

interface User {
  name: string
  job: string
  image: string,
  id: string
}

let user: User = {
  name: "Ali Soufan",
  job: "Chairman & CEO",
  image: "https://www.soufangroup.com/wp-content/uploads/2019/10/Ali-Soufan-BW-2.png",
  id: "team-member/ali-soufan"
}

let users: User[] = []

for (let i = 0; i < 10; i++) {
  users.push(user)
}

export default function About() {
  return (
    <>
      <Image
        src="https://www.soufangroup.com/wp-content/uploads/2019/10/about-tsg.png"
        loader={() => "https://www.soufangroup.com/wp-content/uploads/2019/10/about-tsg.png"}
        alt="Soufan Group"
        width={0}
        height={0}
        className="h-30vw w-full bg-cover bg-center"
      />
      <div className="p-10">
        <p className="text-3xl">About The Soufan Group</p>
        <div className="grid-cols-2 gap-4 text-lg md:grid">
          <div className="py-5">
            <div>
              The Soufan Group (TSG) is a global intelligence and security consultancy that helps clients in the public
              and private sectors enhance their ability to identify and assess national and international challenges and
              successfully operate in high-risk, high-opportunity environments.
            </div>
            <div className="mt-1">
              Headquartered in New York, with representation in Chicago, Washington, D.C., Boston, London, Doha, and
              Singapore, we focus on the most important geostrategic challenges of our time, addressing existing fault
              lines and anticipating emerging trend lines. We enable and support informed strategic and tactical
              decisions that maximize opportunity and minimize risk.
            </div>
            <div className="mt-1">
              Our team brings together uniquely qualified, highly decorated officers with deep experience in the
              intelligence sector (FBI, CIA, MI5, MI6), the military, law enforcement, and government and with firmly
              rooted relationships in these agencies and services and in international, federal, state, and local
              governance. We are fluent in the cultures and languages of the Middle East, China, Europe, Southeast Asia,
              and the Americas.
            </div>
          </div>
          <div className="py-5 md:px-5">
            <div>
              We have been stationed in and have served in conflict zones in Afghanistan, Iraq, Yemen, and Syria and in
              centers of policy and practice including New York, Washington, D.C., The Hague, Brussels, London, and
              Singapore.
            </div>
            <div className="mt-1">
              We are authors, academics, and advisors to nations, to world-leading institutions including the United
              Nations (UN) and the European Union (EU), and to private sector clients. We have testified before Congress
              and are regarded as a source of truth and expertise on the subjects of global security, terrorism,
              extremism, white supremacy, disinformation, and malign actors. Our experts provide regular commentary on
              global security challenges to national and international news outlets including the New York Times, the
              Washington Post, the Wall Street Journal, The New Yorker, the BBC, CNN, Fox News, MSNBC, CNBC, 60 Minutes,
              The Times of London, the Guardian, Der Spiegel, and Straits Times, and our work is covered and quoted
              widely.
            </div>
          </div>
        </div>
        <div className="mx-auto border-b-2 border-black text-center md:w-1/2 "></div>
        <div className="mt-5 text-3xl">Our Leadership Team</div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-16 lg:grid-cols-5 xl:grid-cols-4">
          {users.map((user, idx) => (
            <div key={idx}>
              <Image
                src={user.image}
                loader={() => user.image}
                alt={user.name}
                width={0}
                height={0}
                className="h-auto w-full bg-cover bg-center"
              />
              <Link href={`/${user.id}`}>
                <div>
                  <p className="text-4xl">{user.name}</p>
                  <p className="text-lg">{user.job}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
