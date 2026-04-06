import { BookOpen, Circle, Triangle, Ruler, Calculator } from 'lucide-react';
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
    title: "第一步：解题思路总览",
    icon: <BookOpen className="w-5 h-5" />,
    desc: "寻找隐藏的圆与相似三角形的转化技巧",
    detail: "1. 几何直觉：当看到‘同斜边的两对直角’时，应立即想到‘四点共圆’模型。AC即为直径，这能帮我们快速确定圆心与半径。\n\n2. 比例转化：面对DE/BE = 1/2这种线段比例，最有效的手段是构造平行线或作垂线，通过轴对称或相似三角形，将复杂的空间斜线段长度转化为坐标轴（或直径）方向上的代数关系。",
    tts: "同学们好！今天我们来挑战这道经典的四边形线段计算题。正式解题前，我们先看两个关键点：第一，看到这里有两个直角共用一条斜边AC了吗？这提示我们A、B、C、D四点都在以AC为直径的圆上。第二，题目给出的线段比例1比2，我们要通过作垂线构造相似三角形，把它转化成容易计算的长度。理清了这两点，这道题就迎刃而解了。"
  },
  {
    title: "第二步：四点共圆",
    icon: <Circle className="w-5 h-5 text-blue-500" />,
    desc: "确定外接圆及圆心",
    detail: "∵ ∠ABC = ∠ADC = 90°\n∴ A, B, C, D 四点共圆，AC 为直径。\n取 AC 中点 O，连接 OB。\n∵ AB = BC = 4√2\n∴ AC = 8，半径 R = OB = OD = 4，且 OB ⊥ AC。",
    tts: "首先，因为角ABC和角ADC都是90度，所以A、B、C、D四点共圆，且AC就是直径。我们取AC的中点O，连接OB。根据等腰直角三角形的性质，我们可以算出半径为4，且OB垂直于AC。"
  },
  {
    title: "第三步：构造相似",
    icon: <Triangle className="w-5 h-5 text-emerald-500" />,
    desc: "作垂线利用比例",
    detail: "过点 D 作 DF ⊥ AC 于点 F。\n∵ OB ⊥ AC, DF ⊥ AC\n∴ DF ∥ OB\n∴ △DEF ∽ △BEO\n∴ DF / OB = DE / BE = 1/2",
    tts: "题目给出了线段比例 DE 比 BE 等于 1 比 2。为了利用这个比例，我们过点D作AC的垂线交于点F。因为DF和OB都垂直于AC，所以它们互相平行，从而构成了相似三角形。"
  },
  {
    title: "第四步：计算线段",
    icon: <Ruler className="w-5 h-5 text-purple-500" />,
    desc: "求出 DF 与 OF 的长度",
    detail: "∵ OB = 4\n∴ DF = 1/2 × 4 = 2\n在 Rt△ODF 中，斜边 OD = R = 4\n根据勾股定理：\nOF = √(OD² - DF²) = √(4² - 2²) = 2√3",
    tts: "根据相似三角形的比例关系，DF是OB的一半，等于2。接着在直角三角形ODF中，斜边OD就是半径4，利用勾股定理，我们可以算得OF的长度为2倍根号3。"
  },
  {
    title: "第五步：求解 BD",
    icon: <Calculator className="w-5 h-5 text-red-500" />,
    desc: "构造直角三角形求最终结果",
    detail: "过点 D 作 DG ⊥ OB 的延长线于点 G。\n易知四边形 OFDG 是矩形，\n∴ DG = OF = 2√3，OG = DF = 2\n∴ BG = OB + OG = 4 + 2 = 6\n在 Rt△BGD 中：\nBD = √(BG² + DG²) = √(6² + (2√3)²) = 4√3",
    tts: "最后一步，我们过点D作OB延长线的垂线交于点G。显然四边形DFOG是一个矩形。在直角三角形BGD中，两条直角边分别是6和2倍根号3，利用勾股定理，即可求出BD的长度为4倍根号3。大功告成！"
  }
];
