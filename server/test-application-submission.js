// Use ES modules syntax
import fetch from 'node-fetch';

// Sample job data
const testData = {
  selectedJob: {
    company: 'Test Company',
    position: 'Japanese Translator',
    location: 'Tokyo, Japan',
    duration: 'Full-time'
  },
  formData: {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '123-456-7890',
    jlptLevel: 'N2',
    currentLevel: 'Advanced',
    experience: 'I have 5 years of experience in translation.',
    motivation: 'I am passionate about connecting cultures through language.',
    availability: 'Immediate',
    portfolio: 'https://example.com/portfolio',
    agreeToTerms: true
  }
};

async function testSubmission() {
  try {
    console.log('Submitting test application...');
    
    const response = await fetch('http://localhost:5000/api/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    
    const data = await response.json();
    
    console.log('Response status:', response.status);
    console.log('Response data:', JSON.stringify(data, null, 2));
    
    if (data.success) {
      console.log('✅ Test application submitted successfully!');
    } else {
      console.log('❌ Failed to submit test application:', data.message);
    }
  } catch (error) {
    console.error('❌ Error submitting test application:', error);
  }
}

// Run the test
testSubmission();