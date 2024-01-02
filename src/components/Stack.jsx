import React from "react";
import ReactIcon from "../assets/ReactIcon";
import NodeJSIcon from "../assets/NodeJSIcon";
import TailwindIcon from "../assets/TailwindIcon";
import FigmaIcon from "../assets/FigmaIcon";

const Stack = () => {
  const stack = [
    {
      id: 1,
      name: "ReactJS",
      icon: <ReactIcon />,
    },
    {
      id: 2,
      name: "NodeJS",
      icon: <NodeJSIcon />,
    },
    {
      id: 3,
      name: "TailwindCSS",
      icon: <TailwindIcon />,
    },
    {
      id: 4,
      name: "Figma",
      icon: <FigmaIcon />,
    },
  ];
  return (
    <section id="stack" className="flex flex-col gap-8">
      <h3 className="text-lg text-neutral-100">Development stack</h3>
      <ul role="list" className="flex flex-wrap gap-4">
        {stack.map((item) => (
          <li key={item.id}>
            <div className="flex items-center gap-4 rounded-md border border-neutral-700 hover:border-neutral-400 p-4 cursor-default">
              {item.icon}
              <p>{item.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stack;
