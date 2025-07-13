import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

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
      text: 'こんにちは！日本語で話しましょう！Hello! Let\'s practice Japanese together! I can now answer any questions you have using AI!',
      isUser: false,
      timestamp: new Date(),
      language: 'japanese'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'japanese' | 'english'>('japanese');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const API_KEY = 'AIzaSyA4qjbRCf3MqBo5p_OmuM4KWFnRM3Q4tG8';

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Scroll to bottom whenever messages change
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);
    return () => clearTimeout(timer);
  }, [messages]);

  // Function to detect language
  const detectLanguage = (text: string): 'japanese' | 'english' => {
    // Simple Japanese character detection
    const japaneseRegex = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/;
    return japaneseRegex.test(text) ? 'japanese' : 'english';
  };

  const getAIResponse = async (userMessage: string, language: 'japanese' | 'english'): Promise<string> => {
    try {
      const languageContext = language === 'japanese' 
        ? 'You are a helpful Japanese language learning assistant. Respond in Japanese when appropriate, and help with Japanese language learning. Mix Japanese and English as needed for learning. Keep responses concise and helpful. Do not use asterisks or markdown formatting.'
        : 'You are a helpful assistant. Respond in English and help with any questions the user has. Keep responses concise and helpful. Do not use asterisks or markdown formatting.';

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${languageContext}\n\nUser message: ${userMessage}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topP: 0.8,
            topK: 40,
            maxOutputTokens: 500,
          }
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        let responseText = data.candidates[0].content.parts[0].text;
        // Remove asterisks and clean up the response
        responseText = responseText.replace(/\*\*/g, '').replace(/\*/g, '').trim();
        return responseText;
      } else {
        throw new Error('No response generated');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      toast.error('Failed to get AI response. Please try again.');
      
      // Fallback responses
      const fallbackResponses = language === 'japanese' ? [
        '申し訳ございませんが、現在AIサービスに接続できません。もう一度お試しください。',
        'すみません、少し問題が発生しました。他の質問はありますか？'
      ] : [
        'I apologize, but I\'m having trouble connecting to the AI service right now. Please try again.',
        'Sorry, there was an issue. Do you have any other questions?'
      ];
      
      return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Detect the language of the user's message
    const detectedLanguage = detectLanguage(inputText);
    
    // Check if the user is using the correct language for the selected mode
    if (detectedLanguage !== currentLanguage) {
      const warningMessage: Message = {
        id: Date.now().toString() + '-warning',
        text: currentLanguage === 'japanese' 
          ? 'Please Select English Language' 
          : '日本語を選択してください',
        isUser: false,
        timestamp: new Date(),
        language: currentLanguage
      };
      
      setMessages(prev => [...prev, warningMessage]);
      setInputText('');
      // Scroll to show warning message
      setTimeout(() => scrollToBottom(), 100);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString() + '-user',
      text: inputText,
      isUser: true,
      timestamp: new Date(),
      language: currentLanguage
    };

    setMessages(prev => [...prev, userMessage]);
    const messageText = inputText;
    setInputText('');
    setIsTyping(true);

    // Scroll to show user message
    setTimeout(() => scrollToBottom(), 100);

    try {
      const aiResponseText = await getAIResponse(messageText, currentLanguage);
      
      const aiResponse: Message = {
        id: Date.now().toString() + '-ai',
        text: aiResponseText,
        isUser: false,
        timestamp: new Date(),
        language: currentLanguage
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error getting AI response:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col border-0 bg-white/70 backdrop-blur-sm shadow-xl">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🌸</span>
                    Japanese AI Chat Assistant
                    <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                      AI Powered
                    </Badge>
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant={currentLanguage === 'japanese' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCurrentLanguage('japanese')}
                      className={currentLanguage === 'japanese' ? 'bg-pink-500 hover:bg-pink-600' : 'border-pink-300 text-pink-600 hover:bg-pink-50'}
                    >
                      🇯🇵 日本語
                    </Button>
                    <Button
                      variant={currentLanguage === 'english' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCurrentLanguage('english')}
                      className={currentLanguage === 'english' ? 'bg-pink-500 hover:bg-pink-600' : 'border-pink-300 text-pink-600 hover:bg-pink-50'}
                    >
                      🇺🇸 English
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 scroll-smooth">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.isUser
                            ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                            : message.id.includes('warning')
                            ? 'bg-yellow-100 border border-yellow-300 text-yellow-800 shadow-sm'
                            : 'bg-white/90 border border-pink-200 text-gray-900 shadow-sm'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {!message.isUser && !message.id.includes('warning') && <span className="text-lg">🌸</span>}
                          {message.id.includes('warning') && <span className="text-lg">⚠️</span>}
                          <Badge variant="secondary" className={`text-xs ${
                            message.id.includes('warning') 
                              ? 'bg-yellow-200 text-yellow-800' 
                              : 'bg-pink-50 text-pink-700'
                          }`}>
                            {message.id.includes('warning') 
                              ? 'Warning' 
                              : message.language === 'japanese' ? '日本語' : 'English'
                            }
                          </Badge>
                        </div>
                        <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
                        <p className="text-xs opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white/90 border border-pink-200 rounded-2xl px-4 py-3 shadow-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🌸</span>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} className="h-4" />
                </div>
                
                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={currentLanguage === 'japanese' ? 'メッセージを入力してください...' : 'Type your message...'}
                    className="flex-1 border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                    disabled={isTyping}
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    disabled={!inputText.trim() || isTyping}
                    className="bg-pink-500 hover:bg-pink-600 text-white"
                  >
                    送信
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-sm text-pink-800">Chat Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-pink-500">✓</span>
                    <span>AI-powered responses</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-pink-500">✓</span>
                    <span>Bilingual support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-pink-500">✓</span>
                    <span>Natural conversations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-pink-500">✓</span>
                    <span>Instant answers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-sm text-pink-800">🌸 Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs space-y-2 text-gray-600">
                  <p>• Ask me anything in Japanese or English</p>
                  <p>• I can help with grammar and translation</p>
                  <p>• Practice conversations with me</p>
                  <p>• Ask about Japanese culture</p>
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
