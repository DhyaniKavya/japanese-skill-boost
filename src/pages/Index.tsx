
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: "💼",
      title: "Japanese Internships",
      description: "Access online internship opportunities with Japanese companies",
      link: "/jobs",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "💬",
      title: "AI Language Chat",
      description: "Practice Japanese with our intelligent AI chatbot",
      link: "/chat",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "📖",
      title: "Learning Guide",
      description: "Tips and guidelines for mastering Japanese",
      link: "/guide",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "📚",
      title: "JLPT Materials",
      description: "Complete study resources from N5 to N1",
      link: "/study",
      color: "from-red-500 to-red-600"
    },
    {
      icon: "📱",
      title: "Bonus Apps",
      description: "Curated apps to enhance your Japanese learning",
      link: "/bonusapps",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Japanese</span>
              <br />
              Your Gateway to Japan
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive platform for Japanese language learning, career opportunities, 
              and cultural immersion. Start your journey to fluency today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700">
                <Link to="/chat">Start Learning 🚀</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/jobs">Find Opportunities 💼</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-pulse">🌸</div>
        <div className="absolute top-40 right-20 text-4xl opacity-20 animate-pulse delay-1000">⛩️</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-pulse delay-500">🗾</div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need</h2>
          <p className="text-lg text-gray-600">Comprehensive tools and resources for your Japanese learning journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="w-full group-hover:bg-red-50 group-hover:text-red-600">
                  <Link to={feature.link}>
                    Explore →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Japanese Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners who are already mastering Japanese with our platform
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/chat">Start Chatting in Japanese</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
