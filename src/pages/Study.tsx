
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Study = () => {
  const jlptLevels = [
    {
      level: "N5",
      title: "Beginner",
      description: "Basic level for everyday expressions and simple sentences",
      kanji: "~100 kanji",
      vocabulary: "~800 words",
      grammar: "Basic patterns",
      color: "from-green-500 to-green-600",
      textColor: "text-green-700",
      bgColor: "bg-green-50"
    },
    {
      level: "N4",
      title: "Elementary",
      description: "Understanding basic conversations and simple texts",
      kanji: "~300 kanji",
      vocabulary: "~1,500 words",
      grammar: "Elementary patterns",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50"
    },
    {
      level: "N3",
      title: "Intermediate",
      description: "Understanding everyday conversations and newspaper headlines",
      kanji: "~650 kanji",
      vocabulary: "~3,000 words",
      grammar: "Intermediate patterns",
      color: "from-yellow-500 to-yellow-600",
      textColor: "text-yellow-700",
      bgColor: "bg-yellow-50"
    },
    {
      level: "N2",
      title: "Upper Intermediate",
      description: "Understanding news, conversations, and written materials",
      kanji: "~1,000 kanji",
      vocabulary: "~6,000 words",
      grammar: "Advanced patterns",
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-700",
      bgColor: "bg-orange-50"
    },
    {
      level: "N1",
      title: "Advanced",
      description: "Understanding complex texts and abstract topics",
      kanji: "~2,000+ kanji",
      vocabulary: "~10,000+ words",
      grammar: "Complex patterns",
      color: "from-red-500 to-red-600",
      textColor: "text-red-700",
      bgColor: "bg-red-50"
    }
  ];

  const recommendedBooks = {
    N5: [
      { title: "Genki I (Textbook)", type: "Textbook", description: "Comprehensive beginner textbook", price: "¥3,500" },
      { title: "Genki I (Workbook)", type: "Workbook", description: "Practice exercises for Genki I", price: "¥2,000" },
      { title: "Japanese Hiragana & Katakana for Beginners", type: "Kana", description: "Master the basic scripts", price: "¥1,800" },
      { title: "JLPT N5 Practice Tests", type: "Practice", description: "Official practice materials", price: "¥2,500" }
    ],
    N4: [
      { title: "Genki II (Textbook)", type: "Textbook", description: "Continuation of Genki series", price: "¥3,500" },
      { title: "みんなの日本語 初級II", type: "Textbook", description: "Popular alternative textbook", price: "¥2,800" },
      { title: "JLPT N4 Grammar", type: "Grammar", description: "Focused grammar preparation", price: "¥2,200" },
      { title: "Kanji Look and Learn", type: "Kanji", description: "Visual kanji learning", price: "¥2,400" }
    ],
    N3: [
      { title: "Tobira: Gateway to Advanced Japanese", type: "Textbook", description: "Bridge to intermediate level", price: "¥4,200" },
      { title: "Kanzen Master N3 Grammar", type: "Grammar", description: "Complete grammar mastery", price: "¥2,600" },
      { title: "A Dictionary of Intermediate Japanese Grammar", type: "Reference", description: "Comprehensive grammar reference", price: "¥3,800" },
      { title: "JLPT N3 Vocabulary", type: "Vocabulary", description: "Essential vocabulary list", price: "¥2,300" }
    ],
    N2: [
      { title: "An Integrated Approach to Intermediate Japanese", type: "Textbook", description: "University-level textbook", price: "¥5,000" },
      { title: "Kanzen Master N2 Reading", type: "Reading", description: "Reading comprehension practice", price: "¥2,800" },
      { title: "Shin Kanzen Master N2 Grammar", type: "Grammar", description: "Advanced grammar patterns", price: "¥2,700" },
      { title: "JLPT N2 Kanji", type: "Kanji", description: "Kanji for N2 level", price: "¥2,900" }
    ],
    N1: [
      { title: "A Dictionary of Advanced Japanese Grammar", type: "Reference", description: "Advanced grammar reference", price: "¥4,500" },
      { title: "Kanzen Master N1 Vocabulary", type: "Vocabulary", description: "Advanced vocabulary mastery", price: "¥3,200" },
      { title: "Shin Kanzen Master N1 Reading", type: "Reading", description: "Complex reading materials", price: "¥3,000" },
      { title: "JLPT N1 Complete Practice", type: "Practice", description: "Full practice test collection", price: "¥3,500" }
    ]
  };

  const studyTips = {
    N5: [
      "Focus on hiragana and katakana mastery",
      "Learn basic greetings and self-introduction",
      "Practice counting and time expressions",
      "Start with present tense verbs"
    ],
    N4: [
      "Master te-form and past tense",
      "Learn polite and casual speech",
      "Practice particle usage",
      "Build vocabulary systematically"
    ],
    N3: [
      "Focus on keigo (honorific language)",
      "Read simple news articles",
      "Practice listening to natural speech",
      "Learn conditional forms"
    ],
    N2: [
      "Read academic and business texts",
      "Master complex grammar patterns",
      "Practice formal writing",
      "Study cultural contexts"
    ],
    N1: [
      "Read literature and research papers",
      "Master nuanced expressions",
      "Practice abstract discussions",
      "Study specialized vocabulary"
    ]
  };

  const examInfo = {
    schedule: "Held twice yearly (July and December)",
    registration: "Online registration opens 3-4 months before",
    format: "Multiple choice questions only",
    sections: ["Language Knowledge (Vocabulary/Grammar)", "Reading", "Listening"],
    duration: {
      N5: "105 minutes total",
      N4: "125 minutes total", 
      N3: "140 minutes total",
      N2: "155 minutes total",
      N1: "170 minutes total"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            JLPT Study Materials
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete study resources for the Japanese Language Proficiency Test (JLPT) from N5 to N1 levels.
          </p>
        </div>

        {/* JLPT Levels Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">JLPT Levels Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {jlptLevels.map((level) => (
              <Card key={level.level} className={`border-0 ${level.bgColor} hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center text-white text-xl font-bold mb-4`}>
                    {level.level}
                  </div>
                  <CardTitle className={level.textColor}>{level.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{level.description}</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Kanji:</span>
                      <span>{level.kanji}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Vocabulary:</span>
                      <span>{level.vocabulary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Grammar:</span>
                      <span>{level.grammar}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs defaultValue="books" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="books">Recommended Books</TabsTrigger>
            <TabsTrigger value="tips">Study Tips</TabsTrigger>
            <TabsTrigger value="exam">Exam Information</TabsTrigger>
          </TabsList>

          <TabsContent value="books" className="space-y-8">
            {Object.entries(recommendedBooks).map(([level, books]) => (
              <div key={level}>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${jlptLevels.find(l => l.level === level)?.color} text-white`}>
                    {level}
                  </span>
                  Level Books
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {books.map((book, index) => (
                    <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit">
                          {book.type}
                        </Badge>
                        <CardTitle className="text-sm">{book.title}</CardTitle>
                        <CardDescription className="text-xs">
                          {book.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-green-600">{book.price}</span>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="tips" className="space-y-8">
            {Object.entries(studyTips).map(([level, tips]) => (
              <Card key={level} className="border-0 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${jlptLevels.find(l => l.level === level)?.color} text-white`}>
                      {level}
                    </span>
                    Study Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tips.map((tip, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span className="text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="exam" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>📅 Exam Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{examInfo.schedule}</p>
                  <p className="text-sm mb-4">{examInfo.registration}</p>
                  <Button className="w-full" variant="outline">
                    Visit JLPT Official Site
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>📝 Exam Format</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{examInfo.format}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Sections:</h4>
                    {examInfo.sections.map((section, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-blue-500">•</span>
                        <span>{section}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>⏱️ Exam Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {Object.entries(examInfo.duration).map(([level, duration]) => (
                    <div key={level} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-bold text-lg">{level}</div>
                      <div className="text-sm text-gray-600">{duration}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardHeader>
                <CardTitle>📈 Study Timeline Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Beginner (N5-N4)</h4>
                    <ul className="text-sm space-y-1 opacity-90">
                      <li>• 6-12 months preparation</li>
                      <li>• 2-3 hours daily study</li>
                      <li>• Focus on basics first</li>
                      <li>• Practice listening daily</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Intermediate (N3-N2)</h4>
                    <ul className="text-sm space-y-1 opacity-90">
                      <li>• 12-18 months preparation</li>
                      <li>• 3-4 hours daily study</li>
                      <li>• Read authentic materials</li>
                      <li>• Practice speaking regularly</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Advanced (N1)</h4>
                    <ul className="text-sm space-y-1 opacity-90">
                      <li>• 18-24 months preparation</li>
                      <li>• 4-5 hours daily study</li>
                      <li>• Immerse in Japanese media</li>
                      <li>• Focus on nuanced language</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Study;
