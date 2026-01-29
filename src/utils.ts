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
