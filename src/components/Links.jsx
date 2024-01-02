import React from "react";

const Links = () => {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/thomas-ie/",
    },
    {
      id: 2,
      name: "Github",
      href: "https://github.com/thmslfb",
    },
    {
      id: 3,
      name: "Bento",
      href: "https://bento.me/thomas-ie",
    },
  ];

  return (
    <div>
      <ul role="list" className="flex flex-row gap-2">
        {links.map((link, index) => (
          <li key={link.id}>
            {index ? "/ " : ""}
            <a
              href={link.href}
              className="hover:text-neutral-100 cursor-pointer"
              rel="noreferrer"
              target="_blank">
              {index >= 1 ? "\xa0" + link.name : link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
