import React, { useState } from "react";

const Certification = ({currentcertification , onSubmit , handleChange , handleSubmit , handleAddcertification , certification}) => {
  return (
    <div className="overflow-hidden shadow-md sm:rounded-lg p-6 bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-semibold mb-6">Certification:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


          <div>
            <label
              htmlFor="Certification"
              className="block text-sm font-medium text-gray-700"
            >
              Certification
            </label>
            <input
              id="Certification"
              name="Certification"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={currentcertification.Certification}
              onChange={handleChange}
            />
          </div>
          <div>


            <label
              htmlFor="Institutee"
              className="block text-sm font-medium text-gray-700"
            >
              Institute
            </label>
            <input
              id="Institutee"
              name="Institutee"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={currentcertification.Institutee}
              onChange={handleChange}
            />
          </div>

          <div>
        <label htmlFor="ValidTill" className="block text-sm font-medium text-gray-700">
        Valid Till
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-grey-darker mt-1"
          type="date"
          name="ValidTill"
          value={currentcertification.ValidTill}
          onChange={handleChange}
          id="ValidTill"
        />
      </div>
        
        </div>
       
         
      </form>
      <div className='flex justify-center mt-5'>
      <button
            type="button" // Change type to "button" for the Add button
            onClick={handleAddcertification}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Certifications
          </button>
      </div>
      <div className="mt-8">
      <table className="min-w-full border-collapse">
  <thead className="bg-gray-200">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Certification
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Institute
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Valid Till
      </th>
     
    </tr>
  </thead>
  <tbody className="bg-white">
  {certification.length > 0 ? (
    certification.map((exp, index) => (
      <tr key={index} className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.Certification}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.Institutee}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp. ValidTill}
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

export default Certification;
