import { twMerge } from "tailwind-merge";
export function createObserver(
  handler: IntersectionObserverCallback,
  step: number = 20,
) {
  const buildThresholdList = () => {
    const thresholds = [];
    for (let i = 1.0; i <= step; i++) {
      const ratio = i / step;
      thresholds.push(ratio);
    }
    thresholds.push(0);
    return thresholds;
  };
  const options = {
    threshold: buildThresholdList(),
  };
  const observer = new IntersectionObserver(handler, options);
  return observer;
}

/**
 * Extends a class name with an optional additional class name.
 * @param cl - The base class name.
 * @param className - The additional class name to extend.
 * @param merge - if `true`, the base class name will be overwritten with the additional class name.
 * @returns The extended class name.
 */
export function extendClass(
  cl: string,
  className?: string,
  merge: boolean = false,
) {
  if (!className) return cl;
  if (merge) {
    return twMerge(cl, className);
  }
  return `${className} ${cl}`;
}
