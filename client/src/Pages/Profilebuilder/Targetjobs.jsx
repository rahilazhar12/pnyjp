import React, { useState } from "react";

const Targetjobs = ({ onSubmit, handleSubmit, handleChange, formData }) => {
  return (
    <div className="overflow-hidden shadow-md sm:rounded-lg p-6 bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-semibold mb-6">Skills:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="JobTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Job Title
            </label>
            <input
              id="JobTitle"
              name="JobTitle"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.JobTitle}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="CareerLevel"
              className="block text-sm font-medium text-gray-700"
            >
              Career Level
            </label>
            <select
              className="border rounded w-full py-2 px-3 text-grey-darker bg-white"
              name="CareerLevel"
              id="CareerLevel"
              value={formData.CareerLevel}
              onChange={handleChange}
            >
              <option>---Select---</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Professional</option>
              <option>Expert</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="JobTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Target Monthly Salary (PKR)
            </label>
            <input
              id="TargetMonthlySalary"
              name="TargetMonthlySalary"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.TargetMonthlySalary}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="LastMonthlySalary"
              className="block text-sm font-medium text-gray-700"
            >
              Last Monthly Salary (PKR)
            </label>
            <input
              id="LastMonthlySalary"
              name="LastMonthlySalary"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.LastMonthlySalary}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Targetjobs;
