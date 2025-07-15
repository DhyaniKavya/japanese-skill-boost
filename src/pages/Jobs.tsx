
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle2 } from "lucide-react";

// Country codes for phone number selection
const countryCodes = [
  { code: "+1", country: "United States/Canada" },
  { code: "+44", country: "United Kingdom" },
  { code: "+81", country: "Japan" },
  { code: "+61", country: "Australia" },
  { code: "+64", country: "New Zealand" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
  { code: "+86", country: "China" },
  { code: "+82", country: "South Korea" },
  { code: "+91", country: "India" },
  { code: "+65", country: "Singapore" },
  { code: "+66", country: "Thailand" },
  { code: "+84", country: "Vietnam" },
  { code: "+62", country: "Indonesia" },
  { code: "+60", country: "Malaysia" },
  { code: "+63", country: "Philippines" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
];

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    jlptLevel: "",
    currentLevel: "",
    experience: "",
    motivation: "",
    availability: "",
    portfolio: "",
    agreeToTerms: false
  });
  
  const [phoneError, setPhoneError] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number (must be exactly 10 digits)
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }
    
    try {
      // Send the form data to our backend API
      const response = await fetch('http://localhost:5000/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedJob,
          formData: {
            ...formData,
            phone: formData.phone ? `${formData.countryCode} ${formData.phone}` : ""
          }
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Application Submitted!",
          description: (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Your application for {selectedJob?.position} at {selectedJob?.company} has been submitted successfully.</span>
            </div>
          ),
          className: "bg-green-50 border-green-200 text-green-800"
        });
        
        // Reset form and close dialog
        setIsFormOpen(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          countryCode: "+1",
          phone: "",
          jlptLevel: "",
          currentLevel: "",
          experience: "",
          motivation: "",
          availability: "",
          portfolio: "",
          agreeToTerms: false
        });
        setPhoneError("");
      } else {
        toast({
          title: "Submission Error",
          description: (
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <span>{data.message || "There was an error submitting your application. Please try again."}</span>
            </div>
          ),
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Submission Error",
        description: "There was an error connecting to the server. Please try again later.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear phone error when user types in phone field
    if (field === 'phone') {
      // Validate phone number format (numbers only)
      if (typeof value === 'string') {
        const numericValue = value.replace(/\D/g, '');
        if (value !== numericValue) {
          setFormData(prev => ({
            ...prev,
            phone: numericValue
          }));
        }
        
        // Check if it's a valid 10-digit number
        if (numericValue.length === 10) {
          setPhoneError("");
        } else if (numericValue.length > 0) {
          setPhoneError("Phone number must be exactly 10 digits");
        } else {
          setPhoneError(""); // Empty is allowed
        }
      }
    }
  };

  const openApplicationForm = (internship: any) => {
    setSelectedJob(internship);
    setIsFormOpen(true);
  };

  const internships = [
    {
      company: "Tokyo Tech Solutions",
      position: "Software Development Intern",
      location: "Tokyo (Remote)",
      duration: "3-6 months",
      level: "N3+",
      type: "Tech",
      description: "Work on cutting-edge web applications while improving your Japanese in a professional environment.",
      requirements: ["Basic programming knowledge", "Japanese N3 or higher", "English communication"],
      benefits: ["Mentorship program", "Japanese language support", "Certificate upon completion", "¥150,000/month stipend"]
    },
    {
      company: "Osaka Design Studio",
      position: "UI/UX Design Intern",
      location: "Osaka (Remote)",
      duration: "2-4 months",
      level: "N4+",
      type: "Design",
      description: "Create beautiful user interfaces for Japanese mobile applications and websites.",
      requirements: ["Portfolio required", "Figma/Adobe skills", "Japanese N4 or higher"],
      benefits: ["Portfolio development", "Design mentorship", "Cultural exchange sessions", "¥120,000/month stipend"]
    },
    {
      company: "Kyoto Language Exchange",
      position: "Content Creator Intern",
      location: "Kyoto (Remote)",
      duration: "1-3 months",
      level: "N2+",
      type: "Content",
      description: "Create educational content for Japanese language learners and cultural materials.",
      requirements: ["Strong writing skills", "Japanese N2 or higher", "Content creation experience"],
      benefits: ["Published work portfolio", "Language certification", "Cultural immersion", "¥100,000/month stipend"]
    },
    {
      company: "Hiroshima Global Trading",
      position: "Business Development Intern",
      location: "Hiroshima (Remote)",
      duration: "4-6 months",
      level: "N2+",
      type: "Business",
      description: "Support international business operations and Japanese market research.",
      requirements: ["Business interest", "Japanese N2 or higher", "Research skills"],
      benefits: ["Business experience", "Networking opportunities", "Reference letter", "¥130,000/month stipend"]
    },
    {
      company: "Sendai Game Studio",
      position: "Game Testing Intern",
      location: "Sendai (Remote)",
      duration: "2-5 months",
      level: "N4+",
      type: "Gaming",
      description: "Test and provide feedback on Japanese mobile games and applications.",
      requirements: ["Gaming experience", "Japanese N4 or higher", "Attention to detail"],
      benefits: ["Game industry exposure", "Testing certification", "Team collaboration", "¥110,000/month stipend"]
    },
    {
      company: "Fukuoka Tourism Board",
      position: "Tourism Content Intern",
      location: "Fukuoka (Remote)",
      duration: "3-4 months",
      level: "N3+",
      type: "Tourism",
      description: "Create tourism content and help promote Japanese culture to international visitors.",
      requirements: ["Cultural interest", "Japanese N3 or higher", "Social media skills"],
      benefits: ["Cultural certification", "Tourism industry knowledge", "Content portfolio", "¥120,000/month stipend"]
    },
    {
      company: "Sapporo Tech Innovations",
      position: "Mobile App Developer Intern",
      location: "Sapporo (Remote)",
      duration: "3-6 months",
      level: "N3+",
      type: "Tech",
      description: "Develop innovative mobile applications for the Japanese market with a focus on user experience.",
      requirements: ["Mobile development experience", "Japanese N3 or higher", "Problem-solving skills"],
      benefits: ["Project portfolio", "Technical mentorship", "Industry connections", "¥140,000/month stipend"]
    },
    {
      company: "Nagoya Automotive Tech",
      position: "Automotive Software Intern",
      location: "Nagoya (Remote)",
      duration: "4-8 months",
      level: "N3+",
      type: "Tech",
      description: "Work on cutting-edge automotive software solutions for Japanese car manufacturers.",
      requirements: ["Programming knowledge", "Japanese N3 or higher", "Interest in automotive industry"],
      benefits: ["Industry certification", "Technical training", "Career advancement", "¥160,000/month stipend"]
    },
    {
      company: "Okinawa Digital Marketing",
      position: "Digital Marketing Intern",
      location: "Okinawa (Remote)",
      duration: "2-4 months",
      level: "N4+",
      type: "Marketing",
      description: "Create and manage digital marketing campaigns for Japanese businesses targeting international markets.",
      requirements: ["Marketing knowledge", "Japanese N4 or higher", "Social media skills"],
      benefits: ["Marketing portfolio", "Industry connections", "Performance bonuses", "¥110,000/month stipend"]
    },
    {
      company: "Kobe Animation Studio",
      position: "Animation Assistant Intern",
      location: "Kobe (Remote)",
      duration: "3-6 months",
      level: "N3+",
      type: "Creative",
      description: "Assist in the creation of animated content for Japanese studios, gaining hands-on experience in the anime industry.",
      requirements: ["Animation skills", "Japanese N3 or higher", "Creative portfolio"],
      benefits: ["Industry exposure", "Portfolio development", "Creative mentorship", "¥125,000/month stipend"]
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      Tech: "bg-blue-100 text-blue-800",
      Design: "bg-purple-100 text-purple-800",
      Content: "bg-green-100 text-green-800",
      Business: "bg-orange-100 text-orange-800",
      Gaming: "bg-pink-100 text-pink-800",
      Tourism: "bg-cyan-100 text-cyan-800"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getLevelColor = (level: string) => {
    const colors = {
      "N5+": "bg-green-100 text-green-800",
      "N4+": "bg-yellow-100 text-yellow-800",
      "N3+": "bg-orange-100 text-orange-800",
      "N2+": "bg-red-100 text-red-800",
      "N1+": "bg-purple-100 text-purple-800"
    };
    return colors[level as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Japanese Internship Opportunities
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover remote internship opportunities with Japanese companies. 
            Gain valuable work experience while improving your Japanese language skills.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{internships.length}</div>
            <div className="text-gray-600">Available Positions</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Remote Work</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
            <div className="text-gray-600">Different Fields</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">N4+</div>
            <div className="text-gray-600">Minimum Level</div>
          </div>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:scale-[1.01]">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{internship.position}</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-700">
                      {internship.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className={getTypeColor(internship.type)}>
                      {internship.type}
                    </Badge>
                    <Badge className={getLevelColor(internship.level)}>
                      {internship.level}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>📍 {internship.location}</span>
                  <span>⏰ {internship.duration}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{internship.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {internship.requirements.map((req, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {internship.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-blue-500 mr-2">★</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => openApplicationForm(internship)}
                  >
                    Apply Now →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Tips */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Application Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">📝 Resume Tips</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Include your JLPT level prominently</li>
                <li>• Mention any Japan-related experience</li>
                <li>• Highlight language learning journey</li>
                <li>• Use professional Japanese honorifics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">💼 Interview Prep</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Practice basic business Japanese</li>
                <li>• Learn about Japanese work culture</li>
                <li>• Prepare self-introduction in Japanese</li>
                <li>• Show enthusiasm for Japan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Job Application Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Apply for {selectedJob?.position}
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              {selectedJob?.company} • {selectedJob?.location} • {selectedJob?.duration}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex gap-2">
                    <div className="w-1/3">
                      <Select value={formData.countryCode} onValueChange={(value) => handleInputChange("countryCode", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              {country.code} {country.country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-2/3">
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="10-digit number"
                        className={phoneError ? "border-red-500" : ""}
                      />
                    </div>
                  </div>
                  {phoneError && (
                    <p className="text-sm text-red-500 mt-1">{phoneError}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Japanese Language Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Japanese Language Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jlptLevel">JLPT Level *</Label>
                  <Select value={formData.jlptLevel} onValueChange={(value) => handleInputChange("jlptLevel", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your JLPT level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="N5">N5 - Basic</SelectItem>
                      <SelectItem value="N4">N4 - Elementary</SelectItem>
                      <SelectItem value="N3">N3 - Intermediate</SelectItem>
                      <SelectItem value="N2">N2 - Pre-Advanced</SelectItem>
                      <SelectItem value="N1">N1 - Advanced</SelectItem>
                      <SelectItem value="None">No JLPT Certificate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="currentLevel">Current Japanese Level *</Label>
                  <Select value={formData.currentLevel} onValueChange={(value) => handleInputChange("currentLevel", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Elementary">Elementary</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="Native">Native/Fluent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Experience & Motivation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Experience & Motivation</h3>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Relevant Experience *</Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                  required
                  placeholder="Describe your relevant experience, skills, and background..."
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="motivation">Motivation & Goals *</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleInputChange("motivation", e.target.value)}
                  required
                  placeholder="Why are you interested in this position? What are your career goals?"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="availability">Availability *</Label>
                <Select value={formData.availability} onValueChange={(value) => handleInputChange("availability", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Immediate">Immediate</SelectItem>
                    <SelectItem value="1-2 weeks">1-2 weeks</SelectItem>
                    <SelectItem value="1 month">1 month</SelectItem>
                    <SelectItem value="2-3 months">2-3 months</SelectItem>
                    <SelectItem value="Flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio/Work Samples URL</Label>
                <Input
                  id="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => handleInputChange("portfolio", e.target.value)}
                  placeholder="https://your-portfolio.com"
                />
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  required
                />
                <Label htmlFor="agreeToTerms" className="text-sm">
                  I agree to the terms and conditions and consent to the processing of my personal data *
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsFormOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Jobs;
