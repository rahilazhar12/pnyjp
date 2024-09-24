import React from 'react'

const Jobs = ({result}) => {
  return (
    <>
      <div>
          <h3 className='text-lg font-bold mb-2'>Total <span className='text-white text-semibold bg-blue rounded-lg px-4'>{result.length}</span> Jobs Found</h3>
      </div>
        <section>{result}</section>
    </>
  )
}

export default Jobs
