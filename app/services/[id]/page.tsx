"use client"

import { useParams } from "next/navigation"
import { useEffect } from "react"
import { FaPlus } from "react-icons/fa"

export default function About() {
  const param = useParams()

  useEffect(() => {
    console.log(param.id)
  }, [param.id])

  return (
    <>
      <div className="bg-service_detail_ratio xl:bg-service_detail h-auto w-full bg-cover bg-center ">
        <div className="mx-auto w-5/6 pt-32 xl:w-4/5">
          <div className="bg-gray-600 bg-opacity-70 px-8 text-white">
            <div className="w-40 bg-blue-500 p-1"></div>
            <div className="py-10 text-6xl">Intelligence Services</div>
            <div className="pb-20 text-2xl">
              Our unique combination of experience, access, and on-the-ground insight enables us to stay one step ahead,
              providing the most accurate and timely intelligence and analysis to our clients. We work to translate this
              knowledge into practical, real-world applications our clients can use to protect their operations, staff,
              and assets. Through tailored intelligence and investigations services, we support your efforts to
              anticipate crises and mitigate risks as early as possible. We bring together multi-sector expertise to
              deliver tailor-made threat assessments, whether for business travel, market expansion, or any situation
              that places your operations and assets at risk. Our intelligence services support clients looking to
              better understand any issue across the evolving security threat landscape, where geopolitics and modern
              technology can impact their business operations.
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-6 px-10 py-20 md:grid-cols-3 md:px-20">
        <div>
          <p className="text-2xl font-bold xl:text-3xl">Our services include:</p>
          <div className="mt-2 flex items-center py-2 text-xl">
            <FaPlus className="text-blue-600" />
            <span className="ml-1 font-bold">Intelligence & Investigations</span>
          </div>
          <div className="flex items-center py-2 text-xl">
            <FaPlus className="text-blue-600" />
            <span className="ml-1 font-bold">Intelligence & Investigations</span>
          </div>
          <div className="flex items-center py-2 text-xl">
            <FaPlus className="text-blue-600" />
            <span className="ml-1 font-bold">Intelligence & Investigations</span>
          </div>
          <div className="flex items-center py-2 text-xl">
            <FaPlus className="text-blue-600" />
            <span className="ml-1 font-bold">Intelligence & Investigations</span>
          </div>
        </div>
        <div>
          <div className="mt-4 border-b-2 border-black pb-4 text-3xl font-bold md:mt-0 xl:text-4xl">
            Intelligence & Investigations
          </div>
          <p className="mt-4 text-lg">
            We are experienced in operating in the current information and threat environment, where our analytic
            judgments are used by clients to proactively address evolving security challenges. Our intelligence and
            investigations team is composed of certified open-source intelligence (OSINT) investigators and former law
            enforcement and government intelligence analysts. We utilize the latest technologies and techniques to
            perform a wide variety of investigative services, including background checks on prospective employees, due
            diligence investigations into business partners, risk and vulnerability assessments of client personnel, and
            unmasking of threat actors. When required, we can leverage a global network of human sources to provide
            combined OSINT and human intelligence (HUMINT) support to business intelligence matters as well as
            government and non-profit-led investigations into criminal activity and human rights abuses, including
            violations of international law.
          </p>
          <div className="border-b-2 border-black pb-4 pt-10 text-3xl font-bold md:mt-0 xl:text-4xl">
            Geopolitical Risk Analysis
          </div>
          <p className="mt-4 text-lg">
            Our team works to protect your operations and assets from national volatility and international political
            uncertainty. We provide strategic consultancy and conduct geopolitical risk analysis at the country, region,
            and subregion level, addressing risks and threats to people, property, and commerce. Geopolitics, economics,
            and sociocultural phenomena are impacted by everything from emerging technologies and public health crises
            to currency fluctuations and supply chain disruptions. Through open-source intelligence, network analysis,
            and structured analytic techniques, our researchers help clients make sense of voluminous amounts of data to
            reach a decision point. Weighing risks and opportunities in a myriad of settings—from fragile states to
            emerging markets—our geopolitical analysis assists clients in navigating today’s domestic and global
            challenges.
          </p>
        </div>
        <div>
          <div className="mt-4 border-b-2 border-black pb-4 text-3xl font-bold md:mt-0 xl:text-4xl">
            Threat Assessments
          </div>
          <p className="mt-4 text-lg">
            We support our clients in anticipating crises and mitigating risks as early as possible. Our threat
            assessment specialists have extensive experience in red-teaming and comparative analytical methods used to
            monitor, evaluate, and measure a range of threats to individuals, corporations, non-governmental
            organizations, and nation-states. We work with clients to protect investments by understanding
            vulnerabilities and using empirical assessments to craft comprehensive strategies that protect valuable
            assets, operations, and resources. We offer dedicated threat assessment services focused on infrastructure,
            logistics, and distribution protection, as well as threat assessments tailored to address our client’s
            specific needs. We provide decision-makers with data and analyses that enhance their understanding of
            complex threat scenarios and afford them the clarity to protect their interests in high-risk environments.
          </p>
          <div className="mt-4 border-b-2 border-black pb-4 text-3xl font-bold md:mt-0 xl:text-4xl">
            Threat Assessments
          </div>
          <p className="mt-4 text-lg">
            We support our clients in anticipating crises and mitigating risks as early as possible. Our threat
            assessment specialists have extensive experience in red-teaming and comparative analytical methods used to
            monitor, evaluate, and measure a range of threats to individuals, corporations, non-governmental
            organizations, and nation-states. We work with clients to protect investments by understanding
            vulnerabilities and using empirical assessments to craft comprehensive strategies that protect valuable
            assets, operations, and resources. We offer dedicated threat assessment services focused on infrastructure,
            logistics, and distribution protection, as well as threat assessments tailored to address our client’s
            specific needs. We provide decision-makers with data and analyses that enhance their understanding of
            complex threat scenarios and afford them the clarity to protect their interests in high-risk environments.
          </p>
        </div>
      </div>
    </>
  )
}
