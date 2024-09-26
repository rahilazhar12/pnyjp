import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // fetching jobs data  / public -> jobs.json
  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/jobs/getjobs`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs || []);  // Ensure jobs is an array
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setIsLoading(false);
        setJobs([]);  // Fallback to empty array in case of error
      });
  }, []);
  // console.log(jobs)

  //useState used to handle the job search input field
  const [query, setQuery] = useState("");

  // job search / input field onChange calling a function which is passed through props to Banner area
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Filter jobs on the basis of title
  const filteredItems = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(query.toLowerCase())
  );
  // --------- Radio based button filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  console.log("selected radio -> ", selectedCategory);

  // --------- Button based button filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Writing logic for controlling page / pagination
  // Calculate the index range

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // Function for the next Page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function for the previous Page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //--------------------------------------------------------------------------------------------------
  // main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    // filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }
    // category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          // postingDate >= selected
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }

    // Slice the Data based on current Page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* <h1>
          This is testing radio
          <input type='radio' onChange={handleChange} />
        </h1> */}

      {/* main content */}
      <div className="bg-[#67c1fd52] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* Left Side Bar */}
        <div className="bg-white p-4 rounded sidebarSpecial">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* Jobs Card Design area */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p className="font-medium">Loading data....</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p className="text-red-800">No data found</p>
            </>
          )}

          {/* pagination here */}

          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                className="hover:underline bg-slate-600 rounded-sm text-white px-2 py-1"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              {/* <button onClick={nextPage} className='hover:underline' disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}>Next</button> */}
              <button
                onClick={nextPage}
                className="hover:underline bg-slate-600 rounded-sm text-white px-2 py-1"
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
              >
                Next
              </button>
            </div>
          ) : (
            " "
          )}
        </div>

        {/* Right Side Bar  */}
        <div className="bg-white p-4 rounded sidebarSpecial2">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;
