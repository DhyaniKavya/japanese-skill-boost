import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BonusApps = () => {
  const apps = [
    {
      name: "Anki",
      category: "Flashcards",
      rating: 4.8,
      price: "Free",
      description: "Powerful spaced repetition system for memorizing vocabulary and kanji efficiently.",
      features: ["Custom deck creation", "Spaced repetition algorithm", "Audio/image support", "Cross-platform sync"],
      platforms: ["iOS", "Android", "Windows", "Mac", "Linux"],
      icon: "🧠",
      color: "from-blue-500 to-blue-600",
      link: "https://ankiweb.net/"
    },
    {
      name: "WaniKani",
      category: "Kanji",
      rating: 4.7,
      price: "¥800/month",
      description: "Gamified kanji learning system with mnemonics and structured progression.",
      features: ["Mnemonic stories", "Radicals → Kanji → Vocabulary", "SRS system", "Progress tracking"],
      platforms: ["Web", "iOS", "Android"],
      icon: "🐊",
      color: "from-pink-500 to-pink-600",
      link: "https://www.wanikani.com/"
    },
    {
      name: "HelloTalk",
      category: "Language Exchange",
      rating: 4.6,
      price: "Free + Premium",
      description: "Connect with native Japanese speakers for language exchange and practice.",
      features: ["Voice/text chat", "Correction tools", "Translation help", "Cultural exchange"],
      platforms: ["iOS", "Android"],
      icon: "💬",
      color: "from-green-500 to-green-600",
      link: "https://www.hellotalk.com/"
    },
    {
      name: "Duolingo",
      category: "General Learning",
      rating: 4.5,
      price: "Free + Plus",
      description: "Gamified language learning with bite-sized lessons and streaks.",
      features: ["Daily challenges", "Achievement system", "Speaking practice", "Progress tracking"],
      platforms: ["iOS", "Android", "Web"],
      icon: "🦉",
      color: "from-green-400 to-blue-500",
      link: "https://www.duolingo.com/"
    },
    {
      name: "Bunpro",
      category: "Grammar",
      rating: 4.6,
      price: "¥800/month",
      description: "Comprehensive Japanese grammar study with SRS and detailed explanations.",
      features: ["Grammar SRS", "JLPT aligned", "Example sentences", "Progress tracking"],
      platforms: ["Web", "iOS", "Android"],
      icon: "📚",
      color: "from-purple-500 to-purple-600",
      link: "https://bunpro.jp/"
    },
    {
      name: "Kanji Study",
      category: "Kanji",
      rating: 4.7,
      price: "¥600",
      description: "Comprehensive kanji learning app with stroke order and multiple learning modes.",
      features: ["Stroke order animation", "JLPT levels", "Multiple test modes", "Detailed statistics"],
      platforms: ["iOS", "Android"],
      icon: "✍️",
      color: "from-red-500 to-red-600",
      link: "https://mindtwisted.com/kanji-study"
    },
    {
      name: "Tandem",
      category: "Language Exchange",
      rating: 4.4,
      price: "Free + Pro",
      description: "Language exchange platform with video chat and professional tutors.",
      features: ["Video/voice chat", "Professional tutors", "Group classes", "Cultural exchange"],
      platforms: ["iOS", "Android", "Web"],
      icon: "🌐",
      color: "from-orange-500 to-orange-600",
      link: "https://www.tandem.net/"
    },
    {
      name: "Japanese Conjugation City",
      category: "Grammar",
      rating: 4.3,
      price: "¥400",
      description: "Master Japanese verb conjugations with interactive practice and games.",
      features: ["All conjugation forms", "Interactive practice", "Progress tracking", "Offline mode"],
      platforms: ["iOS", "Android"],
      icon: "🏙️",
      color: "from-cyan-500 to-cyan-600",
      link: "https://conjugationcity.com/"
    },
    {
      name: "NHK World TV",
      category: "Media",
      rating: 4.5,
      price: "Free",
      description: "Official NHK app with Japanese news and programs for listening practice.",
      features: ["Live TV", "On-demand content", "Subtitles available", "Cultural programs"],
      platforms: ["iOS", "Android", "Web"],
      icon: "📺",
      color: "from-indigo-500 to-indigo-600",
      link: "https://www3.nhk.or.jp/nhkworld/"
    },
    {
      name: "Shirabe Jisho",
      category: "Dictionary",
      rating: 4.6,
      price: "¥800",
      description: "Comprehensive Japanese dictionary with kanji lookup and example sentences.",
      features: ["Kanji radical search", "Handwriting input", "Example sentences", "Offline access"],
      platforms: ["iOS", "Android"],
      icon: "📖",
      color: "from-teal-500 to-teal-600",
      link: "https://ienzo.net/shirabe-jisho/"
    },
    {
      name: "Satori Reader",
      category: "Reading",
      rating: 4.4,
      price: "¥800/month",
      description: "Japanese reading practice with adjustable difficulty and audio narration.",
      features: ["Adjustable furigana", "Audio narration", "Vocabulary hints", "Progress tracking"],
      platforms: ["Web", "iOS", "Android"],
      icon: "📄",
      color: "from-amber-500 to-amber-600",
      link: "https://www.satorireader.com/"
    },
    {
      name: "Japanese Pronunciation",
      category: "Pronunciation",
      rating: 4.2,
      price: "¥400",
      description: "Learn Japanese pronunciation with IPA, pitch accent, and audio examples.",
      features: ["IPA transcription", "Pitch accent marks", "Audio recordings", "Practice exercises"],
      platforms: ["iOS", "Android"],
      icon: "🎵",
      color: "from-violet-500 to-violet-600",
      link: "https://pronunciation-app.com/"
    }
  ];

  const categories = ["All", "Flashcards", "Kanji", "Grammar", "Language Exchange", "Media", "Dictionary", "Reading", "Pronunciation"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredApps = selectedCategory === "All" 
    ? apps 
    : apps.filter(app => app.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bonus Japanese Learning Apps
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Curated collection of the best mobile apps and tools to enhance your Japanese learning journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{apps.length}</div>
            <div className="text-gray-600">Total Apps</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{apps.filter(app => app.price === "Free" || app.price.includes("Free")).length}</div>
            <div className="text-gray-600">Free Apps</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{(apps.reduce((sum, app) => sum + app.rating, 0) / apps.length).toFixed(1)}</div>
            <div className="text-gray-600">Avg Rating</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{new Set(categories.slice(1)).size}</div>
            <div className="text-gray-600">Categories</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map((app, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${app.color} flex items-center justify-center text-white text-2xl`}>
                    {app.icon}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm font-medium">{app.rating}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {app.category}
                    </Badge>
                  </div>
                </div>
                
                <CardTitle className="text-xl mb-2">{app.name}</CardTitle>
                <CardDescription className="text-sm mb-4">
                  {app.description}
                </CardDescription>
                
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-semibold text-lg ${app.price === "Free" ? "text-green-600" : "text-blue-600"}`}>
                    {app.price}
                  </span>
                  <div className="flex gap-1">
                    {app.platforms.slice(0, 3).map((platform, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                    {app.platforms.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{app.platforms.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {app.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${app.color} hover:opacity-90 transition-opacity`}
                    onClick={() => window.open(app.link, '_blank')}
                  >
                    View App →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📱 App Usage Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">🎯 Strategy</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Don't use too many apps at once</li>
                <li>• Focus on 2-3 core apps maximum</li>
                <li>• Choose apps that complement each other</li>
                <li>• Set daily usage goals</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">⏰ Timing</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Use flashcard apps during commute</li>
                <li>• Practice speaking apps at home</li>
                <li>• Reading apps before bedtime</li>
                <li>• Grammar apps during focused study</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">💡 Best Practices</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Enable notifications for consistency</li>
                <li>• Sync progress across devices</li>
                <li>• Join app communities for motivation</li>
                <li>• Track your learning streaks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusApps;
