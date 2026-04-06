/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { GeometrySVG } from './components/GeometrySVG';
import { StepPanel } from './components/StepPanel';
import { Subtitle } from './components/Subtitle';
import { steps } from './data/steps';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { ttsService } from './services/ttsService';

export default function App() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // 当步骤改变时，自动播放当前步骤的 TTS
    ttsService.play(steps[step].tts);
    
    // 组件卸载或步骤改变前，停止上一个 TTS
    return () => {
      ttsService.stop();
    };
  }, [step]);

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-6xl mx-auto flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row h-[570px]">
          {/* Left: Geometry SVG */}
          <div className="w-full md:w-[55%] flex flex-col border-b md:border-b-0 md:border-r border-slate-200 bg-white">
            <div className="flex-1 relative min-h-0">
              <GeometrySVG step={step} />
            </div>
            <Subtitle text={steps[step].tts} />
          </div>

          {/* Right: Steps Panel */}
          <div className="w-full md:w-[45%] h-full">
            <StepPanel step={step} steps={steps} />
          </div>
        </div>

        {/* Footer Controls */}
        <div className="bg-white border-t border-slate-200 p-4 flex items-center justify-between">
          <button 
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            重新开始
          </button>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev}
              disabled={step === 0}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              上一步
            </button>
            <button 
              onClick={handleNext}
              disabled={step === steps.length - 1}
              className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              {step === steps.length - 1 ? '讲解完成' : '下一步 (讲解)'}
              {step !== steps.length - 1 && <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}


