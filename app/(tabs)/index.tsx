import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Flights from "@/assets/images/flights_nc_4.svg";
import { TextBox, ViewBox } from "@/components/ui";

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();

  return (
    <ViewBox
      style={{ paddingTop: top }}
      flex={1}
      backgroundColor="background"
      alignItems="center"
    >
      <Flights style={{ zIndex: 3 }} width={width} height={height * 0.11} />
      <ViewBox
        zIndex={2}
        top={-1}
        borderBottomLeftRadius={16}
        borderBottomRightRadius={16}
        width="100%"
        pb="m"
        backgroundColor="background"
        shadowColor="onBackground"
        shadowRadius={2}
        elevation={2}
        shadowOpacity={0.2}
        shadowOffset={{ width: 0, height: 1 }}
        px="s"
      >
        <TextBox
          textAlign="center"
          fontSize={24}
          letterSpacing={0.6}
          variant="notoSansSemiBold"
        >
          Flights
        </TextBox>
        <ViewBox
          variant="rowAlignCenter"
          padding="s"
          backgroundColor="tertiaryContainer"
        >
          <ViewBox
            flex={1}
            borderWidth={1}
            borderColor="primary"
            mr="s"
            height={50}
            borderRadius={4}
            backgroundColor="error"
          >
            <TextBox>ashdhasdh</TextBox>
          </ViewBox>
          <ViewBox variant="centerItems" zIndex={3}>
            <ViewBox
              position="absolute"
              width={30}
              height={30}
              borderRadius={15}
              borderWidth={1}
              borderColor="primary"
              variant="centerItems"
            >
              <ViewBox
                width={28}
                height={28}
                borderRadius={15}
                backgroundColor="tertiaryContainer"
              />
              <ViewBox
                backgroundColor="tertiaryContainer"
                position="absolute"
                width={16}
                height={50}
                justifyContent="center"
              />
              <MaterialIcons
                style={{ position: "absolute" }}
                name="compare-arrows"
                size={24}
                color="black"
              />
            </ViewBox>
          </ViewBox>
          <ViewBox
            flex={1}
            borderRadius={4}
            borderWidth={1}
            borderColor="primary"
            ml="s"
            height={50}
            backgroundColor="error"
          >
            <TextBox>ashdhasdh</TextBox>
          </ViewBox>
        </ViewBox>
      </ViewBox>
    </ViewBox>
  );
}
