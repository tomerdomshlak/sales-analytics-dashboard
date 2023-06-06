import { createContext, useContext } from "react";

interface AppContext {
  snackbarMessage?: string;
  setSnackbarMessage?: Function;
  showGeneralSnackbarMessage?: Function;
}

export const appContext = createContext<AppContext>({});

export const AppProvider = appContext.Provider;

export const useAppContext = () => useContext(appContext);
