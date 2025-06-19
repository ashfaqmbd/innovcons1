export default function Contact() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200">
        <div className="bg-gray-100 p-3 rounded-lg m-5">
          <div>
            <h1 className="text-[#0A2342] text-[2rem]  font-bold tracking-tighter">
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
                    className="text-sm font-bold text-gray-500 block mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="bg-white p-1 rounded mb-2 w-full md:w-3/4"
                  />
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-500 block mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="bg-white p-1 rounded mb-2 w-full md:w-3/4"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-500 block mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="bg-white p-1 rounded mb-2 w-full md:w-3/4"
                  />
                  <label
                    htmlFor=""
                    className="text-sm font-bold text-gray-500 block mb-2 md:w-full"
                  >
                    Desired Country *
                  </label>
                  <select
                    name=""
                    id=""
                    className="p-1 md:w-3/4 w-full bg-white mb-2"
                  >
                    <option value="">United Kingdom</option>
                    <option value="" selected>
                      United States
                    </option>
                    <option value="">Canada</option>
                    <option value="">Ireland</option>
                    <option value="">Australia</option>
                    <option value="">Europe</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1">
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-500 block mb-2"
                >
                  Current Education Level
                </label>
                <input
                  type="text"
                  className="bg-white p-2 rounded mb-2 md:w-full"
                  placeholder="e.g Bachelors in Computer Science"
                />
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-500 block mb-2"
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
            </form>
          </div>
        </div>

        <div className=""></div>
      </div>
    </>
  );
}
