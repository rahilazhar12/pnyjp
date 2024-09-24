// import mongoose from "mongoose";
const express = require('express');
const getJobsList = require('../controllers/jobsController.js');
const createNewJob = require('../controllers/createJobByComp.js');
const upload = require('../multer/imgConfig.js');



const router = express.Router()


router.get("/all-jobs", getJobsList)
router.post("/create-new-jobs", upload.single('companyLogo'), createNewJob)




module.exports = router;