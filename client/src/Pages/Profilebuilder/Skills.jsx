import React, { useState } from "react";

const Skills = ({currentskills , onSubmit , handleChange , handleSubmit , handleAddskills , skills}) => {
  return (
    <div className="overflow-hidden shadow-md sm:rounded-lg p-6 bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-semibold mb-6">Skills:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


          <div>
            <label
              htmlFor="Skill"
              className="block text-sm font-medium text-gray-700"
            >
              Skill
            </label>
            <input
              id="Skill"
              name="Skill"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={currentskills.Skill}
              onChange={handleChange}
            />
          </div>


          <div>
        <label htmlFor="SkillLevel" className="block text-sm font-medium text-gray-700">
        Skill Level
        </label>
        <select
          className="border rounded w-full py-2 px-3 text-grey-darker bg-white"
          name="SkillLevel"
          id="SkillLevel"
          value={currentskills.SkillLevel}
          onChange={handleChange}
        >
          <option>---Select---</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Professional</option>
          <option>Expert</option>
        </select>
      </div>
        
        </div>
        <div>
            <label htmlFor="SkillSummary" className="block text-sm font-medium text-gray-700">SkillSummary</label>
            <textarea
              id="SkillSummary"
              name="SkillSummary"
              
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={currentskills.SkillSummary}
              onChange={handleChange}
            />
          </div>
         
      </form>
      <div className='flex justify-center mt-5'>
      <button
            type="button" // Change type to "button" for the Add button
            onClick={handleAddskills}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Skills
          </button>
      </div>
      <div className="mt-8">
      <table className="min-w-full border-collapse">
  <thead className="bg-gray-200">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Skill
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Skill Level
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
      Skill Summary
      </th>
     
    </tr>
  </thead>
  <tbody className="bg-white">
  {skills.length > 0 ? (
    skills.map((exp, index) => (
      <tr key={index} className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.Skill}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.SkillLevel}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
          {exp.SkillSummary}
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

export default Skills;
