import React from 'react';
import { motion } from 'motion/react';

export interface ToolLogo {
  id: string;
  name: string;
  color?: string;
  svg: React.ReactNode;
}

export const TOOL_LOGOS: ToolLogo[] = [
  {
    id: 'wordpress',
    name: 'WordPress',
    color: '#3858E9',
    svg: (
      <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12c0 4.198 2.587 7.79 6.275 9.27L4.764 9.87a9.986 9.986 0 0 1 7.236-4.87v.006c.453 0 .894.04 1.32.115L12 2zm0 20c-1.393 0-2.709-.287-3.906-.8l4.492-13.064c.277.014.542.028.797.028.455 0 1.139-.057 1.139-.057.456-.057.513-.742.057-.742 0 0-.456.057-.969.057l3.078 9.17A9.957 9.957 0 0 1 12 22zm9.155-8.547c0-2.052-.741-3.479-1.368-4.563-.827-1.368-1.596-2.508-1.596-3.876 0-1.51.741-2.223 1.425-2.223.057 0 .114.004.171.01A9.948 9.948 0 0 1 22 12c0 3.32-1.621 6.26-4.113 8.077l3.268-11.624zm-8.89 7.025l-2.77-8.04 2.016-5.857c.228-.014.456-.028.684-.028.456 0 1.14.057 1.14.057.456.057.513-.742.057-.742 0 0-.456.057-.97.057-.085 0-.17-.002-.256-.006l.1.343-2.001 5.815z" />
      </svg>
    ),
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    color: '#96588A',
    svg: (
      <svg className="w-10 h-8" viewBox="0 0 24 16" fill="currentColor">
        <path d="M20.8 1.6H3.2C1.4 1.6 0 3 0 4.8v6.4C0 13 1.4 14.4 3.2 14.4h2.4v1.6l3.2-1.6h12c1.8 0 3.2-1.4 3.2-3.2V4.8c0-1.8-1.4-3.2-3.2-3.2zm-14.4 8c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6zm5.6 0c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6zm5.6 0c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6z" />
      </svg>
    ),
  },
  {
    id: 'elementor',
    name: 'Elementor',
    color: '#92003B',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-3.5 14H7V8h1.5v8zm8.5 0h-6v-1.6h6V16zm0-3.2h-6v-1.6h6v1.6zm0-3.2h-6V8h6v1.6z" />
      </svg>
    ),
  },
  {
    id: 'php',
    name: 'PHP',
    color: '#777BB4',
    svg: (
      <svg className="w-10 h-7" viewBox="0 0 24 16" fill="currentColor">
        <path d="M12.8 5.6h-2.4l-.8 4.8h2.4c1.2 0 2-.6 2.2-1.8.2-1.4-.4-3-1.4-3zm-.6 2.4h-1l.3-1.6h1c.5 0 .8.3.7.8-.1.5-.4.8-.7.8zM4.8 5.6H2.4L1.6 10.4h2.4c1.2 0 2-.6 2.2-1.8.2-1.4-.4-3-1.4-3zm-.6 2.4h-1l.3-1.6h1c.5 0 .8.3.7.8-.1.5-.4.8-.7.8zm16 0h-1l.3-1.6h1c.5 0 .8.3.7.8-.1.5-.4.8-.7.8zm.6-2.4h-2.4l-.8 4.8h2.4c1.2 0 2-.6 2.2-1.8.2-1.4-.4-3-1.4-3z" />
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React',
    color: '#61DAFB',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="1.8" />
      </svg>
    ),
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    color: '#06B6D4',
    svg: (
      <svg className="w-9 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
      </svg>
    ),
  },
  {
    id: 'figma',
    name: 'Figma',
    color: '#F24E1E',
    svg: (
      <svg className="w-6 h-9" viewBox="0 0 24 36" fill="currentColor">
        <path d="M12 18a6 6 0 1 1 0-12h6a6 6 0 0 1 0 12zM6 18a6 6 0 1 1 0-12h6v12H6zm0 6a6 6 0 0 1 6-6v6a6 6 0 0 1-6 6 6 6 0 0 1-6-6zm12 0a6 6 0 1 1-6-6v6a6 6 0 0 1 6 6zm0-12a6 6 0 1 1-6-6h6v6z" />
      </svg>
    ),
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    color: '#F38020',
    svg: (
      <svg className="w-10 h-7" viewBox="0 0 24 16" fill="currentColor">
        <path d="M18.8 6.4c-.4-2.8-2.8-4.8-5.6-4.8-2.2 0-4 1.2-4.9 3-.4-.1-.8-.2-1.3-.2-2.5 0-4.6 2-4.6 4.6 0 .4.1.8.2 1.2H1.6C.7 10.2 0 11 0 11.9c0 .9.7 1.7 1.6 1.7h17.2c2.9 0 5.2-2.3 5.2-5.2 0-2.7-2.1-4.8-4.8-5h-.4z" />
      </svg>
    ),
  },
  {
    id: 'mysql',
    name: 'MySQL',
    color: '#4479A1',
    svg: (
      <svg className="w-9 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c4.41 0 7 1.43 7 2s-2.59 2-7 2-7-1.43-7-2 2.59-2 7-2zm0 6c-4.41 0-7-1.43-7-2v3c0 .57 2.59 2 7 2s7-1.43 7-2V9c0 .57-2.59 2-7 2zm0 6c-4.41 0-7-1.43-7-2v3c0 .57 2.59 2 7 2s7-1.43 7-2v-3c0 .57-2.59 2-7 2z" />
      </svg>
    ),
  },
  {
    id: 'redis',
    name: 'Redis',
    color: '#DC382D',
    svg: (
      <svg className="w-9 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 8L2 15l10 5 10-5-10-5zm0 7L2 22l10 5 10-5-10-5z" transform="scale(0.8) translate(3, -1)" />
      </svg>
    ),
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    color: '#F7DF1E',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm13.7 13.8c-.8 0-1.4-.4-1.7-1.1l1.5-.9c.2.4.5.6.8.6.4 0 .7-.2.7-.6v-4.6h1.8v4.6c0 1.3-.9 2-2.1 2zm-5.4 0c-1.3 0-2.1-.8-2.1-2.1v-.2h1.8v.2c0 .4.3.7.8.7.4 0 .7-.2.7-.5 0-.4-.3-.6-.8-.8l-.8-.3c-1.1-.5-1.6-1-1.6-1.9 0-1.2.9-2 2.1-2 1.1 0 1.9.6 2.1 1.7l-1.5.7c-.1-.4-.4-.6-.7-.6-.3 0-.5.2-.5.5 0 .3.2.5.7.7l.8.3c1.2.5 1.7 1.1 1.7 2 0 1.2-.9 2-2.2 2z" />
      </svg>
    ),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    color: '#3178C6',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm5.7 7.7H7.1v1.6h2.2v6.5h1.8v-6.5h2.2v-1.6H8.7zm6.6 8.1c1.3 0 2.2-.8 2.2-2 0-.9-.5-1.5-1.7-2l-.8-.3c-.5-.2-.7-.4-.7-.7 0-.3.2-.5.5-.5.3 0 .6.2.7.6l1.5-.7c-.2-1.1-1-1.7-2.1-1.7-1.2 0-2.1.8-2.1 2 0 .9.5 1.4 1.6 1.9l.8.3c.5.2.8.4.8.8 0 .3-.3.5-.7.5-.5 0-.8-.3-.8-.7l-1.5.7c.3 1.1 1.1 1.8 2.3 1.8z" />
      </svg>
    ),
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    color: '#FFFFFF',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.3 14.5L10 9.2V16H8.5V8h1.8l5.3 7.3V8H17v8.5z" />
      </svg>
    ),
  },
  {
    id: 'vite',
    name: 'Vite',
    color: '#646CFF',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.6 3.2L12.5 16 12 17l-.5-1L4.4 3.2C4.1 2.7 4.5 2 5.1 2h13.8c.6 0 1 .7.7 1.2zM12 18.5l6-11h-4l-2 5-2-5H6l6 11z" />
      </svg>
    ),
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    color: '#E10098',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.2l6.8 4v8L12 20.2 5.2 16.2v-8L12 4.2zm-1 3.8v4.5l-3.9 2.3.9 1.6 3-1.8v3.4h2V14.6l3 1.8.9-1.6-3.9-2.3V8h-2z" />
      </svg>
    ),
  },
  {
    id: 'stripe',
    name: 'Stripe',
    color: '#635BFF',
    svg: (
      <svg className="w-9 h-7" viewBox="0 0 24 16" fill="currentColor">
        <path d="M19.7 5.9c0-2-1.6-3.5-4.2-3.5-3.3 0-5.5 1.7-5.5 4.3 0 3.7 5.1 3.1 5.1 4.7 0 .6-.6.9-1.4.9-1.3 0-2.7-.6-3.7-1.4l-.8 2.2c1.2.8 2.8 1.3 4.5 1.3 3.5 0 5.7-1.7 5.7-4.4 0-4-5.2-3.3-5.2-4.9 0-.5.5-.8 1.2-.8 1.1 0 2.3.5 3.1 1.1l.7-2.1z" />
      </svg>
    ),
  }
];

export const ToolLogosMarquee: React.FC = () => {
  // Duplicate for seamless infinite loop
  const marqueeItems = [...TOOL_LOGOS, ...TOOL_LOGOS];

  return (
    <div className="relative w-full overflow-hidden py-3">
      {/* Edge gradient masks for seamless fade out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#252525] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#252525] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling row */}
      <motion.div
        className="flex items-center gap-10 sm:gap-14 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 35,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {marqueeItems.map((tool, idx) => (
          <div
            key={`${tool.id}-${idx}`}
            className="flex items-center justify-center group cursor-pointer transition-transform duration-200 hover:scale-110"
            title={tool.name}
          >
            <div className="text-slate-400 group-hover:text-[#00b95a] transition-colors">
              {tool.svg}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
