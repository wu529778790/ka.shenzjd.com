import data from "./data.json";
import Card from "./Card";

function Index() {
  return (
    <div className="flex">
      {data.map((item, index) => {
        return <Card key={index} data={item} />;
      })}
    </div>
  );
}

export default Index;
