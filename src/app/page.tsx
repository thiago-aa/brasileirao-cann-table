import DownloadButton from "./components/DownloadButton";
import ExportWrapper from "./components/ExportWrapper";
import Legend from "./components/Legend";
import Table from "./components/Table";
import { Download } from "lucide-react"

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/table");
  const rows = await res.json();

  return (
    <main className="flex flex-col items-center gap-5 px-1 py-10 bg-background text-off-white">
          <div className="flex relative w-1/1 md:w-3/5">
            <div className="text-center flex-1">
              <h1 className="md:text-3xl text-center font-primary">CLASSIFICAÇÃO CANN - BRASILEIRÃO</h1>
              <p className="md:text-2xl text-intermed-dark font-primary">(EM ESCALA DE PONTOS)</p>
            </div>
              <DownloadButton/>
          </div>
          <div className="w-1/1 md:w-3/5">
            <Table rows={rows}/>
          </div>
        <div className="sr-only">
          <ExportWrapper>
             <div className="text-center flex-1 mb-3">
              <h1 className="md:text-3xl text-center font-primary">CLASSIFICAÇÃO CANN - BRASILEIRÃO</h1>
              <p className="md:text-2xl text-intermed-dark font-primary">(EM ESCALA DE PONTOS)</p>
            </div>
              <Table rows={rows}/>
          </ExportWrapper>
        </div>

      </main>
  );
}
