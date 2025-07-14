import React from "react";

import { ViewBox } from "../ui";

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
      shadowColor="onBackground"
      shadowRadius={2}
      elevation={2}
      shadowOpacity={0.2}
      shadowOffset={{ width: 0, height: 1 }}
      px="m"
    >
      {children}
    </ViewBox>
  );
}
