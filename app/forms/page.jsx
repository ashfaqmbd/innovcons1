import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
export default function Contact() {
  return (
    <>
      <div className="w-full h-auto md:h-screen bg-gray-300 mx-auto">
        <div className="bg-gray-300 text-gray-500 p-3 hover:text-red-600 ">
          <Link href="/">
            <FaLongArrowAltLeft className="inline px-1 text-[1.5rem] " />
            Back to Home
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-1 ">
          <div className="bg-gray-100 p-3 md:p-5  rounded-lg m-5 shadow-lg">
            <div>
              <h1 className="text-[#0A2342] text-[1.75rem]  font-semibold">
                Start Your Journey
              </h1>
            </div>
            <div>
              <p className="text-gray-400  md:text-[1rem]">
                Fill out the form below and one of our consultants will contact
                you shortly.
              </p>
            </div>
            <div className="text-gray-400 mt-5">
              <form action="">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor=""
                      className="text-sm font-semibold text-gray-500 block mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="bg-white p-1 rounded mb-4 w-full md:w-3/4"
                    />
                    <label
                      htmlFor=""
                      className="text-sm font-semibold text-gray-500 block mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="bg-white p-1 rounded mb-4 w-full md:w-3/4"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="text-sm font-semibold text-gray-500 block mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="bg-white p-1 rounded mb-4 w-full md:w-3/4"
                    />
                    <label
                      htmlFor=""
                      className="text-sm font-semibold text-gray-500 block mb-2 md:w-full"
                    >
                      Desired Country *
                    </label>
                    <select
                      name=""
                      id=""
                      className="p-1 md:w-3/4 w-full bg-white mb-4"
                    >
                      <option value="uk">United Kingdom</option>
                      <option value="usa" selected>
                        United States
                      </option>
                      <option value="can">Canada</option>
                      <option value="irl">Ireland</option>
                      <option value="aus">Australia</option>
                      <option value="eur">Europe</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-500 block mb-2"
                  >
                    Current Education Level
                  </label>
                  <input
                    type="text"
                    className="bg-white p-2 rounded mb-4 md:w-full"
                    placeholder="e.g Bachelors in Computer Science"
                  />
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-500 block mb-4"
                  >
                    Your Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Tell us about your education goals."
                    className="p-3 md:w-full bg-white"
                  ></textarea>
                </div>
                <button className="w-full bg-[#122344] rounded-lg px-3 py-3 text-sm font-bold mt-3">
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          <div className="p-5 mx-auto bg-gray-300">
            <div className="mb-2">
              <h1 className="text-[#0A2342] text-[1.75rem]  font-bold">
                What Happens Next?
              </h1>
            </div>
            <div className="grid grid-cols-4 bg-gray-100 rounded-lg
             text-gray-500 pb-5">
              <div className="text-center flex justify-center items-center font-bold ">
                1
              </div>
              <div className="col-span-3 pt-5">
                <p className="font-bold text-sm pt-2">Initial Call</p>
                <p className="text-sm p-1">
                  One of our consultants will call you within 24 hours to
                  understand your requirements.
                </p>
              </div>
              {/* ***************************** */}
              <div className="text-center flex justify-center items-center font-bold">
                2
              </div>
              <div className="col-span-3 pt-5">
                <p className="font-bold text-sm pt-2">Strategy Session</p>
                <p className="text-sm p-1">
                  Schedule comprehensive consultation to develop your
                  professional education plan.
                </p>
              </div>
              {/* **************************************** */}
              <div className="text-center flex justify-center items-center font-bold">
                3
              </div>
              <div className="col-span-3 pt-5">
                <p className="font-bold text-sm pt-2">Begin Your Journey</p>
                <p className="text-sm p-1">
                  Start working with your dedicated consultant to achieve your
                  international education goals.
                </p>
              </div>
              {/* *********************************/}
            </div>

            <div className="grid grid-cols-4 bg-[#122344] text-gray-300 mt-5 rounded-lg">
              <div className="text-center flex justify-center items-center font-bold">
                <div className="bg-gray-300 opacity-20 p-2 mt-3 rounded-lg">
                  <LuDownload className="text-[1.5rem] text-red-600 " />
                </div>
              </div>
              <div className="col-span-3 pt-5">
                <p className="font-bold text-sm pt-1">
                  Download Our Free Guide
                </p>
                <p className="text-sm p-1 text-gray-400">
                  Get our comprehensive guide to top universities and admission
                  requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
