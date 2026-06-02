"use client"

import React, { useContext, useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import { ExportContext } from "../context/ExportContext";

interface ExportWrapperProps {
  children: React.ReactNode;
}

export default function ExportWrapper(props: ExportWrapperProps) {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);

  const { setIsLoading, setTriggerDownload, triggerDownload } = useContext(ExportContext);

  async function exportPNG() {
    if(ref.current) {
      try {
        const url = await toPng(ref.current, {
          filter: (node) => !node.hasAttribute?.('data-ignore')
        })
        const link = document.createElement('a');
        link.download ='cann-table.png';
        link.href = url;
        link.click();
      } catch(err) {
        console.error(err);
      } finally {
        setIsLoading(false);
        setTriggerDownload(false)
      }
    }
  }
  useEffect(() => {
    if (triggerDownload) {
      exportPNG();
    }
  }, [triggerDownload])
  return (
  <>
    <div ref={ref} className="w-[900px] p-7 bg-background">
      {children}
    </div>
  </>
  )
}
