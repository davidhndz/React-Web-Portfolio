import { useState, useEffect } from 'react';
import { personal } from '../data/portfolioData';

/**
 * TypingText
 * Recreates the original JS typing animation using useState + useEffect.
 * It steps through each character of `text` every `speed` ms.
 */
function TypingText({ text, speed = 150 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index >= text.length) return;
    const timer = setTimeout(() => setIndex((i) => i + 1), speed);
    return () => clearTimeout(timer);
  }, [index, text, speed]);

  return (
    <p>
      {'> '}
      <span>{text.slice(0, index)}</span>
      <span className="cursor">▌</span>
    </p>
  );
}

/**
 * TerminalWindow
 * The "about-window" panel that reveals its lines one by one with a delay —
 * matching the original staggered setTimeout approach.
 * Uses a `visibleCount` counter that increments every `stepDelay` ms.
 */
function TerminalWindow() {
  const lines = [
    { type: 'p',  content: '> booting david.exe' },
    { type: 'p',  content: '  Initializing profile...' },
    { type: 'br' },
    { type: 'p',  content: '> david.location' },
    { type: 'p',  content: `  "${personal.location}"` },
    { type: 'br' },
    { type: 'p',  content: '> david.contact' },
    { type: 'links' },
    { type: 'br' },
    { type: 'p',  content: '> david.resume' },
    { type: 'resume' },
    { type: 'br' },
    { type: 'p',  content: '> david.interests' },
    { type: 'p',  content: `  [${personal.interests.map((i) => `"${i}"`).join(', ')}]` },
    { type: 'br' },
    { type: 'p',  content: '> david.education' },
    { type: 'p',  content: `  "${personal.education}"` },
    { type: 'br' },
    { type: 'p',  content: '> david.languages' },
    { type: 'p',  content: `  [${personal.languages.map((l) => `"${l}"`).join(', ')}]` },
    { type: 'br' },
    { type: 'cursor-line' },
  ];

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= lines.length) return;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), 200);
    return () => clearTimeout(timer);
  }, [visibleCount, lines.length]);

  return (
    <div className="hero-about">
      <div className="about-bar">
        <div className="about-button red"></div>
        <div className="about-button yellow"></div>
        <div className="about-button green"></div>
      </div>
      <div className="about-window">
        {lines.map((line, idx) => {
          const visible = idx < visibleCount;
          const style = {
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(4px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          };

          if (line.type === 'br') {
            return <br key={idx} style={style} />;
          }
          if (line.type === 'links') {
            return (
              <p key={idx} style={style}>
                {'  ['}
                <a href={`mailto:${personal.email}`}>"{personal.email}"</a>
                {', '}
                <a href={personal.github} target="_blank" rel="noreferrer">"GitHub"</a>
                {', '}
                <a href={personal.linkedin} target="_blank" rel="noreferrer">"LinkedIn"</a>
                {']'}
              </p>
            );
          }
          if (line.type === 'resume') {
            return (
              <a key={idx} href={personal.resume} download style={style}>
                "resume.pdf"
              </a>
            );
          }
          if (line.type === 'cursor-line') {
            return (
              <p key={idx} style={style}>
                {'>'}<span className="cursor"> ▌</span>
              </p>
            );
          }
          return (
            <p key={idx} style={style}>
              {line.content}
            </p>
          );
        })}
      </div>
    </div>
  );
}

/**
 * HeroSection
 * Composes the top part of the page: title + description on the left,
 * terminal window on the right (stacked on mobile).
 */
export default function HeroSection() {
  return (
    <div className="hero-container" id="home">
      <div className="hero-title">
        <TypingText text={personal.typedName} />
      </div>
      <div className="hero-description">
        <p>{personal.description}</p>
      </div>
      <TerminalWindow />
    </div>
  );
}
