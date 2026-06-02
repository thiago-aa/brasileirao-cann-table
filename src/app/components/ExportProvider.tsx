'use client'

import { useState } from "react";
import { ExportContext } from "../context/ExportContext";

interface ExportProviderProps {
  children: React.ReactNode;
}


export default function ExportProvider(props: ExportProviderProps) {
  const {children} = props;
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ExportContext.Provider value={{isLoading, setIsLoading}}>
      {children}
    </ExportContext.Provider>
  )
}