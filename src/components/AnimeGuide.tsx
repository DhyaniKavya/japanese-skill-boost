
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Heart } from 'lucide-react';

interface AnimeGuideProps {
  character: 'sakura' | 'yuki' | 'hana' | 'aki';
  message: string;
  position: 'hero' | 'cta' | 'floating';
  theme?: 'light' | 'dark';
}

const AnimeGuide: React.FC<AnimeGuideProps> = ({ 
  character, 
  message, 
  position, 
  theme = 'dark' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    const messageTimer = setTimeout(() => setShowMessage(true), 1500);
    return () => {
      clearTimeout(timer);
      clearTimeout(messageTimer);
    };
  }, []);

  const characters = {
    sakura: {
      emoji: '🌸👧🏻',
      name: 'Sakura-chan',
      personality: 'Cheerful and encouraging',
      color: 'from-pink-400 to-rose-500'
    },
    yuki: {
      emoji: '❄️👧🏻',
      name: 'Yuki-chan',
      personality: 'Calm and wise',
      color: 'from-blue-400 to-cyan-500'
    },
    hana: {
      emoji: '🌺👧🏻',
      name: 'Hana-chan',
      personality: 'Energetic and fun',
      color: 'from-purple-400 to-pink-500'
    },
    aki: {
      emoji: '🍂👧🏻',
      name: 'Aki-chan',
      personality: 'Gentle and patient',
      color: 'from-orange-400 to-red-500'
    }
  };

  const currentCharacter = characters[character];

  const getPositionClasses = () => {
    switch (position) {
      case 'hero':
        return 'relative';
      case 'cta':
        return 'relative';
      case 'floating':
        return 'fixed bottom-6 right-6 z-50';
      default:
        return 'relative';
    }
  };

  return (
    <div className={`${getPositionClasses()} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Character Avatar */}
      <div className="relative group">
        {/* Main Character Circle */}
        <div 
          className={`
            w-32 h-32 md:w-40 md:h-40 rounded-full 
            bg-gradient-to-br ${currentCharacter.color} 
            shadow-2xl hover:shadow-3xl 
            flex items-center justify-center 
            cursor-pointer transition-all duration-500 
            hover:scale-110 hover:-translate-y-2
            border-4 border-white/30 backdrop-blur-sm
            ${position === 'floating' ? 'animate-pulse' : ''}
          `}
          onClick={() => setShowMessage(!showMessage)}
        >
          <div className="text-4xl md:text-5xl animate-bounce">
            {currentCharacter.emoji}
          </div>
          
          {/* Floating Hearts */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <Heart className="w-3 h-3 text-white fill-current" />
          </div>
        </div>

        {/* Character Info Badge */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className={`
            px-3 py-1 rounded-full text-xs font-medium 
            ${theme === 'light' ? 'bg-white/90 text-gray-800' : 'bg-gray-900/90 text-white'}
            shadow-lg backdrop-blur-sm border border-white/20
          `}>
            {currentCharacter.name}
          </div>
        </div>

        {/* Speech Bubble */}
        {showMessage && (
          <Card className={`
            absolute ${position === 'hero' ? '-right-4 -top-40 lg:-right-80 lg:top-4' : position === 'cta' ? '-left-4 -top-40 lg:-left-80 lg:top-4' : '-left-72 -top-32'}
            w-64 sm:w-72 max-w-[calc(100vw-2rem)] lg:max-w-sm animate-scale-in
            ${theme === 'light' ? 'bg-white/95' : 'bg-gray-900/95'}
            backdrop-blur-sm border-0 shadow-2xl z-[100]
          `}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className={`
                  text-xs font-medium 
                  ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}
                `}>
                  {currentCharacter.name} says:
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowMessage(false)}
                  className="h-6 w-6 p-0 hover:bg-gray-100"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
              <p className={`
                text-sm leading-relaxed 
                ${theme === 'light' ? 'text-gray-800' : 'text-white'}
              `}>
                {message}
              </p>
              
              {/* Message Actions */}
              <div className="flex justify-end mt-3 space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`
                    text-xs h-7 px-2
                    ${theme === 'light' ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-gray-800 text-gray-300'}
                  `}
                >
                  <MessageCircle className="w-3 h-3 mr-1" />
                  Reply
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`
                    text-xs h-7 px-2
                    ${theme === 'light' ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-gray-800 text-gray-300'}
                  `}
                >
                  <Heart className="w-3 h-3 mr-1" />
                  Like
                </Button>
              </div>
            </CardContent>
            
            {/* Speech Bubble Tail */}
            <div className={`
              absolute ${position === 'hero' ? 'lg:left-0 lg:top-8 right-4 bottom-0' : position === 'cta' ? 'lg:right-0 lg:top-8 left-4 bottom-0' : 'right-0 bottom-8'}
              w-0 h-0 ${position === 'cta' ? 'border-l-8 border-t-8 border-b-8 border-l-transparent border-t-transparent border-b-transparent' : 'border-r-8 border-t-8 border-b-8 border-r-transparent border-t-transparent border-b-transparent'}
              ${theme === 'light' ? position === 'cta' ? 'border-r-white/95' : 'border-l-white/95' : position === 'cta' ? 'border-r-gray-900/95' : 'border-l-gray-900/95'}
              transform ${position === 'cta' ? 'translate-x-2' : '-translate-x-2'}
            `} />
          </Card>
        )}

        {/* Notification Dot */}
        {!showMessage && position === 'floating' && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
        )}
      </div>

      {/* Character Stats/Info (for hero position) */}
      {position === 'hero' && (
        <div className="mt-6 text-center space-y-2">
          <div className={`
            text-sm font-medium 
            ${theme === 'light' ? 'text-gray-800' : 'text-gray-600'}
          `}>
            Your Learning Companion
          </div>
          <div className={`
            text-xs px-3 py-1 rounded-full inline-block
            ${theme === 'light' ? 'bg-white/60 text-gray-700' : 'bg-gray-100/60 text-gray-600'}
            backdrop-blur-sm
          `}>
            {currentCharacter.personality}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeGuide;
