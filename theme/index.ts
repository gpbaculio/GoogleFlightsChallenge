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
