import { createContext } from "react";

export const ExportContext = createContext({
  isLoading: false,
  setIsLoading: (value: boolean) => {}
})