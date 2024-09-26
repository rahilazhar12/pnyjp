import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
  const { id } = useParams(); // Extract the id from the route parameters
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch job details based on the id
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/jobs/getjobs/66f39c7e8542682e1a6578d3`); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch job details');
        }
        const data = await response.json();
        setJobDetails(data.job[0]); // Assuming 'job' is an array with one object
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!jobDetails) {
    return <div>No job details found.</div>;
  }


  console.log(jobDetails , 'rah')

  return (
    <div className="max-w-4xl mx-auto p-4 my-8">
      <div className="bg-white shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
                 src={`${import.meta.env.VITE_API_URL}/uploads/${jobDetails.companyLogo}`} 
              alt="Company Logo"
              className="object-cover md:w-48"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {jobDetails.jobLocation}
            </div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {jobDetails.jobTitle} at {jobDetails.companyName}
            </h1>
            <p className="mt-2 text-gray-500">{jobDetails.description}</p>
            <div className="mt-4">
              <span className="font-bold">Skills Required:</span>{' '}
              {jobDetails.skillsRequired && jobDetails.skillsRequired.length > 0
                ? jobDetails.skillsRequired.join(', ')
                : 'No skills listed'}
            </div>
          </div>
        </div>
        <div className="p-8 border-t border-gray-200">
          <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
              <span className="text-sm font-bold text-gray-600">Experience Level:</span>{' '}
              {jobDetails.experienceLevel}
              <br />
              <span className="text-sm font-bold text-gray-600">Employment Type:</span>{' '}
              {jobDetails.employmentType}
            </div>
            <div className="w-full md:w-1/2 px-4">
              <span className="text-sm font-bold text-gray-600">Salary Range:</span>{' '}
              {jobDetails.minPrice} - {jobDetails.maxPrice} {jobDetails.salaryType}
              <br />
              <span className="text-sm font-bold text-gray-600">Posted By:</span>{' '}
              {jobDetails.jobPostedBy}
            </div>
          </div>
        </div>
        <div className="flex justify-between p-4 items-center">
          <span className="font-bold">Posting Date:{jobDetails.postingDate}</span> 
          <button className="font-bold bg-blue-500 px-4 py-2 hover:text-white">
            Apply Now
            </button> 
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
