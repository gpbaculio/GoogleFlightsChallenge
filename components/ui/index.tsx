import { createBox, createText } from "@shopify/restyle";
import {
    Image,
    ImageProps,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    ViewProps,
} from "react-native";

import { Theme } from "@/theme";
import { createContainer } from "@/utils/createContainer";

export const ViewBox = createContainer(createBox<Theme, ViewProps>(View));
export const TextBox = createText<Theme>();
export const TouchableOpacityBox = createContainer(
  createBox<Theme, TouchableOpacityProps>(TouchableOpacity)
);
export const ImageBox = createContainer(createBox<Theme, ImageProps>(Image));
