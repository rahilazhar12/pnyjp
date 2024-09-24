import React from 'react'
import InputField from '../components/InputField'

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      {/* <input type='radio' onChange={handleChange} /> */}
      <h4 className="text-lg font-medium mb-2 text-black">Type of Employment</h4>
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
          value="full-time"
          title="Full-time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="part-time"
          title="Part-time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="temporary"
          title="Temporary"
          name="test"
        />
       
      </div>
    </div>
  )
}

export default EmploymentType
