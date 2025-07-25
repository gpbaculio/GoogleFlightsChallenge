import {
    createRestyleComponent,
    createVariant,
    VariantProps,
} from "@shopify/restyle";

import { Theme } from "@/theme";

export const createContainer = <T>(Component: React.ComponentType<T>) =>
  createRestyleComponent<VariantProps<Theme, "container"> & T, Theme>(
    [createVariant({ themeKey: "container" })],
    Component
  );
