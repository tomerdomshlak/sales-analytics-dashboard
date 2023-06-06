import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import styled from "styled-components";
import { colors } from "./components/theme/colors";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-info": {
    backgroundColor: colors.purple_1,
  },
}));

root.render(
  <React.StrictMode>
    <SnackbarProvider
      hideIconVariant
      Components={{
        info: StyledMaterialDesignContent,
      }}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
