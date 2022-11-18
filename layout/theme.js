

export const customTheme = {
  palette: {
    primary: {main: '#04DBC0'},
    secondary: {main: '#154a69'}, //#5856D6
    dark: '#000',
    light: '#FFF',
    third: '#50a3a2',
    forth: '#53e3a6',
    type: "dark",
  },
  // direction: 'rtl',
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightBold: 700
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
};
