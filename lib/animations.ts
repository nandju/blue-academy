// lib/animations.ts
// Bibliothèque complète d'animations Framer Motion avec effet blur

import { Variants } from "framer-motion"

// ===========================
// ANIMATIONS AVEC BLUR
// ===========================

/**
 * Fade In avec Blur - Apparition progressive avec effet de flou
 */
export const fadeInBlur: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

/**
 * Fade In avec Blur depuis le bas
 */
export const fadeInUpBlur: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/**
 * Fade In avec Blur depuis le haut
 */
export const fadeInDownBlur: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/**
 * Fade In avec Blur depuis la gauche
 */
export const fadeInLeftBlur: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/**
 * Fade In avec Blur depuis la droite
 */
export const fadeInRightBlur: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/**
 * Scale In avec Blur - Zoom avec effet de flou
 */
export const scaleInBlur: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/**
 * Rotate In avec Blur
 */
export const rotateInBlur: Variants = {
  hidden: {
    opacity: 0,
    rotate: -10,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// ===========================
// ANIMATIONS STANDARD
// ===========================

/**
 * Fade In simple
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

/**
 * Fade In depuis le bas
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/**
 * Fade In depuis le haut
 */
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/**
 * Slide In depuis la gauche
 */
export const slideInLeft: Variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/**
 * Slide In depuis la droite
 */
export const slideInRight: Variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/**
 * Scale In - Zoom progressif
 */
export const scaleIn: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/**
 * Pop In - Effet de rebond
 */
export const popIn: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
}

// ===========================
// ANIMATIONS POUR CONTENEURS
// ===========================

/**
 * Stagger Container - Pour animer les enfants en cascade
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

/**
 * Stagger rapide
 */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

/**
 * Stagger lent
 */
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

// ===========================
// ANIMATIONS HOVER
// ===========================

/**
 * Hover Scale - Zoom au survol
 */
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
}

/**
 * Hover Lift - Élévation au survol
 */
export const hoverLift = {
  y: -8,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
}

/**
 * Hover Glow - Effet lumineux au survol
 */
export const hoverGlow = {
  boxShadow: "0 0 30px rgba(13, 189, 159, 0.5)",
  transition: {
    duration: 0.3,
  },
}

// ===========================
// ANIMATIONS COMPLEXES
// ===========================

/**
 * Reveal progressif avec ligne
 */
export const revealWithLine: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/**
 * Flip In - Rotation 3D
 */
export const flipIn: Variants = {
  hidden: {
    rotateY: 90,
    opacity: 0,
  },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/**
 * Bounce In - Entrée avec rebond
 */
export const bounceIn: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
}

/**
 * Wave - Animation de vague
 */
export const wave: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 2,
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.5,
      },
    },
  },
}

// ===========================
// ANIMATIONS CARDS
// ===========================

/**
 * Card Hover - Effet carte au survol
 */
export const cardHover = {
  scale: 1.03,
  y: -5,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
}

/**
 * Card Tap - Effet au clic
 */
export const cardTap = {
  scale: 0.98,
  transition: {
    duration: 0.1,
  },
}

// ===========================
// ANIMATIONS MODALES
// ===========================

/**
 * Modal Backdrop
 */
export const modalBackdrop: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
}

/**
 * Modal Content - Apparition de bas en haut
 */
export const modalContent: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
}

// ===========================
// ANIMATIONS SCROLL
// ===========================

/**
 * Parallax Scroll
 */
export const parallaxScroll = (scrollY: number, speed: number = 0.5) => ({
  y: scrollY * speed,
})

/**
 * Fade on Scroll
 */
export const fadeOnScroll: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// ===========================
// ANIMATIONS TEXTE
// ===========================

/**
 * Text Reveal - Révélation de texte mot par mot
 */
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

/**
 * Typewriter Effect
 */
export const typewriter: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: {
      duration: 2,
      ease: "linear",
    },
  },
}

// ===========================
// TRANSITIONS PERSONNALISÉES
// ===========================

/**
 * Transition douce
 */
export const smoothTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
}

/**
 * Transition spring
 */
export const springTransition = {
  type: "spring" as const,
  stiffness: 200,
  damping: 20,
}

/**
 * Transition rapide
 */
export const quickTransition = {
  duration: 0.3,
  ease: "easeOut",
}

// ===========================
// VIEWPORT OPTIONS
// ===========================

/**
 * Options de viewport pour animations au scroll
 */
export const viewportOptions = {
  once: true,
  amount: 0.3,
}

export const viewportOptionsRepeat = {
  once: false,
  amount: 0.3,
}

// ===========================
// HELPER FUNCTIONS
// ===========================

/**
 * Crée une animation de délai personnalisée
 */
export const createDelayedAnimation = (baseVariant: Variants, delay: number): Variants => {
  return {
    hidden: baseVariant.hidden,
    visible: {
      ...baseVariant.visible,
      transition: {
        ...(baseVariant.visible as any).transition,
        delay,
      },
    },
  }
}

/**
 * Crée une animation stagger personnalisée
 */
export const createStaggerContainer = (staggerDelay: number, childrenDelay: number = 0): Variants => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childrenDelay,
      },
    },
  }
}