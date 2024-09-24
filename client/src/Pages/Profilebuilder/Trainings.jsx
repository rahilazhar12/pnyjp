import React, { useState } from "react";

const Trainings = ({currenttrainings , onSubmit , handleChange , handleSubmit , handleAddtrainings , trainings}) => {
  return (
    <div className="overflow-hidden shadow-md sm:rounded-lg p-6 bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-semibold mb-6">Trainings:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


          <div>
            <label
              htmlFor="Training"
              className="block text-sm font-medium text-gray-700"
            >
              Training
            </label>
            <input
              id="Training"
              name="Training"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={currenttrainings.Training}
              onChange={handleChange}
            />
          </div>


          <div>
            <label
              htmlFor="Institute"
              className="block text-sm font-medium text-gray-700"
            >
              Institute
            </label>
            <input
              id="Institute"
              name="Institute"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={currenttrainings.Institute}
              onChange={handleChange}
            />
          </div>
          <div>
        <label htmlFor="From" className="block text-sm font-medium text-gray-700">
        From
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="date"
          name="From"
          value={currenttrainings.From}
          onChange={handleChange}
          id="From"
        />
      </div>

        <div>
        <label htmlFor="To" className="block text-sm font-medium text-gray-700">
        To
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="date"
          name="To"
          value={currenttrainings.To}
          onChange={handleChange}
          id="To"
        />
      </div>
        </div>
     
       
         
      </form>
      <div className='flex justify-center mt-5'>
      <button
            type="button" // Change type to "button" for the Add button
            onClick={handleAddtrainings}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Trainings
          </button>
      </div>
      <div className="mt-8">
      <table className="min-w-full border-collapse">
  <thead className="bg-gray-200">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Training
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Institute
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      From
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      To
      </th>
     
    </tr>
  </thead>
  <tbody className="bg-white">
  {trainings.length > 0 ? (
    trainings.map((exp, index) => (
      <tr key={index} className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.Training}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.Institute}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.From}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.To}
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
      
    </div>
  );
};

export default Trainings;
