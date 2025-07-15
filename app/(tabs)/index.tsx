import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Flights from "@/assets/images/flights_nc_4.svg";
import {
  AnimatedPressableBox,
  AnimatedViewBox,
  TextBox,
  TextInputBox,
  TouchableOpacityBox,
  ViewBox,
} from "@/components";
import CenterArrow from "@/components/tabs/CenterArrow";
import { FormContainer } from "@/components/tabs/FormContainer";
import { Theme } from "@/theme";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  const { colors } = useTheme<Theme>();
  const isVisible = useSharedValue(false);

  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };

  const style = useAnimatedStyle(() => ({
    opacity: withTiming(isVisible.value ? 1 : 0),
    position: "absolute",
    top: "100%",
  }));
  const boxStyle = useAnimatedStyle(() => ({
    borderColor: isVisible.value ? colors.error : colors.background,
    borderWidth: isVisible.value ? 1 : 0,
  }));
  const arrowStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: withTiming(isVisible.value ? "180deg" : "0deg", {
            duration: 250,
          }),
        },
      ],
    };
  });
  return (
    <ViewBox
      style={{ paddingTop: top }}
      flex={1}
      backgroundColor="background"
      alignItems="center"
    >
      <Flights style={{ zIndex: 3 }} width={width} height={height * 0.11} />
      <FormContainer>
        <TextBox
          textAlign="center"
          fontSize={24}
          letterSpacing={0.6}
          variant="notoSansSemiBold"
        >
          Flights
        </TextBox>
        <ViewBox variant="rowCenterBetween" m="xs" zIndex={2}>
          <ViewBox>
            <AnimatedPressableBox
              variant="rowAlignCenter"
              onPress={toggleVisibility}
              style={boxStyle}
              px="s"
              py="xs"
              borderTopLeftRadius={4}
              borderTopRightRadius={4}
            >
              <MaterialIcons
                name="compare-arrows"
                size={24}
                color={colors.outline}
              />
              <TextBox pl="xs">Round trip</TextBox>
              <AnimatedViewBox style={arrowStyle}>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={24}
                  color={colors.outline}
                />
              </AnimatedViewBox>
            </AnimatedPressableBox>

            <AnimatedViewBox style={style} backgroundColor="error">
              <TextBox>Animated Content</TextBox>
            </AnimatedViewBox>
          </ViewBox>
          <TouchableOpacityBox variant="rowAlignCenter">
            <MaterialIcons
              name="person-outline"
              size={24}
              color={colors.outline}
            />
            <TextBox pl="xs">Round trip</TextBox>
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color={colors.outline}
            />
          </TouchableOpacityBox>
          <TouchableOpacityBox variant="rowAlignCenter">
            <TextBox pl="xs">Round trip</TextBox>
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color={colors.outline}
            />
          </TouchableOpacityBox>
        </ViewBox>
        <ViewBox variant="rowAlignCenter" my="s" zIndex={1}>
          <TextInputBox
            flex={1}
            borderWidth={0.5}
            borderColor="outlineVariant"
            mr="s"
            height={50}
            borderRadius={4}
            placeholder="Where from?"
            p="m"
          />
          <CenterArrow />
          <TextInputBox
            placeholder="Where to?"
            p="m"
            flex={1}
            borderRadius={4}
            borderWidth={0.5}
            borderColor="outlineVariant"
            ml="s"
            height={50}
          />
        </ViewBox>
      </FormContainer>
    </ViewBox>
  );
}
