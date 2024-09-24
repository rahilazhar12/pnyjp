import React from 'react';

// Sample job details for demonstration
const jobDetails = {
  companyName: 'Tech Innovations Inc.',
  jobTitle: 'Frontend Developer',
  companyLogo: 'https://via.placeholder.com/150', // Placeholder image URL for demonstration
  minPrice: '$70,000',
  maxPrice: '$90,000',
  salaryType: 'annually',
  jobLocation: 'Remote',
  postingDate: '2024-03-25',
  experienceLevel: 'Mid-Level',
  skillsRequired: ['React', 'TailwindCSS', 'JavaScript', 'TypeScript'],
  employmentType: 'Full-time',
  description: 'We are looking for a passionate Frontend Developer to join our team. The ideal candidate will have experience building scalable web applications using modern technologies.',
  jobPostedBy: 'John Doe',
};

const JobDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 my-8">
      <div className="bg-white shadow-xl  overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img src={jobDetails.companyLogo} alt="Company Logo" className="h-48 w-full object-cover md:w-48 "/>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{jobDetails.jobLocation}</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{jobDetails.jobTitle} at {jobDetails.companyName}</h1>
            <p className="mt-2 text-gray-500">{jobDetails.description}</p>
            <div className="mt-4">
              <span className="font-bold">Skills Required:</span> {jobDetails.skillsRequired.join(', ')}
            </div>
          </div>
        </div>
        <div className="p-8 border-t border-gray-200">
          <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
              <span className="text-sm font-bold text-gray-600">Experience Level:</span> {jobDetails.experienceLevel}<br/>
              <span className="text-sm font-bold text-gray-600">Employment Type:</span> {jobDetails.employmentType}
            </div>
            <div className="w-full md:w-1/2 px-4">
              <span className="text-sm font-bold text-gray-600">Salary Range:</span> {jobDetails.minPrice} - {jobDetails.maxPrice} {jobDetails.salaryType}<br/>
              <span className="text-sm font-bold text-gray-600">Posted By:</span> {jobDetails.jobPostedBy}
            </div>
          </div>
        </div>
        <div className="px-8 pt-4 pb-8 bg-gray-100">
          <span className="font-bold">Posting Date:</span> {jobDetails.postingDate}
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
