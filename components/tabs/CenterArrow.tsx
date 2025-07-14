import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React from "react";

import { Theme } from "@/theme";
import { ViewBox } from "../ui";

export default function CenterArrow() {
  const { colors } = useTheme<Theme>();

  return (
    <ViewBox variant="centerItems" zIndex={3}>
      <ViewBox
        position="absolute"
        width={30}
        height={30}
        borderRadius={15}
        borderWidth={1}
        borderColor="outlineVariant"
        variant="centerItems"
      >
        <ViewBox
          width={28}
          height={28}
          borderRadius={15}
          backgroundColor="background"
        />
        <ViewBox
          backgroundColor="background"
          position="absolute"
          width={16}
          height={50}
          justifyContent="center"
        />
        <MaterialIcons
          style={{ position: "absolute" }}
          name="compare-arrows"
          size={24}
          color={colors.outline}
        />
      </ViewBox>
    </ViewBox>
  );
}
