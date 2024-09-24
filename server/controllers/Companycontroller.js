const Company = require('../models/Companymodel'); // Assuming your model file is named CompanyModel.js

// Post a new company
const CreateCompany = async (req, res) => {
    const { name, ntnnumber, email, personincontact, city, website, facebook, linkedin, cnic , role } = req.body;

    if (!name || !ntnnumber || !email || !personincontact || !city || !website || !facebook || !linkedin || !cnic) {
        return res.status(201).json({ message: "Fill all the fields" });
    }

    try {
        const newCompany = new Company({
            name,
            ntnnumber,
            email,
            personincontact,
            city,
            website,
            facebook,
            linkedin,
            cnic,
            role
        });

        await newCompany.save();
        // Change the response message here
        res.status(201).json({ message: "Your request for approval has been successfully submitted to the admin." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};





const approvecompanyrequest = async (req, res) => {
    const { status } = req.body; // Assuming 'status' can be 'approved' or 'rejected'

    try {
        const company = await Company.findById(req.params.id);

        if (!company) {
            return res.status(404).json({ message: "Company not found." });
        }

        if (status === "approved") {
            company.isApproved = true;
            await company.save();
            res.status(200).json({ message: "Company approved successfully." });
        } else if (status === "rejected") {
            // Delete the company record if the admin rejects the request
            await Company.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Company rejected and deleted successfully." });
        } else {
            res.status(400).json({ message: "Invalid status. Please specify 'approved' or 'rejected'." });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}




module.exports = { CreateCompany, approvecompanyrequest }
