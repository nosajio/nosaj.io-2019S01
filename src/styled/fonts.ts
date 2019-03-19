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
    bold: 700,
    heavy: 800
  }
};

export const tradeGothicCondensed: FontSignature = {
  family: `trade-gothic-next-condensed, ${tradeGothic.family}`,
  weight: {
    bold: 700
  }
};

export const tradeGothicCompressed: FontSignature = {
  family: `trade-gothic-next-compressed, ${tradeGothic.family}`,
  weight: {
    regular: 400,
    bold: 700,
    heavy: 800
  }
};

export type Fonts = {
  a: FontSignature;
  b: FontSignature;
  c: FontSignature;
};

export const fonts: Fonts = {
  a: tradeGothic,
  b: tradeGothicCondensed,
  c: tradeGothicCompressed
};
