import { Global } from "@emotion/react";
import App from "app";
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import GlobalStyleReset from "styles/global-style-reset";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Global styles={GlobalStyleReset} />
    <App />
  </React.StrictMode>
);
