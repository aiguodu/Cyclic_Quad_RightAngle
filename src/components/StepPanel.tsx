import { motion, AnimatePresence } from 'motion/react';
import { StepData } from '../data/steps';

export function StepPanel({ step, steps }: { step: number, steps: StepData[] }) {
  const currentStep = steps[step];

  return (
    <div className="w-full h-full flex flex-col bg-slate-50 overflow-hidden">
      <div className="p-6 border-b border-slate-200 bg-white shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          几何动点与辅助线
        </div>
        <h1 className="text-xl font-bold text-slate-800 leading-tight">
          四边形中的直角与比例问题
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          已知 ∠ABC = ∠ADC = 90°, AB = BC = 4√2, DE/BE = 1/2，求 BD。
        </p>
        
        {/* Progress indicator */}
        <div className="flex gap-1 mt-5">
          {steps.map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i <= step ? 'bg-blue-500' : 'bg-slate-200'}`} />
          ))}
        </div>
      </div>
      
      <div className="flex-1 relative overflow-hidden bg-slate-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 p-6 overflow-y-auto"
          >
            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm min-h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4 shrink-0">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  {currentStep.icon}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800">{currentStep.title}</h2>
                  <p className="text-sm text-slate-500">{currentStep.desc}</p>
                </div>
              </div>
              
              <div className="flex-1 bg-slate-50 rounded-xl p-5 border border-slate-100">
                <p className="text-base text-slate-700 whitespace-pre-line leading-relaxed font-mono">
                  {currentStep.detail}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
