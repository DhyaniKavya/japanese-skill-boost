const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// @route   POST /api/applications
// @desc    Submit a new job application
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { 
      selectedJob, // Contains job details (company, position, location, duration)
      formData     // Contains applicant details
    } = req.body;

    // Create a new application
    const newApplication = new Application({
      jobDetails: {
        company: selectedJob.company,
        position: selectedJob.position,
        location: selectedJob.location,
        duration: selectedJob.duration
      },
      personalInfo: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone
      },
      japaneseSkills: {
        jlptLevel: formData.jlptLevel,
        currentLevel: formData.currentLevel
      },
      experience: formData.experience,
      motivation: formData.motivation,
      availability: formData.availability,
      portfolio: formData.portfolio,
      agreeToTerms: formData.agreeToTerms
    });

    // Save the application to the database
    const savedApplication = await newApplication.save();

    res.status(201).json({
      success: true,
      data: savedApplication,
      message: 'Application submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/applications
// @desc    Get all applications (for admin purposes)
// @access  Private (would require authentication in a real app)
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find().sort({ applicationDate: -1 });
    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/applications/:id
// @desc    Get application by ID
// @access  Private (would require authentication in a real app)
router.get('/:id', async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    res.status(200).json({
      success: true,
      data: application
    });
  } catch (error) {
    console.error('Error fetching application:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;