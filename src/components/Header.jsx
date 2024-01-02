import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex w-full flex-col gap-2 md:flex-row md:justify-between">
        <a
          href="mailto:contact@thomaslefebvre.fr"
          className="hover:text-neutral-100">
          contact@thomaslefebvre.fr
        </a>
        <nav role="navigation">
          <ul role="list" className="flex flex-row gap-2">
            <li>
              <a href="/" className="text-neutral-100">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
