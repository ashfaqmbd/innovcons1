export default function Contact() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200">
        
          <div className="bg-gray-100 p-5 rounded-lg m-5">
           <div>
            <h1 className="text-[#122344] text-[1rem] md:text-[2rem] font-bold tracking-tighter">Start Your Journey</h1>
           </div>                   
          <div>
            <p className="text-gray-400  md:text-[1rem]">
              Fill out the form below and one of our consultants will contact
              you shortly.
            </p>
          </div>
          <div className="text-gray-400 mt-5">
           <form action="">
            <label htmlFor="" className="text-sm font-bold text-gray-500 block">Full Name*</label>
            <input type="text" className="bg-white p-1 rounded" />
            <label htmlFor="" className="text-sm font-bold text-gray-500 block">Full Name*</label>
            <input type="text" className="bg-white p-1 rounded" />
           </form>
          </div>
       </div>



        <div className=""></div>
      </div>
    </>
  );
}
