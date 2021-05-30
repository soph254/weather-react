import React from "react";

import "./footer.css";

export default function Footer() {
    return (
    <small className="footer">
        <a
          href="https://github.com/soph254/My-Weather-App"
          title="open-source"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>{" "}
        by Sophie Jones | 2021
      </small>
  );
    }