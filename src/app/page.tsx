import Table from "./components/Table";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/table");
  const rows = await res.json();

  return (
    <main className="flex flex-col items-center gap-5 px-1 py-10 bg-background text-off-white">
      <h1 className="text-3xl text-center font-primary">Brasileirudo Cann tabble</h1>
      <div className="w-1/1 md:w-3/5">
        <Table rows={rows}/>
      </div>
    </main>
  );
}
