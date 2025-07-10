import {
    createBox,
    createRestyleComponent,
    createText,
    createVariant,
    VariantProps,
} from "@shopify/restyle";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    ViewProps,
} from "react-native";

import { Theme } from "@/theme";

export const createContainer = <T,>(Component: React.ComponentType<T>) =>
  createRestyleComponent<VariantProps<Theme, "container"> & T, Theme>(
    [createVariant({ themeKey: "container" })],
    Component
  );

export const ViewBox = createContainer(createBox<Theme, ViewProps>(View));
export const TextBox = createText<Theme>();
export const TouchableOpacityBox = createContainer(
  createBox<Theme, TouchableOpacityProps>(TouchableOpacity)
);
