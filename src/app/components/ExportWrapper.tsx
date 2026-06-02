"use client"

import React, { useContext, useRef } from "react";
import { toPng } from "html-to-image";
import { ExportContext } from "../context/ExportContext";

interface ExportWrapperProps {
  children: React.ReactNode;
}

export default function ExportWrapper(props: ExportWrapperProps) {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);

  const { setIsLoading } = useContext(ExportContext);

  async function exportPNG() {
    setIsLoading(true);
    if(ref.current) {
     const url = await toPng(ref.current, {
      filter: (node) => !node.hasAttribute?.('data-ignore')
     })
     
     const link = document.createElement('a');
     link.download ='cann-table.png';
     link.href = url;
     link.click();
     setIsLoading(false);
    }
  }

  return (
  <>
    <button onClick={() => exportPNG()} className="opacity-0 pointer-events-none absolute" id="export"/>
    <div ref={ref} className="w-[900px] p-7 bg-background">
      {children}
    </div>
  </>
  )
}
