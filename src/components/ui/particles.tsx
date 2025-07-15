'use client';

import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import type { Engine } from '@tsparticles/engine';
import { loadAll } from '@tsparticles/all';

export default function SparkleParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadAll(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: '#0f0c29', // fallback in case background gradient fails
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ['#ffffff', '#ff00ff', '#00ffff', '#ffd700'],
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.6,
            random: true,
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            outModes: {
              default: 'bounce',
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
