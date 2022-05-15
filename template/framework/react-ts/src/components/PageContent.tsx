import React, { useState } from "react";
import "./PageContent.css";
import logo from "~/assets/logo.svg";

function PageContent(props: { children: React.ReactNode}) {
  const imageUrl = new URL(logo, import.meta.url).href;

  const [count, setCount] = useState(0);

  return (
    <div>
      <img src={imageUrl} height="45" alt="" />
      <h1>{props.children}</h1>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default PageContent;
