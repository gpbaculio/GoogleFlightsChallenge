import {
  EvilIcons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
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

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  const { colors } = useTheme<Theme>();
  const [visible, setVisible] = useState(false);
  const isRotated = useSharedValue(false);

  const toggleVisibility = () => {
    setVisible((v) => !v);
    isRotated.value = !isRotated.value;
  };

  const style = useAnimatedStyle(() => ({
    opacity: withTiming(isRotated.value ? 1 : 0),
    position: "absolute",
    top: "100%",
  }));

  const boxStyle = useAnimatedStyle(() => ({
    backgroundColor: isRotated.value
      ? colors.primaryFixedDim
      : colors.background,
    borderBottomColor: isRotated.value ? colors.primary : colors.background,
    borderBottomWidth: isRotated.value ? 1 : 0,
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

  return (
    <ViewBox
      style={{ paddingTop: top }}
      flex={1}
      backgroundColor="background"
      alignItems="center"
    >
      <ViewBox
        variant="rowAlignCenter"
        p="m"
        justifyContent="space-between"
        width="100%"
      >
        <ViewBox variant="rowAlignCenter">
          <MaterialIcons name="menu" size={24} color={colors.outline} />
          <TextBox ml="s">Google</TextBox>
        </ViewBox>
        <ViewBox variant="rowAlignCenter">
          <MaterialIcons name="light-mode" size={24} color={colors.outline} />
          <MaterialIcons name="dark-mode" size={24} color={colors.outline} />
          <TextBox ml="s">Google</TextBox>
        </ViewBox>
      </ViewBox>
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
        <ViewBox variant="rowAlignCenter" m="xs" zIndex={2}>
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
                  color={visible ? colors.primary : colors.outline}
                />
              </AnimatedViewBox>
            </AnimatedPressableBox>

            <AnimatedViewBox
              style={style}
              backgroundColor="background"
              width="99%"
              alignSelf="center"
              borderBottomLeftRadius={4}
              borderBottomRightRadius={4}
              variant="boxShadow"
            >
              <ViewBox
                pl="s"
                py="xs"
                variant="rowAlignCenter"
                flex={1}
                backgroundColor="primaryFixedDim"
              >
                <ViewBox flex={0.2}>
                  <MaterialIcons name="check" size={24} color="green" />
                </ViewBox>
                <ViewBox pl="s" flex={0.8}>
                  <TextBox>Round trip</TextBox>
                </ViewBox>
              </ViewBox>
              <ViewBox pl="s" py="xs" variant="rowAlignCenter" flex={1}>
                <ViewBox flex={0.2}>
                  <MaterialIcons name="check" size={24} color="green" />
                </ViewBox>
                <ViewBox pl="s" flex={0.8}>
                  <TextBox>One way</TextBox>
                </ViewBox>
              </ViewBox>
              <ViewBox pl="s" py="xs" variant="rowAlignCenter" flex={1}>
                <ViewBox flex={0.2}>
                  <MaterialIcons name="check" size={24} color="green" />
                </ViewBox>
                <ViewBox pl="s" flex={0.8}>
                  <TextBox>Multi-city</TextBox>
                </ViewBox>
              </ViewBox>
            </AnimatedViewBox>
          </ViewBox>
          <TouchableOpacityBox variant="rowAlignCenter" mx="s">
            <MaterialIcons
              name="person-outline"
              size={24}
              color={colors.outline}
            />
            <TextBox pl="xs">1</TextBox>
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color={colors.outline}
            />
          </TouchableOpacityBox>
          <TouchableOpacityBox variant="rowAlignCenter">
            <TextBox pl="xs">Economy</TextBox>
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color={colors.outline}
            />
          </TouchableOpacityBox>
        </ViewBox>
        <ViewBox variant="rowAlignCenter" my="s" zIndex={1}>
          <ViewBox
            flex={1}
            borderWidth={0.5}
            borderColor="outlineVariant"
            mr="s"
            height={42}
            variant="rowAlignCenter"
            borderRadius={4}
          >
            <ViewBox m="s">
              <MaterialCommunityIcons size={18} name="circle-outline" />
            </ViewBox>
            <TextInputBox placeholder="Where from?" flex={1} />
          </ViewBox>
          <CenterArrow />
          <ViewBox
            flex={1}
            borderWidth={0.5}
            borderColor="outlineVariant"
            ml="s"
            height={42}
            variant="rowAlignCenter"
            borderRadius={4}
          >
            <ViewBox pl="xs" m="s">
              <EvilIcons size={23} name="location" />
            </ViewBox>
            <TextInputBox placeholder="Where to?" flex={1} />
          </ViewBox>
        </ViewBox>
        <ViewBox
          variant="rowAlignCenter"
          my="s"
          zIndex={1}
          borderWidth={0.5}
          borderColor="outlineVariant"
        >
          <TextInputBox
            flex={1}
            mr="s"
            height={42}
            borderRadius={4}
            placeholder="Departure"
            p="m"
          />
          <ViewBox width={1} height={24} backgroundColor="outlineVariant" />
          <TextInputBox
            placeholder="Return"
            p="m"
            flex={1}
            borderRadius={4}
            ml="s"
            height={42}
          />
        </ViewBox>
      </FormContainer>
    </ViewBox>
  );
}
