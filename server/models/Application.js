const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  jobDetails: {
    company: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    }
  },
  personalInfo: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String
    }
  },
  japaneseSkills: {
    jlptLevel: {
      type: String,
      required: true
    },
    currentLevel: {
      type: String,
      required: true
    }
  },
  experience: {
    type: String,
    required: true
  },
  motivation: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  portfolio: {
    type: String
  },
  agreeToTerms: {
    type: Boolean,
    required: true
  },
  applicationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Application', ApplicationSchema);