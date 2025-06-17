import React, { useEffect, useRef, useState } from 'react';
import '../style/loading-screen.css';

const TOTAL_BALLS = 32;
const FIRST_CIRCLE_BALLS = 16;
const TOTAL_DURATION = 25; // seconds
const FIRST_CIRCLE_DURATION = TOTAL_DURATION / 2;
const SECOND_CIRCLE_DURATION = TOTAL_DURATION / 2;

const LoadingScreen = () => {
  const [visibleBalls, setVisibleBalls] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const orbit1Ref = useRef();
  const orbit2Ref = useRef();
  const sparklesRef = useRef();

  // Sparkles
  useEffect(() => {
    const sparkles = [];
    for (let i = 0; i < 10; i++) {
      sparkles.push({
        top: Math.random() * 80,
        left: Math.random() * 80,
        delay: Math.random() * 5,
        key: i,
      });
    }
    sparklesRef.current = sparkles;
  }, []);

  // Balls animation
  useEffect(() => {
    let ballsAppeared = 0;
    // First orbit
    for (let i = 0; i < 16; i++) {
      const appearDelay = (i / 16) * FIRST_CIRCLE_DURATION * 1000;
      setTimeout(() => {
        ballsAppeared++;
        setVisibleBalls(ballsAppeared);
      }, appearDelay);
    }
    // Second orbit
    for (let i = 0; i < 16; i++) {
      const appearDelay = (FIRST_CIRCLE_DURATION + (i / 16) * SECOND_CIRCLE_DURATION) * 1000;
      setTimeout(() => {
        ballsAppeared++;
        setVisibleBalls(ballsAppeared);
      }, appearDelay);
    }
    // Hide after all balls
    setTimeout(() => {
      setTimeout(() => setHidden(true), 1000);
    }, TOTAL_DURATION * 1000);
  }, []);

  // Progress bar
  useEffect(() => {
    let progressPercentage;
    if (visibleBalls <= FIRST_CIRCLE_BALLS) {
      progressPercentage = Math.floor((visibleBalls / FIRST_CIRCLE_BALLS) * 50);
    } else {
      const secondCircleBalls = visibleBalls - FIRST_CIRCLE_BALLS;
      progressPercentage = 50 + Math.floor((secondCircleBalls / FIRST_CIRCLE_BALLS) * 50);
    }
    setProgress(progressPercentage);
  }, [visibleBalls]);

  // Ball positions
  const getBalls = (orbit, count, radius, className) => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const appearDelay =
        orbit === 1
          ? (i / count) * FIRST_CIRCLE_DURATION
          : FIRST_CIRCLE_DURATION + (i / count) * SECOND_CIRCLE_DURATION;
      const gradient =
        orbit === 1
          ? i % 2 === 0
            ? 'linear-gradient(45deg, #ff66c4, #4dff91)'
            : 'linear-gradient(45deg, #4dff91, #ff66c4)'
          : i % 2 === 1
          ? 'linear-gradient(45deg, #ff66c4, #4dff91)'
          : 'linear-gradient(45deg, #4dff91, #ff66c4)';
      const glowColor =
        orbit === 1
          ? i % 2 === 0
            ? '255, 102, 196'
            : '77, 255, 145'
          : i % 2 === 1
          ? '255, 102, 196'
          : '77, 255, 145';
      const glowIntensity = 0.5 + Math.random() * 0.5;
      const size = 10 + Math.random() * 4;
      return (
        <div
          key={`${orbit}-${i}`}
          className={`ball ${className}`}
          style={{
            left: `${x + radius}px`,
            top: `${y + radius}px`,
            animationDelay: `${appearDelay}s`,
            background: gradient,
            boxShadow: `0 0 10px ${glowIntensity}px rgba(${glowColor}, 0.7)` ,
            width: `${size}px`,
            height: `${size}px`,
            opacity: visibleBalls >= (orbit === 1 ? i + 1 : i + 17) ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        />
      );
    });
  };

  if (hidden) return null;

  return (
    <div className="loading-container" style={{ opacity: hidden ? 0 : 1 }}>
      <div className="logo-container">
        <div className="logo-circle">
          <div className="logo-background"></div>
          <div className="logo-inner">
            <div className="logo-text-container">
              <div className="logo-text">NR</div>
              <div className="logo-text-overlay">NR</div>
              {/* Sparkles */}
              {sparklesRef.current &&
                sparklesRef.current.map((s) => (
                  <div
                    className="sparkle"
                    key={s.key}
                    style={{
                      top: `${s.top}px`,
                      left: `${s.left}px`,
                      animationDelay: `${s.delay}s`,
                    }}
                  />
                ))}
            </div>
          </div>
          <div className="shine"></div>
          <div className="glow"></div>
        </div>
        {/* Orbits */}
        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>
        <div className="orbit-container-1">{getBalls(1, 16, 110, 'orbit-ball-1')}</div>
        <div className="orbit-container-2">{getBalls(2, 16, 140, 'orbit-ball-2')}</div>
      </div>
      <div className="loading-text">Loading...</div>
      <div className="loading-bar">
        <div
          className="loading-progress"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, #ff66c4 ${progress / 2}%, #4dff91 ${progress}%)`,
          }}
        ></div>
      </div>
      <div className="percentage">{progress}%</div>
    </div>
  );
};

export default LoadingScreen;
