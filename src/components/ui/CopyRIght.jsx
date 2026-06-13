import React from "react";

export default function CopyRIght() {
  const year = new Date().getFullYear();
  return (
    <div className="copy-right">
      <h4>
        &copy; {year}, ERNews | Designed by{" "}
        <a href="https://ernstudy.com">Ernstudy</a>
      </h4>
    </div>
  );
}
