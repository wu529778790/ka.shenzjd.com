import data from "./data.json";
import Card from "./components/Card";

function App() {
  return (
    <div>
      {data.map((item, index) => {
        return <Card key={index} data={item} />;
      })}
    </div>
  );
}

export default App;
