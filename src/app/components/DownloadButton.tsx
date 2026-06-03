'use client'

import { Download, Loader } from "lucide-react";
import { useContext } from "react";
import { ExportContext } from "../context/ExportContext";

export default function DownloadButton() {
  const {isLoading, setIsLoading, setTriggerDownload} = useContext(ExportContext);

  return (
    <button 
      className= "flex items-center gap-2 px-2 md:px-10  justify-center bg-off-white text-xs text-off-black rounded-md cursor-pointer h-7 w-1/2 md:h-10 md:w-1/3 right-2  md:right-0"
      onClick={() => {
        if(isLoading) return;
        setIsLoading(true);
        setTriggerDownload(true);
      }}
      data-ignore
    >
      {
        isLoading ? (
          <>
            <Loader size={16} className="animate-spin"/>
          </>
        ) : (
          <>
            <Download size={16}/>
          </>
        )
      }
            <span className="text-sm">
              Download
            </span>
    </button>
  )
}