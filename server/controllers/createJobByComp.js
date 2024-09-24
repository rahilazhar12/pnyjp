const Jobs = require('../models/postJobs.js');


const createNewJob = async (req, res) => {
  const { companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, skillsRequired, employmentType, description, jobPostedBy } = req.body;
  let companyLogoFilename = req.file ? req.file.filename : null;


  // checking whether a user provided all requisite information

  if (!companyName) {
    return res.status(401).json({ message: "Company name is required" });
  }
  if (!jobTitle) {
    return res.status(401).json({ message: "Job title is required" });
  }
  // if (!companyLogo) {
  //   return res.status(401).json({ message: "Company logo is required" });
  // }
  if (!minPrice) {
    return res.status(401).json({ message: "Minimum price is required" });
  }
  if (!maxPrice) {
    return res.status(401).json({ message: "Maximum price is required" });
  }
  if (!salaryType) {
    return res.status(401).json({ message: "Salary type price is required" });
  }
  if (!jobLocation) {
    return res.status(401).json({ message: "Job location price is required" });
  }
  if (!postingDate) {
    return res.status(401).json({ message: "Posting date price is required" });
  }
  if (!experienceLevel) {
    return res.status(401).json({ message: "Experience level price is required" });
  }
  if (!skillsRequired) {
    return res.status(401).json({ message: "Required skils is required" });
  }
  if (!employmentType) {
    return res.status(401).json({ message: "Employment type is required" });
  }
  if (!description) {
    return res.status(401).json({ message: "Description is required" });
  }
  if (!jobPostedBy) {
    return res.status(401).json({ message: "Job posted by is required" });
  }

  try {
    // creating new job entry
    let job = await new Jobs({
      companyName,
      jobTitle,
      minPrice,
      maxPrice,
      salaryType,
      jobLocation,
      postingDate,
      experienceLevel,
      skillsRequired,
      employmentType,
      description,
      jobPostedBy,
      companyLogo: companyLogoFilename,
    }).save();
    // res.send(job);

    res.status(200).send({
      success: true,
      message: "job posted successfully",
      job
    });
  }
  catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in posting job",
      error,
    });
  }
};

module.exports = createNewJob;






