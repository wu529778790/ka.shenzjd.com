import Card from "./card";
import data from "./data.json";

export default async function Page() {
  return (
    <main className="flex flex-wrap">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </main>
  );
}
