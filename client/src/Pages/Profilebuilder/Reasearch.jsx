import React, { useState } from "react";

const Research = ({currentresearch , onSubmit , handleChange , handleSubmit , handleAddresearch , research}) => {
  return (
    <div className="overflow-hidden shadow-md sm:rounded-lg p-6 bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-semibold mb-6">Research:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


          <div>
            <label
              htmlFor="Research Title"
              className="block text-sm font-medium text-gray-700"
            >
              Research Title
            </label>
            <input
              id="Research Title"
              name="ResearchTitle"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={currentresearch.ResearchTitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor=" Publication Venue"
              className="block text-sm font-medium text-gray-700"
            >
             Publication Venue
            </label>
            <input
              id=" Publication Venue"
              name="PublicationVenue"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={currentresearch.PublicationVenue}
              onChange={handleChange}
            />
          </div>


         
        
        </div>
        <div>
            <label htmlFor="Publication Link" className="block text-sm font-medium text-gray-700">Publication Link</label>
            <textarea
              id="Publication Link"
              name="PublicationLink"
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={currentresearch.PublicationLink}
              onChange={handleChange}
            />
          </div>
          
      </form>
      <div className='flex justify-center mt-5'>
      <button
            type="button" // Change type to "button" for the Add button
            onClick={handleAddresearch}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Research
          </button>
      </div>
      <div className="mt-8">
      <table className="min-w-full border-collapse">
  <thead className="bg-gray-200">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Research Title
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Publication Venue
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Publication Link
      </th>
     
    </tr>
  </thead>
  <tbody className="bg-white">
  {research.length > 0 ? (
    research.map((exp, index) => (
      <tr key={index} className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.ResearchTitle}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.PublicationVenue}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.PublicationLink}
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

export default Research;
