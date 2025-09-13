export type TypographyPreset = {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: string | number;
  fontFamily: string;
};

export type Typography = {
  [key: string]: TypographyPreset;
};

export const typography: Typography = {
  textPresetOne: {
    fontSize: "6rem",
    lineHeight: "100%",
    letterSpacing: "-0.125rem",
    fontWeight: 600,
    fontFamily: '"DM Sans", sans-serif',
  },

  textPresetTwo: {
    fontSize: "3.25rem",
    lineHeight: "120%",
    letterSpacing: "0rem",
    fontWeight: 700,
    fontFamily: '"Bricolage Grotesque", sans-serif',
  },

  textPresetThree: {
    fontSize: "2rem",
    lineHeight: "100%",
    letterSpacing: "0rem",
    fontWeight: 300,
    fontFamily: '"DM Sans", sans-serif',
  },

  textPresetFour: {
    fontSize: "1.75rem",
    lineHeight: "120%",
    letterSpacing: "0rem",
    fontWeight: 700,
    fontFamily: '"DM Sans", sans-serif',
  },

  textPresetFive: {
    fontSize: "1.25rem",
    lineHeight: "120%",
    letterSpacing: "0rem",
    fontWeight: 600,
    fontFamily: '"DM Sans", sans-serif',
  },

  textPresetFiveMedium: {
    fontSize: "1.25rem",
    lineHeight: "120%",
    letterSpacing: "0rem",
    fontWeight: 500,
    fontFamily: '"DM Sans", sans-serif',
  },

  textPresetSix: {
    fontSize: "1.125rem",
    lineHeight: "120%",
    letterSpacing: "0rem",
    fontWeight: 500,
    fontFamily: '"DM Sans", sans-serif',
  },

  textPresetSeven: {
    fontSize: "1rem",
    lineHeight: "120%",
    letterSpacing: "0rem",
    fontWeight: 500,
    fontFamily: '"DM Sans", sans-serif',
  },

  textPresetEight: {
    fontSize: "0.875rem",
    lineHeight: "120%",
    letterSpacing: "0rem",
    fontWeight: 500,
    fontFamily: '"DM Sans", sans-serif',
  },
};
