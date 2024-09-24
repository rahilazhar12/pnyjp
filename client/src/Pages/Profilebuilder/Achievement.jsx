import React, { useState } from "react";

const Achievement = ({currentachievement , onSubmit , handleChange , handleSubmit , handleAddachievement , achievements}) => {
  return (
    <div className="overflow-hidden shadow-md sm:rounded-lg p-6 bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-semibold mb-6">Certification:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


          <div>
            <label
              htmlFor="AchievementTitle"
              className="block text-sm font-medium text-gray-700"
            >
             Achievement Title
            </label>
            <input
              id="AchievementTitle"
              name="AchievementTitle"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={currentachievement.AchievementTitle}
              onChange={handleChange}
            />
          </div>
          <div>


            <label
              htmlFor="AchievementDescriptions"
              className="block text-sm font-medium text-gray-700"
            >
              Achievement Descriptions
            </label>
            <input
              id="AchievementDescriptions"
              name="AchievementDescriptions"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={currentachievement.AchievementDescriptions}
              onChange={handleChange}
            />
          </div>

         
        
        </div>
       
         
      </form>
      <div className='flex justify-center mt-5'>
      <button
            type="button" // Change type to "button" for the Add button
            onClick={handleAddachievement}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Achievement
          </button>
      </div>
      <div className="mt-8">
      <table className="min-w-full border-collapse">
  <thead className="bg-gray-200">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Achievement Title
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Achievement Descriptions
      </th>
    
    </tr>
  </thead>
  <tbody className="bg-white">
  {achievements.length > 0 ? (
    achievements.map((exp, index) => (
      <tr key={index} className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.AchievementTitle}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.AchievementDescriptions}
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

export default Achievement;
