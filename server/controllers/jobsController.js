const jobsModel = require('../models/postJobs.js');


const getJobsList = async (req, res) => {
    try {
        let data = await jobsModel.find()
        if (data) {
            res.send(data)
        } else {
            res.send({ "message": "No data found" })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
}
module.exports = getJobsList