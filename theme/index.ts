import { createTheme } from "@shopify/restyle";
import { Platform, TextStyle } from "react-native";
import theme from "./theme";

const { schemes, palettes: M3Palettes } = theme;

const palettes = Object.entries(M3Palettes).reduce(
  (acc, [paletteName, paletteColors]) => {
    for (const [colorKey, colorValue] of Object.entries(paletteColors)) {
      // Creates color names like: primary0, primary5, secondary10, etc.
      const key = `${paletteName}${colorKey}`;
      acc[key] = colorValue as string;
    }
    return acc;
  },
  {} as Record<string, string>
);

const getFontStyle = (
  fontFamily: string,
  weight: TextStyle["fontWeight"]
): TextStyle => ({
  fontFamily,
  fontWeight: Platform.OS === "android" ? undefined : weight,
});

const sharedProperties = {
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    auto: "auto",
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {},
    notoSansRegular: getFontStyle("NotoSans-Regular", "400"),
    notoSansMedium: getFontStyle("NotoSans-Medium", "500"),
    notoSansSemiBold: getFontStyle("NotoSans-SemiBold", "600"),
    notoSansBold: getFontStyle("NotoSans-Bold", "700"),
    robotoRegular: getFontStyle("Roboto-Regular", "400"),
    robotoMedium: getFontStyle("Roboto-Medium", "500"),
    robotoSemiBold: getFontStyle("Roboto-SemiBold", "600"),
    robotoBold: getFontStyle("Roboto-Bold", "700"),
  },
  container: {
    defaults: {},
    boxShadow: {
      shadowColor: "onBackground",
      shadowRadius: 2,
      elevation: 2,
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 1 },
    },
    // Row layouts
    rowAlignCenter: {
      flexDirection: "row",
      alignItems: "center",
    },
    rowCenterBetween: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    rowSpaceAround: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    rowSpaceEvenly: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    rowStart: {
      flexDirection: "row",
      alignItems: "flex-start",
    },

    // Column layouts
    columnCenter: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    columnStart: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    columnBetween: {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    columnSpaceAround: {
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    columnSpaceEvenly: {
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    },

    // Generic centering
    centerItems: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
};

export const lightTheme = createTheme({
  ...sharedProperties,
  colors: { ...schemes.light, ...palettes },
});

export const darkTheme = createTheme({
  ...sharedProperties,
  colors: { ...schemes.dark, ...palettes },
});

export type Theme = typeof lightTheme;
