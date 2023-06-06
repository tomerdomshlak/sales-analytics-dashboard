import React from "react";
import { GlobalStyles } from "./globalStyles";
import Dashboard from "./sections/Dashboard";
import { AppProvider } from "./AppContext";
import { VariantType, useSnackbar } from "notistack";

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const showGeneralSnackbarMessage = () => {
    const variant: VariantType = "info";
    enqueueSnackbar(
      "Sorry, no logic - just a simple design implementation ❤️",
      {
        variant,
      }
    );
  };

  const getProviderValue = () => {
    return {
      showGeneralSnackbarMessage,
    };
  };

  return (
    <AppProvider value={getProviderValue()}>
      <div className="app-container">
        <GlobalStyles />
        <Dashboard />
      </div>
    </AppProvider>
  );
}

export default App;
