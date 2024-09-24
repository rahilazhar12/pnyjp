import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const Salary = ({handleChange, handleClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2 text-black'>Salary</h4>
        <div className='flex items-center justify-center gap-2 mb-4'>
            <Button onClickHandler={handleClick} value="" title="Hourly" />
            <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
            <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
        </div>

        <div>
            <lable className="sidebar-label-container">
            <input
                type="radio"
                name="test"
                id="test"
                value=""
                onChange={handleChange}
            />
            <span className="checkmark"></span>All
            </lable>

            <InputField
            handleChange={handleChange}
            value="30"
            title="< 30000 k"
            name="test2"
            />
            
            <InputField
            handleChange={handleChange}
            value="50"
            title="< 50000 k"
            name="test2"
            />
            <InputField
            handleChange={handleChange}
            value="80"
            title="< 80000 k"
            name="test2"
            />
            <InputField
            handleChange={handleChange}
            value="100"
            title="< 100000 k"
            name="test2"
            />
        </div>
        <div className='border-b-2 border-gray-400 my-6'></div>
    </div>
  )
}

export default Salary
