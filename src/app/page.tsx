import DownloadButton from "./components/DownloadButton";
import ExportProvider from "./components/ExportProvider";
import ExportWrapper from "./components/ExportWrapper";
import Table from "./components/Table";
import { getTable } from "./lib/getTable";

export default async function Home() {
  const rows = await getTable();

  return (
    <ExportProvider>
      <main className="flex flex-col items-center gap-5 px-1 py-10 bg-background text-off-white">
            <div className="flex flex-col items-center gap-2 relative w-1/1 md:w-3/5">
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
    </ExportProvider>
  );
}
