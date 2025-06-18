import Image from "next/image";
import ceopic from "../images/ceopic1.png";


export default function About(){
 return (
   <>
     <div className="w-full bg-gray-100 text-gray-500">
       <div className="text-red-500 text-[1.25rem] md:text-[1.75rem] font-bold">
         ABOUT US
       </div>
       <div>
         <h1 className="text-[1.50rem] text-[#122344] font-bold md:font-extrabold  md:text-[2rem]">
           Professional and Compassionate Support
         </h1>
         <p className="text-justify">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
           expedita culpa neque in reprehenderit quaerat ex ratione, magni eaque
           cum autem possimus voluptatibus vitae quia repellat maiores
           blanditiis, qui voluptatem.
         </p>
       </div>

       <div className="md:flex">
         <div className="md:w-1/3 lg:w-1/4 bg-amber-300">space for pic</div>
         <div>
           <h2>LEADERSHIP</h2>

           <h1>Meet our Founder & CEO</h1>

           <div>
             
               <h2 className="text-[#122344] font-bold md:font-extrabold text-lg md:text-xl">
                 Syed Hasan Haroon
               </h2>             
             <span className="">
               <h3 className="text-red-500 font-semibold md:font-bold text-sm md:text-lg">
                 Founder & Chief Executive Officer
               </h3>
             </span>
           </div>
           <div>
             <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
               consectetur porro animi repudiandae velit laborum quis dolores
               culpa iure magni distinctio quo quia, dolorum nesciunt eum.
               Doloribus hic ut laboriosam!
             </p>
             <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
               illum, earum ab aperiam explicabo sequi tenetur doloremque fuga
               quae, repellat distinctio eum nulla similique commodi temporibus,
               voluptatibus corporis consequuntur omnis.
             </p>
             <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
               eveniet aliquid, labore commodi quos minus ea expedita
               consequuntur qui corporis necessitatibus, deserunt libero, amet
               blanditiis atque. Dolorum, error libero. Ipsum.
             </p>
           </div>
         </div>
       </div>
     </div>
   </>
 );

}