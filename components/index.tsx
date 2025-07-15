import { createBox, createText } from "@shopify/restyle";
import {
  Image,
  ImageProps,
  Pressable,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native";

import { Theme } from "@/theme";
import { createContainer } from "@/utils/createContainer";
import Animated from "react-native-reanimated";

export const ViewBox = createContainer(createBox<Theme, ViewProps>(View));
const AnimatedView = Animated.createAnimatedComponent(View);
export const AnimatedViewBox = createContainer(
  createBox<Theme, React.ComponentProps<typeof AnimatedView>>(AnimatedView)
);
export const TextInputBox = createContainer(
  createBox<Theme, TextInputProps>(TextInput)
);
export const TextBox = createText<Theme>();
export const TouchableOpacityBox = createContainer(
  createBox<Theme, TouchableOpacityProps>(TouchableOpacity)
);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
export const AnimatedPressableBox = createContainer(
  createBox<Theme, React.ComponentProps<typeof AnimatedPressable>>(
    AnimatedPressable
  )
);
export const ImageBox = createContainer(createBox<Theme, ImageProps>(Image));
