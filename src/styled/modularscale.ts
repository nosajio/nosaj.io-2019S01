// Convert common modularscale ranges into static values so they can be easily
// explored
export interface ModScale {
  rem(step: number): string;
  fn(step: number): number;
}

const modularScaleExponent = 1.5;
const modularScaleDecimalPlaces = 5;

// Modular scale done the functional way ;)
const msfn: ModScale['fn'] = (step: number = 1) => {
  const o =
    step === 0
      ? 1
      : Array.from(Array(Math.abs(step)))
          .fill(modularScaleExponent)
          .reduce((n, e) => (step > 0 ? n * e : n / e), 1);
  return parseFloat(o.toFixed(modularScaleDecimalPlaces));
};

const ms: ModScale = {
  fn: (...args) => msfn(...args),
  rem: (...args) => `${msfn(...args)}rem`
};

export default ms;
