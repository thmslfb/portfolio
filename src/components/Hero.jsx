import React from "react";
import Links from "./Links";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col gap-8">
      <h1 className="text-3xl text-neutral-100 max-w-[290px]">
        Hey, I&apos;m Thomas.{" "}
        <span className="inline-block origin-[70%_70%] animate-waving-hand">
          👋🏻
        </span>
        <span className="text-lg">Frontend Developer</span>
      </h1>
      <h2 className="max-w-[60ch] leading-6">
        Hello, I&apos;m a{" "}
        <strong className="font-normal text-emerald-500">
          french frontend developer.
        </strong>{" "}
        I am currently working with{" "}
        <strong className="font-normal text-emerald-500">ReactJS</strong>.
        Outside work, I focus on learning ReactJS and expanding my development
        skills and knowledge.
      </h2>
      <Links />
      <div className="flex flex-row gap-5">
        <a href="mailto:contact@thomaslefebvre.fr">
          <Button type="PRIMARY" buttonText="Contact me" />
        </a>
        <a href="https://read.cv/thomas.ie" target="_blank" rel="noreferrer">
          <Button type="SECONDARY" buttonText="Read my CV" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
