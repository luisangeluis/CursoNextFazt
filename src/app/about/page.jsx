"use client"
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const handlerClick = () => {
    alert("click");
    router.push("/");
  };

  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam, ea
        corporis cupiditate cum fugit blanditiis tempora voluptate repellat
        tempore.
      </p>
      <button onClick={handlerClick} className="bg-slate-400 rounded-md py-2 px-3">Click</button>
    </div>
  );
};

export default About;
