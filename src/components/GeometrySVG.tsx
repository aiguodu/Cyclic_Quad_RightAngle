import { motion, AnimatePresence } from 'motion/react';

const O = { x: 200, y: 250 };
const A = { x: 80, y: 130 };
const B = { x: 80, y: 370 };
const C = { x: 320, y: 370 };
const D = { x: 260 + 60 * Math.sqrt(3), y: 190 + 60 * Math.sqrt(3) };
const E = { x: 200 + 40 * Math.sqrt(3), y: 250 + 40 * Math.sqrt(3) };
const F = { x: 200 + 60 * Math.sqrt(3), y: 250 + 60 * Math.sqrt(3) };
const G = { x: 260, y: 190 };

function getRightAnglePath(p1: {x: number, y: number}, p2: {x: number, y: number}, p3: {x: number, y: number}, size = 15) {
  const v1 = { x: p1.x - p2.x, y: p1.y - p2.y };
  const v3 = { x: p3.x - p2.x, y: p3.y - p2.y };
  const l1 = Math.hypot(v1.x, v1.y);
  const l3 = Math.hypot(v3.x, v3.y);
  const u1 = { x: v1.x / l1, y: v1.y / l1 };
  const u3 = { x: v3.x / l3, y: v3.y / l3 };
  const pt1 = { x: p2.x + size * u1.x, y: p2.y + size * u1.y };
  const pt3 = { x: p2.x + size * u3.x, y: p2.y + size * u3.y };
  const pt2 = { x: pt1.x + size * u3.x, y: pt1.y + size * u3.y };
  return `M ${pt1.x} ${pt1.y} L ${pt2.x} ${pt2.y} L ${pt3.x} ${pt3.y}`;
}

export function GeometrySVG({ step }: { step: number }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-4">
      <svg viewBox="0 0 450 450" className="w-full h-full max-w-[400px] max-h-[400px]">
        {/* Base Geometry */}
        <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`} fill="none" stroke="#334155" strokeWidth="2" />
        <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke="#334155" strokeWidth="2" />
        <line x1={B.x} y1={B.y} x2={D.x} y2={D.y} stroke="#334155" strokeWidth="2" />
        
        {/* Right Angles */}
        <path d={getRightAnglePath(A, B, C)} fill={step === 0 ? "rgba(239,68,68,0.2)" : "none"} stroke={step === 0 ? "#ef4444" : "#94a3b8"} strokeWidth="1.5" />
        <path d={getRightAnglePath(A, D, C)} fill={step === 0 ? "rgba(239,68,68,0.2)" : "none"} stroke={step === 0 ? "#ef4444" : "#94a3b8"} strokeWidth="1.5" />

        {/* Step 1: Circle and O */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.circle 
                cx={O.x} cy={O.y} r={120 * Math.SQRT2} 
                fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="5,5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
              />
              <circle cx={O.x} cy={O.y} r="3" fill="#3b82f6" />
              <text x={O.x - 15} y={O.y + 20} className="text-sm font-serif italic fill-slate-700">O</text>
              <motion.line 
                x1={O.x} y1={O.y} x2={B.x} y2={B.y} 
                stroke="#10b981" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 2: DF perp AC */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Highlight Triangles */}
              <motion.polygon 
                points={`${D.x},${D.y} ${E.x},${E.y} ${F.x},${F.y}`} 
                fill="rgba(59, 130, 246, 0.15)"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
              />
              <motion.polygon 
                points={`${B.x},${B.y} ${E.x},${E.y} ${O.x},${O.y}`} 
                fill="rgba(59, 130, 246, 0.15)"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
              />
              
              <motion.line 
                x1={D.x} y1={D.y} x2={F.x} y2={F.y} 
                stroke="#ef4444" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }}
              />
              <path d={getRightAnglePath(D, F, C)} fill="none" stroke="#ef4444" strokeWidth="1.5" />
              <circle cx={F.x} cy={F.y} r="3" fill="#ef4444" />
              <text x={F.x + 10} y={F.y + 20} className="text-sm font-serif italic fill-slate-700">F</text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 3: Lengths */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <text x={(O.x + B.x)/2 - 20} y={(O.y + B.y)/2} className="text-xs font-bold fill-emerald-600">4</text>
              <text x={(D.x + F.x)/2 + 10} y={(D.y + F.y)/2} className="text-xs font-bold fill-red-600">2</text>
              <text x={(O.x + F.x)/2 - 10} y={(O.y + F.y)/2 - 10} className="text-xs font-bold fill-purple-600">2√3</text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 4: DG perp OB */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Highlight Triangle BGD */}
              <motion.polygon 
                points={`${B.x},${B.y} ${G.x},${G.y} ${D.x},${D.y}`} 
                fill="rgba(16, 185, 129, 0.15)"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
              />
              
              <motion.line 
                x1={O.x} y1={O.y} x2={G.x} y2={G.y} 
                stroke="#10b981" strokeWidth="2" strokeDasharray="4,4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }}
              />
              <motion.line 
                x1={D.x} y1={D.y} x2={G.x} y2={G.y} 
                stroke="#ef4444" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
              />
              <path d={getRightAnglePath(D, G, B)} fill="none" stroke="#ef4444" strokeWidth="1.5" />
              <circle cx={G.x} cy={G.y} r="3" fill="#ef4444" />
              <text x={G.x - 20} y={G.y + 5} className="text-sm font-serif italic fill-slate-700">G</text>
              
              <text x={(B.x + G.x)/2 - 15} y={(B.y + G.y)/2} className="text-xs font-bold fill-emerald-600">6</text>
              <text x={(D.x + G.x)/2} y={(D.y + G.y)/2 - 10} className="text-xs font-bold fill-red-600">2√3</text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Labels */}
        <text x={A.x - 20} y={A.y - 10} className="text-base font-serif italic fill-slate-800">A</text>
        <text x={B.x - 20} y={B.y + 20} className="text-base font-serif italic fill-slate-800">B</text>
        <text x={C.x + 10} y={C.y + 20} className="text-base font-serif italic fill-slate-800">C</text>
        <text x={D.x + 10} y={D.y - 10} className="text-base font-serif italic fill-slate-800">D</text>
        <text x={E.x + 5} y={E.y - 15} className="text-base font-serif italic fill-slate-800">E</text>

      </svg>
    </div>
  );
}
