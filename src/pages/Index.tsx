
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimeGuide from "@/components/AnimeGuide";
import FloatingElements from "@/components/FloatingElements";
import { ArrowRight, Star, Users, BookOpen, Briefcase, MessageCircle, Sparkles, Globe, Zap, Mic, Headphones, Calendar, Award, Target, Clock, CheckCircle, Play, Volume2, Languages, GraduationCap, Trophy, Lightbulb, Heart, Smile, Coffee, Camera, Music, Gamepad2, Utensils, Plane } from "lucide-react";

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

  const learningModules = [
    {
      icon: Languages,
      title: "Grammar Mastery",
      description: "Master Japanese grammar from basic particles to advanced sentence structures",
      features: ["Particle usage", "Verb conjugations", "Sentence patterns", "Formal vs casual"],
      color: "from-indigo-500 to-purple-600",
      level: "All Levels"
    },
    {
      icon: Mic,
      title: "Pronunciation Guide",
      description: "Perfect your Japanese pronunciation with audio lessons and practice exercises",
      features: ["Hiragana sounds", "Katakana practice", "Pitch accent", "Natural speech"],
      color: "from-emerald-500 to-teal-600",
      level: "Beginner"
    },
    {
      icon: BookOpen,
      title: "Vocabulary Builder",
      description: "Expand your Japanese vocabulary with themed lessons and spaced repetition",
      features: ["Daily words", "Context usage", "Memory techniques", "Progress tracking"],
      color: "from-amber-500 to-orange-600",
      level: "All Levels"
    },
    {
      icon: Camera,
      title: "Cultural Insights",
      description: "Understand Japanese culture through real-world examples and traditions",
      features: ["Social customs", "Business etiquette", "Festivals", "Daily life"],
      color: "from-rose-500 to-pink-600",
      level: "Intermediate"
    },
    {
      icon: Headphones,
      title: "Listening Practice",
      description: "Improve your listening skills with authentic Japanese audio content",
      features: ["Conversations", "News clips", "Podcasts", "Music lyrics"],
      color: "from-cyan-500 to-blue-600",
      level: "All Levels"
    },
    {
      icon: Target,
      title: "Speaking Confidence",
      description: "Build confidence in speaking Japanese through interactive exercises",
      features: ["Role-playing", "Shadowing", "Conversation practice", "Feedback system"],
      color: "from-violet-500 to-purple-600",
      level: "Intermediate"
    }
  ];

  const culturalTopics = [
    {
      icon: Coffee,
      title: "Tea Ceremony",
      description: "Learn about the traditional Japanese tea ceremony and its cultural significance",
      difficulty: "Beginner"
    },
    {
      icon: Utensils,
      title: "Japanese Cuisine",
      description: "Explore Japanese food culture, etiquette, and essential dining vocabulary",
      difficulty: "Beginner"
    },
    {
      icon: Music,
      title: "Traditional Arts",
      description: "Discover Japanese traditional music, calligraphy, and artistic expressions",
      difficulty: "Intermediate"
    },
    {
      icon: Gamepad2,
      title: "Modern Pop Culture",
      description: "Understand anime, manga, gaming, and contemporary Japanese entertainment",
      difficulty: "All Levels"
    },
    {
      icon: Plane,
      title: "Travel Japanese",
      description: "Essential phrases and cultural tips for traveling in Japan",
      difficulty: "Beginner"
    },
    {
      icon: Calendar,
      title: "Seasonal Traditions",
      description: "Learn about Japanese festivals, seasonal customs, and celebrations",
      difficulty: "Intermediate"
    }
  ];

  const learningPath = [
    {
      stage: "Stage 1",
      title: "Foundation",
      description: "Master hiragana, katakana, and basic greetings",
      duration: "2-3 weeks",
      icon: BookOpen,
      color: "from-green-400 to-emerald-500"
    },
    {
      stage: "Stage 2",
      title: "Basic Grammar",
      description: "Learn particles, verb conjugations, and simple sentences",
      duration: "4-6 weeks",
      icon: Languages,
      color: "from-blue-400 to-cyan-500"
    },
    {
      stage: "Stage 3",
      title: "Conversation",
      description: "Build vocabulary and practice daily conversations",
      duration: "6-8 weeks",
      icon: MessageCircle,
      color: "from-purple-400 to-violet-500"
    },
    {
      stage: "Stage 4",
      title: "Advanced",
      description: "Master complex grammar and cultural nuances",
      duration: "8-12 weeks",
      icon: Trophy,
      color: "from-orange-400 to-red-500"
    }
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Active Learners" },
    { icon: BookOpen, value: "500+", label: "Study Materials" },
    { icon: Briefcase, value: "200+", label: "Job Placements" },
    { icon: Star, value: "4.9", label: "User Rating" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      level: "N2 Certified",
      text: "This platform helped me pass JLPT N2! The AI chat feature is incredible for practice.",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      level: "Business Japanese",
      text: "Perfect for learning business Japanese. The cultural insights are invaluable.",
      avatar: "👨‍💻"
    },
    {
      name: "Yuki Tanaka",
      level: "Native Speaker",
      text: "As a native speaker, I'm impressed by how well this teaches Japanese culture.",
      avatar: "👩‍🎓"
    }
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          {/* Premium Header with decorative elements */}
                      <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative">
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

          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight relative mb-8 text-shadow-pro">
                <span className="relative">
                  Master{" "}
                  <span className="relative inline-block">
                    <span className="gradient-text">
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
                    <Zap className="absolute -top-2 -right-8 w-8 h-8 text-yellow-400 animate-bounce-slow" />
                  </span>
                </span>
              </h1>
              
              {/* Decorative elements around the title */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-l-4 border-t-4 border-red-300 rounded-tl-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r-4 border-b-4 border-pink-300 rounded-br-2xl opacity-60"></div>
            </div>
            
            <div className="relative">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 border-l-4 border-gradient-to-b from-red-400 to-pink-400 bg-gradient-to-r from-white/60 to-transparent backdrop-blur-sm rounded-r-lg py-4 pr-4">
                Join the most comprehensive Japanese learning platform. From beginner to business level, 
                we provide everything you need to succeed in Japan with cutting-edge AI technology.
              </p>
              <div className="absolute -left-2 top-6 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-red-600 via-pink-600 to-red-700 hover:from-red-700 hover:via-pink-700 hover:to-red-800 shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden button-glow btn-enhanced">
                <Link to="/chat">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Start Learning Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-red-200 hover:bg-red-50 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm group btn-enhanced">
                <Link to="/jobs">
                  <Globe className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Explore Opportunities
                </Link>
              </Button>
            </div>

            {/* Enhanced Stats with better styling */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/40 hover-lift">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform animate-pulse-slow">
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

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Anime Guide Character with enhanced container - Sakura-chan positioned left */}
            <div className="flex justify-center lg:justify-start relative order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-200/20 to-pink-200/20 rounded-3xl blur-2xl scale-110"></div>
                <div className="relative bg-white/30 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/40">
                  <AnimeGuide 
                    character="sakura"
                    message="こんにちは！Welcome to your Japanese learning journey! I'm here to help you every step of the way! 🌸"
                    position="hero"
                  />
                </div>
              </div>
            </div>

            {/* Learning Path Preview */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-white/60 backdrop-blur-sm border-red-200">
                  <Target className="w-4 h-4 mr-1" />
                  Your Learning Path
                </Badge>
                <h3 className="text-4xl font-bold text-gray-900">Structured Learning Journey</h3>
                <p className="text-gray-800">Follow our proven 4-stage learning path designed by Japanese language experts</p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {learningPath.map((stage, index) => (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4 group animate-slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${stage.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform animate-pulse-slow`}>
                      <stage.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                                          <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className="text-xs bg-red-100 text-red-700">
                            {stage.stage}
                          </Badge>
                          <span className="text-xs sm:text-sm text-gray-500">{stage.duration}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{stage.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{stage.description}</p>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Modules Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-4">
          <Badge variant="outline" className="bg-white/60 backdrop-blur-sm border-red-200">
            <GraduationCap className="w-4 h-4 mr-1" />
            Comprehensive Learning
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Master Every Aspect of <span className="text-red-600">Japanese</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-800 max-w-3xl mx-auto px-4">
            Our comprehensive modules cover grammar, pronunciation, vocabulary, culture, and more to ensure complete language mastery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {learningModules.map((module, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 card-hover pro-card animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <Badge variant="secondary" className="bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border-0">
                    {module.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg sm:text-xl font-semibold group-hover:text-red-600 transition-colors">
                  {module.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="ghost" className="w-full group-hover:bg-red-50 group-hover:text-red-600 transition-all duration-300 group">
                  <Link to="/study">
                    Start Learning
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Cultural Learning Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-4">
          <Badge variant="outline" className="bg-white/60 backdrop-blur-sm border-red-200">
            <Heart className="w-4 h-4 mr-1" />
            Cultural Immersion
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Discover <span className="text-red-600">Japanese</span> Culture
          </h2>
          <p className="text-base sm:text-lg text-gray-800 max-w-3xl mx-auto px-4">
            Language and culture go hand in hand. Explore the rich traditions and modern aspects of Japanese society
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {culturalTopics.map((topic, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-hover pro-card animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                    <topic.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                                    <CardTitle className="text-base sm:text-lg font-semibold group-hover:text-red-600 transition-colors">
                  {topic.title}
                </CardTitle>
                    <Badge variant="outline" className="text-xs mt-1">
                      {topic.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {topic.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-4">
          <Badge variant="outline" className="bg-white/60 backdrop-blur-sm border-red-200">
            <MessageCircle className="w-4 h-4 mr-1" />
            Everything You Need
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Complete Learning Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-gray-800 max-w-3xl mx-auto px-4">
            From AI-powered conversations to real job opportunities, we've built the complete ecosystem for your Japanese mastery
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 card-hover pro-card animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
          
          {/* Bottom row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-2xl">
              {features.slice(3, 5).map((feature, index) => (
                <Card key={index + 3} className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 card-hover pro-card animate-zoom-in" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-4">
          <Badge variant="outline" className="bg-white/60 backdrop-blur-sm border-red-200">
            <Star className="w-4 h-4 mr-1" />
            Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            What Our Learners Say
          </h2>
          <p className="text-base sm:text-lg text-gray-800 max-w-3xl mx-auto px-4">
            Join thousands of successful learners who have achieved their Japanese language goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 card-hover pro-card animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                      {testimonial.level}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section with Anime Guide */}
      <div className="relative bg-gradient-to-r from-red-600 via-pink-600 to-red-700 text-white py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-[Noto_Sans_JP] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Ready to Begin Your Japanese Journey?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto lg:mx-0">
                  Join thousands of learners who are already mastering Japanese with our comprehensive platform
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-gray-900">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group text-gray-900"
                >
                  <Link to="/chat">
                    Start Chatting in Japanese
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <Link to="/study">
                    Browse Study Materials
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

            </div>
            
            {/* Second Anime Guide */}
            <div className="flex justify-end">
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
