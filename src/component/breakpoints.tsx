const em = (px: number): string => `${px / 16}em`;
export const rem = (px: number): string => `${px / 16}rem`;

export type Breakpoint = "mobile" | "tablet" | "desktop" | "wide";

export const breakpoints = {
  mobile: em(0),
  tablet: em(700),
  desktop: em(900),
  wide: em(1440),
};

export const breakpointsDown = {
  mobile: em(699.98),
  tablet: em(899.98),
  desktop: em(1439.98),
};
