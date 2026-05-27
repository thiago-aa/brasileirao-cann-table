import Legend from "./components/Legend";
import Table from "./components/Table";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/table");
  const rows = await res.json();

  return (
    <main className="flex flex-col items-center gap-5 px-1 py-10 bg-background text-off-white">
      <h1 className="text-3xl text-center font-primary">CLASSIFICAÇÃO CANN - BRASILEIRÃO</h1>
      <p className="text-2xl text-intermed-dark font-primary">(EM ESCALA DE PONTOS)</p>
      <div className="w-1/1 md:w-3/5">
        <Table rows={rows}/>
        <Legend/>
      </div>
    </main>
  );
}
