import Image from "next/image";

export default function Card(props: { img: string; title: string }) {
  return (
    <div className="card">
      <Image src={props.img} width={300} height={300} alt="" />
      <div className="card-body">{props.title}</div>
    </div>
  );
}
