import { TextBox, ViewBox } from "@/components/ui";

export default function HomeScreen() {
  return (
    <ViewBox flex={1} backgroundColor="background" variant="centerItems">
      <TextBox>ashdhasdh</TextBox>
      <ViewBox
        variant="rowAlignCenter"
        padding="s"
        backgroundColor="tertiaryContainer"
      >
        <ViewBox
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
            ></ViewBox>
          </ViewBox>
        </ViewBox>
        <ViewBox
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
  );
}
