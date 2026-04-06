import { Lightbulb, Circle, Triangle, Ruler, Calculator } from 'lucide-react';
import React from 'react';

export interface StepData {
  title: string;
  icon: React.ReactNode;
  desc: string;
  detail: string;
  tts: string;
}

export const steps: StepData[] = [
  {
    title: "解题思路",
    icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
    desc: "寻找隐藏的圆与相似三角形",
    detail: "遇到直角和共用斜边，想到“共斜边的直角三角形” ➡️ 四点共圆。\n遇到线段比例 DE/BE = 1/2，想到构造平行线产生相似三角形，利用垂线转化比例。",
    tts: "同学们，这道题已知两个直角和一条公共斜边，我们首先应该想到什么呢？没错，就是四点共圆。另外题目还给出了线段比例，我们可以通过作垂线构造相似三角形来解决。"
  },
  {
    title: "第一步：四点共圆",
    icon: <Circle className="w-5 h-5 text-blue-500" />,
    desc: "确定外接圆及圆心",
    detail: "∵ ∠ABC = ∠ADC = 90°\n∴ A, B, C, D 四点共圆，AC 为直径。\n取 AC 中点 O，连接 OB。\n∵ AB = BC = 4√2\n∴ AC = 8，半径 R = OB = OD = 4，且 OB ⊥ AC。",
    tts: "因为角ABC和角ADC都是90度，所以A、B、C、D四点共圆，且AC就是直径。我们取AC的中点O，连接OB。根据等腰直角三角形的性质，可以算出半径为4，且OB垂直于AC。"
  },
  {
    title: "第二步：构造相似",
    icon: <Triangle className="w-5 h-5 text-emerald-500" />,
    desc: "作垂线利用比例",
    detail: "过点 D 作 DF ⊥ AC 于点 F。\n∵ OB ⊥ AC, DF ⊥ AC\n∴ DF ∥ OB\n∴ △DEF ∽ △BEO\n∴ DF / OB = DE / BE = 1/2",
    tts: "题目给出了线段比例 DE 比 BE 等于 1 比 2。为了利用这个比例，我们过点D作AC的垂线交于点F。因为DF和OB都垂直于AC，所以它们互相平行，从而构成了相似三角形。"
  },
  {
    title: "第三步：计算线段",
    icon: <Ruler className="w-5 h-5 text-purple-500" />,
    desc: "求出 DF 与 OF 的长度",
    detail: "∵ OB = 4\n∴ DF = 1/2 × 4 = 2\n在 Rt△ODF 中，斜边 OD = R = 4\n根据勾股定理：\nOF = √(OD² - DF²) = √(4² - 2²) = 2√3",
    tts: "根据相似三角形的比例关系，DF是OB的一半，等于2。接着在直角三角形ODF中，斜边OD就是半径4，利用勾股定理，我们可以算得OF的长度为2倍根号3。"
  },
  {
    title: "第四步：求解 BD",
    icon: <Calculator className="w-5 h-5 text-red-500" />,
    desc: "构造直角三角形求最终结果",
    detail: "过点 D 作 DG ⊥ OB 的延长线于点 G。\n易知四边形 OFDG 是矩形，\n∴ DG = OF = 2√3，OG = DF = 2\n∴ BG = OB + OG = 4 + 2 = 6\n在 Rt△BGD 中：\nBD = √(BG² + DG²) = √(6² + (2√3)²) = 4√3",
    tts: "最后一步，我们过点D作OB延长线的垂线交于点G。显然四边形DFOG是一个矩形。在直角三角形BGD中，两条直角边分别是6和2倍根号3，利用勾股定理，即可求出BD的长度为4倍根号3。"
  }
];
