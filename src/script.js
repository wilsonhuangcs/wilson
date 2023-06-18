import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const sentences = [
    'I  am a computer programmer!',
    'I  love basketball!',
    'I  enjoy pineapple on pizza!',
    'I  love sleeping!',
    'I  hope you enjoy my website!'
  ];

  const [currentSentence, setCurrentSentence] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let sentenceIndex = 0;
    let typeInterval;

    const typeSentence = () => {
      typeInterval = setInterval(() => {
        setCurrentSentence((prevSentence) => {
          const sentence = sentences[currentIndex];
          const nextChar = sentence[sentenceIndex];
          if (nextChar) {
            return prevSentence + nextChar;
          }
          return prevSentence;
        });
        sentenceIndex++;
        if (sentenceIndex >= sentences[currentIndex].length) {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 100);
    };

    if (isTyping) {
      setCurrentSentence('');
      typeSentence();
    }

    return () => {
      clearInterval(typeInterval);
    };
  }, [currentIndex, isTyping]);

  useEffect(() => {
    if (!isTyping) {
      setTimeout(() => {
        setCurrentSentence('');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        setIsTyping(true);
      }, 1500);
    }
  }, [currentIndex, isTyping, sentences.length]);

  return (
    <div className="typewriter-container">
      <h1 className="typewriter-text">{currentSentence}</h1>
    </div>
  );
};

export default Typewriter;
