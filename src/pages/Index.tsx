
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimeGuide from "@/components/AnimeGuide";
import FloatingElements from "@/components/FloatingElements";
import { ArrowRight, Star, Users, BookOpen, Briefcase, MessageCircle, Sparkles, Globe, Zap } from "lucide-react";

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/30 via-transparent to-blue-50/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-200/20 to-pink-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/10 to-red-200/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Fixed Navigation Container */}
      <div className="relative z-50">
        <Navigation />
      </div>
      
      <FloatingElements />
      
      {/* Enhanced Hero Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Premium Header with decorative elements */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse"></div>
            </div>
            <div className="relative">
              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-red-200 shadow-lg mb-6 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2 text-red-500" />
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                  Premium Japanese Learning Platform
                </span>
              </Badge>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-300"></div>
                <Globe className="w-6 h-6 text-red-500 animate-spin" style={{ animationDuration: '3s' }} />
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-300"></div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight relative mb-8">
                <span className="relative">
                  Master{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-red-600 via-pink-600 to-red-700 bg-clip-text text-transparent">
                      Japanese
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
                  </span>
                </span>
                <br />
                <span className="relative">
                  Like Never{" "}
                  <span className="relative inline-block">
                    Before
                    <Zap className="absolute -top-2 -right-8 w-8 h-8 text-yellow-400 animate-bounce" />
                  </span>
                </span>
              </h1>
              
              {/* Decorative elements around the title */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-l-4 border-t-4 border-red-300 rounded-tl-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r-4 border-b-4 border-pink-300 rounded-br-2xl opacity-60"></div>
            </div>
            
            <div className="relative">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-6 border-l-4 border-gradient-to-b from-red-400 to-pink-400 bg-gradient-to-r from-white/60 to-transparent backdrop-blur-sm rounded-r-lg py-4 pr-4">
                Join the most comprehensive Japanese learning platform. From beginner to business level, 
                we provide everything you need to succeed in Japan with cutting-edge AI technology.
              </p>
              <div className="absolute -left-2 top-6 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-red-600 via-pink-600 to-red-700 hover:from-red-700 hover:via-pink-700 hover:to-red-800 shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden">
                <Link to="/chat">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Start Learning Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-red-200 hover:bg-red-50 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm group">
                <Link to="/jobs">
                  <Globe className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Explore Opportunities
                </Link>
              </Button>
            </div>

            {/* Enhanced Stats with better styling */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group relative">
                  <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/40">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-pink-500/5 to-red-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Anime Guide Character with enhanced container */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-200/20 to-pink-200/20 rounded-3xl blur-2xl scale-110"></div>
                <div className="relative bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/40">
                  <AnimeGuide 
                    character="sakura"
                    message="こんにちは！Welcome to your Japanese learning journey! I'm here to help you every step of the way! 🌸"
                    position="hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
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
