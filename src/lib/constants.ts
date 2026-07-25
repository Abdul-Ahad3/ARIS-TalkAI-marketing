export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const CONTAINER_WIDTH = 1280;

export const NAV_SCROLL_THRESHOLD = 24;

export const MOTION = {
  duration: {
    fast: 0.2,
    base: 0.4,
    slow: 0.8,
  },
  ease: [0.16, 1, 0.3, 1] as const,
} as const;

export const SCROLL_REVEAL = {
  threshold: 0.2,
  rootMargin: "0px 0px -10% 0px",
} as const;