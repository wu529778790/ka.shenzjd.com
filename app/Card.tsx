export default function Card(props: { children: React.ReactNode }) {
  return (
    <div className="card">
      <div className="card-body">{props.children}</div>
    </div>
  );
}
