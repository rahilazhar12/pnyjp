import React, { useState } from 'react';

const Experience = ({experience, setExperiences , handleChange, handleSubmit, handleAddExperience, experiences}) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [editedExperience, setEditedExperience] = useState({});

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedExperience(experiences[index]);
  };

  const handleSave = () => {
    // Check if all fields are filled
    const allFieldsFilled = Object.values(editedExperience).every(
      (value) => value.trim() !== ""
    );

    

    if (allFieldsFilled) {
      const updatedExperiences = [...experiences];
      updatedExperiences[editIndex] = editedExperience;
      setExperiences(updatedExperiences);
      setEditIndex(-1);
      setEditedExperience({});
    } else {
      alert("Please fill in all fields before saving the changes.");
    }
  };

  return (
    <div className="overflow-hidden shadow-md sm:rounded-lg p-6 bg-white">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-6">Experience:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="positionTitle" className="block text-sm font-medium text-gray-700">Position Title</label>
            <input
              id="positionTitle"
              name="positionTitle"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={editIndex === -1 ? experience.positionTitle : editedExperience.positionTitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-gray-700">From</label>
            <input
              id="from"
              name="from"
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={editIndex === -1 ? experience.from : editedExperience.from}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
            <input
              id="to"
              name="to"
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={editIndex === -1 ? experience.to : editedExperience.to}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={editIndex === -1 ? experience.companyName : editedExperience.companyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="jobLevel" className="block text-sm font-medium text-gray-700">Job Level</label>
            <input
              id="jobLevel"
              name="jobLevel"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={editIndex === -1 ? experience.jobLevel : editedExperience.jobLevel}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="jobResponsibilities" className="block text-sm font-medium text-gray-700">Job Responsibilities</label>
            <textarea
              id="jobResponsibilities"
              name="jobResponsibilities"
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={editIndex === -1 ? experience.jobResponsibilities : editedExperience.jobResponsibilities}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>

      {editIndex !== -1 ? (
        <div className="flex justify-center mt-5">
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Save Changes
          </button>
          <button
            onClick={() => setEditIndex(-1)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className='flex justify-center mt-5'>
          <button
            type="button"
            onClick={handleAddExperience}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Experience
          </button>
        </div>
      )}

      <div className="mt-8">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Position Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">From</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">To</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Company Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Job Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Job Responsibilities</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {experiences.map((exp, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
                  {index === editIndex ? (
                    <input
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      type="text"
                      value={editedExperience.positionTitle}
                      onChange={(e) => setEditedExperience({...editedExperience, positionTitle: e.target.value})}
                    />
                  ) : (
                    exp.positionTitle
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
                  {index === editIndex ? (
                    <input
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      type="date"
                      value={editedExperience.from}
                      onChange={(e) => setEditedExperience({...editedExperience, from: e.target.value})}
                    />
                  ) : (
                    exp.from
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
                  {index === editIndex ? (
                    <input
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      type="date"
                      value={editedExperience.to}
                      onChange={(e) => setEditedExperience({...editedExperience, to: e.target.value})}
                    />
                  ) : (
                    exp.to
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
                  {index === editIndex ? (
                    <input
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      type="text"
                      value={editedExperience.companyName}
                      onChange={(e) => setEditedExperience({...editedExperience, companyName: e.target.value})}
                    />
                  ) : (
                    exp.companyName
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
                  {index === editIndex ? (
                    <input
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      type="text"
                      value={editedExperience.jobLevel}
                      onChange={(e) => setEditedExperience({...editedExperience, jobLevel: e.target.value})}
                    />
                  ) : (
                    exp.jobLevel
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
                  {index === editIndex ? (
                    <textarea
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      rows="3"
                      value={editedExperience.jobResponsibilities}
                      onChange={(e) => setEditedExperience({...editedExperience, jobResponsibilities: e.target.value})}
                    />
                  ) : (
                    exp.jobResponsibilities
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
                  {index !== editIndex && (
                    <button onClick={() => handleEdit(index)} className="text-blue-600 hover:text-blue-900">Edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Experience;
