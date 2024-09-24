// import mongoose from "mongoose";
const express = require('express');
const { CreateCompany, approvecompanyrequest } = require('../controllers/Companycontroller');





const router = express.Router()



router.post('/companies-register', CreateCompany);

router.patch('/approve-company/:id', approvecompanyrequest);








module.exports = router;