import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimeGuide from "@/components/AnimeGuide";
import FloatingElements from "@/components/FloatingElements";
import { ArrowRight, Star, Users, BookOpen, Briefcase, MessageCircle } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: "💼",
      title: "Japanese Internships",
      description: "Access online internship opportunities with Japanese companies and build your career in Japan",
      link: "/jobs",
      color: "from-blue-500 to-blue-600",
      badge: "Popular",
      stats: "500+ Jobs"
    },
    {
      icon: "💬",
      title: "AI Language Chat",
      description: "Practice Japanese with our intelligent AI chatbot powered by advanced language models",
      link: "/chat",
      color: "from-green-500 to-green-600",
      badge: "AI Powered",
      stats: "24/7 Available"
    },
    {
      icon: "📖",
      title: "Learning Guide",
      description: "Comprehensive tips and guidelines for mastering Japanese language and culture",
      link: "/guide",
      color: "from-purple-500 to-purple-600",
      badge: "Expert Tips",
      stats: "50+ Guides"
    },
    {
      icon: "📚",
      title: "JLPT Materials",
      description: "Complete study resources from N5 to N1 with practice tests and explanations",
      link: "/study",
      color: "from-red-500 to-red-600",
      badge: "Complete",
      stats: "1000+ Questions"
    },
    {
      icon: "📱",
      title: "Bonus Apps",
      description: "Curated collection of apps to enhance your Japanese learning experience",
      link: "/bonusapps",
      color: "from-orange-500 to-orange-600",
      badge: "Curated",
      stats: "20+ Apps"
    }
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Active Learners" },
    { icon: BookOpen, value: "500+", label: "Study Materials" },
    { icon: Briefcase, value: "200+", label: "Job Placements" },
    { icon: Star, value: "4.9", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 relative overflow-hidden">
      <Navigation />
      <FloatingElements />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-white/60 backdrop-blur-sm border-red-200">
                  <Star className="w-4 h-4 mr-1" />
                  Trusted by 10,000+ learners
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Master{" "}
                  <span className="bg-gradient-to-r from-red-600 via-pink-600 to-red-700 bg-clip-text text-transparent">
                    Japanese
                  </span>
                  <br />
                  Like Never Before
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Join the most comprehensive Japanese learning platform. From beginner to business level, 
                  we provide everything you need to succeed in Japan.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Link to="/chat">
                    Start Learning Free
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-red-200 hover:bg-red-50 shadow-md hover:shadow-lg transition-all duration-300">
                  <Link to="/jobs">
                    Explore Opportunities
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Anime Guide Character */}
            <div className="flex justify-center lg:justify-end">
              <AnimeGuide 
                character="sakura"
                message="こんにちは！Welcome to your Japanese learning journey! I'm here to help you every step of the way! 🌸"
                position="hero"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="bg-white/60 backdrop-blur-sm border-red-200">
            <MessageCircle className="w-4 h-4 mr-1" />
            Everything You Need
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900">
            Comprehensive Learning Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From AI-powered conversations to real job opportunities, we've built the complete ecosystem for your Japanese mastery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border-0">
                      {feature.badge}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {feature.stats}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-red-600 transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="w-full group-hover:bg-red-50 group-hover:text-red-600 transition-all duration-300 group">
                  <Link to={feature.link}>
                    Explore Feature
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section with Anime Guide */}
      <div className="relative bg-gradient-to-r from-red-600 via-pink-600 to-red-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold leading-tight">
                  Ready to Begin Your Japanese Journey?
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto lg:mx-0">
                  Join thousands of learners who are already mastering Japanese with our comprehensive platform
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <Link to="/chat">
                    Start Chatting in Japanese
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 shadow-lg">
                  <Link to="/study">
                    Browse Study Materials
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Second Anime Guide */}
            <div className="flex justify-center">
              <AnimeGuide 
                character="yuki"
                message="頑張って！You've got this! Let's make your Japanese dreams come true together! ✨"
                position="cta"
                theme="light"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
