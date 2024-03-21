import { ReactNode } from "react";
import { MoveProvider } from "./MoveContext";
import { ItemProvider } from "./ItemContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  <ItemProvider>
    <MoveProvider>{children}</MoveProvider>
  </ItemProvider>;
};
