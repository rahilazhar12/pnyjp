import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaUsers ,  FaUserAltSlash } from "react-icons/fa";
import { RiBuilding2Fill } from "react-icons/ri";
import CountUp from 'react-countup';

const IconGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
      <div className='w-full bg-blue-500 hover:bg-blue-600 flex flex-col items-center justify-center p-3 rounded-lg shadow-lg transition-colors duration-300'>
        <FaUsers size={30} className="text-white mb-2" /> <CountUp className='text-white' end={700} duration={2} delay={0.5} start={1} />
        <span className='text-white text-lg'>Total Users</span>
      </div>


      <div className='w-full bg-gray-700 hover:bg-gray-800 flex flex-col items-center justify-center p-3 rounded-lg shadow-lg transition-colors duration-300'>
        <FaUserAltSlash size={30} className="text-white mb-2" /><CountUp className='text-white' end={500} duration={2} delay={0.5} start={1} />
        <span className='text-white text-lg'>PNY Alumini's</span>
      </div>


      <div className='w-full bg-green-500 hover:bg-green-600 flex flex-col items-center justify-center p-3 rounded-lg shadow-lg transition-colors duration-300'>
        <RiBuilding2Fill size={30} className="text-white mb-2" /><CountUp className='text-white' end={300} duration={2} delay={0.5} start={1} />
        <span className='text-white text-lg'>Companies</span>
      </div>


      <div className='w-full bg-indigo-500 hover:bg-indigo-600 flex flex-col items-center justify-center p-3 rounded-lg shadow-lg transition-colors duration-300'>
        <AiFillMail size={30} className="text-white mb-2" /><CountUp className='text-white' end={500} duration={2} delay={0.5} start={1} />
        <span className='text-white text-lg'>Jobs Posted</span>
      </div>
    </div>
  );
}

export default IconGrid;
