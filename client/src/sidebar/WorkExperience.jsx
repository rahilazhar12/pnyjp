import React from 'react'
import InputField from '../components/InputField'

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      {/* <input type='radio' onChange={handleChange} /> */}
      <h4 className="text-lg font-medium mb-2 text-black">Work Experience</h4>
      <div>
        <lable className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any experience
        </lable>

        <InputField
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Work remotely"
          title="Work remotely"
          name="test"
        />
       
      </div>
    </div>
  )
}

export default WorkExperience
