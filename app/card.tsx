"use client";
import Image from "next/image";

export default function Card(props: {
  img: string;
  title: string;
  url: string;
}) {
  const handleClick = () => {
    window.open(props.url, "_blank");
  };
  return (
    <div className="card" onClick={handleClick}>
      <Image src={props.img} width={300} height={300} alt="" />
      <div className="card-body">{props.title}</div>
    </div>
  );
}
