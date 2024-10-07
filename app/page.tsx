import Card from "./card";
import data from "./data.json";

export default async function Page() {
  return (
    <main className="flex justify-center">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </main>
  );
}
