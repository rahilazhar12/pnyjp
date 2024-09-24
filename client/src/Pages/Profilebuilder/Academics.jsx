import React from 'react';

function Academics({currentacademics , onSubmit , handleChange , handleSubmit , handleAddacademics , academics}) {
    return (
        <>
        <h2 className="text-xl font-semibold mb-6">Academic Information:</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 w-full">
      
        
      
        {/* Each of these divs acts as a grid item. Adjust your form fields accordingly. */}
        <div>
            <label htmlFor="degreeLevel" className="block text-sm font-medium text-gray-700">Degree Level</label>
            <input type="text" name="degreeLevel" id="degreeLevel"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={currentacademics.degreeLevel}
            onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="degree" className="block text-sm font-medium text-gray-700">Degree</label>
            <input type="text" name="degree" id="degree"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             value={currentacademics.degree}
             onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="institute" className="block text-sm font-medium text-gray-700">Institute</label>
            <input type="text" name="institute" id="institute"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             value={currentacademics.institute}
             onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="majorsubjects" className="block text-sm font-medium text-gray-700">Major Subjects</label>
            <input type="text" name="majorsubjects" id="majorsubjects"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             value={currentacademics.majorsubjects}
             onChange={handleChange}
            />
        </div>
   

    {/* Repeat the above div for each row of form fields you need. */}
    
        <div>
            <label htmlFor="startdate" className="block text-sm font-medium text-gray-700">Start Date</label>
            <input type="date" name="startdate" id="startdate"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             value={currentacademics.startdate}
             onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="completiondate" className="block text-sm font-medium text-gray-700">Completion Date</label>
            <input type="date" name="completiondate" id="completiondate" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={currentacademics.completiondate}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="Country" className="block text-sm font-medium text-gray-700">Country</label>
            <input type="text" name="Country" id="Country"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             value={currentacademics.Country}
             onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="markspercentage" className="block text-sm font-medium text-gray-700">Marks Percentage</label>
            <input type="text" name="markspercentage" id="markspercentage"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             value={currentacademics.markspercentage}
             onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="positionholder" className="block text-sm font-medium text-gray-700">Position holder</label>
            <input type="text" name="positionholder" id="positionholder"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             value={currentacademics.positionholder}
             onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="gradingcriteria" className="block text-sm font-medium text-gray-700">Grading criteria</label>
            <input type="text" name="gradingcriteria" id="gradingcriteria"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             value={currentacademics.gradingcriteria}
             onChange={handleChange}
            />
        </div>
   
        <div className="col-span-4 mt-6 flex justify-center">
    {/* <button
      type="submit"
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Submit
    </button> */}
  </div>
    </form>

   
    <div className='flex justify-center'>
      <button
            type="button" // Change type to "button" for the Add button
            onClick={handleAddacademics}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Academics
          </button>
      </div>
      <div className="mt-8">
      <table className="min-w-full border-collapse">
  <thead className="bg-gray-200">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Degree Level
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Degree
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Institute
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Major Subjects
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Start Date
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Completion Date
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Country
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Marks Percentage
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Position Holder
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Grading Criteria
      </th>
    </tr>
  </thead>
  <tbody className="bg-white">
  {academics.length > 0 ? (
    academics.map((exp, index) => (
      <tr key={index} className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.degreeLevel}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.degree}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.institute}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.majorsubjects}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.startdate}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.completiondate}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.Country}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.markspercentage}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.positionholder}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.gradingcriteria}
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" colSpan="10">
        No record
      </td>
    </tr>
  )}
</tbody>

  
</table>

      </div>

        </>
    );
}

export default Academics;
