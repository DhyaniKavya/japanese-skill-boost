
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Guide = () => {
  const beginnerTips = [
    {
      title: "Master Hiragana & Katakana First",
      description: "Learn the two phonetic scripts before moving to kanji. This is your foundation.",
      icon: "📝",
      difficulty: "Essential"
    },
    {
      title: "Start with Greetings",
      description: "Learn basic greetings and polite expressions used in daily conversations.",
      icon: "👋",
      difficulty: "Easy"
    },
    {
      title: "Use Spaced Repetition",
      description: "Review vocabulary regularly using apps like Anki for better retention.",
      icon: "🔄",
      difficulty: "Easy"
    },
    {
      title: "Practice Writing Daily",
      description: "Write hiragana, katakana, and simple kanji every day to build muscle memory.",
      icon: "✍️",
      difficulty: "Medium"
    }
  ];

  const intermediateTips = [
    {
      title: "Learn Keigo (Honorific Language)",
      description: "Master polite forms essential for business and formal situations.",
      icon: "🎩",
      difficulty: "Hard"
    },
    {
      title: "Read Simple Manga",
      description: "Start with children's manga to practice reading in context.",
      icon: "📚",
      difficulty: "Medium"
    },
    {
      title: "Watch Japanese Content",
      description: "Use Japanese subtitles and gradually remove them as you improve.",
      icon: "📺",
      difficulty: "Medium"
    },
    {
      title: "Join Language Exchange",
      description: "Practice with native speakers through HelloTalk or iTalki.",
      icon: "💬",
      difficulty: "Medium"
    }
  ];

  const advancedTips = [
    {
      title: "Master Business Japanese",
      description: "Learn professional vocabulary and email etiquette for work environments.",
      icon: "💼",
      difficulty: "Hard"
    },
    {
      title: "Read News Articles",
      description: "Challenge yourself with current events and formal writing styles.",
      icon: "📰",
      difficulty: "Hard"
    },
    {
      title: "Understand Regional Dialects",
      description: "Explore Kansai-ben, Tohoku-ben, and other regional variations.",
      icon: "🗾",
      difficulty: "Expert"
    },
    {
      title: "Cultural Deep Dive",
      description: "Study Japanese literature, history, and traditional arts for context.",
      icon: "🏮",
      difficulty: "Expert"
    }
  ];

  const studySchedule = [
    { time: "Morning (15-20 min)", activity: "Review flashcards and new vocabulary", icon: "🌅" },
    { time: "Lunch Break (10-15 min)", activity: "Quick grammar review or writing practice", icon: "🥢" },
    { time: "Evening (30-45 min)", activity: "Structured lesson or conversation practice", icon: "🌆" },
    { time: "Before Bed (5-10 min)", activity: "Listen to Japanese music or podcasts", icon: "🌙" }
  ];

  const commonMistakes = [
    {
      mistake: "Mixing up は and が particles",
      explanation: "は marks the topic, が marks the subject. Context is key!",
      example: "私は学生です (I am a student) vs 誰が来ましたか (Who came?)"
    },
    {
      mistake: "Overusing です/ます forms",
      explanation: "Casual forms are important for natural conversation with friends.",
      example: "食べる (casual) vs 食べます (polite)"
    },
    {
      mistake: "Ignoring pitch accent",
      explanation: "Japanese has pitch accent, not stress accent like English.",
      example: "箸 (chopsticks) vs 橋 (bridge) have different pitch patterns"
    },
    {
      mistake: "Translating directly from English",
      explanation: "Japanese sentence structure and logic differ from English.",
      example: "Think in Japanese concepts, not English translations"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Essential: "bg-red-100 text-red-800",
      Easy: "bg-green-100 text-green-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Hard: "bg-orange-100 text-orange-800",
      Expert: "bg-purple-100 text-purple-800"
    };
    return colors[difficulty as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Japanese Learning Guide
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive tips, strategies, and best practices to accelerate your Japanese learning journey.
          </p>
        </div>

        <Tabs defaultValue="tips" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tips">Learning Tips</TabsTrigger>
            <TabsTrigger value="schedule">Study Schedule</TabsTrigger>
            <TabsTrigger value="mistakes">Common Mistakes</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="tips" className="space-y-8">
            {/* Beginner Tips */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>🌱</span> Beginner Level (N5-N4)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {beginnerTips.map((tip, index) => (
                  <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{tip.icon}</span>
                          <CardTitle className="text-lg">{tip.title}</CardTitle>
                        </div>
                        <Badge className={getDifficultyColor(tip.difficulty)}>
                          {tip.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Intermediate Tips */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>🌿</span> Intermediate Level (N3-N2)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {intermediateTips.map((tip, index) => (
                  <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{tip.icon}</span>
                          <CardTitle className="text-lg">{tip.title}</CardTitle>
                        </div>
                        <Badge className={getDifficultyColor(tip.difficulty)}>
                          {tip.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Advanced Tips */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>🌳</span> Advanced Level (N1+)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advancedTips.map((tip, index) => (
                  <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{tip.icon}</span>
                          <CardTitle className="text-lg">{tip.title}</CardTitle>
                        </div>
                        <Badge className={getDifficultyColor(tip.difficulty)}>
                          {tip.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Daily Study Schedule</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studySchedule.map((schedule, index) => (
                  <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="text-2xl">{schedule.icon}</span>
                        {schedule.time}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{schedule.activity}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardHeader>
                <CardTitle>💡 Pro Tips for Consistency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Time Management</h4>
                    <ul className="text-sm space-y-1 opacity-90">
                      <li>• Set specific study times</li>
                      <li>• Use a study timer (Pomodoro)</li>
                      <li>• Track your progress daily</li>
                      <li>• Celebrate small wins</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Motivation</h4>
                    <ul className="text-sm space-y-1 opacity-90">
                      <li>• Set clear goals (JLPT levels)</li>
                      <li>• Find study partners</li>
                      <li>• Reward yourself for milestones</li>
                      <li>• Connect with Japanese culture</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mistakes" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
              <div className="space-y-6">
                {commonMistakes.map((mistake, index) => (
                  <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <span>⚠️</span>
                        {mistake.mistake}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">{mistake.explanation}</p>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm"><strong>Example:</strong> {mistake.example}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>📱</span> Apps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Anki (flashcards)</li>
                    <li>• Duolingo (basics)</li>
                    <li>• HelloTalk (exchange)</li>
                    <li>• Tandem (conversation)</li>
                    <li>• Kanji Study</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>📚</span> Textbooks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Genki I & II</li>
                    <li>• Minna no Nihongo</li>
                    <li>• Tobira</li>
                    <li>• Kanzen Master series</li>
                    <li>• Japanese Grammar Guide</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🌐</span> Websites
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Tae Kim's Guide</li>
                    <li>• JLPT Official Site</li>
                    <li>• NHK News Easy</li>
                    <li>• Bunpro (grammar)</li>
                    <li>• WaniKani (kanji)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Guide;
