export enum marginTypes {
  FULL,
  HALF,
  NONE
}

// Configure the grid
export const maxCols: number = 12;
export const theoreticalWidth: number = 1440;
export const theoreticalColumn: number = 93;
export const theoreticalMargin: number = 13.5;
// Calculate the percentages
export const colPrcnt: number = (theoreticalColumn / theoreticalWidth) * 100;
export const halfMarginPrcnt: number =
  (theoreticalMargin / theoreticalWidth) * 100;
export const fullMarginPrcnt: number = halfMarginPrcnt * 2;

// gridFn returns relative column values
export const gridfn = (
  cols: number = maxCols,
  margins: marginTypes = marginTypes.HALF
): number => {
  const c = cols * colPrcnt;
  const im = cols <= 1 ? 0 : (cols - 1) * fullMarginPrcnt;
  const t = c + im;
  const om =
    margins === marginTypes.FULL
      ? fullMarginPrcnt * 2
      : margins === marginTypes.HALF
      ? halfMarginPrcnt * 2
      : 0;
  return parseFloat((om + t).toFixed(4));
};

// gridcss
export const gridcss = (cols?: number, unit: string = '%'): string => {
  const m = halfMarginPrcnt;
  const c = gridfn(cols, marginTypes.NONE);
  return `width: ${c}${unit}; margin-left: ${m}${unit}; margin-right: ${m}${unit};`;
};

// CSS grid generator
export const cssinnergrid = (
  cols: number = maxCols,
  unit: string = '%'
): string => {
  const colsValue =
    cols === 12
      ? // This is a special template for the 12 col grid, which is the foundational
        // grid template used for layout
        '1fr [main] 1fr 1fr [mid-start] 1fr 1fr 1fr 1fr 1fr 1fr [mid-end] 1fr 1fr [main] 1fr'
      : // For all other col counts, do the usual repeat
        `[main] repeat(${cols}, 1fr) [main]`;
  return `
    display: grid;
    grid-template-columns: ${colsValue};
    grid-auto-rows: auto;
    grid-auto-flow: row;
    grid-column-gap: ${fullMarginPrcnt}${unit};
  `;
};

export const cssMobileGrid = (): string => `
  display: grid;
  grid-template-columns: 1rem [main mid] 1fr [mid main] 1rem;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  grid-column-gap: 0;
`;
