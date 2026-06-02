'use client'

import { Download, Loader } from "lucide-react";
import { useContext } from "react";
import { ExportContext } from "../context/ExportContext";

export default function DownloadButton() {
  const {isLoading} = useContext(ExportContext);

  return (
    <button 
      className= "flex items-center gap-2 px-2 md:px-10 aspect-square justify-center bg-off-white text-xs text-off-black rounded-md cursor-pointer h-10 md:h-1/1 absolute right-2  md:right-0"
      onClick={() => document.getElementById('export')?.click() }
      onTouchStart={() => document.getElementById('export')?.click()}
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
            <span className="hidden md:block">
              Download
            </span>
    </button>
  )
}