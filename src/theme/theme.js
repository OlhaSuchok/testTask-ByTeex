export const theme = {
  breakpoints: ["428px", "1464px"],

  fonts: {
    sofiaProExtraLight: "'Sofia Pro Extra Light', sans-serif",
    sofiaProRegular: "'Sofia Pro Regular', sans-serif",
    sofiaProSemiBold: "'Sofia Pro Semi Bold', sans-serif",
    suisseRegular: "'SuisseIntl-Regular', sans-serif",
  },

  fontSizes: [],

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  shadows: {},

  colors: {
    ACCENT_COLOR: "#F9F0E5",
    MAIN_BACKGROUND_COLOR: "#F5F5F5",
    ACCENT_BACKGROUND_COLOR: "#F0EEEF",
    MAIN_BTN_COLOR: "#01005B",
    MAIN_TEXT_COLOR: "#676869",
    MAIN_ACCENT_TEXT_COLOR: "#01005B",
    HEADER_TEXT_COLOR: "#565656",
  },

  transitions: {
    create: createTransitions,
    duration: "250ms",
    easy: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

function createTransitions(
  properties = [],
  duration = "250ms",
  easing = "cubic-bezier(0.4, 0, 0.2, 1)"
) {
  return properties
    .map((property) => `${property} ${duration} ${easing}`)
    .join(", ");
}

theme.breakpoints.mobile = theme.breakpoints[0];
theme.breakpoints.desktop = theme.breakpoints[1];
