
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Jobs = () => {
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
      benefits: ["Mentorship program", "Japanese language support", "Certificate upon completion"]
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
      benefits: ["Portfolio development", "Design mentorship", "Cultural exchange sessions"]
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
      benefits: ["Published work portfolio", "Language certification", "Cultural immersion"]
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
      benefits: ["Business experience", "Networking opportunities", "Reference letter"]
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
      benefits: ["Game industry exposure", "Testing certification", "Team collaboration"]
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
      benefits: ["Cultural certification", "Tourism industry knowledge", "Content portfolio"]
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
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
                  
                  <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
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
    </div>
  );
};

export default Jobs;
