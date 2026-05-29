"use client"

import React, { useRef } from "react";
import { toPng } from "html-to-image";

interface ExportWrapperProps {
  children: React.ReactNode;
}

export default function ExportWrapper(props: ExportWrapperProps) {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);

  async function exportPNG() {
    if(ref.current) {
     const url = await toPng(ref.current, {
      filter: (node) => !node.hasAttribute?.('data-ignore')
     })
     
     const link = document.createElement('a');
     link.download ='cann-table.png';
     link.href = url;
     link.click();
    }
  }

  return (
  <>
    <button onClick={() => exportPNG()} className="opacity-0 pointer-events-none absolute" id="export"/>
    <div ref={ref} className="w-[900] p-7 bg-background">
      {children}
    </div>
  </>
  )
}
