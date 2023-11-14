import Solid, { createSignal } from "solid-js";
import "./PageContent.css";
import logo from "~/assets/logo.svg";

function PageContent(props: Solid.ParentProps) {
  const imageUrl = new URL(logo, import.meta.url).href;

  const [count, setCount] = createSignal(0);

  return (
    <div>
      <img src={imageUrl} height="45" alt="" />
      <h1>{props.children}</h1>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Clicks: {count()}
      </button>
    </div>
  );
}

export default PageContent;
