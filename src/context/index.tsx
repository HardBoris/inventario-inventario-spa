import { ReactNode } from "react";
import { MoveProvider } from "./MoveContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  <MoveProvider>{children}</MoveProvider>;
};
