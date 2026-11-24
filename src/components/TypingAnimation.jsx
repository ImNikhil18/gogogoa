import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TypingAnimation = ({ names }) => {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const prefix = 'Parlapalli ';

  useEffect(() => {
    const currentName = names[currentNameIndex];
    const fullText = prefix + currentName;
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (isTyping && !isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else if (isDeleting) {
        // Only delete the part after "Parlapalli "
        const prefixLength = prefix.length;
        if (displayedText.length > prefixLength) {
          setDisplayedText(displayedText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentNameIndex((prev) => (prev + 1) % names.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isTyping, isDeleting, currentNameIndex, names]);

  return (
    <div className="h-12 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentNameIndex}
          className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {displayedText}
          <motion.span
            className="inline-block w-1 h-8 bg-white ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TypingAnimation;