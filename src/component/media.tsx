import { type Breakpoint, breakpoints, breakpointsDown } from "./breakpoints";

export const media = {
  up: (key: Breakpoint): string => `@media (min-width: ${breakpoints[key]})`,

  down: (key: keyof typeof breakpointsDown): string =>
    `@media (max-width: ${breakpointsDown[key]})`,

  between: (min: Breakpoint, max: keyof typeof breakpointsDown): string => {
    const minVal = breakpoints[min];
    const maxVal = breakpointsDown[max];
    if (!minVal || !maxVal) {
      throw new Error(`Invalid breakpoint range: ${min} to ${max}`);
    }
    return `@media (min-width: ${minVal}) and (max-width: ${maxVal})`;
  },
};
