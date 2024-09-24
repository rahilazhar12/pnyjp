import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import WorkExperience from './WorkExperience'
import EmploymentType from './EmploymentType'

const Sidebar = ({handleChange, handleClick}) => {
    // console.log(handleChange)
  return (
    <div className='space-y-5 '>
        
            {/* <input type='radio' onChange={handleChange} />
            <button className='bg-blue rounded' onClick={handleClick}>Click me</button> */}

            <h3 className='text-xl font-bold mb-1 text-blue'>Filter Jobs</h3>
            <div className='border-b-2 border-gray-400'></div>

            <Location handleChange={handleChange} />
            <div className='border-b-2 border-gray-400'></div>
            <Salary handleChange={handleChange} handleClick={handleClick} />
            <JobPostingData handleChange={handleChange} />

            <div className='border-b-2 border-gray-400'></div>
            <WorkExperience handleChange={handleChange} />

            <div className='border-b-2 border-gray-400'></div>
            <EmploymentType handleChange={handleChange} />

    </div>
  )
}

export default Sidebar
