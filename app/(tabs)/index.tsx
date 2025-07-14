import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Flights from "@/assets/images/flights_nc_4.svg";
import {
  TextBox,
  TextInputBox,
  TouchableOpacityBox,
  ViewBox,
} from "@/components";
import CenterArrow from "@/components/tabs/CenterArrow";
import { FormContainer } from "@/components/tabs/FormContainer";
import { Theme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  const { colors } = useTheme<Theme>();

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
        <ViewBox variant="rowCenterBetween" m="s">
          <TouchableOpacityBox variant="rowAlignCenter">
            <MaterialIcons
              name="compare-arrows"
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
            <MaterialIcons
              name="compare-arrows"
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
            <MaterialIcons
              name="compare-arrows"
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
        </ViewBox>
        <ViewBox variant="rowAlignCenter" my="s">
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
