
import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  language: 'japanese' | 'english';
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'こんにちは！日本語で話しましょう！Hello! Let\'s practice Japanese together!',
      isUser: false,
      timestamp: new Date(),
      language: 'japanese'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'japanese' | 'english'>('japanese');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = (userMessage: string, language: 'japanese' | 'english'): string => {
    const japaneseResponses = [
      'それは面白いですね！もっと教えてください。',
      'とても良い質問ですね。一緒に考えましょう。',
      'はい、理解しました。他に何か質問がありますか？',
      'そうですね。日本語の勉強はどうですか？',
      'ありがとうございます！日本語が上手になりましたね。',
      'この表現はとても自然です。素晴らしいです！',
      '新しい単語を覚えましたか？使ってみてください。'
    ];

    const englishResponses = [
      'That\'s very interesting! Can you tell me more about it?',
      'Great question! Let\'s think about this together.',
      'I understand. Do you have any other questions?',
      'How is your Japanese study going?',
      'Thank you! Your Japanese is getting much better.',
      'That expression sounds very natural. Excellent work!',
      'Have you learned any new words? Please try using them.'
    ];

    const responses = language === 'japanese' ? japaneseResponses : englishResponses;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString() + '-user',
      text: inputText,
      isUser: true,
      timestamp: new Date(),
      language: currentLanguage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now().toString() + '-ai',
        text: simulateAIResponse(inputText, currentLanguage),
        isUser: false,
        timestamp: new Date(),
        language: currentLanguage
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const commonPhrases = {
    japanese: [
      'こんにちは',
      'ありがとうございます',
      'すみません',
      'お疲れ様です',
      'はじめまして',
      'よろしくお願いします'
    ],
    english: [
      'Hello',
      'Thank you',
      'Excuse me',
      'Nice to meet you',
      'How are you?',
      'Good morning'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col border-0 bg-white/60 backdrop-blur-sm">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🤖</span>
                    Japanese AI Chat Assistant
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant={currentLanguage === 'japanese' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCurrentLanguage('japanese')}
                    >
                      🇯🇵 日本語
                    </Button>
                    <Button
                      variant={currentLanguage === 'english' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCurrentLanguage('english')}
                    >
                      🇺🇸 English
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.isUser
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                            : 'bg-white border border-gray-200 text-gray-900'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {!message.isUser && <span className="text-lg">🤖</span>}
                          <Badge variant="secondary" className="text-xs">
                            {message.language === 'japanese' ? '日本語' : 'English'}
                          </Badge>
                        </div>
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🤖</span>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={currentLanguage === 'japanese' ? 'メッセージを入力してください...' : 'Type your message...'}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!inputText.trim()}>
                    送信
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Phrases */}
            <Card className="border-0 bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-sm">Quick Phrases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {commonPhrases[currentLanguage].map((phrase, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-left h-auto p-2"
                      onClick={() => setInputText(phrase)}
                    >
                      <span className="text-xs">{phrase}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="border-0 bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-sm">Chat Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">✓</span>
                    <span>Real-time responses</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">✓</span>
                    <span>Bilingual support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">✓</span>
                    <span>Natural conversations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-blue-500">🔜</span>
                    <span>Voice chat (coming soon)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="border-0 bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-sm">💡 Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs space-y-2 text-gray-600">
                  <p>• Start with simple greetings</p>
                  <p>• Mix Japanese and English</p>
                  <p>• Ask about grammar</p>
                  <p>• Practice daily conversations</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
