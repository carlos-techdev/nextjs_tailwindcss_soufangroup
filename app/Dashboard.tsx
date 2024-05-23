"use client"

let services: string[] = []

for (let i = 0; i < 8; i++) {
  services.push("Intelligence Services")
}

export default function Dashboard() {
  return (
    <>
      <div className="bg-home bg-cover bg-center w-full h-auto">
        <div className="mx-auto w-4/5 pt-60">
          <div className="bg-gray-600 bg-opacity-70 p-10 text-white">
            <div className="w-60 bg-blue-400 p-2"></div>
            <div className="text-3xl">
              <span className="font-bold">The Soufan Group</span> – “TSG is the continuation of our lifelong devotion to improving global security. In an
              increasingly interconnected and complex world, where security threats do not operate in a vacuum, we equip
              our clients with intelligence and practices that help them mitigate complex risk and remain safe
              physically, commercially, legally, and ethically.”
            </div>
            <div className="flex flex-row-reverse mt-5">
              <div className="sm:w-1/3">
              <span className="text-lg">Ali Soufan —</span>former FBI Supervisory Special Agent & Chief Executive Officer of The Soufan Group
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-950 text-white ">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mt-20 text-center text-2xl md:ml-8 md:text-left">Our Services</p>
            <div className="grid grid-cols-2 gap-4 p-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((val, idx) => (
                <div
                  key={idx}
                  className="rounded-md border-2 border-white p-4 hover:cursor-pointer hover:bg-cyan-300 sm:p-6 md:p-8"
                >
                  {val}
                </div>
              ))}
            </div>
          </div>
          <div className="px-8 py-16 text-lg sm:py-32">
            <p>
              The Soufan Group (TSG) is a global intelligence and security consultancy that helps clients in the public
              and private sectors enhance their ability to identify and assess national and international challenges and
              successfully operate in high-risk, high-opportunity environments.
            </p>
            <p className="mt-2">
              Headquartered in New York, with representation in Chicago, Washington, D.C., Boston, London, Doha, and
              Singapore, we focus on the most important geostrategic challenges of our time, addressing existing fault
              lines and anticipating emerging trend lines. We enable and support informed strategic and tactical
              decisions that maximize opportunity and minimize risk.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
