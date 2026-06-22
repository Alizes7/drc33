"use client";

import { motion } from "framer-motion";

interface BrandMarkProps {
  size?: number;
  className?: string;
  animated?: boolean;
  strokeWidth?: number;
}

/**
 * Motivo gráfico assinatura — brasão aberto / chevron inspirado no monograma
 * DRC. Usado como marca d'água recorrente em vez de orbs e glows genéricos.
 */
export default function BrandMark({
  size = 240,
  className = "",
  animated = false,
  strokeWidth = 1,
}: BrandMarkProps) {
  const outer = "M28 18 L28 152 L120 226 L212 152 L212 18";
  const inner = "M58 46 L58 138 L120 188 L182 138 L182 80";
  const chevron = "M96 70 L150 122 L96 174";

  if (!animated) {
    return (
      <svg
        viewBox="0 0 240 240"
        width={size}
        height={size}
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <path d={outer} stroke="currentColor" strokeWidth={strokeWidth} opacity={0.9} />
        <path d={inner} stroke="currentColor" strokeWidth={strokeWidth} opacity={0.55} />
        <path d={chevron} stroke="currentColor" strokeWidth={strokeWidth * 1.15} opacity={0.85} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d={outer}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        opacity={0.9}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <motion.path
        d={inner}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        opacity={0.55}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.25 }}
      />
      <motion.path
        d={chevron}
        stroke="currentColor"
        strokeWidth={strokeWidth * 1.15}
        opacity={0.85}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
      />
    </svg>
  );
}
