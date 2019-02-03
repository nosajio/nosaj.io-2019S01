export type FontSignature = {
  family: string;
  weight: {
    [w: string]: number;
  };
};

export const tradeGothic: FontSignature = {
  family: 'trade-gothic-next, sans-serif',
  weight: {
    light: 300,
    regular: 400,
    bold: 700
  }
};
export const tradeGothicCompressed: FontSignature = {
  family: `trade-gothic-next-compressed, ${tradeGothic.family}`,
  weight: {
    bold: 700
  }
};
export const tradeGothicRound: FontSignature = {
  family: `trade-gothic-next-soft-round, ${tradeGothic.family}`,
  weight: {
    condensed: 400,
    bold: 700,
    heavyCondensed: 800
  }
};

export type Fonts = {
  a: FontSignature;
  b: FontSignature;
  c: FontSignature;
};

export const fonts: Fonts = {
  a: tradeGothic,
  b: tradeGothicCompressed,
  c: tradeGothicRound
};
