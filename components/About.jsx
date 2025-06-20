import react from "react";
import Image from "next/image";
import ceopic from "../images/ceopic1.png";

export default function About() {
  return (
    <div className="bg-[#f5f5f5] mx-auto py-10  px-2 h-auto">
      <div className="">
        <div className="">
          <h6 className="text-[#E04448] mb-2 text-[1.5rem] font-semibold">
            ABOUT US
          </h6>
          <h2 className="text-[#122344] font-bold -tracking-[0.025em] relative z-1 text-[2rem]">
            <span className=" border-b-3 border-[#E04448]">Professional</span>{" "}
            and Compassionate Support
          </h2>

          <div className="space-y-6">
            <p className="text-[1rem] text-[#333C] pt-3 text-justify">
              Innovate is a professional B2B Consultancy Firm run managed and
              operated by senior entrepreneur who has the history of
              facilitation professional and individual aspirants to move ahead
              in their career.
            </p>
            <p className="text-[1rem] text-[#333C] pb-3 text-justify">
              Lead/Management consultant is a seasoned professional with over 37
              years of diverse experience in marketing business development
              operations & administration. Syed Haroon Hasan has the history of
              facilitating professionals in career switch as well as have a
              reputation of helping individuals keen to study abroad with their
              admissions in the state institutions across the globe. A
              relationship builder by heart, constantly striving to promote
              innovation, foster sustainable growth, and generate long-term
              value for my valued clients by providing them varied options to
              look into.
            </p>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                {/* ************************************** */}
                <div className="md:w-1/3 lg:w-1/4">
                  <div className="h-85 md:h-full relative ">
                    <div className="absolute inset-0 flex  items-center justify-center bg-[#122344] ">
                      <Image src={ceopic} alt="ceopic" className="mt-35 md:mt-10 "/>
                    </div>
                    <div className="absolute inset-x-0 -bottom-30 md:bottom-0 p-4 bg-[#0A2342CC] ">
                      <div className="flex justify-center space-x-6 text-white">
                        <div className="text-center">
                          <p className="text-3xl font-bold">37</p>
                          <p className="text-sm">Years of Expertise</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold">Certified</p>
                          <p className="text-sm">British Council Agent</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ***************** */}

                <div className="md:w-2/3 lg:w-3/4 pt-25 px-1 md:px-5">
                  <div className="text-[#E04448] font-semibold md:text-lg ">LEADERSHIP</div>
                  <h3 className="text-[1.25rem] font-bold text-[#0A2342]">
                    Meet Our Founder & CEO
                  </h3>
                  <div className="p-3">
                    <div className="flex items-center mb-2">
                      <h4 className="text-[#0A2342] text-[1.25rem] font-bold">
                        Syed Haroon Hasan
                      </h4>
                      <span className="mx-2 font-extrabold text-[#E04448]  pb-4">
                        .
                      </span>
                      <p className="text-[#E04448] text-[1rem]">
                        Founder & Chief Executive Officer
                      </p>
                    </div>
                    <p className="mb-4 text-[#333333CC] text-[1rem] font-semibold">
                      Senior Business Professional | International Education
                      Consultant | British Council-Certified Agent
                    </p>
                    <p className="mb-4 text-[#333333CC] text-justify text-[1rem]">
                      Syed Haroon Hasan brings over 37 years of diverse
                      experience in marketing, business development, operations,
                      and administration. His journey into international
                      education stems from a desire to create real
                      impact—mentoring students and professionals in achieving
                      their global ambitions.
                    </p>
                    <p className="mb-4 text-[#333333CC] text-justify text-[1rem]">
                      Certified by the British Council for excellence in
                      international education services, Syed Haroon leads
                      Innovate with a strong foundation in ethical practice,
                      transparency, and tangible results. As a natural
                      relationship builder and visionary, he is dedicated to
                      driving sustainable growth and delivering long-term value
                      to every client.
                    </p>
                    <p className="mb-4 text-[#333333CC] text-justify text-[1rem]">
                      A natural relationship builder and thought leader, he has
                      built a reputation for driving sustainable growth and
                      delivering long-term value to every client he mentors.
                    </p>
                    <p className="mb-4 text-[#333333CC] text-justify text-[1rem]">
                      In recent years, Mr. Hasan has focused his efforts within
                      the international education industry, representing reputed
                      state institutions abroad. He has successfully counselled
                      aspiring students on admissions, course selection, and
                      visa facilitation—ensuring they find the right academic
                      and career path. His exceptional performance earned him
                      the prestigious Authorized Agent Certification from the
                      British Council, a mark of trust and excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
