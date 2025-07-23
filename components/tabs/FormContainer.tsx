import React from "react";

import { ViewBox } from "..";

export function FormContainer({ children }: { children: React.ReactNode }) {
  return (
    <ViewBox
      zIndex={2}
      top={-1}
      borderBottomLeftRadius={16}
      borderBottomRightRadius={16}
      width="100%"
      pb="m"
      backgroundColor="background"
      variant="boxShadow"
      px="m"
    >
      {children}
    </ViewBox>
  );
}
