import logo from "~/assets/logo.svg";

function PageHeader(props) {
  const imageUrl = new URL(logo, import.meta.url).href;

  return (
    <div>
      <img src={imageUrl} height="45" />
      <h1>{props.children}</h1>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Documentation
      </a>
    </div>
  );
}

export default PageHeader;
