import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const LocalStateContext = createContext();

const LocalStateProvider = LocalStateContext.Provider;

function LoadingStateProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  return (
    <LocalStateProvider value={{ loading, startLoading, stopLoading }}>
      {children}
    </LocalStateProvider>
  );
}

function useLoading() {
  const all = useContext(LocalStateContext);
  return all;
}

export { LoadingStateProvider, useLoading };
