import React from "react";
import Links from "./Links";

const Contact = () => {
  return (
    <section id="contact" className="flex  flex-col gap-8">
      <h3 className="text-lg text-neutral-100">Get in touch</h3>
      <p>
        Email me at{" "}
        <a
          href="mailto:contact@thomaslefebvre.fr"
          className="hover:text-neutral-100 cursor-pointer">
          contact@thomaslefebvre.fr
        </a>{" "}
        or contact me via my social media.
      </p>
      <Links />
    </section>
  );
};

export default Contact;
