'use client'
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import PersonalInfo from '@/components/PersonalInfo';
import TechIcons from '@/components/TechIcons';
import { Navbar } from '@/components/Navbar';

export default function HomePage() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = useMemo(
    () => [
      ' DevOps Engineer at Opsta',
      ' Focusing on DevOps & Security',
      ' Chaloemrat or you can call me Tonkhab.',
    ],
    []
  );

  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // pause at full phrase
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1); // functional update to avoid stale state
      setDelta(500); // small pause before typing next phrase
    }
  }, [loopNum, isDeleting, text, toRotate, period]);

  useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <PersonalInfo text={text} />
      <TechIcons />
    </div>
  );
}
