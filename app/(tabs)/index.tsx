import {
  EvilIcons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Flights from "@/assets/images/flights_nc_4.svg";
import {
  TextBox,
  TextInputBox,
  TouchableOpacityBox,
  ViewBox,
} from "@/components";
import DropdownSelector from "@/components/DropdownSelector";
import CenterArrow from "@/components/tabs/CenterArrow";
import { FormContainer } from "@/components/tabs/FormContainer";
import { Theme } from "@/theme";

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  const { colors } = useTheme<Theme>();
  const [tripType, setTripType] = useState("round");
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
          <TextBox
            ml="s"
            letterSpacing={0.5}
            variant="notoSansMedium"
            fontSize={17}
            color="googleBlue"
          >
            G
          </TextBox>
          <TextBox
            color="googleRed"
            letterSpacing={0.5}
            variant="notoSansMedium"
            fontSize={17}
          >
            o
          </TextBox>
          <TextBox
            color="googleYellow"
            letterSpacing={0.5}
            variant="notoSansMedium"
            fontSize={17}
          >
            o
          </TextBox>
          <TextBox
            color="googleBlue"
            letterSpacing={0.5}
            variant="notoSansMedium"
            fontSize={17}
          >
            g
          </TextBox>
          <TextBox
            color="googleGreen"
            letterSpacing={0.5}
            variant="notoSansMedium"
            fontSize={17}
          >
            l
          </TextBox>
          <TextBox
            color="googleRed"
            letterSpacing={0.5}
            variant="notoSansMedium"
            fontSize={17}
          >
            e
          </TextBox>
        </ViewBox>
        <ViewBox variant="rowAlignCenter">
          <MaterialIcons name="light-mode" size={24} color={colors.outline} />
          <MaterialIcons name="dark-mode" size={24} color={colors.outline} />
          <TextBox ml="s">G</TextBox>
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
          <DropdownSelector
            label="Round trip"
            iconName="compare-arrows"
            selectedValue={tripType}
            onSelect={setTripType}
            options={[
              { label: "Round trip", value: "round" },
              { label: "One way", value: "oneway" },
              { label: "Multi-city", value: "multi" },
            ]}
          />
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
              <MaterialCommunityIcons
                size={18}
                name="circle-outline"
                color={colors.outline}
              />
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
              <EvilIcons size={23} name="location" color={colors.outline} />
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
          borderRadius={4}
          height={42}
        >
          <ViewBox variant="rowAlignCenter" flex={0.5}>
            <ViewBox m="s">
              <MaterialCommunityIcons
                size={18}
                name="calendar"
                color={colors.outline}
              />
            </ViewBox>
            <TextInputBox flex={1} placeholder="Departure" />
          </ViewBox>
          <ViewBox
            ml="m"
            width={1}
            height={24}
            backgroundColor="outlineVariant"
          />
          <ViewBox variant="rowAlignCenter" flex={0.5} pl="m">
            <TextInputBox flex={1} placeholder="Return" />
          </ViewBox>
        </ViewBox>
        <TouchableOpacityBox
          p="s"
          position="absolute"
          backgroundColor="primary"
          variant="rowAlignCenter"
          borderRadius={100}
          bottom={-20}
          alignSelf="center"
          shadowColor="onBackground"
          shadowRadius={2}
          elevation={2}
          shadowOpacity={0.2}
          shadowOffset={{ width: 0, height: 1 }}
        >
          <MaterialIcons name="search" size={21} color={colors.onPrimary} />
          <TextBox color="onPrimary" fontSize={16} ml="xs">
            Explore
          </TextBox>
        </TouchableOpacityBox>
      </FormContainer>
    </ViewBox>
  );
}
