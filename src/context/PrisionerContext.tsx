import { createContext, ReactNode, useContext, useState } from "react";

export const PrisionerContext = createContext({
  image: "",
  setImage: (data) => {},
  name: "",
  setName: (data) => {},
});

export function PrisionerProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  return (
    <PrisionerContext.Provider value={{ image, setImage, name, setName }}>
      {children}
    </PrisionerContext.Provider>
  );
}

export function usePrisioner() {
  const context = useContext(PrisionerContext)

  return context
}