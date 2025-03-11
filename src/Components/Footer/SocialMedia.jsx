import React from "react";
import { socialLinks } from "utils/data";

export default function SocialMedia() {
  return (
    socialLinks && (
      <section className="mb-4 text-center">
        {socialLinks.map(({ icon, href }, index) => (
          <a
            key={index}
            className="btn btn-outline-light btn-floating m-1"
            href={href}
            role="button"
          >
            {icon}
          </a>
        ))}
      </section>
    )
  );
}
