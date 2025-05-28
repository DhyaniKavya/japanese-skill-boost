
import React from 'react';

const FloatingElements: React.FC = () => {
  const elements = [
    { emoji: '🌸', size: 'text-4xl', position: 'top-20 left-10', delay: '0s' },
    { emoji: '⛩️', size: 'text-3xl', position: 'top-40 right-20', delay: '1s' },
    { emoji: '🗾', size: 'text-5xl', position: 'bottom-40 left-16', delay: '0.5s' },
    { emoji: '🎌', size: 'text-2xl', position: 'top-60 left-1/4', delay: '2s' },
    { emoji: '🏮', size: 'text-3xl', position: 'bottom-20 right-32', delay: '1.5s' },
    { emoji: '🎋', size: 'text-4xl', position: 'top-32 right-1/3', delay: '0.8s' },
    { emoji: '🍃', size: 'text-2xl', position: 'bottom-60 left-1/3', delay: '2.2s' },
    { emoji: '💮', size: 'text-3xl', position: 'top-96 right-16', delay: '1.8s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`
            absolute ${element.position} ${element.size} 
            opacity-10 animate-pulse select-none
          `}
          style={{
            animationDelay: element.delay,
            animationDuration: '3s'
          }}
        >
          <div className="animate-bounce" style={{ animationDelay: element.delay }}>
            {element.emoji}
          </div>
        </div>
      ))}
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-red-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-red-300/15 to-pink-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default FloatingElements;
