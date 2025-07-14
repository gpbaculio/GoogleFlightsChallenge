import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@shopify/restyle";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Flights from "@/assets/images/flights_nc_4.svg";
import { FormContainer } from "@/components/tabs";
import { TextBox, TextInputBox, ViewBox } from "@/components/ui";
import { Theme } from "@/theme";

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
        <ViewBox variant="rowAlignCenter" my="s">
          <TextInputBox
            flex={1}
            borderWidth={0.5}
            borderColor="outlineVariant"
            mr="s"
            height={50}
            borderRadius={4}
          />
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
          <TextInputBox
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
