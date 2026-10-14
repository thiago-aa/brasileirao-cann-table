"use client"

import React, { useContext, useEffect, useRef } from "react";
import { toBlob, toPng } from "html-to-image";
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
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        try {
          if (isSafari) {
            const blob = await toBlob(ref.current, {
              filter: (node) => !node.hasAttribute?.('data-ignore')
            });
            if (!blob) {
              throw new Error('Não foi possível gerar o PNG.');
            }
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'cann-table.png';
            link.href = url;
            document.body.appendChild(link);
            try {
              link.click();
            } finally {
              link.remove();
              // Keep the URL alive while the browser starts consuming the file.
              window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
            }
          } else {
            const url = await toPng(ref.current, {
              filter: (node) => !node.hasAttribute?.('data-ignore')
            });
            const link = document.createElement('a');
            link.download = 'cann-table.png';
            link.href = url;
            link.click();
          }
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
