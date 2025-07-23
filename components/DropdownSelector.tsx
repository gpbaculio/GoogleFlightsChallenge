import { MaterialIcons } from "@expo/vector-icons";
import { LayoutProps, useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Theme } from "../theme";
import {
  AnimatedPressableBox,
  AnimatedViewBox,
  TextBox,
  ViewBox,
} from "./index";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownSelectorProps {
  label: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
  options: DropdownOption[];
  onSelect: (value: string) => void;
  selectedValue?: string;
  width?: LayoutProps<Theme>["width"];
}

function DropdownSelector({
  label,
  iconName,
  options,
  onSelect,
  selectedValue,
  width,
}: DropdownSelectorProps) {
  const [visible, setVisible] = useState(false);
  const isRotated = useSharedValue(false);
  const { colors } = useTheme<Theme>();

  const toggleVisibility = () => {
    setVisible((v) => !v);
    isRotated.value = !isRotated.value;
  };

  const boxStyle = useAnimatedStyle(() => ({
    backgroundColor: isRotated.value
      ? colors.primaryFixedDim
      : colors.background,
    borderBottomColor: isRotated.value ? colors.primary : colors.background,
  }));

  const arrowStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateZ: withTiming(isRotated.value ? "180deg" : "0deg", {
          duration: 250,
        }),
      },
    ],
  }));

  const dropdownStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isRotated.value ? 1 : 0),
    position: "absolute",
    top: "100%",
  }));

  return (
    <ViewBox width={width}>
      <AnimatedPressableBox
        variant="rowAlignCenter"
        onPress={toggleVisibility}
        style={boxStyle}
        px="s"
        py="xs"
        borderBottomWidth={1}
        borderTopLeftRadius={4}
        borderTopRightRadius={4}
      >
        <MaterialIcons name={iconName} size={24} color={colors.outline} />
        <TextBox pl="xs">{label}</TextBox>
        <AnimatedViewBox style={arrowStyle}>
          <MaterialIcons
            name="arrow-drop-down"
            size={24}
            color={visible ? colors.outline : colors.primary}
          />
        </AnimatedViewBox>
      </AnimatedPressableBox>
      <AnimatedViewBox
        style={dropdownStyle}
        backgroundColor="background"
        width="99%"
        alignSelf="center"
        borderBottomLeftRadius={4}
        borderBottomRightRadius={4}
        variant="boxShadow"
        pb="xs"
      >
        {options.map((opt) => (
          <ViewBox
            key={opt.value}
            pl="s"
            py="xs"
            variant="rowAlignCenter"
            flex={1}
            backgroundColor={
              selectedValue === opt.value ? "primaryFixedDim" : "background"
            }
            onTouchEnd={() => {
              onSelect(opt.value);
              toggleVisibility();
            }}
            height={34}
          >
            <ViewBox flex={0.2}>
              {selectedValue === opt.value && (
                <MaterialIcons name="check" size={24} color="green" />
              )}
            </ViewBox>
            <ViewBox pl="s" flex={0.8}>
              <TextBox>{opt.label}</TextBox>
            </ViewBox>
          </ViewBox>
        ))}
      </AnimatedViewBox>
    </ViewBox>
  );
}

export default DropdownSelector;
