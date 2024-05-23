"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect } from "react"

interface User {
  name: string
  job: string
  image: string
  id: string
}

let user: User = {
  name: "Ali Soufan",
  job: "Chairman & CEO",
  image: "https://www.soufangroup.com/wp-content/uploads/2019/10/Ali-Soufan-BW-2.png",
  id: "ali-soufan/",
}

let users: User[] = []

for (let i = 0; i < 30; i++) {
  users.push(user)
}

export default function About() {
  const param = useParams()

  useEffect(() => {
    console.log(param.id)
  }, [param.id])

  return (
    <>
      <div className="flex h-screen w-full  bg-service_detail bg-cover bg-center">
        <div className="w-1/2 pb-10 pl-20 pt-20 xl:pt-56">
          <div className="bg-gray-600 bg-opacity-70 px-10 py-8 text-white">
            <p className="text-4xl lg:text-6xl">Ali Soufan</p>
            <p className="text-xl lg:text-3xl">Chairman & CEO</p>
          </div>
        </div>
        <div className="h-full w-1/2">
          <div className="w-5/6 py-20">
            <Image
              src="https://www.soufangroup.com/wp-content/uploads/2019/10/Ali-Soufan-BW-2.png"
              loader={() => "https://www.soufangroup.com/wp-content/uploads/2019/10/Ali-Soufan-BW-2.png"}
              alt="member"
              width={0}
              height={0}
              className="h-auto w-full bg-cover bg-center"
            />
          </div>
        </div>
      </div>
      <div className="px-8 pt-32 md:px-16">
        <p className="text-3xl">
          Ali Soufan is Chairman and Chief Executive Officer of The Soufan Group. A leading national security and
          counterterrorism expert, he plays a significant advisory role in global intelligence and geopolitical issues.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="text-xl">
            <p>
              As an FBI Supervisory Special Agent, he investigated and supervised complex international terrorism cases,
              including the East Africa embassy bombings, the attack on the USS Cole, and the events surrounding 9/11.
              He is the author of Anatomy of Terror: From the Death of bin Laden to the Rise of the Islamic State
              (2017), winner of the Airey Neave Book Prize, and the New York Times bestseller The Black Banners: The
              Inside Story of 9/11 and the War Against al-Qaeda (2011), winner of the 2012 Ridenhour Book Prize. On its
              original release in 2011, many of the most significant passages in the book were redacted; now, after a
              decade of legal wrangling, the full story can at last be told in The Black Banners (Declassified): How
              Torture Derailed the War on Terror after 9/11 (2020).
            </p>
            <p className="mt-4">
              Ali Soufan had a distinguished career in the FBI, including serving on the Joint Terrorism Task Force, New
              York Office, where he coordinated both domestic and international counterterrorism operations. He often
              operated out of hostile environments and carried out sensitive extraterritorial missions and high-level
              negotiations, and he has received numerous awards and commendations for his work. These include the FBI
              Director’s Award for Excellence, the Respect for Law Enforcement Award for “relentless pursuit of truth
              and bringing terrorist subjects before the bar of justice,” and a commendation from the U.S. Department of
              Defense that labeled him “an important weapon in the ongoing war on terrorism.”
            </p>
            <p className="mt-4">
              Mr. Soufan has testified before the U.S. Congress, presidential commissions, and the British Parliament’s
              Home Affairs Committee, and he has appeared as an expert panelist and guest speaker at international
              security forums, both in the United States and abroad, as well as before the United Nations Security
              Council. He is an ardent and outspoken critic of the use of torture and has testified against the efficacy
              of those techniques, including before a 2009 Senate Judiciary Committee.
            </p>
          </div>
          <div className="text-xl">
            <p>
              Mr. Soufan has also been featured in books, films, television series, newspaper articles, and
              documentaries across the globe. He has contributed to and been interviewed by 60 Minutes, Frontline, The
              New Yorker, Washington Post, New York Times, Wall Street Journal, Straits Times, Der Spiegel, and
              Al-Jazeera, and he has appeared on CNN, MSNBC, Fox News, and the BBC, among other major media outlets. His
              work has also been detailed in several nonfiction books, including The Looming Tower, by Lawrence Wright,
              which was adapted into a 10-part Hulu series in 2018. In 2019, he was featured as a character in the
              Amazon Studios film The Report, which looked at America’s dark history surrounding the use of torture
              following the September 11 attacks. He has also appeared in several documentary films, including Netflix’s
              Turning Point: 9/11 and the War on Terror and HBO’s The Forever Prisoner.
            </p>
            <p className="mt-4">
              Mr. Soufan also serves as the Executive Director of the Qatar International Academy for Security Studies
              (QIASS) and is the Founder of The Soufan Center, where he presides over the annual Global Security Forum.
              In 2021, Mr. Soufan was appointed to serve as a Special Adviser to the Prosecutor of the International
              Criminal Court (ICC). He is a Board Member of the James W. Foley Legacy Foundation and a member of the
              McCain Institute for International Leadership’s Global Advisory Council. In 2020, he was awarded the James
              W. Foley Legacy Achievement Award, A Profile In Moral Courage for his work for Americans held hostage
              abroad. He is an honors graduate of Mansfield University of Pennsylvania, where he received his
              undergraduate double degree in International Studies and Political Science, minoring in Cultural Studies
              and Anthropology. He received a Master of Arts in International Relations from Villanova University,
              graduating magna cum laude. He speaks fluent English and Arabic.
            </p>
          </div>
        </div>
        <p className="mt-8 text-2xl">Our Leadership Team</p>
        <div className="pt-4 pb-20 grid grid-cols-2 gap-4 md:grid-cols-5 xl:grid-cols-8">
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
              <Link href={`/team-member/${user.id}`}>
                <p className="text-3xl md:text-xl xl:text-lg">{user.name}</p>
                <p className="text-sm">{user.job}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
