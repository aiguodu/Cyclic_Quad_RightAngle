import { motion, AnimatePresence } from 'motion/react';

export function Subtitle({ text }: { text: string }) {
  return (
    <div className="h-32 w-full px-6 pb-6 flex items-end justify-center shrink-0">
      <AnimatePresence mode="wait">
        {text && (
          <motion.div 
            key={text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-900/85 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/10 w-full max-w-lg"
          >
            <p className="text-white text-sm md:text-base text-center leading-relaxed font-medium tracking-wide">
              {text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
