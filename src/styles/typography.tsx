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
		fontSize: "96px",
		lineHeight: "100%",
		letterSpacing: "-2px",
		fontWeight: 600,
		fontFamily: '"DM Sans", sans-serif',
	},

	textPresetTwo: {
		fontSize: "52px",
		lineHeight: "120%",
		letterSpacing: "0px",
		fontWeight: 700,
		fontFamily: '"Bricolage Grotesque", sans-serif',
	},

	textPresetThree: {
		fontSize: "32px",
		lineHeight: "100%",
		letterSpacing: "0px",
		fontWeight: 300,
		fontFamily: '"DM Sans", sans-serif',
	},

	textPresetFour: {
		fontSize: "28px",
		lineHeight: "120%",
		letterSpacing: "0px",
		fontWeight: 700,
		fontFamily: '"DM Sans", sans-serif',
	},

	textPresetFive: {
		fontSize: "20px",
		lineHeight: "120%",
		letterSpacing: "0px",
		fontWeight: 600,
		fontFamily: '"DM Sans", sans-serif',
	},

	textPresetFiveMedium: {
		fontSize: "20px",
		lineHeight: "120%",
		letterSpacing: "0px",
		fontWeight: 500,
		fontFamily: '"DM Sans", sans-serif',
	},

	textPresetSix: {
		fontSize: "18px",
		lineHeight: "120%",
		letterSpacing: "0px",
		fontWeight: 500,
		fontFamily: '"DM Sans", sans-serif',
	},

	textPresetSeven: {
		fontSize: "16px",
		lineHeight: "120%",
		letterSpacing: "0px",
		fontWeight: 500,
		fontFamily: '"DM Sans", sans-serif',
	},

	textPresetEight: {
		fontSize: "14px",
		lineHeight: "120%",
		letterSpacing: "0px",
		fontWeight: 500,
		fontFamily: '"DM Sans", sans-serif',
	},
};
