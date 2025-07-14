import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Flights from "@/assets/images/flights_nc_4.svg";
import CenterArrow from "@/components/tabs/CenterArrow";
import { FormContainer } from "@/components/tabs/FormContainer";
import { TextBox, TextInputBox, ViewBox } from "@/components/ui";

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
